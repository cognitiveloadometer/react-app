import { Modal } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { Background } from '../css/dashboard';
import { BoxModal, Container, Form } from '../css/homepage';
import api from "../services/api"

export const HomePage = ({setAuthenticated, setUserData}) => {
    const local_client_id = '875942057415-d1bvi4i8t8qkv2eb4murottvre0sen4j.apps.googleusercontent.com'
    const deploy_client_id = '510816376649-ts8v56n2rjvoglm6is11jlllufc2ujgc.apps.googleusercontent.com'
    const vercel_teste = '954097058141-aigdukkmbe6j7didd0guipri2mqcc1mr.apps.googleusercontent.com'

    const [inputTeam, setInputTeam] = useState('')
    const [open, setOpen] = useState(false)

    let responseName = ''
    let responseEmail = ''

    const responseGoogle = async (response) => {
        let decoded = await jwtDecode(response.credential)
        responseName = decoded.name
        responseEmail = decoded.email
        onSubmit()
    }
    
    const responseGoogleError = (response) => {
        console.log(response)
    }

    const onSubmit = () => {
      const data = {
        name: responseName,
        email: responseEmail
      }

      api.post(`/users/login`, data).then(response => setUserData(response.data)).catch(error => console.log(error.data))
      return setAuthenticated(true)
    }

    const onSubmitModal = async (response) => {
      let decoded = await jwtDecode(response.credential)
      responseName = decoded.name
      responseEmail = decoded.email

      const data = {
        name: responseName,
        email: responseEmail
      }

      await api.post(`/users/login`, data)
      .then(async response => {
        await setUserData(response.data)
        await createTeam(response)
      })
      .catch(error => console.log(error.data))
    }

    const createTeam = async (response) => {
      await api.post('/teams', {name: inputTeam}, {
        headers: {
            Authorization: `Bearer ${response.data.token}`
        }
      })
      .then(_ => setAuthenticated(true))
      .catch(error => console.log(error))
    }


    return(
      <Background>
      <Container>
        <Form>
          <Modal open={open} onClose={() => setOpen(false)}>
              <BoxModal>
                <header onClick={() => setOpen(false)}>
                  <button>X</button>
                </header>
                <div>
                  <h2>Please, sign in to create your team!</h2>
                  <GoogleOAuthProvider clientId={local_client_id}>
                    <GoogleLogin
                      onSuccess={onSubmitModal}
                      onError={responseGoogleError}
                    />
                  </GoogleOAuthProvider>
                </div>
              </BoxModal>
          </Modal>
          <h1>Welcome</h1>
          <div>
            <input onChange={(e) => setInputTeam(e.target.value)} placeholder='Type here your team name...'/>
            <button onClick={() => setOpen(true)}>Create team</button>
          </div>
          
          <h2>Sign in with google:</h2>
          <GoogleOAuthProvider clientId={local_client_id}>
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={responseGoogleError}
            />
          </GoogleOAuthProvider>
        </Form>
      </Container>
      </Background>
    )
}
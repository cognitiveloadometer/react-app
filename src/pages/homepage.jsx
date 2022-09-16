import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { Background } from '../css/dashboard';
import { Container, Form } from '../css/homepage';
import api from "../services/api"

export const HomePage = ({setAuthenticated, setUserData}) => {

    let responseName = ''
    let responseEmail = ''

    const responseGoogle = async (response) => {
        let decoded = await jwtDecode(response.credential)
        responseName = decoded.name
        responseEmail = decoded.email
        onSubmit()
    }

    const onSubmit = async () => {
      const data = {
        name: responseName,
        email: responseEmail
      }

      await api.post(`/users/login`, data).then(response => setUserData(response.data)).catch(error => console.log(error.response.data))
      return setAuthenticated(true)
    }

    const responseGoogleError = (response) => {
        console.log(response)
    }

    return(
      <Background>
      <Container>
        <Form>
          <h1>Welcome</h1>
          <h2>Sign in with google:</h2>
          <GoogleOAuthProvider clientId="510816376649-ts8v56n2rjvoglm6is11jlllufc2ujgc.apps.googleusercontent.com">
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
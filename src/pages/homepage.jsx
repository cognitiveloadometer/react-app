import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import api from "../services/api"

export const HomePage = ({setAuthenticated, setUserData, userData}) => {

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

      api.post(`/users/login`, data).then(response => setUserData(response.data)).catch(error => console.log(error.response.data))
      return setAuthenticated(true)
    }

    const responseGoogleError = (response) => {
        console.log(response)
    }

    return(
      <div className="App">
        <button>Create Team</button>
        <GoogleOAuthProvider clientId="510816376649-ts8v56n2rjvoglm6is11jlllufc2ujgc.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={responseGoogle}
            onError={responseGoogleError}
          />
        </GoogleOAuthProvider>
      </div>
    )
}
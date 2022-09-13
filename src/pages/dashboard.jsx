import { useState } from "react"
import { Redirect } from "react-router-dom"
import api from "../services/api"

export const Dashboard = ({userData, authenticated}) => {
    const [teamsData, setTeamsData] = useState([])

    if (!authenticated) {
        return <Redirect to="/"/>
    }

    const createTeam = () => {
        const data = {name: "time 1"}
        const response = api.post('/teams', data, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }).then(response => console.log(response)).catch(error => console.log(error))

        return response
    }

    setTimeout(() => {
        api.get(`/teams/${userData.user.id}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }).then(response => setTeamsData(response.data)).catch(error => console.log(error))
    }, 100)


    return (
        <div>
            <button onClick={createTeam}>Create Team</button>
            <h1>My teams:</h1>
            {Object.entries(teamsData).map(team => <li>team.name</li>)}
        </div>
    )
}
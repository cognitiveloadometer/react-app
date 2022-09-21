import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import api from "../services/api"
import { Background, Box, CardForm, CardTeam, Container, Content, CreateTeam, HeaderBox } from "../css/dashboard"
import { BiAperture } from "react-icons/bi"
import { Teams } from "../components/teams"
import '../css/GlobalStyle.css'
import { ManageTeams } from "../components/manage teams"

export const Dashboard = ({userData, authenticated, setAuthenticated}) => {
    const [teamsData, setTeamsData] = useState([])
    const [createTeamInput, setCreateTeamInput] = useState("")
    const [manageTeams, setManageTeams] = useState(false)
    const baseURL = 'http://cognitive-loadometer.vercel.app/'

    const loadTeams = async () => {
        if (userData.user) {
            await api.get(`/teams/${userData?.user?.id}`, {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                }
            })
            .then(response => setTeamsData(response.data))
            .catch(error => console.log(error))
        }
    }

    const createTeam = async () => {
        await api.post('/teams', {name: createTeamInput}, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        loadTeams()
    })

    if (!authenticated) {
        return <Redirect to="/"/>
    }

    return (
        <Background>
            <Container>
                <HeaderBox>
                    <div>
                        <BiAperture color="#c0b7b7"  size={50}/>
                        <h1>Cognitive Loadometer</h1>
                    </div>
                        <h3>Hello, {userData?.user?.name}</h3>
                        <button onClick={() => setAuthenticated(false)}>Logout</button>
                </HeaderBox>
                <button onClick={() => setManageTeams(false)}>My teams</button>
                <button onClick={() => setManageTeams(true)}>Manage teams</button>
                <Content>
                    {!manageTeams && <Teams setCreateTeamInput={setCreateTeamInput} createTeam={createTeam} teamsData={teamsData} baseURL={baseURL}/>}
                    {manageTeams && <ManageTeams userData={userData}/>}
                </Content>
            </Container>
        </Background>
    )
}
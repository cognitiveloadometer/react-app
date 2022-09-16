import { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import api from "../services/api"
import { Background, Box, CardForm, CardTeam, Container, Content, CreateTeam, HeaderBox } from "../css/dashboard"
import { BiAperture } from "react-icons/bi"
import { CgCopy } from "react-icons/cg"
import '../css/GlobalStyle.css'

export const Dashboard = ({userData, authenticated}) => {
    const [teamsData, setTeamsData] = useState([])
    const [createTeamInput, setCreateTeamInput] = useState("")
    const baseURL = 'http://cognitive-loadometer.vercel.app/'

    const loadTeams = async () => {
        await api.get(`/teams/${userData?.user?.id}`, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }).then(response => setTeamsData(response.data)).catch(error => console.log(error))
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
                </HeaderBox>
                <Content>
                <CreateTeam>
                    <h2>My teams:</h2>
                    <div>
                        <input onChange={(e) => setCreateTeamInput(e.target.value)} placeholder="Type here your team name..."/><button onClick={() => createTeam()}>Create team</button>
                    </div>
                </CreateTeam>
                <Box>
                    {teamsData.map(team =>
                        <CardTeam key={team.id}>
                            <h3>{team.name}</h3>
                            <CardForm><CgCopy style={{cursor: 'pointer'}} onClick={() => {navigator.clipboard.writeText(`${baseURL}teams/${team.id}`)}} size={20} /><Link to={`/teams/${team.id}`}><p>{baseURL}teams/{team.id}</p></Link></CardForm>
                        </CardTeam>
                    )}
                </Box>
                </Content>
            </Container>
        </Background>
    )
}
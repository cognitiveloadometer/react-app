import { Box, CardForm, CardTeam, CreateTeam } from "../../css/dashboard"
import { Link } from "react-router-dom"
import { CgCopy } from "react-icons/cg"

export const Teams = ({ setCreateTeamInput, createTeam, teamsData, baseURL }) => {
    return (
    <>
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
                    <CardForm>
                        <CgCopy style={{cursor: 'pointer'}} onClick={() => {navigator.clipboard.writeText(`${baseURL}teams/${team.id}`)}} size={20} />
                        <Link to={`/teams/${team.id}`}>
                            <p>{baseURL}teams/{team.id}</p>
                        </Link>
                    </CardForm>
                </CardTeam>
            )}
        </Box>
    </>
    )
}
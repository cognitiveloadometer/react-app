import { useEffect, useState } from "react"
import api from "../../services/api"

export const ManageTeams = ({ userData }) => {
    const [teamsData, setTeamsData] = useState([])
    const [inputOpt, setInputOpt] = useState('')
    const loadTeams = async () => {
        await api.get(`/teams/${userData?.user?.id}`, {
            headers: {
                Authorization: `Bearer ${userData?.token}`
            }
        }).then(response => setTeamsData(response.data)).catch(error => console.log(error))
    }

    useEffect(() => {
        loadTeams()
    }, [])

    return (
        <>
            <select onChange={(e) => setInputOpt(e.target.value)}>
                <option selected></option>
                {teamsData?.map(team => (
                    <option value={team.name} key={team.id}>{team.name}</option>
                )
                )}
            </select>
            <button>Submit</button>
        </>
    )
}
import { useParams } from "react-router-dom"
import api from "../services/api"
import { useEffect, useState } from "react"
import { Analytics } from "../components/analytics/index"
import { CircleChart } from "../components/circle chart";

export const FormInfo = () => {
    const { id } = useParams()
    const [loadometerData, setLoadometerData] = useState([])
    let data = []
    let categories = []

    const loadTeam = async () => {
        await api.get(`/cognitiveloadmeter/${id}`)
            .then(response => setLoadometerData(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadTeam()
    }, [])

    let date = ''
    let loadometer = 0
    let mult = 0

    for(let i = 0; i < loadometerData.length; i++) {
        loadometer = loadometer + loadometerData[i].load
        date = loadometerData[i].createdat
        mult++
        
        if (loadometerData[i+1]?.createdat !== date) {
            categories.push(loadometerData[i].createdat)
            loadometer = loadometer / mult
            data.push(loadometer.toFixed(2))
            loadometer = 0
            mult = 0
        }
    }

    return(
        <>
        <h1>Total of Loads: {loadometerData.length}</h1>
        <h1>Average:</h1>
            <CircleChart loadometerData={loadometerData}/>
            <h2>Analytics:</h2>
            <Analytics data={data} categories={categories}/>
        </>
    )
}
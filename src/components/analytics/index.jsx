import { Container } from "./styles"
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'

ChartJS.register(...registerables);

export const Analytics = ({ data, categories }) => {

    let category = []

    if (categories.length > 0) {
        for (let i = 0; i < categories.length; i++) {
            let str = categories[i].slice(0, 10)
            category.push(str)
        }
    }


    return(
        <Container>
             <Line 
                data={{
                    labels: category,
                    datasets: [
                        {
                            label: 'Average of Loads',
                            data: data,
                        },
                    ],
                }}
                height={400}
                width={600}
                options= {{
                    maintainAspectRatio: false
                }}
            />
        </Container>
    )
}
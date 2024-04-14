import Teams from '../mocks/basketball/NBATeams.json'
import '../styles/NBATeamStats.css';
import {getNBATeams, getNBATeamStatistics} from "../util/ApiBasketballUtil"
import Laker from '../mocks/basketball/LALakersStats.json'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, CategoryScale, LinearScale} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, PointElement, LineElement, Filler, RadialLinearScale, CategoryScale, LinearScale);



const NBATeamStats = () => {
    const [teamName,setTeamName] = useState('LA Lakers')
    const [teamStats,setTeamStats] = useState(Laker.response.games)
    const [tableStats,setTableStats] = useState(Laker.response)
    const teamNames = Teams.response;
    const pieChart = ()=>{
        const data1 = {
            labels: ['Home Wins', 'Away Wins'],
            datasets: [{
                label: '',
                data: [teamStats['wins']['home'].total, teamStats['wins']['away'].total],
                backgroundColor: [
               'blue', 'red']
            },
            ]
        }
    
        const data2 = {
            labels: ['Home Loses', 'Away Loses'],
            datasets: [{
                label: '',
                data:[teamStats['loses']['home'].total, teamStats['loses']['away'].total],
                backgroundColor: [
                    'blue', 'red']
            },
            ]
       }
    
       
        return (<div style={{backgroundColor:"white",height:"242px", width:"100%", borderStyle:"", display:"flex", justifyContent:"center"}}><Pie data={data1}/><Pie data={data2}/></div> )
    }
    return (
        
        <div className='nbateamstats'> 
            
            <div className='lefttable'><h1>NBA Teams </h1>
                {teamNames.map((team) => (
                <button onClick={()=>{
                    setTeamName(team.name)
                    getNBATeamStatistics(team.id).then(
                        (result)=>{
                            setTeamStats(result.response.games)
                            setTableStats(result.response)
                        },
                        (error) => {
                            console.log(error);    
                        }

                    )}}><div key={team} className='teamstyle'>
                    
                    <img src={team.logo} />
                    <h4>{team.name}</h4>

                </div>
                </button>
                ))}
            </div>
            <div className= 'righttable'>
                <h4> {teamName}</h4>
                {pieChart()}
                <table>
                <tr>
                    <th></th>
                    <th style={{color:"blue"}}>Home</th>
                    <th style={{color:"red"}}>Away</th>
                    <th style={{color:"Orange"}}>All</th>
                </tr>
                <tr>
                    <td>Points For</td>
                    <td>{tableStats.points.for.total.home}</td>
                    <td>{tableStats.points.for.total.away}</td>
                    <td>{tableStats.points.for.total.all}</td>
                </tr>
                <tr>
                    <td>Points Against</td>
                    <td>{tableStats.points.against.total.home}</td>
                    <td>{tableStats.points.against.total.away}</td>
                    <td>{tableStats.points.against.total.all}</td>
                </tr>
                
            </table>
            </div>
        </div>

    )
}
export default NBATeamStats
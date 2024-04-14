import '../styles/MiddleBody.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, CategoryScale, LinearScale} from 'chart.js';
import { Doughnut, Radar, Line } from 'react-chartjs-2';
import TeamStats from './TeamStats';
import NBATeamStats from './NBATeamStats';
import WNBATeamStats from './WNBATeamStats';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlayerStatistics from '../mocks/football/PlayerStatistics'
import { useState } from 'react';


ChartJS.register(ArcElement, Tooltip, Legend, PointElement, LineElement, Filler, RadialLinearScale, CategoryScale, LinearScale);

// const data = PlayerStatistics['response'];
const newPlayers = PlayerStatistics;

 const PlayerStat = (props)=>{

  const h = props.home['players'];
  const a = props.away['players'];

    let compareList = []
    for (var i = 0; i < 11; i++){
     
        compareList.push([<div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <p>{h[i]['player'].name}</p>

            <p style={{color:"rgb(102, 7, 7)"}}>
                {h[i]['statistics'][0]['games'].position}
            </p>
            <p>{a[i]['player'].name}</p>
            </div>, i, 'grey'])
    }

    return(
                <div style={{ backgroundColor:""}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"5%", backGroundColor:"red"}}>
                        <div  style={{display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
                            <p style={{color:"blue"}}>{props.home['team'].name.toUpperCase()}</p>
                            <img src={props.home['team'].logo} alt="img" style={{width:"50%"}}/>
                        </div> 
                        
                        <p>VS</p>

                        <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
                        <p style={{color:"red"}}>{props.away['team'].name.toUpperCase()}</p>
                        <img src={props.away['team'].logo} alt="img" style={{width:"50%", height:"50%"}}/>
                        </div> 
                    </div>

                   <div style={{display:"grid", gridTemplateColumns:"1fr", backgroundColor:"rgb(102, 7, 7)", overflowY:"auto"}}>
                  {compareList.map((c, index)=>(
                   <button style={{color:c[2], marginLeft:"5px",  marginRight:"5px",  marginTop:"5px", marginBottom:"2px"}} onClick={()=> {
                    props.setFirst(h[[c[1]]]); 
                    props.setSecond(a[[c[1]]]); 
                   compareList[index][1] = 'red';
                                            }}key={index}>{c[0]}

                    </button>
                   
                  ))}</div>
                </div>
    )
  }

const StatContent = (props) =>{
    const[dropdownTitle, setDropDownTitle] = useState(newPlayers[0][0]['team'].name + ' <-> ' + newPlayers[0][1]['team'].name);

    const first = props.first;
    const second = props.second;
  
    const passes = {
        labels: [first['player'].name + "'s # of Passes", second['player'].name + "'s # of Passes"],
        datasets: [{
            label: '',
            data: [first['statistics'][0]['passes'].total, second['statistics'][0]['passes'].total],
            backgroundColor: [
           'blue', 'red']
        },
        ]
    }

    const radialData = {
        labels: ['Tackles', 'Shots', 'Dribbles', 'Tackles', 'Shots', 'Dribbles'],
        datasets: [
          {
            label: 'Performance',
            data: [first['statistics'][0]['tackles'].total, first['statistics'][0]['duels'].won,
             first['statistics'][0]['dribbles'].success, second['statistics'][0]['tackles'].total,
              second['statistics'][0]['duels'].won, second['statistics'][0]['dribbles'].success],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    
      const data = {
        labels: ['Duels', 'Fouls', 'Dribbles', 'Tackles'],
        datasets: [
            
          {
            label: first['player'].name,
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [first['statistics'][0]['duels'].total, first['statistics'][0]['fouls'].drawn, first['statistics'][0]['dribbles'].attempts, first['statistics'][0]['tackles'].total],
            borderColor: 'red',
            backgroundColor: 'red',
          },
          {
            label: second['player'].name,
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data: [second['statistics'][0]['duels'].total, second['statistics'][0]['fouls'].drawn, second['statistics'][0]['dribbles'].attempts, second['statistics'][0]['tackles'].total ],
            borderColor: 'blue',
            backgroundColor: 'blue',
          },
        ],
      };

    return(
            <div style={{backgroundColor:"whitesmoke"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"", margin:"5px 5px 5px 5px"}}>  
                    <div>
                        <img src={first['player'].photo}></img>
                        <h3 style={{color:"blue"}}>{first['player'].name}</h3>
                    </div>

                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingRight:"50px"}}>

                      <h4>Teams Selection</h4>
                      <DropdownButton title={dropdownTitle} id="dropdown-menu-align-responsive-1">

                        {
                          newPlayers.map((p, index)=>(
                              <Dropdown.Item key={index}  onClick={()=> {props.setStatData(newPlayers[index]);

                              setDropDownTitle(newPlayers[index][0]['team'].name + ' <-> ' + newPlayers[index][1]['team'].name)}}>{p[0]['team'].name} <h4 style={{display:"inline", color:"rgb(102, 7, 7)"}}>VS</h4> {p[1]['team'].name} </Dropdown.Item>
                          ))
                        }
                        </DropdownButton>
                    </div>
                     
  
                    <div style={{display:'flex', flexDirection:"column"}}>
                        <img  src={second['player'].photo}></img>
                        <h3 style={{color:"red"}}>{second['player'].name}</h3>
                    </div>
                </div>


                <div style={{backgroundColor:"rgb(102, 7, 7)", display:"grid", gridTemplateColumns:"1fr 1fr", columnGap:"5px", rowGap:"5px", margin:"5px 5px 5px 5px"}}>

                    
                <div style={{backgroundColor:"white", height:"250px", borderStyle:"", display:"flex", justifyContent:"center"}}><Radar data={radialData}/></div>  
             
                <div style={{backgroundColor:"white",height:"250px", borderStyle:"", display:"flex", justifyContent:"center"}}><Doughnut data={passes}/></div>  
              
                </div>
                <div style={{width:"80%", display:"flex", justifyContent:"center", alignItems:"center"}}><Line options={options} data={data} color='red'/></div>
               
            </div>
)}

const MiddleBody = (props) =>{

    const renderMiddleBody = () =>{
        if (props.standings == "player statistics")

            return (
                <div className="stat">
                    <div className="player-selection">
                    <PlayerStat home={props.homePlayerList} away={props.awayPlayerList} setFirst={props.setFirst} setSecond={props.setSecond}/>
                    </div>

                    <div className="stat-content">
                    <StatContent first = {props.first} second={props.second} setStatData={props.setFootBallPlayersData}/>
                </div>
            </div>
            )
        
            else if(props.standings == "team statistics")
                return <TeamStats/>
                
            else if(props.standings == "NBA stats")
                return <NBATeamStats/>

            else if(props.standings == "WNBA stats")
                return <WNBATeamStats/>
            
            else{
                return(
                    <iframe src={props.standings} style={{width:"100%", height:"90%", marginTop: "74px", marginBottom:"0"}} allowFullScreen></iframe>
                )
            }
    }

    return(
        <div className='middle-body'>

           {renderMiddleBody()}
        </div>
    )
}
export default MiddleBody;
import Statistics from '../mocks/football/Statistics';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler, CategoryScale, LinearScale} from 'chart.js';
import { Doughnut, Radar, Pie, Line } from 'react-chartjs-2';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

ChartJS.register(ArcElement, Tooltip, Legend, PointElement, LineElement, Filler, RadialLinearScale, CategoryScale, LinearScale);


// const f = statData[0]['statistics']
// const s = statData[1]['statistics']

const colour = 'rgba(255, 99, 132, 1)';
const stat = Statistics;
// const f = stat[0][0]['statistics']
// const s = stat[0][1]['statistics']

const TeamStats = ()=>{
    const[chartType, setChartType] = useState('pie chart');
    const[c1, setC1] = useState('black');
    const[c2, setC2] = useState('black');
    const[c3, setC3] = useState('black');
    const[c4, setC4] = useState('black');
    const[dropdownTitle, setDropDownTitle] = useState(Statistics[0][0]['team'].name + ' <-> ' + Statistics[0][1]['team'].name);
    const[statData, setStatData] = useState(Statistics[0]);
    const[f, setF] = useState(stat[0][0]['statistics']);
    const[s, setS] = useState(stat[0][1]['statistics']);

    const showChart = ()=>{
        if (chartType == 'pie chart')
        return pieChart();

        else if (chartType == 'line chart')
        return lineChart();

        else if (chartType == 'radial chart')
        return radialChart();

        else{
            return doughnutChart();
        }
    
    }

    const pieChart = ()=>{
        const data1 = {
            labels: ['Total Passes', 'Passes Accurate', 'Shots on Goal', 'Shots off Goal', 'Total Shots'],
            datasets: [{
                label: '',
                data: [f[13], f[14], f[0], f[1], f[2]],
                backgroundColor: [
               'blue', 'red', 'green', 'orange', 'purple']
            },
            ]
        }

        const data2 = {
            labels: ['Total Passes', 'Passes Accurate', 'Shots on Goal', 'Shots off Goal', 'Total Shots'],
            datasets: [{
                label: '',
                data: [s[13], s[14], s[0], s[1], s[2]],
                backgroundColor: [
                    'blue', 'red', 'green', 'orange', 'purple']
            },
            ]
        }
       
        return (<div style={{backgroundColor:"white",height:"242px", width:"100%", borderStyle:"", display:"flex", justifyContent:"center"}}><Pie data={data1}/><Pie data={data2}/></div> )
    }

    const doughnutChart = () =>{
        const data1 = {
            labels: ['Total Passes', 'Passes Accurate', 'Shots on Goal', 'Shots off Goal', 'Total Shots'],
            datasets: [{
                label: '',
                data: [f[13], f[14], f[0], f[1], f[2]],
                backgroundColor: [
               'blue', 'red', 'green', 'orange', 'purple']
            },
            ]
        }

        const data2 = {
            labels: ['Total Passes', 'Passes Accurate', 'Shots on Goal', 'Shots off Goal', 'Total Shots'],
            datasets: [{
                label: '',
                data: [s[13], s[14], s[0], s[1], s[2]],
                backgroundColor: [
                    'blue', 'red', 'green', 'orange', 'purple']
            },
            ]
        }
       
        return (<div style={{backgroundColor:"white",height:"242px", width:"100%", borderStyle:"", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h4 style={{color:"blue"}}>{statData[0]['team'].name}</h4><Doughnut data={data1}/><h4 style={{color:"red"}}>{statData[1]['team'].name}</h4><Doughnut data={data2}/></div> )
    }

    const lineChart =()=>{
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
            labels: ['Total Passes', 'Passes Accurate', 'Shots on Goal', 'Shots off Goal', 'Total Shots'],
            datasets: [
                
              {
                label: statData[0]['team'].name,
                // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                data: [f[13].value, f[14].value, f[0].value, f[1].value, f[2].value],
                borderColor: 'red',
                backgroundColor: 'red',
              },
              {
                label: statData[1]['team'].name,
                // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                data: [s[13].value, s[14].value, s[0].value, s[1].value, s[2].value],
                borderColor: 'blue',
                backgroundColor: 'blue',
              },
            ],
          };

          return (<div style={{width:"80%", height:"213px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}><Line options={options} data={data} color='red'/></div>)
    }

    const radialChart = ()=>{

        const radialData = {
            labels: ['Total Passes', 'Passes Accurate', 'Total Shots', 'Total Passes', 'Passes Accurate', 'Total Shots'],
            datasets: [
              {
                label: statData[0]['team'].name + ' - ' + statData[1]['team'].name,
                data: [f[13].value, f[14].value, f[2].value, s[13].value, f[14].value, s[2].value],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          };
        return(  <div style={{backgroundColor:"white", height:"242px", width:"100%", borderStyle:"", display:"flex", justifyContent:"center"}}><Radar data={radialData}/></div>  
             

        )
    }

    return(
        <div className='team-stat'>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"", padding:"5px 5px 5px 5px"}}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <img src={statData[0]['team'].logo} alt='#'/>
                    <h4 style={{color:"blue"}}>{statData[0]['team'].name}</h4>
                </div>
               
                <h4 style={{color:"blue"}}>2</h4>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", color:"white"}}> 
                <h4>Teams Selection</h4> 
                <DropdownButton  title={dropdownTitle} id="dropdown-menu-align-responsive-1">
                    {
                        stat.map((s, index)=>(
                            <Dropdown.Item key={index} onClick={()=> {setDropDownTitle(Statistics[index][0]['team'].name + ' <-> ' + Statistics[index][1]['team'].name);
                                setStatData(Statistics[index]);
                                setF(stat[index][0]['statistics']);
                                setS(stat[index][1]['statistics']);
                                }}>{s[0]['team'].name} <h4 style={{display:"inline", color:"rgb(102, 7, 7)"}}>VS</h4> {s[1]['team'].name}</Dropdown.Item>
                        ))
                    }

                </DropdownButton>
                    <h4 style={{color:"white"}}>VS</h4>
                </div>
              
                <h4 style={{color:"red"}}>1</h4>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <img src={statData[1]['team'].logo} alt='#'/>
                    <h4 style={{color:"red"}}>{statData[1]['team'].name}</h4>
                </div>
            </div>


            <table>
                <tr>
                    <th></th>
                    <th style={{color:"blue"}}>{statData[0]['team'].name}</th>
                    <th style={{color:"red"}}>{statData[1]['team'].name}</th>
                </tr>
                <tr>
                    <td>Ball Possession(%)</td>
                    <td>{f[9].value}</td>
                    <td>{s[9].value}</td>
                </tr>
                <tr>
                    <td>Total Passes</td>
                    <td>{f[13].value}</td>
                    <td>{s[13].value}</td>
                </tr>
                <tr>
                    <td>Passes Accurate</td>
                    <td>{f[14].value}</td>
                    <td>{s[14].value}</td>
                </tr>
               
                <tr>
                    <td>Passes(%)</td>
                    <td>{f[15].value}</td>
                    <td>{s[15].value}</td>
                </tr>
                <tr>
                    <td>Shots on Goal</td>
                    <td>{f[0].value}</td>
                    <td>{s[0].value}</td>
                </tr>

                <tr>
                    <td>Shots off Goal</td>
                    <td>{f[1].value}</td>
                    <td>{s[1].value}</td>
                </tr>

                <tr>
                    <td>Total Shots</td>
                    <td>{f[2].value}</td>
                    <td>{s[2].value}</td>
                </tr>
            </table>

            <div style={{display:'flex', justifyContent:"space-between", marginTop:"10px", border:"5px dotted orange"}}>
                <div style={{display:"flex", flexDirection:"column", rowGap:"5px"}}>

                    <button style={{color:c1}} onClick={() => {setChartType('pie chart'); setC1(colour); setC2('black'); setC3('black'); setC4('black')}}><h4>Pie Chart</h4></button>
                    <button style={{color:c2}} onClick={() => {setChartType('line chart'); setC2(colour); setC3('black'); setC4('black');  setC1('black'); }}><h4>Line Chart</h4></button>
                    <button style={{color:c3}} onClick={() => {setChartType('radial chart'); setC3(colour); setC1('black'); setC2('black');  setC4('black');}}><h4>Radial Chart</h4></button>
                    <button style={{color:c4}} onClick={() => {setChartType('doughnut chart'); setC4(colour); setC1('black'); setC2('black'); setC3('black');}}><h4>Doughnut Chart</h4></button>
                </div>

                {showChart()}

            </div>
        </div>
    )
}
export default TeamStats;
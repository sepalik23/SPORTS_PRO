import '../styles/Header.css';
import Pagination from 'react-bootstrap/Pagination';
import {useState, useEffect} from "react";
import {Tab, Tabs} from '@mui/material';


//const Card = ({card: {fixture, teams, score}}) =>{
const Card = () =>{
  return (
    // <div className='card'>
    //     <div style={{display:"flex", margin:"0px 3px 3px 3px", columnGap:"20px", justifyContent:"space-evenly"}}>
    //        <p>{fixture['status'].long}</p>
    //        <p>10 mins</p>
    //      </div>
    //      <div style={{display:"flex", marginTop:"-18px", marginLeft:"2px", padding:"2px", columnGap:"8px"}}>
    //        <img src={teams['home'].logo} style={{width:"15%", height:"10px",  marginTop:"4px"}}/>
    //        <p style={{marginTop:"-1px"}}>{teams['home'].name[0]+teams['home'].name[1].toUpperCase()+teams['home'].name[1].toUpperCase()}</p>
        
    //        <p style={{marginTop:"-1px", marginLeft:"56px"}}>1</p>
        
    //      </div>

    //      <div style={{display:"flex", marginTop:"-18px", marginLeft:"2px", padding:"2px", columnGap:"8px"}}>
    //        <img src={teams['away'].logo} style={{width:"15%", height:"10px", marginTop:"5px"}}/>
    //       <p style={{marginTop:"0px"}}>{teams['away'].name[0]+teams['away'].name[1].toUpperCase()+teams['away'].name[1].toUpperCase()}</p>
        
    //       <p style={{marginTop:"0px", marginLeft:"56px"}}>1</p>
    //      </div> 
    //    </div> 

     <div className='card'>
        <div style={{display:"flex", margin:"0px 3px 3px 3px", columnGap:"20px"}}>
          <p>Second Half</p>
          <p>10 mins</p>
        </div>
        <div style={{display:"flex", marginTop:"-18px", marginLeft:"2px", padding:"2px", columnGap:"8px"}}>
          <img src="https://media-1.api-sports.io/football/leagues/253.png" style={{width:"15%", height:"10px",  marginTop:"0px"}}/>
         
          <p style={{marginTop:"-5px"}}>MAN</p>
        
          <p style={{marginTop:"-5px", marginLeft:"56px"}}>1</p>
        
        </div>

        <div style={{display:"flex", marginTop:"-18px", marginLeft:"2px", padding:"2px", columnGap:"8px"}}>
          <img src="https://media-1.api-sports.io/football/leagues/253.png" style={{width:"15%", height:"10px", marginTop:"2px"}}/>
          <p style={{marginTop:"-2px"}}>ARS</p>
        
          <p style={{marginTop:"-2px", marginLeft:"56px"}}>2</p>
        </div> 
      </div> 
    

  )}


const Header = () =>{
  const [liveScores, setLiveScores] = useState([]);
  const items = [];
  let active = 2;
  for (let number = 1; number <= 18; number++) {
    items.push(
      <Pagination.Item >
       <Card/>
      </Pagination.Item>,
    );
  }

  useEffect(() => {
    // setInterval(()=>{
      fetch("https://v3.football.api-sports.io/fixtures?live=all", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "3933b966d2d4a64103c8658592ac48ef"
        }
      })
      .then(response => { return response.json();})
      .then(responseData => {
        setLiveScores(responseData['response']);
        // console.log(responseData);
        })
      .catch(err => {
        //console.log(err);
        });
      // }, 2000)
  }, []);


    return (
      <div className='header'>
        <div className='left-section'>
          <h1 className='sport-pro'>Sportspro</h1>
          <img className='soccer-gif' src="https://openseauserdata.com/files/81c8124d5d8e2ec742a5e73481ff2e88.gif"/>
          <img className='b-ball-gif' src="https://i.gifer.com/origin/e9/e95c7803a86837592c7f8077ea452901_w200.gif"/>
        </div>
      
          <div className='middle-section'>
             {/* {liveScores.map((liveScore) => (
                <Card card={liveScore}/>
              ))} */}
          {/* <h1>lskjdf</h1> */}
          {/* <Tabs variant='scroll'>
             <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>  <Card/> <Card/> <Card/> <Card/> <Card/> 
             </Tabs> */}
             <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>
             {/* <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>  */}

          {/* <Pagination>
          <Pagination.Prev />{items}
          <Pagination.Last />
          </Pagination> */}
        
               {/* {liveScores.map((liveScore) => (
                <Card card={liveScore}/>
              ))}
              
        
              {/* <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>  */}
             
          </div>

        {/* </div> */}

      
      </div>
    )}
export default Header;

{/* // <div className='card'>
      //   <div style={{display:"flex", margin:"0px 3px 3px 3px", columnGap:"20px"}}>
      //     <p>Second Half</p>
      //     <p>10 mins</p>
      //   </div>
      //   <div style={{display:"flex", marginTop:"-18px", marginLeft:"2px", padding:"2px", columnGap:"8px"}}>
      //     <img src="https://media-1.api-sports.io/football/leagues/253.png" style={{width:"15%", height:"10px",  marginTop:"4px"}}/>
      //     <p style={{marginTop:"-1px"}}>ARS</p>
        
      //     <p style={{marginTop:"-1px", marginLeft:"56px"}}>1</p>
        
      //   </div>

      //   <div style={{display:"flex", marginTop:"-18px", marginLeft:"2px", padding:"2px", columnGap:"8px"}}>
      //     <img src="https://media-1.api-sports.io/football/leagues/253.png" style={{width:"15%", height:"10px", marginTop:"5px"}}/>
      //     <p style={{marginTop:"0px"}}>ARS</p>
        
      //     <p style={{marginTop:"0px", marginLeft:"56px"}}>1</p>
      //   </div> 
      // </div> */}
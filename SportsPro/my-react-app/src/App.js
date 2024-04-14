import './styles/App.css';
import './styles/Body.css';
import Header from './components/Header';
import LeftBody from './components/LeftBody';
import MiddleBody from './components/MiddleBody';
import RightBody from './components/RightBody';
import {useState} from 'react';
import PlayerStatistics from './mocks/football/PlayerStatistics';
import  { getPlayerStatistics, getFixtures, getFixtureStatistics } from './util/ApiFootballUtil';

const data = PlayerStatistics['response'];
const premier = "https://sport-tv-guide.live/widgetsingle/9c81c4d5c1bf?list=4&id=1&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1"
const App = ()=>{

  //console.log(getFixtures());
  //console.log(getFixtureStatistics(1004242));
  //console.log(getPlayerStatistics(1004242));

  const Body = () =>{
    const[standings, setStandings] = useState(premier);
    const[footballPlayersData, setFootBallPlayersData] = useState(PlayerStatistics[0]);
    const[first, setFirst] = useState(footballPlayersData[0]['players'][0]);
    const[second, setSecond] = useState(footballPlayersData[1]['players'][0]);

    return(
      <div className='main-body'>
        <LeftBody setStandings={setStandings}/>
        <MiddleBody standings={standings} homePlayerList={footballPlayersData[0]} awayPlayerList={footballPlayersData[1]} setFootBallPlayersData={setFootBallPlayersData} 
        // first={footballPlayersData[0]['players'][0]} second={footballPlayersData[1]['players'][0]}/>
         first={first} setFirst={setFirst} second={second} setSecond={setSecond}/> 
        <RightBody/>
      </div>
    )
  }

  return(
    <>
      <Header/>
      <Body/>
    </>
  );
}

export default App;
import '../styles/LeftBody.css';
import {Box, Tab, Select, MenuItem} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import PlayerStatistics from './PlayerStatistics';
// Football Events
const premier = "https://sport-tv-guide.live/widgetsingle/9c81c4d5c1bf?list=4&id=1&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1";
const europa = "https://sport-tv-guide.live/widgetsingle/ee8861e4e98c?list=4&id=20&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1";
const bundesliga = "https://sport-tv-guide.live/widgetsingle/0238ae1bdb32?list=4&id=4&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1";
const laLiga = "https://sport-tv-guide.live/widgetsingle/3591633cfcf0?list=4&id=2&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1";
const champions ="https://sport-tv-guide.live/widgetsingle/bd3633e38e06?list=4&id=19&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1";
const serieA = "https://sport-tv-guide.live/widgetsingle/9887a89d4629?list=4&id=3&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1";

// Nba Events
const nba = "https://sport-tv-guide.live/widgetsingle/4dcb5c00cb34?list=4&id=26&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1"
const wnba = "https://sport-tv-guide.live/widgetsingle/0f405c1bc498?list=4&id=447&time_zone=America%2FChihuahua&fc=7,102,1&time12=0&lng=1"

const LeftBody = ({setStandings})=>{
    const [value, setValue] = useState('1');
    const [color1, setColor1] = useState('red');
    const [color2, setColor2] = useState('white');

    return(
        <div className='left-body'>
            <div className='content'>

                <p>WHAT'S ON SPORTSPRO?</p>

                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft:"30px" }}>
                    <TabList aria-label="lab API tabs example">
                      <Tab label="FOOTBALL" value='1' onClick={()=> {setValue('1'); setStandings(premier); setColor1('red'); setColor2('white')}} style={{color:"white", fontFamily:"cursive",}}/>
                      <Tab label="BASKETBALL" value='2' onClick={()=> {setValue('2'); setStandings(nba); setColor1('red'); setColor2('white')}} style={{color:"white", fontFamily:"cursive",}}/>
                    </TabList>
                  </Box>

                  <TabPanel value="1">
              
                    <NavDropdown title="Events" id="basic-nav-dropdown" className='dropdowns' style={{color:color1}} onClick={()=>{setColor1('red'); setColor2('white')}}>
                    <NavDropdown.Item style={{color:"blue"}}>EUROPEAN LEAGUES</NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item  onClick={()=>{setStandings(laLiga)}}>La Liga</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings(serieA)}}>Serie A</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings(bundesliga)}}>Bundesliga</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings(europa)}}>Europa League</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings(premier)}}>Premier League </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings(champions)}}>Champions League</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Statistics" id="basic-nav-dropdown" className='dropdowns' style={{color:color2}} onClick={()=>{setColor2('red'); setColor1('white')}}>
                    <NavDropdown.Item style={{color:"blue"}}>HEAD TO HEAD</NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>{setStandings('team statistics')}}>Team Statistics</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings('player statistics')}}>Player Statistics</NavDropdown.Item>
                    </NavDropdown>
                    </TabPanel>


                  <TabPanel value="2">

                    <NavDropdown title="Events" id="basic-nav-dropdown" className='dropdowns' style={{color:color1}} onClick={()=>{setColor1('red'); setColor2('white')}}>
                    <NavDropdown.Item style={{color:"blue"}}>NORTH AMERICA</NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>{setStandings(nba)}}>NBA</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings(wnba)}}>WNBA</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Statistics" id="basic-nav-dropdown" className='dropdowns' style={{color:color2}} onClick={()=>{setColor2('red'); setColor1('white')}}>
                    <NavDropdown.Item style={{color:"blue"}}>LEAGUES</NavDropdown.Item><NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>{setStandings('NBA stats')}}>NBA Team Statistics</NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>{setStandings('WNBA stats')}}>WNBA Team Statistics</NavDropdown.Item>
                    </NavDropdown>
                  </TabPanel>
                </TabContext>
            </div>
        </div>
    )
}
export default LeftBody;
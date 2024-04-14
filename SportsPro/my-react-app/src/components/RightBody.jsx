import '../styles/RightBody.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const apiKey = "cd53b4b1-5b79-44cf-bcb2-f79c149c3d89";
const headlines_url = "https://api.goperigon.com/v1/all?apiKey=" + 'apiKey' + "&from=2023-05-04&country=gb&sourceGroup=top100&showNumResults=true&showReprints=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid%20News&excludeLabel=Roundup&excludeLabel=Press%20Release&sortBy=date&category=Sports&topic=Football&topic=Soccer";
const videos_url = "https://www.scorebat.com/video-api/v3/feed/?token=ODI2MzJfMTY4MzQ0MTE0NF8zOGU3YWVmYjZmNWRmZGJiODUyMmVhMTcwYWY3MDNkZjBhMGVhNmQ5";

const HeadlineContent = ({headline: {imageUrl, title, pubDate, content} }) =>{
   //const Content = () =>{
    const [showDescription, setShowDescription] = useState(false);

    return(
        <div className='headline-content' onClick={() => setShowDescription(!showDescription)}>
          {/* <img style={{width:"100%", borderRadius:"5px"}} src="https://www.tsn.ca/polopoly_fs/1.1951831.1682533442!/fileimage/httpImage/image.JPG_gen/derivatives/landscape_620/george-springer.JPG" alt='#'></img> */}
          <img style={{width:"100%", height:"105px", borderRadius:"7px", marginBottom:"5px"}} src={imageUrl} alt='#'></img>
          {/* <p>Jays' Springer exits early, diagnosed with bruise on hand</p> */}
          <p>{title}</p>
          {/* <h4>6h ago</h4> */}
          <h4 className='time'>{pubDate.split('T')[1].split('.')[0][0] + pubDate.split('T')[1].split('.')[0][1] + 'hr ago'}</h4>
         
          <Modal backdrop='static'  keyboard={true} show={showDescription} onHide={()=> setShowDescription(!showDescription)}>
          <Modal.Header style={{fontFamily:"Arial"}} closeButton><h4>{title}</h4></Modal.Header>
          <Modal.Body>
          <img style={{width:"100%"}} src={imageUrl} alt='#'></img>
          <p style={{fontFamily:"TimesNewRoman"}}>{content}</p>
          </Modal.Body>
          <Modal.Footer> <h4 className='time'>{pubDate.split("T")[0]}</h4></Modal.Footer>
          </Modal>
        </div>   
    )
}

const VideoContent = ({video: {thumbnail, competition, title, videos, date}}) =>{
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className='video-content' onClick={() => setShowDescription(!showDescription)}>
            <img style={{width:"100%", borderRadius:"7px", marginBottom:"5px"}} src={thumbnail} alt='#'></img>
            <p>{title.toUpperCase()}</p>
          
        <Modal backdrop='static'  keyboard={true} show={showDescription} onHide={()=> setShowDescription(!showDescription)}>
        <Modal.Header style={{fontFamily:"Arial", color:"rgb(102, 7, 7)"}} closeButton><h4>{competition}</h4></Modal.Header>
        <Modal.Body>
        <iframe src={videos[0]['embed'].split("src='")[1].split("' frame")[0]} width="100%" height="300px"  allowfullscreen allow='autoplay; fullscreen' />
        {/* <p>{videos[0]['embed'].split("src='")[1].split("' frame")[0]}</p> */}
        </Modal.Body>
        <Modal.Footer>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
               <h4>{title}</h4>
               <p style={{color:"rgb(102, 7, 7)", paddingTop:"5px"}}>{date.split("T")[0]+ ' ' + date.split("T")[1].split("+")[0]}</p>
            </div>

          
           
        </Modal.Footer>
        </Modal>
        </div>
    )
}
  
const RightBody = () =>{
    const [headlines, setHeadlines] = useState([]);
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        // setInterval(()=>{
            getData();
        //  }, 2000)
      }, []);

    const getData =()=>{
            axios.get(headlines_url).then((response) => {
                //console.log(response.data['articles']);
                setHeadlines(response.data['articles']);
              });

            axios.get(videos_url).then((response) => {
                // console.log(response.data);
                setVideos(response.data['response']);
            });
    }

    return(
        <div className='right-body'>

            <div className='top-headlines'>
                <h4>TOP HEADLINE</h4>
                <h2 className='s'>S</h2>
            </div>      

            <div className='right-body-grid-headline'>

                <div className='right-body-grid-headline-content'>

                    {headlines?.length > 0 ?(

                        <>{headlines.map((headline, index) => (
                            
                            <HeadlineContent headline={headline} key={index}/>
                            ))}</>

                    ):(<><h4 style={{display:"block"}}>{'Error 401: Exhausted Daily Api Usage'}</h4>
                        </>)
                    
                    }
                </div>
            </div>

             <div className='trending-videos'>
                <h4>TRENDING VIDEO</h4>
                <h2 className='s'>S</h2>
            </div>    


            <div className='right-body-grid-trending'>

                <div className='right-body-grid-headline-content'>

                    {videos.map((video, index) => (
                       
                        <VideoContent video={video} key={index}/>
                    ))}
                    
                </div>
            </div>
             
             <div>
      </div>     
        </div>
    )
}
export default RightBody;
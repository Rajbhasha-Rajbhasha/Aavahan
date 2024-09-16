import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Impression.css';

const Impression = () => {

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="flex-container">
    <div className='layer'>
        
        <div className="flex-item">
            {/* <h2>Gallery</h2> */}
            <iframe width="860" height="250" src="https://www.youtube.com/embed/oqA8NhmQXCI" title="February 24, 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style = {{height:'250px',width:'400px'}}></iframe>
            {/* <img src='https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif' onClick={() => handleClick('gallery')} /> */}
        
        </div>
        <div className="flex-item">
            {/* <h2>Events</h2> */}
            <iframe width="820" height="250" src="https://www.youtube.com/embed/oqA8NhmQXCI" title="February 24, 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* <img src='https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif' onClick={() => handleClick('events')}/> */}

        </div>
        <div className="flex-item">
            {/* <h2>Merchandise</h2> */}
            <iframe width="720" height="250" src="https://www.youtube.com/embed/oqA8NhmQXCI" title="February 24, 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           {/* <a href='https://rajbhashanitrr.in/'><img src='https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif' /></a> */}

        </div>

    </div>

    </div>
  );
}

export default Impression;  

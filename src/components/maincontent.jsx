import React, { useState } from 'react';
function Main(){
    
    const [videoClicked, setVideoClicked] = useState(false);

    const handleVideoClick = () => {
        
        window.location.href = 'https://www.youtube.com/watch?v=M_GzRs3oyow&list=LL&index=2&ab_channel=Talwiinder';
        
    };
    return (
        <div className="content">
            <h2>
                <span className="logo">Lobe</span> Tour
            </h2>
            <p>Build your first machine learning model in ten minutes. No code or experience required.</p>
            <div className="video">
                <img src="https://www.lobe.ai/assets/tour/Video.jpg" 
                alt="Tour Video"
                onClick={handleVideoClick}
                style={{ cursor: 'pointer' }} 
                />
            </div>
            <h3>Train your app with Lobe</h3>
            <button className="download">Download</button>
            <hr />
            
        </div>
    );
}

export default Main;

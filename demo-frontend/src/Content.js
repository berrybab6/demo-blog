import React, { useEffect, useState } from 'react';

import About from './About';
import './Content.css';
// import Navbar from './Navbar';
// import './A';
import groupOne from '../src/assets/images/GroupOne.png';
import groupTwo from '../src/assets/images/GroupTwo.png';
import groupThree from '../src/assets/images/GroupThree.png';
import group from '../src/assets/images/Group.svg';
import groupDown from '../src/assets/images/group-down.svg';

import plus from '../src/assets/icons/plus.svg';

import mentor from '../src/assets/images/mentor.png';
import help from '../src/assets/images/help.png';
import study from '../src/assets/images/study.png';

import axios from 'axios';



const Content = () => {


    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/posts/'); 
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <About />

       

        {data.map(item => (
<section className="content-section" >

    <div className='content-container' key={item.id}>
    <h2> MISSION </h2>
    <div className="content-line"></div> 
    <p>{item.mission ? item.mission : ''}</p>
</div>
 
        <div className='content-container'>
            <h2>VISION</h2>
            <div className="content-line"></div> 
            <p>{item.vision ? item.vision : ''}</p>
        </div>
        <div className='content-container'>
            <h2>OBJECTIVES</h2>
            <div className="content-line"></div> 
            <p>{item.objectives ? item.objectives :'' }</p>
        </div>

      </section>
     ))}

        {!data &&
      <section className="content-section">
      <div className='content-container'>
            <h2>MISSION</h2>
            <div className="content-line"></div> 
            <p>Lorem ipsum dolor sit amet consectetur.Egestas integer bibendum sapien dignissim sit felis pharetra nibh. </p>
        </div>
        <div className='content-container'>
            <h2>VISION</h2>
            <div className="content-line"></div> 
            <p>Lorem ipsum dolor sit amet consectetur.Egestas integer bibendum sapien dignissim sit felis pharetra nibh. </p>
        </div>
        <div className='content-container'>
            <h2>OBJECTIVES</h2>
            <div className="content-line"></div> 
            <p>Lorem ipsum dolor sit amet consectetur.Egestas integer bibendum sapien dignissim sit felis pharetra nibh. </p>
        </div>

      </section>

        }
        
      <section className="content-section">
      <div className='content-container'>
            <h2>Tellus erat aliquam blandit etiam</h2>
            <div className="t-line"></div> 
        </div>

        </section>

        <section className="content-section">
      <div className='content-container'>
            <img src={groupTwo} alt="Evolution"  className='content-img'/>
        </div>
        <div className='content-container' >
        <img src={groupThree} alt="Evolution" className='content-img'/>

        </div>
        <div className='content-container'>
        <img src={groupOne} alt="Evolution" className='content-img'/>

        </div>

      </section>

    <div className='with-black'>
        <div className='img-bg-div'>
        <img src={group} alt='bg-black'/>
        </div>

      <section className="content-section black">
   
        <div className='content-container '>
          <h2 className='header-title'>Lorem ipsum dolor sit consectetur.</h2>
            <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
          <button className="header-button">Lorem ipsum</button>
        </div>
        <div className='content-container'>
          <h2 className='header-title'>Lorem ipsum dolor sit consectetur.</h2>
            <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
          <button className="header-button black">Lorem ipsum</button>
        </div>
       
      </section>

      <div className='img-bg-div'>
        <img src={groupDown} alt='bg-black'/>
        </div>


    </div>
      
    <section className="content-section">
      <div className='content-container'>
            <h2>LATEST STORIES AND UPDATES</h2>
            <div className="title-line"></div> 
        </div>

        </section>

        <section className="content-section last">
      <div className='content-container with-plus'>
        <img src={mentor} alt="Mentor"  className='content-help'/>
        
           
            <h4 >Blandit dolor eu enim ac nisl enim sed diam. </h4>
            <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
            <img src={plus} alt="ADD" />

        </div>
        <div className='content-container with-plus'>
            <img src={help} alt="Help"  className='content-help'/>
            <h4 >Egestas integer bibendum sapien</h4>
            <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
            <img src={plus} alt="ADD" />
        </div>

        <div className='content-container with-plus'>
            <img src={study} alt="Study"  className='content-help'/>
            <h4 >Egestas integer bibendum sapien</h4>
            <p>Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
            <img src={plus} alt="ADD" />
        </div>


      </section>

<button className="header-button bb">Lorem ipsum</button>


     
     </div>
  );
};

export default Content;
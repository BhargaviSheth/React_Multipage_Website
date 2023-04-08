import react from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {Button} from "../Styles/Button"
//import demoVideo from "../assets/images/Recording#11_Trim.mp4"



const AboutProject = () => {
    return (
        // <h5>AboutProject</h5>
        <Wrapper className="section">
            <h2 className="common-heading">My Project</h2>
            <div className="container grid-grid-three-column parent">
            <div className="project-card">
                <figure className="fig">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-B-OCN-UknYnkl_CyZpyj8TVv5aSQDIULUw2qXcFr4dq_uHcyGmWClesmt51jFzA-Q0&usqp=CAU"  alt = "image"/>
                </figure>
            <div className='card-data'>
              <h3>HTML-CSS Portfolio Container</h3>
              <p>This is the portfoliowebsite , using the HTML,CSS & JavaScript Concepts, It uses Scroll-ply and background video effect , with basic CSS properties and JavaScript Application,The Whole Site is responsive till Mobile Device </p>
              <NavLink  >
              <Button className="btn" > Demo</Button>
              </NavLink>

            </div>

            </div>

            <div className="project-card">
                <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-B-OCN-UknYnkl_CyZpyj8TVv5aSQDIULUw2qXcFr4dq_uHcyGmWClesmt51jFzA-Q0&usqp=CAU"  alt = "image"/>
                </figure>
            <div className='card-data'>
              <h3>JavaScript WeatherApp</h3>
              <p>JavaScript WeatherApp is the practice Project This is Weather web app which provides us real time data using the open weather API. I learnt about API a lot during this project, It's UI looks attractive due to background change on every weather condition. And which is also fully Responsive </p>
              <NavLink  to='/services'>
              <Button className="btn"> Demo</Button>
              </NavLink>

            </div>

            

            </div>
            <div className="project-card">
                <figure className="fig">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-B-OCN-UknYnkl_CyZpyj8TVv5aSQDIULUw2qXcFr4dq_uHcyGmWClesmt51jFzA-Q0&usqp=CAU"  alt = "image"/>
                </figure>
            <div className='card-data'>
              <h3>JavaScript To-Do App</h3>
              <p>JavaScript To-Do App uses the javascript Concepts and core fundamentals , A System where users can add their regular task and categorized between completed and not completed also can delete the task.</p>
              <NavLink  to='/services'>
              <Button className="btn"> Demo</Button>
              </NavLink>

            </div>
            </div>
            </div>

        </Wrapper>
    )

}

const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};
.container {
  max-width: 120rem;
}
.parent{
    display: flex; 
    width: 60%; 
}
.project-card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
   margin: 1rem;
   width: 60%;
  

  .card-data {
    padding: 3rem;
  }
  h3 {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
  .btn {
    margin: 2rem auto ;
    
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);
    font-size: 1.4rem;
    &:hover {
      background-color: rgb(98 84 243);
      color: #fffff;
    }
  }
}
figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: #808080;
      opacity:0.5;
      transition: all 0.2s linear;
      cursor: pointer;
     
    }
    &:hover::after {
      width: 100%;
      
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    p{
      font-size: 12px;
      font-weight:100px;
    }
    

`;
export default AboutProject;
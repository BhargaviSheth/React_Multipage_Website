import React  from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import heroimg from "../assets/images/hero.svg"
import { AppContext, useGlobalContext } from '../../src/Context'
import { useContext } from "react";

const HeroSection = () => {

  const firstName = useContext(AppContext)
  const {name,image} = useGlobalContext();

  console.log("data",name,image)

    return <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data">THIS IS ME</p>
                <h1 className="hero-heading">{name}</h1>
                <p className="hero-para">I am {name},Curious Learner,Practicing Web UI Development,& Explore Quality Analysis</p>
                <Button className="btn hireme-btn">
                <NavLink to="/contact">Hire Me</NavLink>
                </Button>
            </div>
            
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="hero"  className="hero-img" />
                </picture>
            </div>
        </div>

    </Wrapper>
};

const Wrapper = styled.section`
padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 5.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }

`;

export default HeroSection;
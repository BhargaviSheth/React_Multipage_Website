import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import errorimg from "../src/assets/images/errorfinal.avif"
import { Button } from "./Styles/Button";

const Error = () => {
    return <Wrapper>
        <img className="imgerr" src={errorimg} alt="error" style={{height:"550px",marginTop:"-98px"}}></img>
        <NavLink to="/">
        <Button className="btn">Go Back</Button>

        </NavLink>
    </Wrapper>
}

const Wrapper = styled.section`
padding: 9rem 0 ;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.btn{
    margin-top:3rem;
    font-size:1.8rem;
}
.imagerr{
    height:885px;
   


}

`;

export default Error;
// context
//provider
//consumer 
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer"
import db from "../src/db.json"
import image from "../src/assets/images/banner-hero.png"

const AppContext = React.createContext();

const API = "http://localhost:3000/service"

const intialstate = {
    name:"",
    image:"",
    servces:[],
}

const AppProvider = ({children}) => {
     const [state,dispatch] = useReducer(reducer,intialstate);

    const updateHomepage = () => {
        return dispatch(
            {
                type:"HOME_UPDATE",
                payload:{
                    name: "Web Developer",
                    image: image,
                }
            }
        )
    }

    const updateAboutpage = () => {
        return dispatch(
            {
                type:"ABOUT_UPDATE",
                payload:{
                    name : "Bhargavi Sheth",
                    image : "../src/assets/images/about2.avif"
                }
            }
        )
    }

    // get API data
    const getServices = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            dispatch({type:"GET_SERVICES",payload:data})
        } catch(error) {
            console.log(error)
        }

    }

    // call  API
    useEffect(() => {
        getServices(API);

    },[])


    return <AppContext.Provider value={{...state,updateHomepage,updateAboutpage}}>
        {children}
    </AppContext.Provider>

}

//global custom hook

const useGlobalContext = () => {
    return useContext(AppContext);
  };

export {AppContext,AppProvider,useGlobalContext}
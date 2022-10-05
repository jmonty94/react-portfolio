import React, { useState } from "react";
import Header from "./Header";
import About from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "./Contact";
import { Container, Grid} from "@mui/material";
import Resume from "./Resume";


export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        switch (currentPage) {
            case 'About Me':
                return <About/>;
            case 'Projects':
                return <Projects/>;
            case 'Contact':
                return <Contact/>;
            case 'Resume':
                return <Resume/>;
        }
    };

    const changePage = (page) => setCurrentPage(page);

    return (

        <Container sx={{justifyContent: 'center', display:'flex', flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.75)', borderRadius: '16px', color: "white"}}>
            <Header sx={{justifyContent:'space-between', display: 'flex', opacity: 1}} currentPage={currentPage} changePage={changePage}/>
            <Grid container sx={{m:3, justifyContent: "center", opacity:1}}>
                {renderPage()}
            </Grid>
        </Container >
        
    )
}
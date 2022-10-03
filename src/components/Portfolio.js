import React, { useState } from "react";
import Header from "./Header";
import About from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "./Contact";
import { Container, Grid } from "@mui/material";

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
            default:
                return <About/>;
        }
    };

    const changePage = (page) => setCurrentPage(page);

    return (
        <Container sx={{justifyContent: 'center', display:'flex', flexDirection: 'column'}} >
            <Header sx={{justifyContent:'space-between', display: 'flex'}} currentPage={currentPage} changePage={changePage}/>
            <Grid container sx={{m:3, justifyContent: "center"}}>
                {renderPage()}
            </Grid>
        </Container >
    )
}
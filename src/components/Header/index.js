import React from "react";
import { Avatar, Grid } from "@mui/material";
import Image from "mui-image";
import Navbar from "../Navbar";



export default function Header({currentPage, changePage}){
    return (
        <div>
            <header>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Image alt='James Montgomery' src='/img/Profile.png' height="100%"
                            width="100%"
                            fit="cover"
                            duration={3000}
                            easing="cubic-bezier(0.7, 0, 0.6, 1)"
                            showLoading=
                            {false}
                            errorIcon=
                            {true}
                            shift="null"
                            distance="100px"
                            shiftDuration={900}
                            bgColor="inherit"
                        />
                    </Grid>
                </Grid> */}
                <Avatar alt="James Montgomery" src="./img/Profile.png" sx={{width: 120, height: 120}}/>
                <h2>James Montgomery Full Stack Developer</h2>
            </header>
            <Navbar currentPage={currentPage} changePage={changePage}></Navbar>
        </div>

    )
};
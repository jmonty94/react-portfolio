import React from "react";
import { Avatar, Typography } from "@mui/material";
import Navbar from "../Navbar";
import { Box } from "@mui/system";
import profilePic from './../../images/Profile.PNG'



export default function Header({ currentPage, changePage }) {
    return (
        <Box sx={{ justifyContent: 'space-between', display: 'flex'}}>
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
            <Avatar alt="James Montgomery" src={profilePic} sx={{ width: 120, height: 120 }} />
            <Typography variant="h4" component='h1'>James Montgomery<br /> Full Stack Developer</Typography >
            <Navbar currentPage={currentPage} changePage={changePage}></Navbar>
        </Box>

    )
};
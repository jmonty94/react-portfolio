import React from "react";
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import SinglePage from "./pdfviewer";

import resumePDF from './../../assets/jamesMontgomeryFullStackDeveloper.pdf'
  
export default function Resume() {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('jamesMontgomeryFullStackDeveloper.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `jamesMontgomeryFullStackDeveloper.pdf`;
                alink.click();
            })
        })
    }
    return (
        // <Typography sx={{color: 'white'}}>Hello </Typography>
            <Box>
                <Typography variant='h4' sx={{color: 'white'}}>Feel Free to download or just view my resume below.</Typography>
                <SinglePage pdf={resumePDF}></SinglePage>
                <Button variant="contained" onClick={onButtonClick}>
                    <DownloadIcon/>
                </Button>
            </Box>
    );
};
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { InputLabel, Input, TextField, Box, Typography } from "@mui/material";

export default function Contact() {
    const form = useRef();

    console.log(form);
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_oxndhyo', 'template_t5au1xe', form.current, 'G5ts7iujWseqgKaa6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current[0].value=''
        form.current[1].value=''
        form.current[2].value=''
    };
    return (
        <Box sx={{width: {md:'50%', xs: "75%"}, height: '75%', m4:4, backgroundColor: "white", borderRadius: '16px'}}>
            <Typography variant="h5">Send me an email</Typography>
            <Box component="form"variant="standard" ref={form} onSubmit={sendEmail}>
                <InputLabel>Name</InputLabel>
                <Input type="text" name="user_name" fullWidth/>
                <InputLabel>Email</InputLabel>
                <Input type="email" name="user_email" fullWidth/>
                <InputLabel>Message</InputLabel>
                <TextField fullWidth multiline maxRows={10} name="message" />
                <Input type="submit" variant="contained">Send</Input>
            </Box>
        </Box>
    );
};
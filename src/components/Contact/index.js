import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { InputLabel, Input, TextField, Box, Typography, Button } from "@mui/material";

export default function Contact() {
    const form = useRef();
    
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
        <Box sx={{width: {md:'50%', xs: "75%"}, height: '75%', m:4, backgroundColor: "white", borderRadius: '16px'}}>
            <Box component="form"variant="standard" ref={form} onSubmit={sendEmail} sx={{justifyContent:'center', m:4}}>
                <Typography variant='h4' sx={{color: 'black', textAlign:'center', m: 3, alignSelf: 'center'}}>Send me a message</Typography>
                <InputLabel>Name</InputLabel>
                <Input type="text" name="user_name" fullWidth/>
                <InputLabel>Email</InputLabel>
                <Input type="email" name="user_email" fullWidth/>
                <InputLabel>Message</InputLabel>
                <TextField fullWidth multiline maxRows={10} name="message" />
                <Button type="submit" variant="contained" sx={{justifyContent:"center"}}>Send</Button>
            </Box>
        </Box>
    );
};
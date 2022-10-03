import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import { InputLabel, Input, TextField, Box, InputAdornment, FormGroup, Button, Typography } from "@mui/material";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fer80xj', 'template_t5au1xe', form.current, 'G5ts7iujWseqgKaa6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Box sx={{width: '50%', height: '75%', mt:4}}>
            <Typography variant="h5">Send me an email</Typography>
            <FormGroup variant="standard" ref={form} onSubmit={sendEmail}>
                <InputLabel>Name</InputLabel>
                <Input type="text" name="user_name" fullWidth/>
                <InputLabel>Email</InputLabel>
                <Input type="email" name="user_email" fullWidth startAdornment={<InputAdornment position="start"><EmailIcon/></InputAdornment>}/>
                <InputLabel>Message</InputLabel>
                <TextField fullWidth multiline maxRows={10} name="message" />
                <Button type="submit" variant="contained">Send</Button>
            </FormGroup>

            <Typography variant="body1" sx={{mt:6}}>Or reach out to me on your own time by emailing me at the following email:</Typography>
        </Box>
    );
};
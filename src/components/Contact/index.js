import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import { InputLabel, Input, TextField } from "@mui/material";

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
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <InputLabel>Name</InputLabel>
                <Input type="text" name="user_name"/>
                <InputLabel>Email</InputLabel>
                <Input type="email" name="user_email"></Input>
                <InputLabel>Message</InputLabel>
                <TextField fullWidth name="message" />
                <Input type="submit" value="Send"/>
            </form>
        </div>
    );
};
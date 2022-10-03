import React from "react";
import { ListItem, ListItemText, } from "@mui/material";




export default function SkillList({skill}){
    return(
        <ListItem sx={{ justifyContent: 'center', alignItems: "flex-start", textAlign: 'center', p: 0 }}>
            <ListItemText>{skill}</ListItemText>
        </ListItem>
    )
}
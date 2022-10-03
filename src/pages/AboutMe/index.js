import { Box, Container, List, Typography } from "@mui/material";
import React from "react";
import technicalSkills from "../../components/SkillCard/technicalSkills";
import nonTechnicals from "../../components/SkillCard/nonTechnical";
import SkillList from "../../components/SkillCard";

export default function About() {
    return (
        <Container component='section' sx={{ width:{xs: "80%", md: '100%'}, justifyContent: 'center', m: 'auto' }}>
            <Box sx={{ m: 'auto', }}>
                <Typography variant="h4" sx={{ justifyContent: 'center', textAlign: 'center' }}>About Me</Typography >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Hello and welcome! My name is James Montgomery and I am a father of two under two who decided that a
                    never ending pandemic, threat of nuclear war, and looming possibility of yet another recession in my lifetime
                    was the perfect time to switch carreer paths and become a developer. Jokes aside I have thoroughly enjoyed
                    my experience so far and am only regretting not starting sooner and thanks to my wonderfully supportive wife I have had the time
                    and resources needed to venture forth into the unknown. I have a long background in Tech prior to becoming
                    a developer. I worked for the largest CAD SaaS company in the world prior to my change and it is actually the driving force
                    behind the change. I desire to help create the most intuitive and user friendly applications in an effort to cut down
                    on needless customer contacts. Time is money as they say.
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt:5 }}>
                <Typography variant="h5" component='h4'>My Skills</Typography>
                <Box sx={{ display: 'inline-flex', justifyContent: 'space-evenly',  }}>
                    <List sx={{ width: '50%', justifyContent: 'center',}}>
                        <Typography variant="h6">Technologies</Typography>
                        {
                            technicalSkills.map((skills, index) => {
                                return (
                                    <SkillList
                                        key={index}
                                        skill={skills.skill}
                                    />
                                )
                            })
                        }
                    </List>
                    <List sx={{ width: '50%', justifyContent: 'center', }}>
                        <Typography variant="h6">Non-Technicals</Typography>
                        {
                            nonTechnicals.map((skills, index) => {
                                return (
                                    <SkillList
                                        key={index}
                                        skill={skills.skill}
                                    />
                                )
                            })
                        }
                    </List>
                </Box>
            </Box>
        </Container>
    );
};
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../currentProjects'

export default function Projects(){
    return(
        <Box sx={{justifyContent:'center', m:2, width: "85%"}}>
           <Box sx={{justifyContent:'center', textAlign:"center",}}>
            <Typography variant='h4' component="h4" align='center'>My Latest Work</Typography>
            <Typography align='center' sx={{width:'50%', m:'auto'}}>These are some of the projects I am most proud of that I either created entirely myself,
                or worked with a team on, or debugged a prexisting codebase.
            </Typography>
           </Box>
           <Box sx={{justifyContent:'center',  m:'auto', display:'flex', flexWrap:'wrap'}}>
            {
                projects.map((project,index) => {
                    return(
                        <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        techStack={project.techStack}
                        githubURL={project.githubURL}
                        deployedUrl={project.deployedURL}
                        picturePath={project.picturePath}
                        />
                    )
                })
            }
           </Box>
        </Box>
    )
};
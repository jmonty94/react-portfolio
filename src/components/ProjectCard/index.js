import React from "react";
import {Button, Card, CardActions, CardContent,CardMedia, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ projectName, techStack, githubURL, deployedUrl, picturePath }) {
  return (
    <Card sx={{ width: 345, m:2, boxShadow:3, borderRadius: '16px'}}>
      {picturePath ?
        <CardMedia
          component="img"
          height="140"
          image={picturePath}
          alt={projectName}
        />
        : <Typography sx={{justifyContent:'center'}}>Sorry at this time this project does not have a screenshot
          please proceed to the github repo to see how it is coming along</Typography>
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {techStack}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={githubURL}><GitHubIcon></GitHubIcon></Button>
        {deployedUrl ? <Button size="small" href={deployedUrl} variant='contained'>{projectName}</Button>
          : <Typography>Sorry No Live site at this time</Typography>
        }
      </CardActions>
    </Card>
  )
}
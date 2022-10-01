import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ projectName, techStack, githubURL, deployedUrl, picturePath }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {picturePath ?
        <CardMedia
          component="img"
          height="140"
          image={picturePath}
          alt={projectName}
        />
        : <span>Sorry at this time this project does not have a screenshot
          please proceed to the github repo to see how it is coming along</span>
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
          : <span>Sorry No Live site at this time</span>
        }
      </CardActions>
    </Card>
  )
}
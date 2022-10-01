import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../currentProjects'

export default function Projects(){
    return(
        <div>
           <div>
            <h2>My Latest Work</h2>
            <p>These are some of the projects I am most proud of that I either created entirely myself,
                or worked with a team on, or debugged a prexisting codebase.
            </p>
           </div>
           <div>
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
           </div>
        </div>
    )
};
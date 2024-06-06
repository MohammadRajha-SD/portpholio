import React, { useEffect } from "react";
import { useState } from "react";
import {
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Skill,
} from "./ProjectsStyle";
import { Container, Wrapper, Title, Desc } from "../index";
import ProjectCard from "../Cards/ProjectCards";
import ProjectDataService from "../../services/project.services";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [projects, setProjects] = useState([]);

  const [tabs, _] = useState([
    {
      name: "all",
      title: "All",
    },
    {
      name: "web app",
      title: "WEB APP'S",
    },
    {
      name: "android app",
      title: "ANDROID APP'S",
    },
    {
      name: "machine learning",
      title: "MACHINE LEARNING",
    },
  ]);
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const data = await ProjectDataService.getAllProjects();
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <Container id="projects" style={{ scrollMarginTop: 100 }}>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>

        <ToggleButtonGroup>
          {tabs.map((tab, index) => (
            <span key={index}>
              <ToggleButton
                active={toggle === tab.name ? "true" : undefined}
                value={tab.name}
                onClick={() => setToggle(tab.name)}
              >
                {tab.title}
              </ToggleButton>
              {tabs.length - 1 > index && <Divider />}
            </span>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {projects
            .filter(
              (project) => toggle === "all" || project.category === toggle
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {toggle !== "all" &&
            projects.filter((project) => project.category === toggle).length ===
              0 && <Skill>No Online Projects Yet</Skill>}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

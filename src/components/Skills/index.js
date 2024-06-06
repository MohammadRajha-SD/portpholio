import React, { useEffect, useState } from "react";
import SkillsDataService from "../../services/skills.services";
import { Container, Wrapper, Title, Desc } from "../index.jsx";
import {
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
  SkillImage,
} from "./StyledSkils.js";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getAllSkills();
  }, []);

  const getAllSkills = async () => {
    const data = await SkillsDataService.getAllSkills();
    setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <Container id="skills" style={{ scrollMarginTop: 90 }}>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    {item.image && <SkillImage src={item.image} alt="" />}
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;

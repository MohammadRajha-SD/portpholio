import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
// import { experiences } from "../../data/constant";
import { Container, Wrapper, Title, Desc, TimelineSection } from "../index.jsx";
import experienceServices from "../../services/experience.services";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    getExperiences();
  });
  const getExperiences = async () => {
    const data = await experienceServices.getAllExperiences();
    setExperiences(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <Container id="experience" style={{ scrollMarginTop: 90 }}>
      <Wrapper>
        <Title>Experience</Title>
        <Desc>Here are some of my projects</Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;

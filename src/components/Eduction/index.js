import React, { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "../Cards/EducationCard";
import { Container, Wrapper, Title, Desc, TimelineSection } from "../index.jsx";
import EducationDataService from "../../services/education.services";

const Educations = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    getEducations();
  }, []);

  const getEducations = async () => {
    const data = await EducationDataService.getAllEducations();
    setEducations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <Container id="education" style={{ scrollMarginTop: 100 }}>
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <TimelineSection>
          <Timeline>
            {educations.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== educations.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Educations;

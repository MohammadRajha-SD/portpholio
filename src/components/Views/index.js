import React, { useEffect, useState } from "react";
import { Container, Title, Wrapper } from "../index.jsx";
import { FaCode, FaCheck, FaEye, FaCoffee } from "react-icons/fa";
import { SubContainer, Box } from "./StyledViews.js";
import ViewDataService from "../../services/view.services.js";

const Views = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPageViews();
  }, []);

  const getPageViews = async () => {
    const data = await ViewDataService.getAllView();
    let newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setData(newData);
    updatePageViews(newData);
  };

  const updatePageViews = async (getData) => {
    let doc = getData.filter((d) => d.icon === "eye")[0];
    doc.count += 1;
    await ViewDataService.updateView(doc.id, doc);
  };
  return (
    <Container id="views">
      <Wrapper>
        <Title>Page Views</Title>
        <SubContainer>
          {data.map((d) => {
            return (
              <Box key={d.id}>
                <div className="text-center fa-3x">
                  {d.icon === "code" && <FaCode />}
                  {d.icon === "eye" && <FaEye />}
                  {d.icon === "coffee" && <FaCoffee />}
                  {d.icon === "project" && <FaCheck />}
                </div>
                <h5
                  data-count="900000"
                  className="text-center my-2 fw-bold"
                  style={{
                    color: "#854ce6",
                  }}
                >
                  {d.icon === "code" && <>{d.count}</>}
                  {d.icon === "eye" && <>{d.count}</>}
                  {d.icon === "coffee" && <>{d.count}</>}
                  {d.icon === "project" && <>{d.count}</>}
                </h5>
                <h5>
                  {d.icon === "code" && <>{d.content}</>}
                  {d.icon === "eye" && <>{d.content}</>}
                  {d.icon === "coffee" && <>{d.content}</>}
                  {d.icon === "project" && <>{d.content}</>}
                </h5>
              </Box>
            );
          })}
        </SubContainer>
      </Wrapper>
    </Container>
  );
};

export default Views;

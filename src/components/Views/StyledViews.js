import styled from "styled-components";

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;
export const Box = styled.div`
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  color: white;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 426px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    max-width: 300px;
    padding: 10px 36px;
  }
`;

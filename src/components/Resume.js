import React from "react";
import styled from "@emotion/styled";
import { firstLetterMayus } from './Helper';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
  border-radius: 15px;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;
  return (
    <ContainerSummary>
      <h2>Quote Summary</h2>
      <ol>
        <li>Brand: { firstLetterMayus(brand) }</li>
        <li>Year: { firstLetterMayus(year) }</li>
        <li>Insurance: { firstLetterMayus(plan) }</li>
      </ol>
    </ContainerSummary>
  );
};

export default Resume;

import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1 rem;
  text-align: center;
`;

const QuoteText = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;
const ResultQuote = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb (127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message> Choose brand, year or type of plan</Message>
  ) : (
    <ResultQuote>
      <TransitionGroup
        component="p"
        className="result"
      >
        <CSSTransition
          classNames="result"
          key={quote}
          timeout={{ enter: 500, exit: 500}}
        >
          <QuoteText>Your quote total is: $ {quote}</QuoteText>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuote>
  );
};

export default Result;

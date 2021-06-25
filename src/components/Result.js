import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Message = styled.p`
  background-color: #939AA2;
  margin-top: 1rem;
  padding: 1 rem;
  text-align: center;
  color: white;
`;

const QuoteText = styled.p`
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;
const ResultQuote = styled.div`
  text-align: center;
  border: 1px solid #1D8BFA;
  margin-top: 1rem;
  position: relative;
  border-radius: 15px;
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <Message> Choose brand, year or type of insurance</Message>
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
          <QuoteText>Total: $ {quote}</QuoteText>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuote>
  );
};

export default Result;

import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const { quote, data } = resume;

  return (
    <Container>
      <Header title="Vehicle's Quote" />
      <FormContainer>
        <Form setResume={setResume} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        <Resume data={data} />
        {!loading ? <Result quote={quote} /> : null}
      </FormContainer>
    </Container>
  );
}

export default App;

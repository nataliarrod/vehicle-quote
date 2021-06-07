import React from "react";
import styled from '@emotion/styled';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: bloack;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;


const Form = () => {
  return (
    <form>
      <Field>
        <Label>Brand</Label>
        <Select>
          <option value="">-- Choose --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="chinese">Chinese</option>
        </Select>
      </Field>

      <Field>
          <Label>Year</Label>
          <Select>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </Field>

        <Field>
          <Label>Plan</Label>
          <InputRadio 
            type="radio"
            name="plan"
            value="basic"
          /> Basic
          <InputRadio 
            type="radio"
            name="plan"
            value="full"
          /> Full
        </Field>
      <button type="button">Get your quote</button>
    </form>
  );
};

export default Form;

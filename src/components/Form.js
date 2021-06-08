import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  getDifferenceYear,
  brandCalculate,
  getPlan,
} from "../components/Helper";

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
const Button = styled.button`
  background-color: #00838f;
  font-size: 12px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setResume, setLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);

  const { brand, year, plan } = data;

  const getInformation = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    let result = 2000;

    const difference = getDifferenceYear(year);

    result -= (difference * 3 * result) / 100;

    result = brandCalculate(brand) * result;

    const planIncrement = getPlan(plan);

    result = parseFloat(planIncrement * result).toFixed(2);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResume({
        quote: result,
        data,
      });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getInformation}>
          <option value="">-- Choose --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="chinese">Chinese</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getInformation}>
          <option value="">-- Choose --</option>
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
          checked={plan === "basic"}
          onChange={getInformation}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={getInformation}
        />{" "}
        Full
      </Field>
      <Button type="submit">Get your quote</Button>
    </form>
  );
};

export default Form;

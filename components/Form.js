import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import axios from "../components/Axios";

const Basic = ({ setExpense, handleOpen }) => {
  const [age, setAge] = useState();
  const [bmi, setBmi] = useState();
  const [sex, setSex] = useState("1");
  const [smoker, setSmoker] = useState(0);
  const [children, setChildren] = useState(0);
  const [region, setRegion] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const conditions = age && bmi;

    if (!conditions) {
      console.log("Input all the information correctly");
      return false;
    }

    let numeric_region;

    if (region == 1) {
      numeric_region = [1, 0, 0, 0];
    } else if (region == 2) {
      numeric_region = [0, 1, 0, 0];
    } else if (region == 3) {
      numeric_region = [0, 0, 1, 0];
    } else if (region == 4) {
      numeric_region = [0, 0, 0, 1];
    }

    let data = await [
      parseInt(age),
      parseInt(bmi),
      parseInt(children),
      parseInt(smoker),
      parseInt(sex),
      ...numeric_region,
    ];

    await axios
      .post("/", { data: data })
      .then((response) => {
        let expense = parseFloat(response.data.expense).toFixed(2);
        setExpense(expense);
      })
      .catch((error) => alert(error.message));

    handleOpen();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Provides Patients Informations</h1>
        <div className='form__sides'>
          <div className='form__left'>
            <div className='form__field'>
              <h5>Enter the age of the patient:</h5>
              <input
                type='number'
                placeholder='Enter age '
                required
                name='Age'
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>

            <div className='form__field'>
              <h5>Enter the Body Mass Index(BMI):</h5>
              <input
                type='number'
                required
                name='Body Mass Index'
                placeholder='Enter Body Mass Index(BMI)'
                onChange={(e) => setBmi(e.target.value)}
                value={bmi}
              />
            </div>
            <div className='form__field'>
              <h5>Number of Children :</h5>
              <input
                type='number'
                name='Children'
                required
                placeholder='Enter The number of children '
                onChange={(e) => setChildren(e.target.value)}
                value={children}
              />
            </div>
          </div>

          <div className='form__right'>
            <div className='form__field'>
              <FormControl>
                <h5>Is the patient a smoker? :</h5>
                <RadioGroup
                  row
                  value={smoker}
                  onChange={(e) => setSmoker(e.target.value)}
                  name='row-radio-buttons-group'>
                  <FormControlLabel value={1} control={<Radio />} label='Yes' />
                  <FormControlLabel value={0} control={<Radio />} label='No' />
                </RadioGroup>
              </FormControl>
            </div>

            <div className='form__right'>
              <div className='form__field'>
                <FormControl>
                  <h5>Select your Gender :</h5>
                  <RadioGroup
                    row
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'>
                    <FormControlLabel
                      value={"0"}
                      control={<Radio />}
                      label='Female'
                    />
                    <FormControlLabel
                      value={"1"}
                      control={<Radio />}
                      label='Male'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className='form__field'>
              <h5>Select Region :</h5>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}>
                <option value={4}>Southwest</option>
                <option value={2}>Northwest</option>
                <option value={1}>Northeast</option>
                <option value={3}>Southeast</option>
              </select>
            </div>
          </div>
        </div>

        <button className='submit_btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Basic;

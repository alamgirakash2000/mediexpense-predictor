import Head from "next/head";
import React from "react";
import Form from "../components/Form";
import Modal from "../components/Modal";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [expense, setExpense] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Head>
        <title>Medical Expense Predictor</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <div className='overlay'>
          <Modal expense={expense} open={open} handleClose={handleClose} />
          <div className='header_info'>
            <h1>Medical Expense Predictor</h1>
            <hr />
            <p>
              ACME Insurance Inc. offers affordable health insurance to
              thousands of customer all over the United States. This is a
              machine learning application to estimate the yearly medical
              expenses using information such as their age, sex, BMI, children,
              smoking habits and region of residence. This model is built with
              linear regression techniques.
            </p>
          </div>
          <Form setExpense={setExpense} handleOpen={handleOpen} />
          <div className='footer__info'>
            All the necessary information and the algorithm and Exploratory Data
            analysis are written in Jupyter Notebook.{" "}
            <a
              className='click_here'
              href='https://github.com/alamgirakash2000/machine-learning-with-python-ZeroToGBMs/blob/main/01-linear-regression.ipynb'>
              Click Here
            </a>{" "}
            to see that notebook
          </div>
        </div>
      </main>
    </div>
  );
}

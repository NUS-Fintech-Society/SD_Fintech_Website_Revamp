import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import * as Yup from 'yup';

const MainForm = () => {
  const formEl = useRef();
  const initialValues = {
    email: '',
    name: '',
    message: '',
  };
  return (
    <div className="mt-5 lg:mt-0">
      <div>Get in touch!</div>
      <div>Have a question? We’d love to hear from you! </div>

      <div className="mt-5">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {
            // alert('submitting');
            // formEl.current.
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name cannot be empty'),
            email: Yup.string()
              .email('Email must be valid')
              .required('Email cannot be empty'),
            message: Yup.string().required('Message cannot be empty'),
          })}
        >
          <Form
            ref={formEl}
            action="https://formsubmit.co/4315e2af8dcb2879de7553d0123e6129"
            method="POST"
          >
            {/* email */}
            <div className="mb-5">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <Field
                name="email"
                className=" w-full rounded-md border-2 border-[#B9B9B9] p-2 "
              />
              <p className="text-lg text-red-600">
                <ErrorMessage name="email" />
              </p>
            </div>
            {/* name */}
            <div className="mb-5">
              <label htmlFor="name" className="block font-bold">
                Name
              </label>
              <Field
                name="name"
                className=" w-full rounded-md border-2 border-[#B9B9B9] p-2 "
              />
              <p className=" text-lg text-red-600">
                <ErrorMessage name="name" />
              </p>
            </div>
            {/* message */}
            <div className="mb-5">
              <label htmlFor="message" className="block font-bold">
                Your message
              </label>
              <Field
                name="message"
                as="textarea"
                rows={8}
                className=" w-full rounded-md border-2 border-[#B9B9B9] p-2 "
              />
              <p className=" text-lg text-red-600">
                <ErrorMessage name="message" />
              </p>
            </div>
            <button
              type="submit"
              //   onClick={(e) => {
              //     e.preventDefault();
              //   }}
              className="mt-5 flex h-12 w-40 items-center justify-center rounded-lg bg-secondary text-xl font-bold text-white lg:h-16 lg:w-56 lg:text-3xl "
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MainForm;

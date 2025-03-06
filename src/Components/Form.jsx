import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
    .matches(/^\+?[1-9]\d{9,14}$/, "Enter a valid phone number") 
    .required("Phone number is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:5000/api/contact-form-submission", values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          alert("Form submitted successfully!");
          resetForm(); 
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
      }
    },
  });

  return (
<div className="p-3 sm:p-6 w-full shadow-lg  rounded-lg">
  <h2 className="font-500 text-xl sm:text-2xl text-[#0B0B0B] mb-4 text-center">
    Get a <span className="font-700">FREE 30-minutes</span> consultation
  </h2>
  <form onSubmit={formik.handleSubmit} className="space-y-4">
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Name*</label>
      <input
        type="text"
        name="name"
        placeholder="Charles David"
        className="w-full px-3 py-3 border text-sm focus:outline-none border-[#727272cc] border-b-[#0B0B0B] border-b-2"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red-500 text-sm">{formik.errors.name}</div>
      ) : null}
    </div>
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Email*</label>
      <input
        type="email"
        name="email"
        placeholder="name@example.com"
        className="w-full px-3 py-3 border text-sm focus:outline-none border-[#727272cc] border-b-[#0B0B0B] border-b-2"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500 text-sm">{formik.errors.email}</div>
      ) : null}
    </div>
    <div className="pt-4">
  <label className="block text-[#0B0B0B]">Phone Number*</label>
  <div className="border border-[#727272cc] border-b-[#0B0B0B] border-b-2">
    <PhoneInput
      country={"in"}
      value={formik.values.phone}
      onChange={(phone) => {
        formik.setFieldValue("phone", phone);
        formik.setFieldTouched("phone", true, false); 
      }}
      inputClass="!w-full !py-6 !px-14 !border-none !text-black focus:outline-none"
      buttonClass="!bg-gray-200"
      containerClass="!w-full"
    />
  </div>
  {formik.touched.phone && formik.errors.phone ? (
    <div className="text-red-500 text-sm">{formik.errors.phone}</div>
  ) : null}
</div>
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Tell Us More</label>
      <textarea
        name="message"
        placeholder="Tell More Us About Your Vision"
        className="w-full px-3 py-3 border border-[#727272cc] border-b-[#000000] text-sm focus:outline-none border-b-2"
        rows="3"
        {...formik.getFieldProps("message")}
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full sm:w-40 bg-[#003ad6] text-white p-2 rounded-md"
    >
      Submit
    </button>
  </form>
</div>
  );
};

export default Form;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="p-6 w-full mr-10">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="pt-4">
          <label className="block text-[#0B0B0BCC]">Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-full px-3 py-2 border-b text-sm focus:outline-none border-[#0000004D]"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="pt-4">
          <label className="block text-[#0B0B0BCC]">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border-b text-sm  focus:outline-none border-[#0000004D]"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="pt-4">
          <label className="block text-[#0B0B0BCC]">Phone Number*</label>
          <div className="flex items-center border-b border-[#0000004D]">
            <span className="px-3 py-2 bg-gray-100 text-[#0B0B0BCC] border-r border-[#0000004D]">
              +91
            </span>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              className="w-full px-3 py-2 text-sm focus:outline-none"
              {...formik.getFieldProps("phone")}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="pt-4">
          <label className="block text-[#0B0B0BCC]">Tell Us More</label>
          <textarea
            name="message"
            placeholder="Tell More Us About Your Vision"
            className="w-full px-3 py-2 border-b border-[#0000004D] text-sm focus:outline-none "
            rows="3"
            {...formik.getFieldProps("message")}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-40 bg-[#8E0608] text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
//Frontend
import angular from "../../assets/images/tools/technology/frontend/angularlogo.png";
import bootstrap from "../../assets/images/tools/technology/frontend/Bootstrap_e32f140742.webp";
import css from "../../assets/images/tools/technology/frontend/CSS_3_ccf9cfbb23.webp";
import html from "../../assets/images/tools/technology/frontend/HTML_5_42eb539fbd.webp";
import js from "../../assets/images/tools/technology/frontend/Java_Script_45a0aec399.webp";
import next from "../../assets/images/tools/technology/frontend/Next_JS_c8f094fd51.webp";
import nuxt from "../../assets/images/tools/technology/frontend/nuxtjs_a39fab1b76.webp";
import react from "../../assets/images/tools/technology/frontend/React_cd8bcd167c.webp";
import sass from "../../assets/images/tools/technology/frontend/sass_e81a2b3b7f.webp";
import tailwind from "../../assets/images/tools/technology/frontend/tailwind_1062a8ea71.webp";
import ts from "../../assets/images/tools/technology/frontend/typescript-logo-png.png";
import vue from "../../assets/images/tools/technology/frontend/Vuejs_0104fd5071.webp";
//Backend
import django from "../../assets/images/tools/technology/backend/django_0671be9699.webp";
import drupal from "../../assets/images/tools/technology/backend/drupal_8d5e4960f2.webp";
import express from "../../assets/images/tools/technology/backend/Express_JS_da4a25c56b.svg";
import fasapi from "../../assets/images/tools/technology/backend/fastapi_9274a32a3c.webp";
import flask from "../../assets/images/tools/technology/backend/flask_7a4dd7eb7d.webp";
import nest from "../../assets/images/tools/technology/backend/Nest_JS_38e22c25ba.svg";
import node from "../../assets/images/tools/technology/backend/Node_Js_dec098c326.webp";
import python from "../../assets/images/tools/technology/backend/Python_094b6d625e.webp";
import wordpress from "../../assets/images/tools/technology/backend/wordpress_38bbc5bff8.webp";
//cloud
import aws from "../../assets/images/tools/technology/cloud/aws_e608d4dddb.webp";
import Azure from "../../assets/images/tools/technology/cloud/Azure_c728911023.webp";
import Google from "../../assets/images/tools/technology/cloud/GCP_fed2b546e1.webp";
//Mobile
import Android from "../../assets/images/tools/technology/mobile/android.png";
import Flutter from "../../assets/images/tools/technology/mobile/Flutter_0fd1e2bf71.webp";
import ios from "../../assets/images/tools/technology/mobile/ioslogo.png";
import native from "../../assets/images/tools/technology/mobile/React_Native_0e5002dfca.webp";
//Database
import Mongodb from "../../assets/images/tools/technology/database/Mongo_DB_a0c4333c8d.webp";
import sql from "../../assets/images/tools/technology/database/My_SQL_dd77c61a24.webp";
import postgre from "../../assets/images/tools/technology/database/postgre_SQL_6cd865db16.webp";
//Testing
import Postman from "../../assets/images/tools/technology/testing/postman_317fcd96f1.webp";
import selenium from "../../assets/images/tools/technology/testing/Selenium_0a27b01dda.webp";
import katalon from "../../assets/images/tools/technology/testing/katalon_91ab8f3abb.webp";
import cypress from "../../assets/images/tools/technology/testing/cypress-1.svg";

function StackAndTools() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Frontend",
      content: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: bootstrap, name: "Bootstrap" },
        { image: js, name: "Javascript" },
        { image: ts, name: "Typescript" },
        { image: next, name: "Next.js" },
        { image: nuxt, name: "Nuxt.js" },
        { image: angular, name: "Angular" },
        { image: react, name: "React js" },
        { image: vue, name: "Vue js" },
        { image: tailwind, name: "Tailwind" },
        { image: sass, name: "SASS" },
      ],
    },
    {
      title: "Backend",
      content: [
        { image: django, name: "Django" },
        { image: express, name: "Express" },
        { image: fasapi, name: "fastAPI" },
        { image: flask, name: "Flask" },
        { image: nest, name: "Nest.js" },
        { image: node, name: "Node.js" },
        { image: python, name: "Python" },
        { image: wordpress, name: "WordPress" },
        { image: drupal, name: "Drupal" },
      ],
    },
    {
      title: "Mobile",
      content: [
        { image: Android, name: "Android" },
        { image: Flutter, name: "Flutter" },
        { image: ios, name: "IOS" },
        { image: native, name: "React Native" },
      ],
    },
    {
      title: "Cloud",
      content: [
        { image: aws, name: "AWS" },
        { image: Azure, name: "Azure" },
        { image: Google, name: "GCP" },
      ],
    },
    {
      title: "Database",
      content: [
        { image: Mongodb, name: "MongoDB" },
        { image: sql, name: "MySQL" },
        { image: postgre, name: "PostgreSQL" },
      ],
    },
    {
      title: "Testing",
      content: [
        { image: Postman, name: "Postman" },
        { image: selenium, name: "Selenium" },
        { image: katalon, name: "Katalon" },
        { image: cypress, name: "Cypress " },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-20 bg-[#ffffff]">
      <h1 className="text-[#000000] text-center font-500 text-5xl leading-tight ">
        Advancing Development Using <br />
        Strong Technology Stack
      </h1>
      <div className="flex justify-around">
        {tabs.map((tab, index) => (
          <h2
            key={index}
            className={`cursor-pointer text-xl font-semibold py-2 px-4 mt-16 ${
              activeTab === index
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </h2>
        ))}
      </div>
      <div className="mt-8 mx-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {tabs[activeTab].content.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <p className="text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StackAndTools;

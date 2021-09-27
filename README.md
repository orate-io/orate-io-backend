# orate-io-backend

## Overview

## Dependencies
The difference between dependencies and devDepencies is that devDependencies are modules that are only required during development or releasing (Ex. JEST for Unit testing, ESLINT for Formatting & Linting), while dependencies are modules that are required for the project to run (Ex. AXIOS to make HTTP Requests).

To save a package as a devDependency on installation
> `npm install PACKAGE --save-dev`  &nbsp;&nbsp;&nbsp;  OR  &nbsp;&nbsp;&nbsp;  `npm i PACKAGE -D`

To save a package as a dependency on installation
> `npm install PACKAGE --save`  &nbsp;&nbsp;&nbsp;  OR  &nbsp;&nbsp;&nbsp;  `npm i PACKAGE -S`

### **The list of Development Dependencies used in this Projects are listed below:**

| Package Name | <center>Purpose</center> |
| ------ | ------ |
| [cross-env](https://www.npmjs.com/package/cross-env) | Scripts to Set & Use Environment Variables across multiple platforms |
| [eslint](https://www.npmjs.com/package/eslint) | To Perform Code Formatting, Styling and Applying ECMAScpript Patterns |
| [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) | To Configure JEST plugin while using ESLint |
| [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc) | Rules for ESLint provided by JSDocs - API Document Generator for JavaScript |
| [jest](https://www.npmjs.com/package/jest) | JavaScript Testing Framework |
| [jsdoc](https://www.npmjs.com/package/jsdoc) | An API documentation generator for JavaScript. |
| [morgan](https://www.npmjs.com/package/morgan) | API Request Logger |
| [nodemon](https://www.npmjs.com/package/nodemon) | To Develop NodeJS based Apps by autostarting them in case of any code change in directory |
| [supertest](https://www.npmjs.com/package/supertest) | HTTP Assertion Library Used to perform API testing |
### **The list of Dependencies other than DevDepencies used in this Projects are listed below:**

| Package Name | <center>Purpose</center> |
| ------ | ------ |
| [aws-sdk](https://www.npmjs.com/package/aws-sdk) | AWS SDK for JavaScript to use various AWS services (S3, SQS, SNS, etc.) |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | To Secure confidential information (Ex. Hashing User Passwords) |
| [cors](https://www.npmjs.com/package/cors) | To enable Cross-Origin Resource Sharing |
| [dom](https://www.npmjs.com/package/dom) | To Traverse / Manipulate the browser's Document Object Model |
| [dotenv](https://www.npmjs.com/package/dotenv) | Zero-dependency module that loads environment variables from `.env` file into `process.env` |
| [express](https://www.npmjs.com/package/express) | Fast, Unopinionated, Minimalist Web Framework for NodeJS |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | To Implement JSON Web Tokens for Authorization & Session Management |
| [mongoose](https://www.npmjs.com/package/mongoose) | MongoDB Object Modeling tool that supports both promises and callbacks |
| [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator) | To add pre-save validation for unique fields within a Mongoose schema |
| [react-router](https://www.npmjs.com/package/react-router) | To provide Routing functionality for React |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom) | Document Object Model buildings for React |


## Developer Quick Start
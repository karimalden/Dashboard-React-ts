## Introduction

Open Source Dashboard is a comprehensive data visualization tool designed for tracking and analyzing key metrics . Built using React
## Installation

To install  Dashboard in your project, follow these simple steps:
    /* node version 18 is using  */
1. install json server by run npm i -g json-server 
2. run json server =>   json-server --watch db.json
2.  Install the required dependencies using  pnpm by run command pnpm install 
3. run pnpm start  
4. visit http://localhost:3333


## Components

### 1. Reactstrap

DashboardX incorporates various Reactstrap components for a polished and responsive UI. You can use the following components:

- **Navbar**: An easy-to-use navigation bar with dropdown support.
- **Modal**: Create pop-ups and modals to display additional information or forms.

### 2. Formik

Formik simplifies the process of form management and validation in DashboardX. It offers the following capabilities:

- **Form Creation**: Easily create complex forms with validation rules.
- **Error Handling**: Streamline the process of handling form errors and user input.
- **Validation Input** : Validate Input with yup 

### 3. react-data-table-component

The use of react-data-table-component in DashboardX allows you to efficiently display and manage large sets of data. Explore these functionalities:

- **Pagination**: Implement pagination and sorting for better data organization.
- **Customization Style**: Customize the data table style  according to your specific needs.

### 4. react-i18next

Dashboard  is multilingual, thanks to the integration of react-i18next. Make the dashboard accessible to a global audience with the following features:

- **Multiple Language Support**: Easily set up and manage content in multiple languages.
- **Dynamic Content Translation**: Dynamically translate dashboard content to provide a personalized experience for users.

## Examples

Explore the examples below to understand how to implement these features in your dashboard:

1. create folder in pages  
2. add the page in Router.tsx  with the path and icon => use lazy loadaing are very important  
3. add your custom form for modal 
4. write some inital value and validate schema for your input in formUtils file   
5. write your handel Submit Function  with Your position


## Contact

For any queries or support, feel free to reach out to our team at karimaldenlibrary@gmail.com or using phone number +963951968994

## Conclusion

We hope this documentation helps you make the most of Dashboard  Feel free to explore the full range of features and customize the dashboard to meet your specific requirements.

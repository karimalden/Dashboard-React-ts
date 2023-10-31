# Structer Dashboard - Open Source

Welcome to Structer Dashboard, an open-source dashboard designed to streamline your project management processes. This guide will walk you through the installation process and highlight the key components and examples for integrating various functionalities into your project.

## Installation

To incorporate the Structer Dashboard into your project, follow these steps:

1. Ensure you have Node.js version 18 installed.
2. Install the JSON server by running `npm i -g json-server`.
3. Run the JSON server with the command `json-server --watch db.json`.
4. Install the necessary dependencies using PNPM by running `pnpm install`.
5. Launch the dashboard with `pnpm start`.
6. Visit http://localhost:3333 to view the dashboard.

## Components

### 1. Reactstrap

Utilize the following Reactstrap components for a seamless and responsive UI:

- **Navbar**: Easily navigate through the dashboard with dropdown support.
- **Modal**: Display additional information or forms with user-friendly pop-ups.

### 2. Formik

Simplify form management and validation with Formik, offering the following capabilities:

- **Form Creation**: Effortlessly create complex forms with validation rules.
- **Error Handling**: Manage form errors and user input effectively.
- **Validation Input**: Validate input using the Yup schema.

### 3. react-data-table-component

Efficiently manage large datasets with the help of react-data-table-component, which provides:

- **Pagination**: Organize data with pagination and sorting functionality.
- **Customization**: Customize the data table style to align with your project requirements.

### 4. react-i18next

Make your dashboard accessible to a global audience with multilingual support through react-i18next:

- **Multiple Language Support**: Manage content in multiple languages effortlessly.
- **Dynamic Content Translation**: Translate dashboard content dynamically for a personalized user experience.

## Examples

Refer to the following examples to integrate these features seamlessly into your dashboard:

1. Create a folder within the 'pages' directory.
2. Add the page to 'Routes.tsx' with the relevant path and icon, ensuring lazy loading is implemented.
3. Customize your modal forms to suit your specific requirements.
4. Define initial values and validate schemas for your input in the 'formUtils' file.
5. Implement the 'handleSubmit' function to manage form submissions effectively.

## Contact

For any queries or support, please reach out to our team at karimaldenlibrary@gmail.com or contact us via phone at +963951968994.

## Conclusion

We hope this documentation assists you in leveraging the full potential of the Structer Dashboard. Customize the dashboard as per your needs and explore its diverse range of features. Should you have any further questions, please do not hesitate to reach out.


## Real Example 

First Add Your Route And Page in Routes.tsx 

```js


export const RoutesLinks = [
    {
        name: "example",
        href: "/",
        icon: <BsHexagon />,
        element: <ExamplePage />
    }
    // add another route 
]
```

Create Folder in Pages   with this Structer

```js
// Some Imports 
function YourPageNane() {

    // Your Column For Data Table
    const column   =useTableColumns()

    // Your Data Fetch  and status (pendding  , loadaing , success)
    const {data  ,status } = useGetAllExample()

    
  return (
    
    <DashBody status={status as QueryStatusEnum} >
      <DashHeader title={'Example'}></DashHeader>
    


      <LyTable
        data={data}
        isLoading={status === QueryStatusEnum.LOADING}
        columns={column}
        // another props  hear 
    />
      
      

          {/*
            // Your Edit and Add Model  
            // Dynimc Open Using Zustand  
          */}

      <EditExampleModal />
      <AddExampleModal />
    </DashBody>
  )
}

export default YourPageNane
```

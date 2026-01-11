import React from 'react'
import ReactDOM from 'react-dom/client'
const heading = React.createElement("h1",{},"HelloWorld");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const Heading = () =>{
    return <h1>Namaste React</h1>
}; 
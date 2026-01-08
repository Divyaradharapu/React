//const heading = React.createElement("h1",{id:"heading"},"Hello World From React");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const parent =React.createElement("div",{id:"parent"},
          React.createElement("div",{id:"child"},
       [ React.createElement("h1",{id:"1"},"I am a h1"),React.createElement("h2",{id:"2"},"I am a h2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
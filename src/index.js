import React from "react";
import ReactDOM from "react-dom";

const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Youtube API key

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hello World!!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
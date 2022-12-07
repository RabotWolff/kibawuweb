import React, {useState,useEffect} from "react";
import {Routes, Route, useLocation } from "react-router-dom"; //useLocation
import {ContentProvider} from './hooks/content-context';
import sanityClient from "./client.js";

import './App.css';

function App() {
  const [sanityContent, setSanityContent] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      /* groq */`*[_type == "textComponent"] | order(identifier){
      _id,
      name
  }`).then((data) => {
    console.log(data);
    setSanityContent(data)
    }).catch(console.error);
}, []);

  return (
    <React.Fragment>
            <ContentProvider>

            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      </ContentProvider>

    </React.Fragment>
  );
}

export default App;

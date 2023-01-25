import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //useLocation
import { ContentProvider } from './hooks/content-context';
import sanityClient from "./client.js";
import './App.css';


function Footer() {
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
        <section className="bg-neutral-900 sectionSize">
          <div className="text-white font-montserrat text-sm">
            <Link to="/impressum">
              <a> Impressum </a>
            </Link>
            |
            <Link to="/datenschutz">
              <a> Datenschutz </a>
            </Link>
            <br /><br />
            <p>© 2023 Förderverein Kinderbahnhof Wunderland.</p>
          </div>
        </section>
      </ContentProvider>
    </React.Fragment>
  );
}

export default Footer;

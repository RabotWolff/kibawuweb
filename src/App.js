import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //useLocation

import { ContentProvider } from './hooks/content-context';
import sanityClient from "./client.js";
import Footer from "./Footer";

import './App.css';

import beitrittErklaerung from './files/kibawu_beitrittserklaerung.pdf';
import freistellung from './files/Freistellungsbescheinigung.pdf';
import satzung from './files/Satzung_30042015.pdf';

import train01 from './images/lokomotive.jpg';
import ballonstationwaggon from './images/ballonstationwaggon.jpg';
import popkornplakat from './images/Plakat11.jpg';
import huepfburgplakat from './images/Plakat21.jpg';

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

        <section
          className="md:mt-0 flex flex-col justify-center text-center md:text-left md:flex-col md:justify-between md:items-center lg:flex-row   bg-gray-200">

          <div className="mb-8 mr-0 md:mb-0  md:mt-0 md:basis-1/2">

            <img className="object-cover " src={ballonstationwaggon} alt="ballonstationwaggon" />

          </div>

          <div className="flex-1 md:basis-1/2 md:pr-12 md:pl-12 px-8 md:px-8">
            <h1 className="font-pt-serif text-4xl font-bold mb-7">
              Kinderbahnhof Wunderland <br />
              <span className="bg-underline1 text-3xl bg-left-bottom bg-no-repeat pb-2 bg-100%">
                Förderverein
              </span>
            </h1>
            <p className="font-pt-serif font-normal text-base md:text-lg mb-7 text-left">
              Steig ein. Wir freuen uns über neue Mitglieder und schöne Ideen im Förderverein! Unser Ziel ist die Identifikation der Eltern mit der Einrichtung, Impulse für Aktionen und die Förderung über das Kita-Budget hinaus.
              <br />Fragen? Anregung? Schreib eine Mail!
            </p>
            <div className="font-montserrat mb-10">
              <a href="mailto:info@kibawu.org">
                <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
                  info@kibawu.org
                </button>
              </a>
         
            </div>

          </div>

        </section>

        {/**  <!-- How it works -->*/}

        <section
          className="md:mt-0 flex flex-col-reverse md:flex-col-reverse justify-center text-center md:text-left md:justify-between md:items-center lg:flex-row  bg-black">

          <div className="flex-1 md:basis-1/2 text-white md:pr-8 px-8 md:px-16"  >

            <h1 className="font-pt-serif text-4xl font-bold mb-7">
              Deine Unterstützung! <br />
              <span className="bg-underline1 text-3xl bg-left-bottom bg-no-repeat pb-2  bg-100%">
                Für nur 12€ im Jahr Mitglied werden.
              </span>
            </h1>
            <p className="font-pt-serif font-normal mb-7 text-left  text-base md:text-lg">
              Der Verein hat bereits eine Vielzahl von Projekten erfolgreich umgesetzt. Dazu gehören sowohl kleine als auch große Anschaffungen, wie zum Beispiel die Kinderküche oder Sonnensegel, sowie die Organisation von Kürbisfesten und anderen Veranstaltungen.
              <br /><br />
              Auch Du kannst Ideen einbringen, Wünsche loswerden, anpacken, oder einfach nur beobachten. Lass uns gemeinsam Pläne schmieden. Mach mit!

              Der Mitgliedsantrag kann im Kindergarten abgegeben werden oder als Mailanhang an info@kibawu.org gesendet werden.
              <br /><br />

            </p>
            <div className="font-montserrat mb-10">
              <a href={beitrittErklaerung} target="_blank">
                <button className="bg-white px-6 py-4 rounded-lg border-2 border-white border-solid text-black mr-2 mb-2">
                  Mitgliedsantrag herunterladen
                </button>
              </a>

              <br /><br />
              <a href={satzung} target="_blank">
                <button className="bg-white px-6 py-4 rounded-lg border-2 border-white border-solid text-black mr-2 mb-2">
                  Satzung durchlesen
                </button>
              </a>

              <br /><br />
              <a href={freistellung} target="_blank">
                <button className="bg-white px-6 py-4 rounded-lg border-2 border-white border-solid text-black mr-2 mb-2">
                  Freistellungsbescheinigung
                </button>
              </a>

              
            </div>
          </div>

          <div className="mb-8 mr-0 md:mb-0  md:mt-0 md:basis-1/2">
            <img className="object-cover " src={train01} alt="ballonstationwaggon" />
          </div>
        </section>


        <section
          className="md:mt-0 flex flex-col-reverse md:flex-col-reverse justify-center text-center pt-20 md:justify-between md:items-center lg:flex-row px-10 md:px-36 bg-gray-200">

          <div className="flex-1 md:basis-1/2 md:pl-12 text-black md:pr-8" >

            <h1 className="font-pt-serif text-4xl font-bold mb-7">
              Lust zu spenden?! <br />
              <span className="bg-underline1 text-3xl bg-left-bottom bg-no-repeat pb-2  bg-100%">
                Wir sind gemmeinnützig und können auch Spendenquittungen ausstellen.
              </span>
            </h1>
            <p className="font-pt-serif font-normal mb-7 text-left">
              Setz Dich gerne mit uns in Verbindung. Hier sind die Kontodaten. Gib als Verwendungszweck Spende an und gegebenenfalls den Verwendungszweck.
              Mitgliedsbeitrag noch nicht überwiesen? Dann gib als Verwendungszweck Mitgliedsbeitrag und Deinen Namen an. 
              <br /><br />


              Kontoinhaber: FV Kinderbahnhof Wunderland e.V.<br />
              IBAN: DE95 2519 0001 0693 1820 00<br />
              BIC: VOHADE2H
              <br /><br />
            </p>

            <h1 className="font-pt-serif text-4xl font-bold mb-7">
              Anstehende Termine <br />
              </h1>
              <h2 className="font-pt-serif text-xl font-bold mb-7">
              Sommerfest am 07.07.2023 ab 15 Uhr!
              </h2>
              <p className="font-pt-serif font-normal mb-20 text-left">          
            </p>

          </div>

        

        </section>

        <section
          className="bg-black  w-full md:mt-0 flex flex-col justify-center text-center md:text-left md:flex-col md:justify-between md:items-center lg:flex-row   bg-gray-200">

          <div className="mb-8 mt-8 md:mb-16  md:mt-16 md:basis-1/2 grid place-items-center">

            <img className="object-cover w-3/4" src={popkornplakat} alt="Popkornplakat" />

          </div>

          <div className="mb-8 mt-8 md:mb-16  md:mt-16 md:basis-1/2 grid place-items-center">

            <img className="object-cover w-3/4" src={huepfburgplakat} alt="Huepfburgplakat" />

          </div>

        </section>
        <Footer />
      </ContentProvider>
    </React.Fragment>
  );
}

export default App;

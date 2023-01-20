import React, {useState,useEffect} from "react";
import {Routes, Route, useLocation } from "react-router-dom"; //useLocation
import {ContentProvider} from './hooks/content-context';
import sanityClient from "./client.js";

import './App.css';

import Cross from "./images/Cross.svg";
import Heart from "./images/Heart.svg";
import highlight1 from './images/Highlight1.svg';
import highlight2 from './images/Highlight2.svg';
import beitrittErklaerung from './files/kibawu_beitrittserklaerung.pdf';
import train01 from './images/lokomotive.png';
import ballonstationwaggon from './images/ballonstationwaggon.png';

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

        
      
      <nav className="fixed flex justify-between py-6 w-full lg:px-12 md:px-12 px-4 content-center bg-secondary z-10">
    <div className="flex items-center">
     {/** <img src={logo_black} alt="Logo" className="h-4" /> */}
    </div>

    {/** 
    <ul className="font-montserrat items-center hidden md:flex">
      <li className="mx-3 ">
        <a className="growing-underline" href="howitworks">
          How it works
        </a>
      </li>
      <li className="growing-underline mx-3">
        <a href="features">Features</a>
      </li>
      <li className="growing-underline mx-3">
        <a href="pricing">Pricing</a>
      </li>
    </ul>
    <div className="font-montserrat hidden md:block">
      <button className="mr-6">Login</button>
      <button className="py-2 px-4 text-white bg-black rounded-3xl">
        Signup
      </button>
    </div>
    <div id="showMenu" className="md:hidden">
      <img src={menu} alt="Menu icon" />
    </div>
    */}
  </nav>
  
  <div id='mobileNav' className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down">
    <div id="hideMenu" className="flex justify-end">
      <img src={Cross} alt="" className="h-16 w-16" />
    </div>
    {/**     <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
      <li className="my-6">
        <a href="howitworks">How it works</a>
      </li>
      <li className="my-6">
        <a href="features">Features</a>
      </li>
      <li className="my-6">
        <a href="pricing">Pricing</a>
      </li>
    </ul>
    */}

  </div>


 {/**  <!-- Hero -->*/}
  <section
    className="md:mt-0 flex flex-col justify-center text-center md:text-left md:flex-col md:justify-between md:items-center lg:flex-row   bg-gray-200">
    
    <div className="mb-8 mr-0 md:mb-0  md:mt-0 md:basis-1/2">
      
      <img className="object-cover " src={ballonstationwaggon}  alt="ballonstationwaggon" />
      
    </div>

    <div className="flex-1 md:basis-1/2 md:pr-12 md:pl-12 px-8 md:px-8">
      <h1 className="font-pt-serif text-4xl font-bold mb-7">
      Kinderbahnhof Wunderland <br/>
        <span className="bg-underline1 text-3xl bg-left-bottom bg-no-repeat pb-2 bg-100%">
         Förderverein
        </span>
      </h1>
      <p className="font-pt-serif font-normal text-base md:text-lg mb-7 text-left">
        Steig ein. Wir freuen uns über neue Mitglieder:innen und schöne Ideen im Förderverein! Unser Ziel ist die Identifikation der Eltern mit der Einrichtung, Impulse für Aktionen und die Förderung über das Kita-Budget hinaus.
        <br/>Fragen? Anregung? Schreib eine Mail!
      </p>
      <div className="font-montserrat mb-10">
        <a href="mailto:info@kibawu.org">
        <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
         info@kibawu.org
        </button>
        </a>
      {/**
        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
          Secondary action
        </button>
      */}
        </div>
     
    </div>

  </section>

 {/**  <!-- How it works -->*/}

 <section
    className="md:mt-0 flex flex-col-reverse md:flex-col-reverse justify-center text-center md:text-left md:justify-between md:items-center lg:flex-row  bg-black">
    
    <div className="flex-1 md:basis-1/2 text-white md:pr-8 px-8 md:px-16"  >

      <h1 className="font-pt-serif text-4xl font-bold mb-7">
      Deine Unterstützung! <br/>
        <span className="bg-underline1 text-3xl bg-left-bottom bg-no-repeat pb-2  bg-100%">
        Für nur 12€ im Jahr Mitglied werden.
        </span>
      </h1>
      <p className="font-pt-serif font-normal mb-7 text-left  text-base md:text-lg">
      Der Verein hat bereits eine Vielzahl von Projekten erfolgreich umgesetzt. Dazu gehören sowohl kleine als auch große Anschaffungen, wie zum Beispiel die Kinderküche oder Sonnensegel, sowie die Organisation von Kürbisfesten und anderen Veranstaltungen.
      <br/><br/>

      
      Auch Du kannst Ideen einbringen, Wünsche loswerden, anpacken, oder einfach nur beobachten. Lass uns gemeinsam Pläne schmieden. Mach mit! 

Der Mitgliedsantrag kann im Kindergarten abgegeben werden oder als Mailanhang an info@kibawu.org gesendet werden.
<br/><br/>
      
      </p>
      <div className="font-montserrat mb-10">
      <a href={beitrittErklaerung} target="_blank">
        <button className="bg-white px-6 py-4 rounded-lg border-2 border-white border-solid text-black mr-2 mb-2">
         Mitgliedsantrag herunterladen
        </button>
        </a>

        <br/><br/>
        <button className="bg-white px-6 py-4 rounded-lg border-2 border-white border-solid text-black mr-2 mb-2">
         Satzung durchlesen
        </button>
      {/**
        <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
          Secondary action
        </button>
      */}
        </div>
     

     
    </div>

    <div className="mb-8 mr-0 md:mb-0  md:mt-0 md:basis-1/2">
      
      <img  className="object-cover " src={train01}  alt="ballonstationwaggon" />
      
    </div>


  </section>
{/** 
  <section className="sectionSize bg-secondary">
    <div>
      <h2 className="secondaryTitle text-3xl font-bold bg-underline3 bg-100%">Features</h2>
    </div>
    <div className="md:grid md:grid-cols-2 md:grid-rows-2">

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src={Heart} alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Sommerfest #1</h3>
          <p>
            ...
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src={Heart} alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Kinderküche #2</h3>
          <p>
          ...
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src={Heart} alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Sonnensegel #3</h3>
          <p>
          ...
          </p>
        </div>
      </div>

      <div className="flex items-start font-montserrat my-6 mr-10">
        <img src={Heart} alt='' className="h-7 mr-4" />
        <div>
          <h3 className="font-semibold text-2xl">Ausflüge #4</h3>
          <p>
          ...
          </p>
        </div>
      </div>

    </div>
  </section>

<section className="bg-black sectionSize">

<div>
      <h2 className="text-white secondaryTitle text-3xl font-bold bg-underline3 bg-100%">Mitmachen!</h2>

   

    </div>

    <div>
    <p className="text-white font-pt-serif font-normal mb-24">
      Melden Sie sich beim Förderverein an! Jahresbeitrag beträgt 12€. Mitmachen erwünscht, keine weiteren Verpflichtungen. Kündigung jederzeit möglich, gezahlter Jahresbeitrag wird wegen Verwaltungsaufwand nicht erstattet. Zahlug per PayPal, Überweisung oder Lastschrift möglich. Freiwillig mehr zahlen? Kein Problem :)
      </p>
    </div>
<div class="mt-10 w-5/6 lg:w-1/2 sm:mt-0">
  <div class="md:grid md:grid-cols-2 md:gap-6">
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Vorname</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Nachname</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Straße</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                <label for="city" class="block text-sm font-medium text-gray-700">Stadt</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Postleitzahl</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>
              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Beitrag</label>
                <input type="text" name="postal-code" id="postal-code" placeholder="12€" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Senden</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</section>



<section className="bg-gray-300 sectionSize">

<div>
      <h2 className="secondaryTitle text-3xl font-bold bg-underline3 bg-100%">Spenden!</h2>

   

    </div>

    <div>
    <p className="font-pt-serif font-normal mb-24">
    Sie wollen spenden, frei oder zweckgebunden? Wir freuen uns über die Unterstützung und können als Gemeinnütziger Verein auch eine Spendenquittung ausstellen.
    Sie können den Betrag übeweisen oder unsere PayPal Anbindung nutzen.
    </p>
    </div>
<div class="mt-10 w-5/6 lg:w-1/2 m:mt-0">
  <div class="md:grid md:grid-cols-2 md:gap-6">
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Vorname</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Nachname</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Straße</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                <label for="city" class="block text-sm font-medium text-gray-700">Stadt</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Postleitzahl</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Spendenzweck</label>
                <input type="text" name="postal-code" id="postal-code" placeholder="frei" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Spendenbetrag</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"/>
              </div>

             
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Senden</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</section>

*/}

<section
    className="md:mt-0 flex flex-col-reverse md:flex-col-reverse justify-center text-center pt-20 md:justify-between md:items-center lg:flex-row px-10 md:px-36 bg-gray-200">
    
    <div className="flex-1 md:basis-1/2 md:pl-12 text-black md:pr-8" >

      <h1 className="font-pt-serif text-4xl font-bold mb-7">
      Lust zu spenden?! <br/>
        <span className="bg-underline1 text-3xl bg-left-bottom bg-no-repeat pb-2  bg-100%">
        Wir sind gemmeinnützig und können auch Spendenquittungen ausstellen.
        </span>
      </h1>
      <p className="font-pt-serif font-normal mb-7 text-left">
      Setz Dich gerne mit uns in Verbindung. Hier sind die Kontodaten. Gib als Verwendungszweck Spende an und gegebenenfalls den Verwendungszweck.
      Mitgliedsbeitrag noch nicht überwiesen? Dann gib als Verwendungszweck Mitgliedsbeitrag und Deinen Namen an. Übrigens, Du kannst hier freiwillig auch mehr als die 12€ überweisen wenn Du willst.
      <br/><br/>

      
      Kontoinhaber: FV Kinderbahnhof Wunderland e.V.<br/>
IBAN: DE95 2519 0001 0693 1820 00<br/>
BIC: VOHADE2H
<br/><br/>
      
      </p>
    
     

     
    </div>



  </section>


{/**<!-- Footer --> */}




  <section className="bg-neutral-900 sectionSize">
    <div className="mb-4">
      {/** <img src={logo_white}  alt="Logo" className="h-4" />*/}
    </div>
    <div className="flex mb-8">
      {/**      <a href="#">
        <img src={Facebook}  alt="Facebook logo" className="mx-4" />
      </a>
      <a href="#">
        <img src={Youtube}  alt="Youtube logo" className="mx-4" />
      </a>
      <a href="#">
        <img src={Instagram}  alt="Instagram logo" className="mx-4" />
      </a>
      <a href="#">
        <img src={Twitter}  alt="Twitter logo" className="mx-4" />
      </a>
       */}

    </div>
    <div className="text-white font-montserrat text-sm">
     <a href=""> Impressum</a> | <a href=""> Datenschutz</a>
     <br/><br/>
     <p>© 2023 Förderverein Kinderbahnhof Wunderland.</p>
    </div>
  </section>


      </ContentProvider>

    </React.Fragment>
  );
}

export default App;

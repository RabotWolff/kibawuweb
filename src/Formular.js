import React, {useState,useEffect} from "react";

import {ContentProvider} from './hooks/content-context';
import sanityClient from "./client.js";


import './App.css';


function Formular() {
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
{/*
<section className="bg-black sectionSize">


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


      </ContentProvider>

    </React.Fragment>
  );
}

export default Formular;

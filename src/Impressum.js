import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //useLocation
import { ContentProvider } from './hooks/content-context';
import sanityClient from "./client.js";

import './App.css';
import Footer from "./Footer";

function Impressum() {
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
          className="md:mt-0 flex flex-col-reverse md:flex-col-reverse justify-center text-center pt-20 md:justify-between md:items-center lg:flex-row px-10 md:px-36 bg-gray-200">
          <div className="flex-1 md:basis-1/2 md:pl-12 text-black md:pr-8" >
            <h1 className="font-pt-serif font-bold text-xl mb-7">
              <Link to="/">zurück</Link>
            </h1>
            <h1 className="font-pt-serif text-4xl font-bold mb-7">
              Impressum <br />
            </h1>
            <p className="font-pt-serif font-normal mb-7 text-left">

            <p className="my-5">
Angaben gemäß § 5 TMG:<br/><br/>
Förderverein Kinderbahnhof Wunderland e.V.<br/>
Zeißstraße 48<br/>
30159 Hannover
</p>

<p className="my-5">
Vertreten durch:<br/>
1. Vorsitzender: Daniel Wolff<br/>
2. Vorsitzende: Fatma Kulac-Tanova<br/>
3. Kassiererin: Nathalie Wartmann <br/>
</p>

<p className="my-5">
Kontakt:<br/>
E-Mail: info@kibawu.org
</p>
<p className="my-5">
Vereinsregister:<br/>
VR 202385W
</p>

<p className="my-5">
<b>Haftungsausschluss (Disclaimer)</b>
</p>

<p className="my-5">
<b>Haftung für Inhalte</b><br />
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
</p>

<p className="my-5">
<b>Haftung für Links</b><br />
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
</p>
<p className="my-5">
<b>Urheberrecht</b><br />
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
</p> 
             
             </p>
          </div>
        </section>
        <Footer />
      </ContentProvider>

    </React.Fragment>
  );
}

export default Impressum;

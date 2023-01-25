import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //useLocation
import { ContentProvider } from './hooks/content-context';
import sanityClient from "./client.js";

import './App.css';
import Footer from "./Footer";

function Datenschutz() {
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
              Datenschutz <br />
            </h1>
            <p className="font-pt-serif font-normal mb-7 text-left">

            <p className="my-5">         
<b>1. Datenschutz auf einen Blick </b><br/>
Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
</p>

<p className="my-5">        
Datenerfassung auf unserer Website<br/><br/>
<b>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</b><br/>
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
</p>

<p className="my-5">        
<b>Wie erfassen wir Ihre Daten?</b><br/>       
Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
</p>

<p className="my-5">        
Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
</p>

<p className="my-5">        
<b>Wofür nutzen wir Ihre Daten?</b><br/>       
Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
</p>

<p className="my-5">        
<b>Welche Rechte haben Sie bezüglich Ihrer Daten?</b><br/>      
Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
</p>

<p className="my-5">        
Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
</p>

<p className="my-5">        
<b>2. Allgemeine Hinweise und Pflichtinformationen</b>
</p>

<p className="my-5">        
<b>Datenschutz</b><br/>
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
</p>

<p className="my-5">        
Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
</p>

<p className="my-5">        
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
</p>

<p className="my-5">        
Hinweis zur verantwortlichen Stelle
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

Förderverein Kinderbahnhof Wunderland e.V.<br/>
Zeißstraße 48<br/>
30159 Hannover

<p className="my-5">
Vertreten durch:<br/>
1. Vorsitzender: Daniel Wolff<br/>
2. Vorsitzende: Fatma Kulac-Tanove<br/>
3. Kassiererin: Nathalie Wartmann <br/>
</p>

<p className="my-5">
Kontakt:<br/>
E-Mail: info@kibawu.org
</p>

</p>

<p className="my-5">        
Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
</p>

<p className="my-5">        
<b>Widerruf Ihrer Einwilligung zur Datenverarbeitung</b><br/>
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
</p>

<p className="my-5">        
Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
</p>

<p className="my-5">        
Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
</p>

<p className="my-5">        
<b>Beschwerderecht bei der zuständigen Aufsichtsbehörde</b><br/>
Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
</p>

<p className="my-5">        
<b>Recht auf Datenübertragbarkeit</b><br/>
Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
</p>

<p className="my-5">        
<b>SSL- bzw. TLS-Verschlüsselung</b><br/>
Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
<br/>       
Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
</p>

<p className="my-5">        
<b>Auskunft, Sperrung, Löschung und Berichtigung</b><br/>
Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
</p>

<p className="my-5">        
<b>Recht auf Einschränkung der Verarbeitung</b><br/>
Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
</p>

<p className="my-5">        
Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
</p>

<p className="my-5">        
<b>Widerspruch gegen Werbe-E-Mails</b><br/>
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
</p>

<p className="my-5">        
<b>3. Datenerfassung auf unserer Website</b>
</p>

<p className="my-5">        
<b>Server-Log-Dateien</b> <br/>
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
</p>

<p className="my-5">        
Browsertyp und Browserversion<br/>
verwendetes Betriebssystem<br/>
Referrer URL<br/>
Hostname des zugreifenden Rechners<br/>
Uhrzeit der Serveranfrage<br/>
IP-Adresse<br/>
Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
</p>

<p className="my-5">        
Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
</p>

<p className="my-5">        
<b>Kontaktformular</b><br/>
Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
<br/><br/>      
Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
<br/><br/>      
Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
</p>


              <br /><br />
            </p>
          </div>
        </section>
        <Footer />
      </ContentProvider>

    </React.Fragment>
  );
}

export default Datenschutz;

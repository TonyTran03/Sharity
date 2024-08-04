'use client'
import Head from 'next/head';
import AdobePDFEmbed from './AdobeEmbeded.js';

const Home = () => {
    const pdfUrl = 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:a26a0f72-e63e-4de7-a1fc-cb280961ebdc';
    const fileName = 'Embedded PDF Document';
  
    return (
      <>
        <Head>
          <title>Adobe PDF Embed</title>
        </Head>
        <main>
          <h1>Adobe PDF Embed API Sample</h1>
          <AdobePDFEmbed pdfUrl={pdfUrl} fileName={fileName} />
        </main>
      </>
    );
  };
  
  export default Home;
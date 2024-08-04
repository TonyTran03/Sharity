'use client'
import { useEffect } from 'react';
import Head from 'next/head';

const Home = () => {
    useEffect(() => {
        // Load the Adobe PDF Embed API script dynamically
        const script = document.createElement('script');
        script.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Initialize Adobe DC View SDK after the script has loaded
            document.addEventListener("adobe_dc_view_sdk.ready", function () { 
                const adobeDCView = new AdobeDC.View({ clientId: "a6881fc0aa2749b888d30a5ff3a5baf4", divId: "adobe-dc-view" });
                adobeDCView.previewFile({
                    content: { location: { url: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:a26a0f72-e63e-4de7-a1fc-cb280961ebdc" } },
                    metaData: { fileName: "Get Started With Sharity Tutorial.pdf" }
                }, {});
            });
        };

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Embedded PDF Document</title>
            </Head>
            <div id="adobe-dc-view" style={{ height: '100vh' }}></div>
        </div>
    );
};

export default Home;

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import "../globals.css";




const Home = () => {
    const router = useRouter();

    useEffect(() => {
        // Load the Adobe PDF Embed API script dynamically
        const viewerScript = document.createElement('script');
        viewerScript.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
        viewerScript.async = true;

        // Load the Adobe Document Cloud View SDK script dynamically
        const mainScript = document.createElement('script');
        mainScript.src = "https://documentcloud.adobe.com/view-sdk/main.js";
        mainScript.async = true;

        document.body.appendChild(viewerScript);
        document.body.appendChild(mainScript);

        viewerScript.onload = () => {
            console.log('Adobe PDF Embed API script loaded');
            document.addEventListener("adobe_dc_view_sdk.ready", function () {
                const dropboxLink = "https://raw.githubusercontent.com/TonyTran03/Sharity/main/sharity/app/adobe/Sharity.pdf";
                const clientId = "ca84f1d214e845729da50745ecea6737";
                const viewerOptions = {
                    embedMode: "FULL_WINDOW",
                    defaultViewMode: "FIT_PAGE",
                    showDownloadPDF: false,
                    showPrintPDF: false,
                    showLeftHandPanel: true,
                    showAnnotationTools: true
                };

                const urlToPDF = directLinkFromDropboxLink(dropboxLink);

                const adobeDCView = new AdobeDC.View({
                    clientId: clientId,
                    divId: "embeddedView"
                });

                adobeDCView.previewFile(
                    {
                        content: { promise: fetchPDF(urlToPDF) },
                        metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
                    },
                    viewerOptions
                );
            });
        };

        mainScript.onerror = () => {
            console.error('Failed to load Adobe Document Cloud View SDK script');
        };

        viewerScript.onerror = () => {
            console.error('Failed to load Adobe PDF Embed API script');
        };

        return () => {
            // Clean up the scripts when the component unmounts
            document.body.removeChild(viewerScript);
            document.body.removeChild(mainScript);
        };
    }, []);

    const handleButtonClick = () => {
        // Redirect to the next screen
        router.push('/next-screen'); // Replace with your actual route
    };

    // Utility Functions
    function fetchPDF(urlToPDF) {
        return new Promise((resolve) => {
            fetch(urlToPDF)
                .then((response) => response.blob())
                .then((blob) => resolve(blob.arrayBuffer()));
        });
    }

    function directLinkFromDropboxLink(dropboxLink) {
        return dropboxLink
            .replace("www.dropbox.com", "dl.dropboxusercontent.com")
            .replace("?dl=0", "");
    }

    // Add arrayBuffer if necessary i.e. Safari
    (function () {
        if (Blob.prototype.arrayBuffer !== "function") {
            Blob.prototype.arrayBuffer = myArrayBuffer;
        }

        function myArrayBuffer() {
            return new Promise((resolve) => {
                let fileReader = new FileReader();
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.readAsArrayBuffer(this);
            });
        }
    })();

    return (
        <div className="full-height">
           
            <br />
            <Head>
                <title>Embedded PDF Document</title>
            </Head>
            <div id="embeddedView" style={{ height: '600px', width: '80%', margin: '0 auto' }}></div>
            

           
            <button link="/home">Got it!</button>
        </div>
    );
};

export default Home;

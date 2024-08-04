'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import "../globals.css";
import MatchingButton from '../components/MatchingButton';
import Navbar from "../components/Navbar";

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
                const dropboxLink = "https://www.dropbox.com/scl/fi/x0fgm0wk2vgxa0xnipama/Sharity.pdf?rlkey=d8iobc9m1u7vdpj0i7vnidhvj&st=9hd1lb0s&dl=0";
                const clientId = "e800d12fc12c4d60960778b2bc4370af";
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
            <Navbar />
            <br />
            <Head>
                <title>Embedded PDF Document</title>
            </Head>
            <div id="embeddedView" style={{ height: '600px', width: '80%', margin: '0 auto' }}></div>
            
            <MatchingButton link="/home">Got it!</MatchingButton>
        </div>
    );
};

export default Home;

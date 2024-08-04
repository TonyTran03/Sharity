import { useEffect } from 'react';

const AdobeEmbeded = ({ pdfUrl, fileName }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://acrobatservices.adobe.com/view-sdk/viewer.js';
    script.onload = () => {
      if (window.AdobeDC) {
        try {
          const adobeDCView = new window.AdobeDC.View({
            clientId: 'd4b809a5c5fc47a59f7f75e0d5bdba13',
            divId: 'adobe-dc-view',
          });
          adobeDCView.previewFile({
            content: { location: { url: pdfUrl } },
            metaData: { fileName: fileName },
          });
        } catch (error) {
          console.error('Adobe PDF Embed API error:', error);
        }
      } else {
        console.error('AdobeDC is not available.');
      }
    };
    script.onerror = () => {
      console.error('Failed to load Adobe PDF Embed SDK script.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [pdfUrl, fileName]);

  return <div id="adobe-dc-view" style={{ height: '100vh' }}></div>;
};

export default AdobeEmbeded;

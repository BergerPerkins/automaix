import React, { useEffect } from 'react';

const ChatComponent = () => {
  useEffect(() => {
    // Create script element for inject.js
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    injectScript.async = true;

    // Create script element for config.js
    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/af838a39-99a1-40b9-9512-2859d3439cd0/webchat/config.js';
    configScript.defer = true;

    // Append the scripts to the document body
    document.body.appendChild(injectScript);
    document.body.appendChild(configScript);

    // Cleanup function to remove the scripts when the component is unmounted
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div>
      {/* The rest of your component */}
    </div>
  );
};

export default ChatComponent;

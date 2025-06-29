import React from 'react';

const TorServStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TorServ",
    "description": "Zero-config static web server that launches over Tor as a hidden service.",
    "url": "https://torserv.org/",
    "image": "https://torserv.org/onion1200x630.png",
    "operatingSystem": "Linux, RPI",
    "applicationCategory": "DeveloperTool",
    "creator": {
      "@type": "Organization",
      "name": "TorServ Project",
      "url": "https://torserv.org/",
      "logo": "https://torserv.org/onion1200x630.png",
      "sameAs": ["https://github.com/torserv/torserv"]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default TorServStructuredData;

const TorServStructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TorServ",
    operatingSystem: "Linux",
    applicationCategory: "SecurityApplication",
    description: "Launch an anonymous Tor hidden service in seconds using TorServ. No configuration needed.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    url: "https://github.com/torserv/torserv",
    softwareVersion: "1.0",
    license: "https://opensource.org/licenses/MIT"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default TorServStructuredData;

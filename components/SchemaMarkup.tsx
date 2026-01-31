
import React from 'react';
import { Language } from '../types';

interface SchemaProps {
  lang: Language;
}

const SchemaMarkup: React.FC<SchemaProps> = ({ lang }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BuyRealPhoto.com",
    "description": lang === 'pt' 
      ? "Serviço de fotografia ultrarrealista gerada por IA." 
      : "Ultra-realistic AI-generated photography service.",
    "provider": {
      "@type": "Organization",
      "name": "BuyRealPhoto",
      "url": "https://buyrealphoto.com"
    },
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "99.00",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />
  );
};

export default SchemaMarkup;

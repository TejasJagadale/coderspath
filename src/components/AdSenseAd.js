// components/AdSenseAd.js
import React, { useEffect } from 'react';

const AdSenseAd = ({ adSlot, adFormat = "auto", adStyle = { display: 'block' } }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="ad-container">
      <ins className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-4097461626187477"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
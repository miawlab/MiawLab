// src/components/NoScriptPixel.tsx
import React from "react";

const NoScriptPixel = () => {
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1518320509052073&ev=PageView&noscript=1"
        alt="Pixel Facebook"
      />
    </noscript>
  );
};

export default NoScriptPixel;

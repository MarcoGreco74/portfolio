// components/VantaBackground.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const Background = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    // Distruggi l'effetto precedente se esiste (utile in development con HMR)
    if (typeof window !== "undefined") {
      vantaEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xd4d0b7,
        backgroundColor: 0x3c2815,
         backgroundAlpha: 0, 
        points: 9.0,
        maxDistance: 30.0,
        spacing: 18.0,
      });
    }

    // Pulizia all'uscita del componente
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // Dipendenza vuota: esegui solo al mount

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default Background;
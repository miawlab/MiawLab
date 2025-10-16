import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import NoScriptPixel from './components/NoScriptPixel';
import './index.css';

// Tipagem do fbq no window
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

// Função para carregar o Meta Pixel via JS
function loadMetaPixel() {
  if (!window.fbq) {
    const n: any = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    n.queue = [];
    n.loaded = true;
    n.version = "2.0";
    window.fbq = n;

    const t = document.createElement("script");
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode!.insertBefore(t, s);
  }

  window.fbq("init", "1518320509052073");
  window.fbq("track", "PageView");
}

// Chama o Pixel antes de renderizar o app
loadMetaPixel();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <App />
      <NoScriptPixel />
    </>
  </StrictMode>
);

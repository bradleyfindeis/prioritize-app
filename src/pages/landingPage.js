import React, { useEffect } from 'react';
import '../styles/main.css';

function LandingPage() {

  useEffect(() => {
    const landingPageText = document.querySelector('.landing-page-text');
    landingPageText.classList.add('fade-in');

    const timeoutId = setTimeout(() => {
      landingPageText.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = '/lists';
      }, 1000);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="landing-page-background">
      <h1 className="landing-page-text">prioritize me.</h1>
    </div>
  );
}

export default LandingPage;
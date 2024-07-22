'use client';

import React, { useState, useEffect } from 'react';

const Images = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full bg-main flex flex-col items-center justify-center">
      <img src={isMobile ? '/imagesmobile.png' : '/images.png'} alt="images" />
    </section>
  );
};

export default Images;

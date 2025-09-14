'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroImageProps {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  url,
  alt = 'hero image',
  width = 300,
  height = 300,
  className = '',
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (url.endsWith('.svg') || url.includes('/raw/upload/')) {
      fetch(url)
        .then(res => res.text())
        .then(setSvgContent)
        .catch(err => {
          console.error('Failed to load SVG', err);
          setSvgContent(null);
        });
    } else {
      setSvgContent(null);
    }
  }, [url]);

  if (svgContent) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{ width, height }}
      />
    );
  }

  // Якщо не SVG, відображаємо через Image
  return <Image src={url} alt={alt} width={width} height={height} className={className} />;
};

export default HeroImage;

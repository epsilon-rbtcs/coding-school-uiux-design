import React from 'react';

interface FloydLogoProps {
  className?: string;
  isDark?: boolean; // if dark theme background, text is white; if light background, text is black
  size?: 'sm' | 'md' | 'lg';
}

export const FloydLogo: React.FC<FloydLogoProps> = ({
  className = '',
  isDark = true,
  size = 'md',
}) => {
  const textColor = isDark ? '#ffffff' : '#000000';
  const redBarColor = '#ff1a1a'; // Bright bold red matching logo

  const heightClasses = {
    sm: 'h-5 sm:h-6',
    md: 'h-6 sm:h-8',
    lg: 'h-8 sm:h-10',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 310 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto object-contain`}
      >
        {/* NUKE */}
        <text
          x="0"
          y="28"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="2"
        >
          NUKE
        </text>

        {/* SCH */}
        <text
          x="102"
          y="28"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="2"
        >
          SCH
        </text>

        {/* First O */}
        <text
          x="180"
          y="28"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="0"
        >
          O
        </text>

        {/* Red connecting bar between the two O's */}
        <rect
          x="198"
          y="16.5"
          width="18"
          height="4"
          rx="1"
          fill={redBarColor}
        />

        {/* Second O */}
        <text
          x="213"
          y="28"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="2"
        >
          O
        </text>

        {/* L */}
        <text
          x="244"
          y="28"
          fill={textColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="28"
          letterSpacing="2"
        >
          L
        </text>
      </svg>
    </div>
  );
};

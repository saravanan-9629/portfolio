import React from 'react';

interface ViewProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ViewProjectButton: React.FC<ViewProjectButtonProps> = ({
  href = '#',
  onClick,
  className = '',
  label = 'View Project',
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 ${className}`}
    >
      {label}
    </a>
  );
};

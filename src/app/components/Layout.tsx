import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-32  ${className}`}
    >
      {children}
    </div>
  );
};

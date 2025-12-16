import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Button({ href, children, className = "", ...props }: ButtonProps) {
  // If href exists → link
  if (href) {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center px-4 py-3 rounded-lg transition-all ${className}`}
      >
        {children}
      </a>
    );
  }

  // Else → normal button
  return (
    <button
      className={`inline-flex items-center justify-center  rounded-lg transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'ghost' | 'soft' | 'white'
  size = 'md',        // 'sm' | 'md' | 'lg'
  className = '',
  onClick,
  type = 'button',
  icon,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full tracking-tight transition-all duration-300 btn-shine cursor-pointer select-none';

  const sizeClasses = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-[15px] px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-primary text-white hover:bg-[#1d3ba7] active:bg-[#18318c] shadow-signature hover:shadow-hover border border-transparent',
    ghost:
      'bg-transparent text-deep border border-line hover:border-primary hover:text-primary active:bg-soft/40',
    soft:
      'bg-soft text-deep border border-transparent hover:bg-soft/80 active:bg-soft',
    white:
      'bg-white text-deep hover:bg-surface active:bg-soft/40 shadow-card border border-line/60',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

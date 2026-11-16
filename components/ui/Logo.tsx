interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'h-6',
  md: 'h-10',
  lg: 'h-9',
};

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Typical Studio"
      className={`block w-auto ${sizes[size]} ${className}`}
    />
  );
}

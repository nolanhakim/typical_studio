interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'h-8',
  md: 'h-14',
  lg: 'h-14',
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

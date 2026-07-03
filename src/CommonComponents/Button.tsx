import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, variant = 'primary', children, className, ...props }) => {
  const baseClasses = 'px-6 py-2 font-bold rounded-md transition-colors duration-300 inline-block text-center';
  
  // Tailwind's JIT compiler needs to see the full class names to generate the CSS.
  // Using string interpolation with variables like `bg-[${BRAND_COLORS.gold}]` won't work correctly.
  // Instead, we define the classes directly.
  const primaryClasses = 'bg-[#bc961f] text-[#FFFFFF] hover:bg-[#a6801b]';
  const ghostClasses = 'bg-white border-2 border-[#bc961f] text-[#bc961f] hover:bg-[#fdf6e3] hover:text-[#FFFFFF]';
  
  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : ghostClasses} ${className || ''}`;

  if (to) {
    // return <Link to={to} className={classes}>{children}</Link>;
    return <Link to={to} className={classes}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
};

export default Button;
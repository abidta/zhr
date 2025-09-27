type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className = '',
  ...props
}: { children: React.ReactNode } & ButtonProps) => {
  return (
    <button {...props} className={`${className} btn btn-primary`}>
      {children}
    </button>
  );
};

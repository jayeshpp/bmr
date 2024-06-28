type TypographyProps = {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  color?: string;
  shade?: string;
  variant?: 'normal' | 'bold' | 'italic';
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  component = 'p',
  color,
  shade,
  variant = 'normal',
  children,
}) => {
  const Component = component;

  // Define color and variant classes
  const colorClass = `text-${color}-${shade}`;
  const variantClass = {
    normal: 'font-normal',
    bold: 'font-bold',
    italic: 'italic',
  }[variant];

  return (
    <Component className={`${colorClass} ${variantClass}`}>
      {children}
    </Component>
  );
};

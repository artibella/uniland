import { Badge } from 'react-daisyui';

export default function Tag({
  label = '',
  size = 'lg',
  color = 'primary',
  link = '',
  component,
}) {
  const variant = component.variant || undefined;

  return (
    <Badge
      variant={variant}
      color={color}
      size={size}
      className="inline-block mr-2 capitalize"
    >
      {link ? <a href={link.path}>{label}</a> : label}
    </Badge>
  );
}

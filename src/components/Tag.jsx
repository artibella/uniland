import { Badge } from "react-daisyui";

export default function Tag({ label="", size='lg', color='primary', component }) {
  const variant = component.variant || undefined; 
  return (
    <Badge variant={variant} color={color} size={size} className="inline-block mr-2">{label}</Badge>
  )
}
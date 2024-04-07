import type { ButtonProps } from "../index";
import { Button } from "../index"

export function ButtonDemo({ variant = "default" }: ButtonProps) {
  return <Button variant={variant}>Button</Button>
}

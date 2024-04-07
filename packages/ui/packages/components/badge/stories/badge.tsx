import type { BadgeProps } from "../index";
import { Badge } from "../index"

export function BadgeDemo({ variant = "secondary" }:BadgeProps) {
  return <Badge variant={variant}>Badge</Badge>
}

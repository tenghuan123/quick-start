import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../index"

type AlertProps = React.ComponentPropsWithoutRef<
typeof Alert
>

export function AlertDemo({ variant = 'default' }: AlertProps) {
  return (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}

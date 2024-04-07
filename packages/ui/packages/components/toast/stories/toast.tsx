'use client'

import { Toaster } from '../index'
import { Button } from '../../button'
import { ToastAction } from '../toast'
import { useToast } from '../use-toast'

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <ToastProvider>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Add to calendar
      </Button>
    </ToastProvider>
  )
}

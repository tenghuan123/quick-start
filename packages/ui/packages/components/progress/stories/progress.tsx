"use client"

import * as React from "react"

import { Progress } from "../index"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <div className="min-w-[300px]"><Progress value={progress} className="w-[60%]" /></div>
}

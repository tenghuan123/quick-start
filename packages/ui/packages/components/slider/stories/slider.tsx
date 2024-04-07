import { cn } from "../../utils"
import { Slider } from "../index"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="min-w-[300px]">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[60%]", className)}
          {...props}
        />
    </div>
  )
}

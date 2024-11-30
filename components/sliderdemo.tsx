import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <><div className="container center"><Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[25%]", className)}
          {...props} /></div></>
  )
}

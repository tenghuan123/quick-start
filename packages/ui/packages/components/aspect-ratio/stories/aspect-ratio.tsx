import { AspectRatio } from '../index'

export function AspectRatioDemo() {
  return (
    <div className="min-h-[300px] min-w-[400px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}

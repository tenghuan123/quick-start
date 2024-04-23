import type { Meta, StoryObj } from "@storybook/react"
import {
  CarouselDemo,
  CarouselSpacing,
  CarouselOrientation,
  CarouselPlugin,
} from "./carousel"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Carousel",
  component: CarouselDemo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof CarouselDemo>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}

export const Spacing = {
  render: (props: any) => <CarouselSpacing {...props} />,
}

export const Orientation = {
  render: (props: any) => <CarouselOrientation {...props} />,
}

export const Plugin = {
  render: (props: any) => <CarouselPlugin {...props} />,
}

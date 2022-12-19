import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: { children: "Heading example" }
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm"
  }
};

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  }
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg"
  }
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <p>Text with h1 tag</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};

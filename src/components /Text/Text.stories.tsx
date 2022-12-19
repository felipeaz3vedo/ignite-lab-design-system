import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: { children: "Text example" }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
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

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm"
  }
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg"
  }
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <h1>Text with p tag</h1>
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

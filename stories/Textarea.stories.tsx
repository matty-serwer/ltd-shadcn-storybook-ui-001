import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea placeholder="Type your message here." />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Textarea defaultValue="This textarea has a default value that you can edit." />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea placeholder="Disabled textarea" disabled />
  ),
};

export const WithCharacterCount: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        placeholder="Tell us about yourself"
        className="min-h-[100px]"
        maxLength={200}
      />
      <p className="text-sm text-muted-foreground">
        Maximum 200 characters
      </p>
    </div>
  ),
};

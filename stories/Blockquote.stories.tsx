import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Blockquote, BlockquoteCite } from "@/components/ui/blockquote";

const meta: Meta<typeof Blockquote> = {
  title: "UI/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  render: () => (
    <Blockquote>
      The best way to predict the future is to create it.
    </Blockquote>
  ),
};

export const WithCitation: Story = {
  render: () => (
    <Blockquote>
      The best way to predict the future is to create it.
      <BlockquoteCite>— Peter Drucker</BlockquoteCite>
    </Blockquote>
  ),
};

export const LongQuote: Story = {
  render: () => (
    <Blockquote>
      Design is not just what it looks like and feels like. Design is how it
      works. The details are not the details. They make the design. Simplicity
      is the ultimate sophistication.
      <BlockquoteCite>— Various design luminaries</BlockquoteCite>
    </Blockquote>
  ),
};

export const AccentBorder: Story = {
  render: () => (
    <Blockquote className="border-accent-500">
      In the middle of difficulty lies opportunity.
      <BlockquoteCite>— Albert Einstein</BlockquoteCite>
    </Blockquote>
  ),
};

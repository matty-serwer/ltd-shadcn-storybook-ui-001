import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked" defaultChecked />
      <Label htmlFor="checked">Enabled</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled" className="text-muted-foreground">
          Disabled off
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on" className="text-muted-foreground">
          Disabled on
        </Label>
      </div>
    </div>
  ),
};

export const SettingsList: Story = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications" className="flex flex-col gap-1">
          <span>Push Notifications</span>
          <span className="font-normal text-muted-foreground text-xs">
            Receive push notifications
          </span>
        </Label>
        <Switch id="notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="emails" className="flex flex-col gap-1">
          <span>Email Updates</span>
          <span className="font-normal text-muted-foreground text-xs">
            Receive email updates
          </span>
        </Label>
        <Switch id="emails" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing" className="flex flex-col gap-1">
          <span>Marketing Emails</span>
          <span className="font-normal text-muted-foreground text-xs">
            Receive marketing emails
          </span>
        </Label>
        <Switch id="marketing" />
      </div>
    </div>
  ),
};

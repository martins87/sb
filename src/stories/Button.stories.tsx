import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
// import { notifySuccess } from 'controllers/app/notifications';

const button = {
  title: "Example/CWButton",
  component: Button,
} satisfies Meta<typeof Button>;

export default button;
type Story = StoryObj<typeof button>;

/** Primary buttons */
export const PrimaryRed: Story = {
  name: "Primary red with icon",
  render: () => (
    <Button
      primary
      iconLeft="person"
      buttonType="primary-red"
      label="Primary red with icon"
      backgroundColor="red"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const PrimaryBlue: Story = {
  name: "Primary blue with icon",
  render: () => (
    <Button
      primary
      buttonType="primary-blue"
      label="Primary blue"
      backgroundColor="blue"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const PrimaryBlack: Story = {
  name: "Primary black",
  render: () => (
    <Button
      primary
      buttonType="primary-black"
      label="Primary black"
      backgroundColor="black"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const PrimaryDisabled: Story = {
  name: "Primary disabled",
  render: () => (
    <Button
      primary
      label="Primary disabled"
      backgroundColor="black"
      size="medium"
      disabled
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Secondary buttons */
export const SecondaryRed: Story = {
  name: "Secondary red with icon",
  render: () => (
    <Button
      primary={false}
      iconLeft="person"
      label="Secondary red with icon"
      buttonType="secondary-red"
      backgroundColor="white"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const SecondaryBlue: Story = {
  name: "Secondary blue",
  render: () => (
    <Button
      primary={false}
      label="Secondary blue"
      buttonType="secondary-blue"
      backgroundColor="white"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const SecondaryBlack: Story = {
  name: "Secondary black",
  render: () => (
    <Button
      primary={false}
      label="Secondary black"
      buttonType="secondary-black"
      backgroundColor="white"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const SecondaryDisabled: Story = {
  name: "Secondary disabled",
  render: () => (
    <Button
      primary={false}
      label="Secondary disabled"
      buttonType="secondary-blue"
      disabled
      backgroundColor="white"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Tertiary buttons */
export const TertiaryBlue: Story = {
  name: "Tertiary blue with icon",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Tertiary blue with icon"
      buttonType="tertiary-blue"
      backgroundColor="black"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const TertiaryBlack: Story = {
  name: "Tertiary black",
  render: () => (
    <Button
      primary
      label="Tertiary black"
      buttonType="tertiary-black"
      backgroundColor="black"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const TertiaryDisabled: Story = {
  name: "Tertiary disabled",
  render: () => (
    <Button
      primary
      label="Tertiary disabled"
      buttonType="tertiary-black"
      disabled
      backgroundColor="gray"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Large primary buttons */
export const LargePrimaryRed: Story = {
  name: "Large primary red with icon",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Large primary red with icon"
      buttonType="lg-primary-red"
      backgroundColor="red"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const LargePrimaryBlue: Story = {
  name: "Large primary blue",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Large primary blue"
      buttonType="lg-primary-blue"
      backgroundColor="blue"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const LargePrimaryBlueDisabled: Story = {
  name: "Large primary blue disabled",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Large primary blue"
      buttonType="lg-primary-blue"
      disabled
      backgroundColor="gray"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Large secondary buttons */
export const LargeSecondaryRed: Story = {
  name: "Large secondary red with icon",
  render: () => (
    <Button
      primary={false}
      iconLeft="person"
      label="Large secondary red with icon"
      buttonType="lg-secondary-red"
      backgroundColor="red"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const LargeSecondaryBlue: Story = {
  name: "Large secondary blue",
  render: () => (
    <Button
      primary={false}
      iconLeft="person"
      label="Large secondary blue"
      buttonType="lg-secondary-blue"
      backgroundColor="blue"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const LargeSecondaryBlueDisabled: Story = {
  name: "Large secondary blue disabled",
  render: () => (
    <Button
      primary={false}
      iconLeft="person"
      label="Large secondary disabled"
      buttonType="lg-secondary-blue"
      disabled
      backgroundColor="gray"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Large tertiary buttons */
export const LargeTertiaryRed: Story = {
  name: "Large tertiary red with icon",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Large tertiary red with icon"
      buttonType="lg-tertiary-red"
      backgroundColor="red"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const LargeTertiaryBlue: Story = {
  name: "Large tertiary blue",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Large tertiary blue"
      buttonType="lg-tertiary-blue"
      backgroundColor="blue"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const LargeTertiaryBlueDisabled: Story = {
  name: "Large tertiary blue disabled",
  render: () => (
    <Button
      primary
      iconLeft="person"
      label="Large tertiary disabled"
      buttonType="lg-tertiary-blue"
      disabled
      backgroundColor="gray"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Blue dark disabled buttons */
export const PrimaryBlueDarkDisabled: Story = {
  name: "Primary blue dark disabled",
  render: () => (
    <Button
      primary
      label="Primary blue dark disabled"
      buttonType="primary-blue-dark"
      backgroundColor="gray"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const SecondaryBlueDarkDisabled: Story = {
  name: "Secondary blue dark disabled",
  render: () => (
    <Button
      primary={false}
      label="Secondary blue dark disabled"
      buttonType="secondary-blue-dark"
      backgroundColor="gray"
      size="medium"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Mini buttons */
export const MiniWithIcon: Story = {
  name: "Mini with icon",
  render: () => (
    <Button
      primary
      label="Mini with icon"
      buttonType="mini-black"
      backgroundColor="black"
      size="small"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const Mini: Story = {
  name: "Mini",
  render: () => (
    <Button
      primary
      label="Mini"
      buttonType="mini-black"
      backgroundColor="black"
      size="small"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const MiniDisabled: Story = {
  name: "Mini disabled",
  render: () => (
    <Button
      primary
      label="Mini Disabled"
      buttonType="mini-black"
      disabled
      backgroundColor="gray"
      size="small"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

/** Mini white buttons */
export const MiniWhiteWithIcon: Story = {
  name: "Mini white with icon",
  render: () => (
    <Button
      primary={false}
      iconLeft="person"
      buttonType="mini-white"
      label="Mini white with icon"
      backgroundColor="white"
      size="small"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const MiniWhite: Story = {
  name: "Mini",
  render: () => (
    <Button
      primary={false}
      label="Mini white"
      buttonType="mini-white"
      backgroundColor="white"
      size="small"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

export const MiniWhiteDisabled: Story = {
  name: "Mini disabled",
  render: () => (
    <Button
      primary={false}
      label="Mini white disabled"
      buttonType="mini-white"
      disabled
      backgroundColor="white"
      size="small"
      // onClick={() => notifySuccess('Button clicked!')}
    />
  ),
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// export default {
//   title: "Example/Button",
//   component: Button,
//   tags: ["autodocs"],
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: "Button",
//   },
// };

// export const Secondary = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };

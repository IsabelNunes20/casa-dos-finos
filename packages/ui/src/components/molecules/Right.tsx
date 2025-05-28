import React from 'react';

import { PrimaryButton } from "../atoms/PrimaryButton";

interface RightProps {
  label: string;
  link: string;
}

export const Right: React.FC<RightProps> = ({ label, link }) => {
  return (
    <a href={link}>
      <PrimaryButton label={label} />
    </a>
  );
};

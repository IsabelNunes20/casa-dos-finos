import React from 'react';
import { Link } from 'react-router-dom';

import { PrimaryButton } from "../atoms/PrimaryButton";

interface RightProps {
  label: string;
  link: string;
}

export const Right: React.FC<RightProps> = ({ label, link }) => {
  return (
    <Link to={link}>
      <PrimaryButton label={label} />
    </Link>
  );
};

import React from 'react';

import { Button } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

interface PrimaryButtonProps {
  label: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ( { label }) => {
  return (
    <Button>
      <PlusIcon /> {label}
    </Button>
  );
}

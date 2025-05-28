import React from 'react';

import { Text } from "@radix-ui/themes";

type Props = {
  label: string;
}

export const Label: React.FC<Props> = ({ label }) => {
  return (
    <Text weight="bold">{label}:</Text>
  );
}

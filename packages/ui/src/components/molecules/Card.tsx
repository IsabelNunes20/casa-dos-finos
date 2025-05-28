import React from "react";
import { Flex, Heading, Text, Card as ThemeCard } from "@radix-ui/themes";

import { CardProps } from "../../types/data";

export const Card: React.FC<CardProps> = ({ title, subtitle }) => {
  return (
    <ThemeCard>
      <Flex direction="column" gap="2">
        <Heading>
          {title}
        </Heading>
        <Text size="2" color="gray">
          {subtitle}
        </Text>
      </Flex>
    </ThemeCard>
  );
};

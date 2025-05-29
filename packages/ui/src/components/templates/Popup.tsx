import React from "react";
import { Container, Theme } from "@radix-ui/themes";

import { Form } from "../organisms/Form";

type PopupProps = {
    onAddElement: React.FormEventHandler<HTMLFormElement>;
}

export const Popup: React.FC<PopupProps> = ({ onAddElement }) => {
  return (
    <Theme accentColor="orange" grayColor="olive">
      <Form onSubmit={onAddElement}></Form>
    </Theme>
  );
};

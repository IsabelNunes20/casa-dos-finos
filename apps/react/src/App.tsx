import React from 'react';
import { Theme } from "@radix-ui/themes";

import Router from './router/Router';

export default function App() {
  return (
    <Theme accentColor="orange" grayColor="olive">
      <Router />
    </Theme>
    
  );
}

import React from "react";
import { Grid } from "@radix-ui/themes";

import { Card } from "../molecules/Card";
import { ListProps } from "../../types/data";


export const List: React.FC<ListProps> = ({ list, noObjsctsMsg }) => {
  return (
    <>
      {list && list.length === 0 && <p>{noObjsctsMsg}</p>}
      {list.length > 0 && (
        <Grid columns={{ initial: "1", sm: "2", md: "2", lg: "3" }} gap="3" width="auto">
          {list.map((obj) => (
            <Card key={obj.id} title={obj.title} subtitle={obj.subtitle} />
          ))}
        </Grid>
      )}
    </>
  );
};

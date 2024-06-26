import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SearchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="query" source="query" />
      </SimpleForm>
    </Edit>
  );
};
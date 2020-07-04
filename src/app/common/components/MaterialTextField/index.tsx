import React from 'react';
import { FieldProps, getIn } from 'formik';
import TextField from '@material-ui/core/TextField';

const MaterialTextField: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const errorText = (
    getIn(form.touched, field.name) && getIn(form.errors, field.name)
  );

  return (
    <TextField
      fullWidth
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export default MaterialTextField;

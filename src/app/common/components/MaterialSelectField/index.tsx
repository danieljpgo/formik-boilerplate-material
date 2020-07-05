import React from 'react';
import { FieldProps, getIn } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

interface SelectProps{
  label?: string;
  options: Array<OptionsProps>;
}

interface OptionsProps{
  label: string;
  value: string;
}

const MaterialSelectField: React.FC<FieldProps & SelectProps> = ({
  field,
  form,
  label,
  options,
  ...props
}) => {
  const errorText = (
    getIn(form.touched, field.name) && getIn(form.errors, field.name)
  );

  return (
    <FormControl
      fullWidth
      component="fieldset"
      error={!!errorText}
    >
      {label && (
        <InputLabel>{label}</InputLabel>
      )}
      <Select
        fullWidth
        {...field}
        {...props}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default MaterialSelectField;

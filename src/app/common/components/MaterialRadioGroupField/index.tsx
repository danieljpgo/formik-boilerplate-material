import React from 'react';
import { FieldProps, getIn } from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

interface RadioGroupProps{
  label?: string,
  options: Array<OptionsProps>;
}

interface OptionsProps{
  label: string;
  value: string;
}

const MaterialRadioGroupField: React.FC<FieldProps & RadioGroupProps> = ({
  field,
  form,
  label,
  options,
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
        <FormLabel component="legend">{label}</FormLabel>
      )}
      <RadioGroup
        name={field.name}
        value={field.value}
        aria-label={field.name}
        onBlur={(event) => field.onBlur(event)}
        onChange={(event, value) => form.setFieldValue(field.name, value)}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default MaterialRadioGroupField;

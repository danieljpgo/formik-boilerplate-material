import React, { Fragment } from 'react';
import { FieldProps, getIn } from 'formik';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';

interface SliderProps {
  label?: string,
  min?: number,
  max?: number,
  marks?: boolean,
  step?: number,
  valueLabelDisplay: 'auto' | 'on'
}
// @TODO Melhorar com um exemplo real
const MaterialSliderField: React.FC<FieldProps & SliderProps> = ({
  field,
  form,
  label,
  min,
  max,
  step,
  marks,
  valueLabelDisplay,
  ...props
}) => {
  const errorText = (
    getIn(form.errors, field.name)
  );

  return (
    <Fragment>
      {/* @TODO Melhorar como é exibido os labels  */}
      <Typography>{label}</Typography>
      <Slider
        min={min}
        max={max}
        marks={marks}
        step={step}
        value={field.value}
        valueLabelDisplay={valueLabelDisplay}
        onChange={(event, value) => form.setFieldValue(field.name, value)}
        {...props}
      />
      <FormHelperText>{errorText}</FormHelperText>
    </Fragment>
  );
};

MaterialSliderField.defaultProps = {
  min: 0,
  max: 100,
  marks: false,
  step: 1,
  valueLabelDisplay: 'auto',
};

export default MaterialSliderField;

import React, { Fragment } from 'react';
import { FieldProps } from 'formik';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const MaterialSliderField: React.FC<FieldProps & {
  label?: string, min?: number, max?: number, marks?: boolean, step?: number
} > = ({
  field,
  form,
  label,
  min,
  max,
  step,
  marks,
  ...props
}) => (
  <Fragment>
    {/* @TODO Melhorar como é exibido os labels  */}
    <Typography>{label}</Typography>
    <Slider
      min={min}
      max={max}
      marks={marks}
      step={step}
      value={field.value}
      onChange={(event, value) => form.setFieldValue(field.name, value)}
      {...props}
    />
  </Fragment>
);

MaterialSliderField.defaultProps = {
  min: 0,
  max: 100,
  marks: false,
  step: 1,
};

export default MaterialSliderField;

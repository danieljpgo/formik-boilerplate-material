import React from 'react';
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
} from 'formik';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type CustomRadioProps = { label: string } & FieldAttributes<{}>

const CustomRadio: React.FC<CustomRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  console.log(field.checked);
  return (
    <FormControlLabel
      {...field}
      label={label}
      control={<Radio />}
    />
  );
};

const CustomTextField: React.FC<FieldAttributes<{}>> = ({ placeholder, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      {...field}
      placeholder={placeholder}
      helperText={errorText}
    />
  );
};

const App: React.FC = () => (
  <div>
    <Formik
      initialValues={{
        firstName: 'Bob',
        age: false,
        options: [],
        sex: '',
      }}
      validate={(values) => {

      }}
      onSubmit={(data, { setSubmitting }) => {
        console.log('submit:', data);
        // setSubmitting(true);
        // Async call
        // setSubmitting(false);
      }}
    >
      {({
        values, errors, handleChange, handleBlur, handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>

          <div>
            <CustomTextField
              placeholder="First Name"
              name="firstName"
              type="input"
            />
          </div>
          <div>
            <Field
              name="firstName"
              type="input"
              as={TextField}
            />
          </div>

          <div>
            <Field
              name="age"
              type="checkbox"
            />
          </div>
          <div>
            <Field
              name="age"
              type="checkbox"
              as={Checkbox}
            />
          </div>

          <div>
            Options
            <Field
              name="options"
              type="checkbox"
              as={Checkbox}
              value="1"
            />
            <Field
              name="options"
              type="checkbox"
              as={Checkbox}
              value="2"
            />
          </div>

          <div>
            Sex
            <CustomRadio
              name="sex"
              type="radio"
              value="male"
              label="male"
            />
            <CustomRadio
              name="sex"
              type="radio"
              value="female"
              label="female"
            />
            {/* <Field
              name="sex"
              type="radio"
              value="male"
              as={Radio}
            /> */}
          </div>
          <button type="submit">Submit</button>
          <pre>{ JSON.stringify(values, null, 2) }</pre>
          <pre>{ JSON.stringify(errors, null, 2) }</pre>
        </Form>

      )}
    </Formik>

  </div>
);

export default App;

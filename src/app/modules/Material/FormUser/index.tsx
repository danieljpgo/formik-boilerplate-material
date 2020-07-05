import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MaterialTextField from '../../../common/components/MaterialTextField';
import MaterialSelectField from '../../../common/components/MaterialSelectField';
import MaterialSliderField from '../../../common/components/MaterialSliderField';
import MaterialRadioGroupField from '../../../common/components/MaterialRadioGroupField';

const roles = [
  { label: 'Programmer', value: 'programmer' },
  { label: 'Sales', value: 'sales' },
  { label: 'Marketing', value: 'marketing' },
];

const genders = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
];

const initialValues = {
  fistName: '',
  lastName: '',
  role: '',
  age: 0,
  sex: '',
};

const validationSchema = yup.object({
  fistName: yup.string().required(),
  lastName: yup.string().required(),
  role: yup.string().required(),
  age: yup.number().required().min(18),
  sex: yup.string().required(),
});

const FormUser: React.FC = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, helper) => {
      console.log('submit');
    }}
  >
    {({ values, errors, handleSubmit }) => (
      <Fragment>
        <Paper>
          <div className="form-content">
            <Form onSubmit={handleSubmit}>
              <Field
                name="fistName"
                label="First Name"
                component={MaterialTextField}
              />
              <Field
                name="lastName"
                label="Last Name"
                component={MaterialTextField}
              />
              <Field
                name="role"
                label="Role"
                options={roles}
                component={MaterialSelectField}
              />
              <Field
                name="age"
                label="Age"
                component={MaterialSliderField}
              />
              <Field
                name="sex"
                label="Genders"
                options={genders}
                component={MaterialRadioGroupField}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Paper>
        <div className="code-content">
          {JSON.stringify(values, null, 2)}
          {JSON.stringify(errors, null, 2)}
        </div>
      </Fragment>
    )}
  </Formik>
);

export default FormUser;

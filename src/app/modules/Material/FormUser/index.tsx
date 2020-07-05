import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Paper from '@material-ui/core/Paper';
import MaterialTextField from '../../../common/components/MaterialTextField';
import MaterialSelectField from '../../../common/components/MaterialSelectField';
import MaterialSliderField from '../../../common/components/MaterialSliderField';

const roles = [
  { label: 'Programmer', value: 'programmer' },
  { label: 'Sales', value: 'sales' },
  { label: 'Marketing', value: 'marketing' },
];

const initialValues = {
  fistName: '',
  lastName: '',
  role: '',
  age: 0,
};

const validationSchema = yup.object({
  fistName: yup.string().required(),
  lastName: yup.string().required(),
  role: yup.string().required(),
  age: yup.number().required().min(18),
});

const FormUser: React.FC = () => (

  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={() => console.log('teste')}
  >
    {({ values, handleSubmit }) => (
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
            </Form>
          </div>
        </Paper>
        <div className="code-content">
          {JSON.stringify(values, null, 2)}
        </div>
      </Fragment>
    )}
  </Formik>
);

export default FormUser;

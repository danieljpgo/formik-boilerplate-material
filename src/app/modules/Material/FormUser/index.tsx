import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import Paper from '@material-ui/core/Paper';
import MaterialTextField from '../../../common/components/MaterialTextField';

const validationSchema = yup.object({
  fistName: yup.string().required(),
  lastName: yup.string().required(),
});

const initialValues = {
  fistName: '',
  lastName: '',
};

const FormUser: React.FC = () => (

  <Fragment>

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
              </Form>
            </div>
          </Paper>
          <div className="code-content">
            {JSON.stringify(values, null, 2)}
          </div>
        </Fragment>
      )}
    </Formik>

  </Fragment>
);

export default FormUser;

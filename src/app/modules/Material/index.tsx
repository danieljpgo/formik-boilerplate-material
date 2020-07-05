import React from 'react';
import FormUser from './FormUser';

const Material: React.FC = () => (
  <div>
    <div className="card-container">
      <FormUser />
    </div>
  </div>
);

export default Material;

// import {
//   Formik,
//   Field,
//   Form,
//   useField,
//   FieldAttributes,
//   FieldArray,
// } from 'formik';
// import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
// import Checkbox from '@material-ui/core/Checkbox';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import * as yup from 'yup';
// import { Route } from 'react-router-dom';

// type CustomRadioProps = { label: string } & FieldAttributes<{}>

// const CustomRadio: React.FC<CustomRadioProps> = ({ label, ...props }) => {
//   const [field] = useField<{}>(props);
//   return (
//     <FormControlLabel
//       {...field}
//       label={label}
//       control={<Radio />}
//     />
//   );
// };

// const CustomTextField: React.FC<FieldAttributes<{}>> = ({ placeholder, ...props }) => {
//   const [field, meta] = useField<{}>(props);
//   const errorText = meta.error && meta.touched ? meta.error : '';

//   return (
//     <TextField
//       {...field}
//       placeholder={placeholder}
//       helperText={errorText}
//       error={!!errorText}
//     />
//   );
// };

// const validationSchema = yup.object({
//   firstName: yup
//     .string()
//     .required()
//     .max(10),
// });

// <div>
//     <Formik
//       initialValues={{
//         firstName: 'Bob',
//         age: false,
//         options: [],
//         sex: '',
//         pets: [
//           { type: 'cat', name: 'X', id: `${Math.random()}` },
//         ],
//       }}
//       validationSchema={validationSchema}
//       // validate={(values) => {
//       //   const error: Record<string, string> = {};
//       //   if (values.firstName.includes('Bob')) {
//       //     error.firstName = 'no bob';
//       //   }

//       //   return error;
//       // }}
//       onSubmit={(data, { setSubmitting, resetForm }) => {
//         // Async call
//         setSubmitting(true);
//         setTimeout(() => {
//           alert('submit');
//           resetForm();
//           setSubmitting(false);
//         }, 3000);
//       }}
//     >
//       {({
//         values, errors, handleChange, handleBlur, handleSubmit,
//       }) => (
//         <Form onSubmit={handleSubmit}>

//           <div>
//             <CustomTextField
//               placeholder="First Name"
//               name="firstName"
//               type="input"
//             />
//           </div>
//           <div>
//             <Field
//               name="age"
//               type="checkbox"
//             />
//           </div>
//           <div>
//             <Field
//               name="age"
//               type="checkbox"
//               as={Checkbox}
//             />
//           </div>

//           <div>
//             Options
//             <Field
//               name="options"
//               type="checkbox"
//               as={Checkbox}
//               value="1"
//             />
//             <Field
//               name="options"
//               type="checkbox"
//               as={Checkbox}
//               value="2"
//             />
//           </div>

//           <div>
//             Sex
//             <CustomRadio
//               name="sex"
//               type="radio"
//               value="male"
//               label="male"
//             />
//             <CustomRadio
//               name="sex"
//               type="radio"
//               value="female"
//               label="female"
//             />
//             {/* <Field
//               name="sex"
//               type="radio"
//               value="male"
//               as={Radio}
//             /> */}
//           </div>

//           <div>
//             <FieldArray name="pets">
//               {(arrayHelpers) => (
//                 <div>
//                   {values.pets.map((pet, index) => (
//                     <div key={pet.id}>
//                       <CustomTextField placeholder="pet name" name={`pets.${index}.name`} />
//                       <Field type="select" name={`pets.${index}.type`} as={Select}>
//                         <MenuItem value="">Select type</MenuItem>
//                         <MenuItem value="cat">Cat</MenuItem>
//                         <MenuItem value="dog">Dog</MenuItem>
//                       </Field>
//                     </div>
//                   ))}
//                   <Button onClick={() => arrayHelpers.push({
//                     type: '',
//                     name: '',
//                     id: `${Math.random()}`,
//                   })}
//                   >
//                     add pet
//                   </Button>
//                 </div>
//               )}
//             </FieldArray>
//           </div>

//           <button type="submit">Submit</button>
//           <pre>{ JSON.stringify(values, null, 2) }</pre>
//           <pre>{ JSON.stringify(errors, null, 2) }</pre>
//         </Form>

//       )}
//     </Formik>

//   </div>

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Username must be at least 1 character')
    .max(30, 'Username must be at most 30 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
      passwordConfirmation: '',
    }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleChange, handleSubmit, values }) => (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange('username')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Password confirmation"
          value={values.passwordConfirmation}
          onChangeText={handleChange('passwordConfirmation')}
          secureTextEntry
        />
        <Button onPress={handleSubmit} title="Sign up" />
      </View>
    )}
  </Formik>
);

export default SignUpForm;

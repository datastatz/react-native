import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <TextInput
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry
          />
          <Button onPress={handleSubmit} title="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;

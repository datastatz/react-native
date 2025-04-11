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
  ownerName: Yup.string().required('Repository owner name is required'),
  repositoryName: Yup.string().required('Repository name is required'),
  rating: Yup.number()
    .required('Rating is required')
    .min(0, 'Minimum rating is 0')
    .max(100, 'Maximum rating is 100'),
  text: Yup.string(),
});

const ReviewForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      ownerName: '',
      repositoryName: '',
      rating: '',
      text: '',
    }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleChange, handleSubmit, values }) => (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Repository owner name"
          value={values.ownerName}
          onChangeText={handleChange('ownerName')}
        />
        <TextInput
          style={styles.input}
          placeholder="Repository name"
          value={values.repositoryName}
          onChangeText={handleChange('repositoryName')}
        />
        <TextInput
          style={styles.input}
          placeholder="Rating between 0 and 100"
          value={values.rating}
          onChangeText={handleChange('rating')}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Review"
          value={values.text}
          onChangeText={handleChange('text')}
          multiline
        />
        <Button onPress={handleSubmit} title="Create a review" />
      </View>
    )}
  </Formik>
);

export default ReviewForm;

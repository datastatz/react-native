import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ReviewForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    ownerName: Yup.string().required('Repository owner name is required'),
    repositoryName: Yup.string().required('Repository name is required'),
    rating: Yup.number()
      .required('Rating is required')
      .min(0, 'Minimum rating is 0')
      .max(100, 'Maximum rating is 100'),
    text: Yup.string(),
  });

  return (
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
            placeholder="Repository owner name"
            value={values.ownerName}
            onChangeText={handleChange('ownerName')}
          />
          <TextInput
            placeholder="Repository name"
            value={values.repositoryName}
            onChangeText={handleChange('repositoryName')}
          />
          <TextInput
            placeholder="Rating between 0 and 100"
            value={values.rating}
            onChangeText={handleChange('rating')}
            keyboardType="numeric"
          />
          <TextInput
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
};

export default ReviewForm
 

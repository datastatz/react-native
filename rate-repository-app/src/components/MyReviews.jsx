import React from 'react';
import { View, FlatList, Text, Button, Alert } from 'react-native';

const MyReviews = ({ reviews, onDelete }) => {
  const handleDelete = (id) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => onDelete(id), style: 'destructive' },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.repository.fullName}</Text>
      <Text>{item.rating}</Text>
      <Text>{item.createdAt}</Text>
      <Text>{item.text}</Text>
      <Button title="View repository" onPress={() => {/* Navigate to repository */}} />
      <Button title="Delete review" onPress={() => handleDelete(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyReviews;

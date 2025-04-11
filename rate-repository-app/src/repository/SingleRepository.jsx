import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import * as Linking from 'expo-linking';

const SingleRepository = ({ repository }) => {
  const openInGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View>
      <Text>{repository.fullName}</Text>
      <Text>{repository.description}</Text>
      <Text>{repository.language}</Text>
      <Button title="Open in GitHub" onPress={openInGitHub} />
      <FlatList
        data={repository.reviews.edges}
        keyExtractor={(item) => item.node.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.node.user.username}</Text>
            <Text>{item.node.rating}</Text>
            <Text>{item.node.createdAt}</Text>
            <Text>{item.node.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SingleRepository;

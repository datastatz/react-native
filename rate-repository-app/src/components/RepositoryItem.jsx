// src/components/RepositoryItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatCount } from '../utils/format';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  language: {
    marginBottom: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
});

const RepositoryItem = ({ item, testID }) => (
  <View style={styles.container} testID={testID}>
    <Text style={styles.fullName}>{item.fullName}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.language}>{item.language}</Text>
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <Text>{formatCount(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text>{formatCount(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text>{item.reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Text>{item.ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;

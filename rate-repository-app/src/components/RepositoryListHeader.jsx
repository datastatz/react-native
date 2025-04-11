import React from 'react';
import { View, TextInput, Picker, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  picker: {
    marginVertical: 10,
  },
});

const RepositoryListHeader = ({ searchKeyword, setSearchKeyword, selectedOrder, setSelectedOrder }) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Search"
      value={searchKeyword}
      onChangeText={setSearchKeyword}
    />
    <Picker
      selectedValue={selectedOrder}
      style={styles.picker}
      onValueChange={(itemValue) => setSelectedOrder(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="CREATED_AT_DESC" />
      <Picker.Item label="Highest rated repositories" value="RATING_DESC" />
      <Picker.Item label="Lowest rated repositories" value="RATING_ASC" />
    </Picker>
  </View>
);

export default RepositoryListHeader;

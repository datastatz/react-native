import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import Text from './Text';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
  scroll: {
    flexDirection: 'row',
  },
  tab: {
    marginRight: 15,
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const AppBarTab = ({ to, label, onPress }) => {
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.tab}>
        <Text style={styles.tabText}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <Link to={to} style={styles.tab}>
      <Text style={styles.tabText}>{label}</Text>
    </Link>
  );
};

const AppBar = () => {
  const { data } = useQuery(ME);
  const navigate = useNavigate();
  const signOut = useSignOut();

  const handleSignOut = async () => {
    await signOut();
    navigate('/'); // Go back to home after sign out
  };

  const isAuthenticated = !!data?.me;

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/" label="Repositories" />
        {isAuthenticated ? (
          <AppBarTab label="Sign Out" onPress={handleSignOut} />
        ) : (
          <AppBarTab to="/signin" label="Sign In" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

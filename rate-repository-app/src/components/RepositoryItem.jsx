import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.white,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 4,
  }
});

const formatCount = count => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : String(count);
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={{ flexShrink: 1 }}>
          <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(item.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{formatCount(item.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;

import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from './RepositoryListContainer';

describe('RepositoryListContainer', () => {
  it('renders repository information correctly', () => {
    const repositories = {
      edges: [
        {
          node: {
            id: '1',
            fullName: 'user/repo1',
            description: 'Description 1',
            language: 'JavaScript',
            forksCount: 10,
            stargazersCount: 100,
            ratingAverage: 90,
            reviewCount: 5,
          },
        },
        {
          node: {
            id: '2',
            fullName: 'user/repo2',
            description: 'Description 2',
            language: 'TypeScript',
            forksCount: 20,
            stargazersCount: 200,
            ratingAverage: 80,
            reviewCount: 10,
          },
        },
      ],
    };

    const { getAllByTestId } = render(
      <RepositoryListContainer repositories={repositories} />
    );

    const repositoryItems = getAllByTestId('repositoryItem');
    expect(repositoryItems).toHaveLength(2);
  });
});

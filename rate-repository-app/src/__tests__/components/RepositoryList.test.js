import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryList from '../components/RepositoryList';

describe('RepositoryList', () => {
  it('renders repository information correctly', () => {
    const repositories = {
      totalCount: 2,
      pageInfo: {
        hasNextPage: true,
        endCursor:
          'WyJhc3lhbnNpb3NvcmFuaS9mdWxsLXN0YWNrLW9wZW4tYXBpIiwxNTg3NzY4NzAwMDAwXQ==',
        startCursor: 'WyJqYXJlZC9mdWxsLXN0YWNrLW9wZW4tYXBpIiwxNTg3NzY4NzAwMDAwXQ==',
      },
      edges: [
        {
          node: {
            id: 'jaredpalmer/formik',
            fullName: 'jaredpalmer/formik',
            description: 'Build forms in React, without the tears',
            language: 'TypeScript',
            forksCount: 1619,
            stargazersCount: 21856,
            ratingAverage: 88,
            reviewCount: 3,
            ownerAvatarUrl:
              'https://avatars2.githubusercontent.com/u/4060187?v=4',
          },
          cursor:
            'WyJqYXJlZHBhbG1lci9mb3JtaWsiLDE1ODc3Njg3MDAwMDBd',
        },
        {
          node: {
            id: 'rails/rails',
            fullName: 'rails/rails',
            description: 'Ruby on Rails',
            language: 'Ruby',
            forksCount: 18349,
            stargazersCount: 45377,
            ratingAverage: 100,
            reviewCount: 2,
            ownerAvatarUrl:
              'https://avatars1.githubusercontent.com/u/4223?v=4',
          },
          cursor:
            'WyJyYWlscy9yYWlscyIsMTU4Nzc2ODcwMDAwMF0=',
        },
      ],
    };

    const { getAllByTestId } = render(<RepositoryList repositories={repositories} />);

    const repositoryItems = getAllByTestId('repositoryItem');

    expect(repositoryItems).toHaveLength(2);

    const [firstRepository, secondRepository] = repositoryItems;

    // First repository assertions
    expect(firstRepository).toHaveTextContent('jaredpalmer/formik');
    expect(firstRepository).toHaveTextContent('Build forms in React, without the tears');
    expect(firstRepository).toHaveTextContent('TypeScript');
    expect(firstRepository).toHaveTextContent('21.9k');
    expect(firstRepository).toHaveTextContent('1.6k');
    expect(firstRepository).toHaveTextContent('88');
    expect(firstRepository).toHaveTextContent('3');

    // Second repository assertions
    expect(secondRepository).toHaveTextContent('rails/rails');
    expect(secondRepository).toHaveTextContent('Ruby on Rails');
    expect(secondRepository).toHaveTextContent('Ruby');
    expect(secondRepository).toHaveTextContent('45.4k');
    expect(secondRepository).toHaveTextContent('18.3k');
    expect(secondRepository).toHaveTextContent('100');
    expect(secondRepository).toHaveTextContent('2');
  });
});

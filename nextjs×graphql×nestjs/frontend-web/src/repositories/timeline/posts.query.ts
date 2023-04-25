import { gql } from '@apollo/client';
import { Post } from '../generated/graphql';

export const GET_POST = gql`
  query Posts{
    posts {
      id
      title
      text
      isPublished
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      thumbnailURL
      comment
      isPublished
      likeCount
    }
  }
`;

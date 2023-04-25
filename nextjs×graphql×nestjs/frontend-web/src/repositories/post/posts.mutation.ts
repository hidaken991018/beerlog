import { gql } from '@apollo/client';

export const MUTATION_CREATEPOST = gql`
  mutation($input: NewPost!) {
    createPost(input: $input ){
      id
      title
      text
      isPublished
    }
  }
`;


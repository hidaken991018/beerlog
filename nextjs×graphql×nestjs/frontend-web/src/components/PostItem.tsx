import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { GET_POST } from '../repositories/timeline/posts.query';
import { Post } from '@/repositories/generated/graphql';

const PostItem: NextPage = () => {
  const { loading, error, data } = useQuery<Post[]>(GET_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const  posts  = data ;
  if (!posts) return null;

  return (
    <div>
        {posts.map((post) => {
            return (
                <>
                <h2>{post.text}</h2>
                <p>{post.title}</p>
                </>
            )
        })}
    </div>
    
  );
};

export default PostItem;
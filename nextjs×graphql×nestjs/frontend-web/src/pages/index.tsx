import { Stack } from '@mui/material';
import { useQuery } from '@apollo/client';
import { PostsDocument, PostsQuery } from '@/repositories/generated/graphql';
import React from 'react';
import { PostCard } from '@/components/PostCard';

const sample: any[] = [];
for (let i = 0; i < 10; i++) {
  sample.push('');
}

/**
 * タイムライン表示ページ
 * @returns
 */
export default function Home() {
  const { data, loading, error } = useQuery<PostsQuery>(PostsDocument);

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      {data?.beerPosts
        ?.slice()
        .reverse()
        .map((item: any, index) => {
          return (
            <React.Fragment key={index}>
              <PostCard item={item} />
            </React.Fragment>
          );
        })}
    </Stack>
  );
}

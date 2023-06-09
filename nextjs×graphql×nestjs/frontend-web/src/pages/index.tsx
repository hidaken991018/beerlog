import { Stack } from '@mui/material';
import { useQuery } from '@apollo/client';
import {
  BeerPost,
  PostsDocument,
  PostsQuery,
} from '@/repositories/generated/graphql';
import React from 'react';
import { PostCard } from '@/components/PostCard';

const sample: BeerPost[] = [];
for (let i = 0; i < 10; i++) {
  sample.push({} as BeerPost);
}

/**
 * タイムライン表示ページ
 * @returns
 */
export default function Home() {
  const { data, loading, error } = useQuery<PostsQuery>(PostsDocument);

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      {sample
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

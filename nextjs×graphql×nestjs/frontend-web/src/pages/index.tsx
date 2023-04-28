import RecipeReviewCard from '@/components/PostItem2';
import { Stack } from '@mui/material';
import { useQuery } from '@apollo/client';
import { PostsDocument, PostsQuery } from '@/repositories/generated/graphql';
import React from 'react';

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
  console.log(data);

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      {data?.posts
        ?.slice()
        .reverse()
        .map((item: any, index) => {
          return (
            <React.Fragment key={index}>
              <RecipeReviewCard item={item} />
            </React.Fragment>
          );
        })}
    </Stack>
  );
}

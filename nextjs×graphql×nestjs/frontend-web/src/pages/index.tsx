import Image from 'next/image';
import { Inter } from 'next/font/google';
import PostItem from '@/components/PostItem';
import RecipeReviewCard from '@/components/PostItem2';
import { Box, Container, Stack } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/repositories/timeline/posts.query';
import { Post, PostsDocument, PostsQuery } from '@/repositories/generated/graphql';
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
  const { data, loading, error } = useQuery<PostsQuery>(PostsDocument)
  console.log(data)

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      {data?.posts?.map((item: any, index) => {
        return (
          <React.Fragment key={index}>
            <RecipeReviewCard item={item} />
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

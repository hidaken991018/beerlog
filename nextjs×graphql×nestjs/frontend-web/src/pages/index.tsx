import Image from 'next/image';
import { Inter } from 'next/font/google';
import PostItem from '@/components/PostItem';
import RecipeReviewCard from '@/components/PostItem2';
import { Box, Container, Stack } from '@mui/material';

const sample: any[] = [];
for (let i = 0; i < 10; i++) {
  sample.push('');
}

/**
 * タイムライン表示ページ
 * @returns
 */
export default function Home() {
  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      {sample.map((item) => {
        return (
          <>
            <RecipeReviewCard />
          </>
        );
      })}
    </Stack>
  );
}

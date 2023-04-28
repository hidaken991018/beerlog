import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CardMedia, Container, Stack, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useMutation } from '@apollo/client';
import {
  CreatePostDocument,
  CreatePostMutation,
} from '@/repositories/generated/graphql';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImgFileToBase64 } from '@/utils/ImgFileToBase64';

export default function PostForm() {
  const [updatePost, mutationResult] =
    useMutation<CreatePostMutation>(CreatePostDocument);
  const [image, setImage] = useState<string>('');
  const [createObjectURL, setCreateObjectURL] = useState<string>('');
  const router = useRouter();

  // フォーム要素の型定義
  interface FormInput {
    comment: string;
    thumbnailURL: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  /**
   * フォーム送信時の処理
   * @param data　react-hook-formの値?
   */
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    await updatePost({
      variables: {
        thumbnailURL: await ImgFileToBase64(data.thumbnailURL[0]),
        comment: 'sample',
        likeCount: 100,
        title: 'sample',
      },
    });
    // 正常の場合ホームへ遷移する
    if (!mutationResult.error) {
      router.push('/');
    }
  };

  /**
   * 画像のアップロード処理
   * @param event
   */
  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setCreateObjectURL(URL.createObjectURL(file));
    }
  };

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Box component={'form'}>
        <Stack spacing={2}>
          <Typography variant="caption" component="div" mt={1} gutterBottom>
            送信画像プレビュー
          </Typography>
          <CardMedia
            sx={{ height: 140 }}
            image={createObjectURL}
            title="green iguana"
          />
          <span className="h-3">
            {errors.thumbnailURL && '写真を追加してください。'}
          </span>
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              type="file"
              {...register('thumbnailURL', { required: true })}
              onChange={(e) => {
                //なぜこれでできるのかは不明だが。。
                //https://zenn.dev/hiro__dev/scraps/000b8a89053356
                register('thumbnailURL').onChange(e);
                uploadToClient(e);
              }}
            />
          </Button>
          <TextField
            id="outlined-multiline-flexible"
            label="コメント"
            fullWidth
            multiline
            rows={4}
            {...register('comment', { required: true })}
          />
          <span className="h-3">
            {errors.comment && 'コメントを追加してください。'}
          </span>

          <Button
            variant="contained"
            component="label"
            endIcon={<SendIcon />}
            // onClick={() => handleSave()}
            onClick={handleSubmit(onSubmit)}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

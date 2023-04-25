// import { MutationCreatePostArgs, Post } from "@/repositories/generated/graphql";
// import { MUTATION_CREATEPOST } from "@/repositories/post/posts.mutation";
// import { useMutation } from "@apollo/client";

// export const PostForm = () =>{
//     const [updatePost, mutationResult] = useMutation<
//     Post,
//     MutationCreatePostArgs
//     >(MUTATION_CREATEPOST);
//     const mutationError = mutationResult.error

//   const handleSave = async () => {
//     await updatePost({
//       variables: {
//         input: {
//             text:"サンプル-1",
//             title:"サンプル-2"
//         },
//       },
//     });

//     // mutationError
//     //   ? alert(`Error: ${JSON.stringify(mutationError)}`)
//     //   : setMessage('Successfully saved');
//   };

//     return<button onClick={handleSave} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"></button>
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function PostForm() {
  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Box component="form" noValidate autoComplete="off">
        <Stack spacing={2}>
          <Typography variant="caption" component="div" mt={1} gutterBottom>
            送信画像プレビュー
          </Typography>
          <img
            id="preview"
            // src={preview}
            alt="preview"
            className="previewimg"
          />
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            fullWidth
            multiline
            rows={4}
          />
          <Button variant="contained" component="label" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

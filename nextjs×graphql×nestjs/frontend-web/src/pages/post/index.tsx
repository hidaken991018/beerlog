import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 *
 * TODO エラーメッセージの表示
 * @returns
 */
export default function BeerForm() {
  const { isAuthenticated } = useAuth0();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <input
        type="file"
        // name="photo"
        className="mb-4"
        {...register('photo', { required: '画像は必須です。' })}
      />

      <TextField
        // name="beerName"
        label="ビール名"
        fullWidth
        required
        error={Boolean(errors.beerName)}
        // helperText={errors.beerName?.message}
        className="mb-4"
        {...register('beerName', { required: 'ビール名は必須です。' })}
      />

      <TextField
        name="brewery"
        label="醸造所"
        fullWidth
        // inputRef={register}
        className="mb-4"
      />

      <TextField
        name="style"
        label="スタイル"
        fullWidth
        // inputRef={register}
        className="mb-4"
      />

      <TextField
        name="alcoholContent"
        label="アルコール度数"
        type="number"
        fullWidth
        // inputRef={register}
        className="mb-4"
      />

      <TextField
        name="purchaseLocation"
        label="購入場所"
        fullWidth
        // inputRef={register}
        className="mb-4"
      />

      <FormControl fullWidth className="mb-4">
        <InputLabel id="rating-label">評価</InputLabel>
        <Select labelId="rating-label" name="rating">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>

      <TextField
        name="comments"
        label="コメント"
        fullWidth
        multiline
        rows={4}
        // inputRef={register}
        className="mb-4"
      />

      <Button type="submit" variant="contained" color="primary">
        送信
      </Button>
    </form>
  );
}

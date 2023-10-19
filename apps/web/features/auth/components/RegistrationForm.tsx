'use client';
import type { FormEvent } from 'react';
import { Box, Grid, TextField, InputLabel, Typography, Button, Divider } from '@mui/material';
import Link from 'next/link';

export default function RegistrationForm(): JSX.Element {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('clicked');
  };

  return (
    <Box sx={{ border: 1, padding: 2, borderColor: '#CCC', width: '350px', marginTop: 2 }}>
      <form onSubmit={onSubmitHandler}>
        <Grid container direction='column' justifyContent='flex-start'>
          <Typography component='h1' variant='h4'>Create account</Typography>

          <InputLabel htmlFor='name' sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}>Your name</InputLabel>
          <TextField id='name' name='name' size='small' type='text' variant='outlined' />

          <InputLabel htmlFor='email' sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}>Email</InputLabel>
          <TextField id='email' name='email' size='small' type='text' variant='outlined' />

          <InputLabel htmlFor='password' sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}>Password</InputLabel>
          <TextField id='password' name='password' placeholder='Minimum 6 characters required' size='small' type='text' variant='outlined' />

          <InputLabel htmlFor='confirmPassword' sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}>Re-enter password</InputLabel>
          <TextField id='confirmPassword' name='confirmPassword' size='small' type='text' variant='outlined' />

          <Button
            sx={{ marginTop: 2, height: '31px', backgroundColor: '#F0C14B', color: '#000', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none' }}
            type='submit' variant='contained'
          >Register</Button>
        </Grid>
      </form>

      <div style={{ marginTop: '30px' }}>
        <small>
          <span>By creating an account, you agree to Amazon&apos;s</span>
        </small>
      </div>

      <div>
        <small>
          <Link href='#' style={{ textDecoration: 'none', color: '#00E' }}>Conditions of use</Link>
          {' '} and {' '}
          <Link href='#' style={{ textDecoration: 'none', color: '#00E' }}>Privacy policy</Link>
        </small>
      </div>


      <Divider sx={{ margin: '36px 0' }} />

      <div>
        <small>
          Already have an account?{' '}
          <Link href='/signin' style={{ textDecoration: 'none', color: '#00E' }}>Sign-in</Link>
        </small>
      </div>
      <div>
        <small>
          Buying for work?{' '}
          <Link href='#' style={{ textDecoration: 'none', color: '#00E' }}>Create a business account</Link>
        </small>
      </div>
    </Box>
  );
}

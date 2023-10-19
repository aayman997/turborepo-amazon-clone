'use client';
import type { FormEvent } from 'react';
import { Box, Grid, TextField, InputLabel, Typography, Button, Divider } from '@mui/material';
import Link from 'next/link';

export default function SigninForm(): JSX.Element {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('clicked');
  };

  return (
    <>
      <Box sx={{ border: 1, padding: 2, borderColor: '#CCC', width: '350px', marginTop: 2 }}>
        <form onSubmit={onSubmitHandler}>
          <Grid container direction='column' justifyContent='flex-start'>
            <Typography component='h1' variant='h4'>Sign-In</Typography>

            <InputLabel htmlFor='email' sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}>Email</InputLabel>
            <TextField id='email' name='email' size='small' type='text' variant='outlined' />

            <InputLabel htmlFor='password' sx={{ fontWeight: 500, marginTop: 1, color: '#000' }}>Password</InputLabel>
            <TextField id='password' name='password' size='small' type='text' variant='outlined' />

            <Button
              sx={{ marginTop: 2, height: '31px', backgroundColor: '#F0C14B', color: '#000', borderColor: '#a88734 #9c7e31 #846a29', textTransform: 'none' }}
              type='submit' variant='contained'
            >Sign-In</Button>
          </Grid>
        </form>

        <div style={{ marginTop: '30px' }}>
          <small>
            <span>By continuing, you agree to Amazon&apos;s</span>
          </small>
        </div>

        <div>
          <small>
            <Link href='#' style={{ textDecoration: 'none', color: '#00E' }}>Conditions of use</Link>
            {' '} and {' '}
            <Link href='#' style={{ textDecoration: 'none', color: '#00E' }}>Privacy policy</Link>
          </small>
        </div>
      </Box>

      <div style={{ marginTop: '16px' }}>

        <Divider>
          <small style={{ color: '#767676' }}>New to Amazon</small>
        </Divider>

        <div>
          <small>
            <Link href='/register' style={{ textDecoration: 'none', color: '#00E' }}>
              <Button
                sx={{ marginTop: '12px', height: '31px', backgroundColor: '#F1F1F1', color: '#000', textTransform: 'none', width: '100%' }} variant='contained'
              >Register</Button>
            </Link>
          </small>
        </div>
      </div>
    </>
  );
}

import type { ReactNode } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

export default function AuthLayout({ children }: {
  children: ReactNode
}): JSX.Element {
  return (
    <Grid alignItems='center' container direction='column' justifyContent='flex-start' sx={{ p: 2 }}>
      <Image alt='Amazon logo' height={40} priority src='/amazon-logo.png' width={132} />
      <main>{children}</main>
    </Grid>
  );
}

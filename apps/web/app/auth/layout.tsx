import type { ReactNode } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import type { ReactJSXElement } from '@emotion/react/types/jsx-namespace';


export default function AuthLayout({ children }: {
  children: ReactNode
}): ReactJSXElement {
  return (
    <Grid>
      <Image alt='logo' height={64} src='/vercel.svg' width={283} />
      {children}
    </Grid>
  );
}

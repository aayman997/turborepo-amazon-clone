'use client';
import './globals.css';
import type { ReactNode } from 'react';
import ThemeRegistry from '../ThemeRegistry/theme-registry';


export default function RootLayout({ children }: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}

// import fonts
import { Source_Serif_4, Inter } from 'next/font/google';

export const sourceSerif = Source_Serif_4({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-source-serif-4',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

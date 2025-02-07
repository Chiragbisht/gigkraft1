// pages/_app.js (or a layout component)
import { Montserrat } from '@next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'], // Specify the character subsets you need (latin, cyrillic, etc.)
  weight: ['400','500','600', '700'], // Specify the font weights you want to use (optional)
  // ... other options if needed (variable, display, etc.)
  variable: '--font-montserrat', // Specify the variable name to use (optional)
  style: ['normal', 'italic'],// Specify the font style you want to use (normal, italic, etc.)
});

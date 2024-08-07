import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#eaf1ff',
  '#d5defc',
  '#abb9f2',
  '#7d93e7',
  '#5672de',
  '#3e5dd9',
  '#2f53d8',
  '#2144c0',
  '#193cad',
  '#083399',
];
export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    primary: myColor,
  },
});

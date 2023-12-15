import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  '[data-radix-popper-content-wrapper]': {
    zIndex: '9999 !important',
  },
  '.notification': {
    width: '25rem !important',
  },
  '.Toastify__toast-theme--dark': {
    background: '$gray800 !important',
  },
})

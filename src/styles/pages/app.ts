import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

  '#sidebar': {
    opacity: 0,
    transition: 'all 0.7s',

    '&:has(.open)': {
      opacity: 1,
    },

    '&:has(.close)': {
      opacity: 0,
      zIndex: -1,
    },
  },
})

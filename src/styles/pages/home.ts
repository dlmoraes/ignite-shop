import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - (100vw - 1180px) / 2)',
  marginLeft: 'auto',
  minHeight: 656,
})

export const LeftArrowContainer = styled('div', {
  position: 'absolute',
  left: 0,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  width: '8.5rem',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const RightArrowContainer = styled('div', {
  position: 'absolute',
  right: 0,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  width: '8.5rem',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const ArrowButton = styled('button', {
  background: 'none',
  border: 0,
  color: '$gray100',
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

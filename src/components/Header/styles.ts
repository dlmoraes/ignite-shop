import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  button: {
    border: 0,
    borderRadius: 6,
    backgroundColor: '$gray800',
    color: '$grayIcon',
    padding: '0.75rem',
    cursor: 'pointer',
    position: 'relative',

    '&:hover': {
      svg: {
        color: '$green500',
      },
    },

    '&.full': {
      color: '$gray300',
    },

    span: {
      content: '',
      position: 'absolute',
      top: '-0.875rem',
      right: 0,
      width: 24,
      height: 24,
      backgroundColor: '$green500',
      color: '$gray100',
      borderRadius: '50%',
      border: 0,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  '.success': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

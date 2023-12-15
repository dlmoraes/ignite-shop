import { styled } from '@/styles'

export const SidebarContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  maxWidth: 480,
  height: '100%',
  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',

  '&.open': {
    zIndex: 30,
  },

  '&.close': {
    zIndex: -1,
  },

  header: {
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'flex-end',

    button: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: '$gray100',
    },
  },
})

export const SidebarContent = styled('div', {
  padding: '1rem 3rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const SidebarItemContainer = styled('div', {
  display: 'flex',
  gap: '1rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    objectFit: 'cover',
  },

  'div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'start',
  },

  'span, p': {
    fontSize: '$md',
  },

  p: {
    fontWeight: 'bold',
  },

  button: {
    background: 'none',
    border: 0,
    fontSize: '1rem',
    color: '$green500',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const SidebarResumeContainer = styled('footer', {
  height: '100%',
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '0.437rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    'span:first-child': {
      fontSize: '1rem',
    },
    'span:last-child': {
      fontSize: '$md',
    },

    'strong:first-child': {
      fontSize: '$md',
    },
    strong: {
      fontSize: '$xl',
    },
  },

  button: {
    marginTop: '3.18rem',
    padding: '1.25rem 0',
    background: '$green500',
    borderRadius: 8,
    border: 0,
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})

export const EmptyCartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5rem',
  gap: '2rem',

  strong: {
    fontSize: '$2xl',
    maxWidth: 180,
    textAlign: 'center',
  },

  svg: {
    color: '$grayIcon',
  },
})

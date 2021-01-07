import styled from '@emotion/styled';

export const H1 = styled.h1(
  {
    color: 'darkgoldenrod',
    fontSize: 60
  },
  props => ({ color: props.color })
)

export const P = styled.p(
  {
    color: 'darkgreen',
    fontSize: 35
  },
  props => ({color: props.color})
)

export const FOOTER = styled.footer(
  {
    color: 'cyan',
    fontSize: 20
},
props => ({color: props.color})
)
export const LI = styled.li(
  {
    backgroundColor: 'green',
    color: 'cyan',
    fontSize: 20
},
props => ({color: props.color})
)



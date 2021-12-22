import styled from 'styled-components'

export const Container = styled.div`
  color: #000;
  max-width:440px;
`

export const H3 = styled.h3`
  font-size: 64px;
  font-wieght: 600;
  line-height: 0.7;
  margin: 0;
  color: #fd1015;
`

export const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`

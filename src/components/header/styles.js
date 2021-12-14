import styled from 'styled-components'
import {Marginals} from "../../styles"

import {ReactComponent as LogoSVG} from './logo.svg'

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 360px;
  width: 100%;
`
export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;

  @media (max-width: 700px) {
    padding: 15px;
  }
`

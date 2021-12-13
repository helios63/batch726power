import styled from 'styled-components'

export const Image = styled.div.attrs(({$movedX, $movedY}) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`
  }
}))`
  background-image: url('/batch.jpeg');
  background-size: 800px 500px;
  width: 100px;
  height: 100px;
  background-position: ${({$initialX, $initialY}) => `-${$initialX * 100}px -${$initialY * 100}px`};
`

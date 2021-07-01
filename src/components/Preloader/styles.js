import styled, { keyframes } from 'styled-components'

const preloaderAnimation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const preloaderAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const preloaderAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const StyledPreloader = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  color: inherit;
`

export const StyledDot = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${preloaderAnimation1} 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: ${preloaderAnimation2} 0.6s infinite;
  }

  &:nth-child(3) {
    left: 32px;
    animation: ${preloaderAnimation2} 0.6s infinite;
  }

  &:nth-child(4) {
    left: 56px;
    animation: ${preloaderAnimation3} 0.6s infinite;
  }
`

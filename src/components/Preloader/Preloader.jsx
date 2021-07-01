import { StyledPreloader, StyledDot } from './styles'

export const Preloader = props => (
  <StyledPreloader {...props}>
    <StyledDot />
    <StyledDot />
    <StyledDot />
    <StyledDot />
  </StyledPreloader>
)

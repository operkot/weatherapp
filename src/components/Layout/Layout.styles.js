import styled from 'styled-components'

import { media } from 'styles/media.styles'
import {
  getBgColorByWeatherName,
  getTextColorByWeatherName,
} from 'utils/theme.utils'

export const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 1.25fr 1fr;
  height: 100%;
`

export const StyledLayoutMain = styled.main`
  padding: 1rem;
  background-color: ${({ variant }) => getBgColorByWeatherName(variant)};
  color: ${({ variant }) => getTextColorByWeatherName(variant)};
  transition: background-color 1s ease;

  ${media.sm`
    padding: 1rem calc(50vw - 320px);
  `}
`

export const StyledLayoutSide = styled.aside`
  padding: 1rem;
  background-color: #fcfbfa;

  ${media.sm`
    padding: 1rem calc(50vw - 320px);
  `}
`

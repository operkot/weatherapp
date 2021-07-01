import * as R from 'ramda'
import { css } from 'styled-components'

const sizes = {
  xxs: 375,
  xs: 567,
  sm: 768,
  md: 992,
  lg: 1200,
}

const createMedia = (acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `
  return acc
}

export const media = R.compose(R.reduce(createMedia, {}), R.keys)(sizes)

import React from 'react'

import {
  StyledLayout,
  StyledLayoutMain,
  StyledLayoutSide,
} from './Layout.styles'

export const Layout = ({ variant, children }) => (
  <StyledLayout>
    {React.Children.map(children, child =>
      React.cloneElement(child, { variant })
    )}
  </StyledLayout>
)

const LayoutMain = ({ children, variant }) => (
  <StyledLayoutMain variant={variant}>{children}</StyledLayoutMain>
)

const LayoutSide = ({ children }) => (
  <StyledLayoutSide>{children}</StyledLayoutSide>
)

Layout.Main = LayoutMain
Layout.Side = LayoutSide

import React from 'react'
import styled from 'styled-components'
import { SwapCard } from '@pancakeswap/uikit'

export const BodyWrapper = styled(SwapCard)`
  max-width: 436px;
  width: 100%;
  z-index: 1;
  display: grid;
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}

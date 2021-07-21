import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Route, useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Flex } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import Hero from './components/Hero'
import CurrentIfo from './CurrentIfo'
import PastIfo from './PastIfo'

const Ifos = () => {
  const { t } = useTranslation()
  const { path, url, isExact } = useRouteMatch()

  return (
    <>
      <Hero />
      <Container>
          <Flex justifyContent="center" alignItems="center" mb="32px">
          <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="subtle">
            <ButtonMenuItem>
              {t('All')}
            </ButtonMenuItem>
            <ButtonMenuItem>
              {t('Active')}
            </ButtonMenuItem>
            <ButtonMenuItem>
              {t('Upcoming')}
            </ButtonMenuItem>
          </ButtonMenu>
        </Flex>
        <PastIfo />
      </Container>
    </>
  )
}

export default Ifos
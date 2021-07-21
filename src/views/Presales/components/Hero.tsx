import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text, Button } from '@pancakeswap/uikit'
import Container from 'components/Layout/ContainerPresales'
import { useTranslation } from 'contexts/Localization'

const StyledHero = styled.div`
  padding-bottom: 20px;
  padding-top: 40px;
  text-align: center;
`

const CurtainBottom = styled.div`
  background-image: url('/images/curtain-bottom-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  background-repeat: repeat-x;
  background-size: contain;
  height: 20px;
`

const Title = styled.h1`
  color: #F4EFFF;
  font-size: 40px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <StyledHero>
        <Container style={{display: 'flex', justifyContent: 'space-between' }}>
          <Title>
            {t('Launchpad')}
          </Title>
          <Button>Create</Button>
        </Container>
      </StyledHero>
    </Box>
  )
}

export default Hero

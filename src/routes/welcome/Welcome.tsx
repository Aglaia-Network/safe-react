import { ReactElement } from 'react'
import { Button, Card, Title, Text } from '@gnosis.pm/safe-react-components'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'

import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import Link from 'src/components/layout/Link'
import { LOAD_SAFE_ROUTE, OPEN_SAFE_ROUTE } from 'src/routes/routes'

function Welcome(): ReactElement {
  return (
    <Page align="center">
      <Block>
        <Title size="md" strong>
          Welcome to Altruism.
        </Title>
        <Title size="xs">
          Altruism is a <b>decentralized application (dApp)</b> dedicated to Charities and Organizations.<br />It is a <b>multi-signature cryptocurrency interface wallet</b> based on the Gnosis-safe SDK (the most secure multi-signature wallet on the market). <br />The main goal of Altruism dApp is to provide a <b>secure, reliable and easy-to-use</b> interface for Charities and Organizations. <br /><br /> Here is how to get started:
        </Title>
        <Title size="md" strong>
          Co-built with charities, for charities.
        </Title>
        <Title size="xs">
          With this dApp, you will be able to:
          <ul>
            <li>manage and track donation history</li>
            <li>automatically convert cryptocurrency donations to fiat currency; </li>
            <li>match transactions with identified donors;</li>
            <li>generate and send tax receipts;</li>
          </ul>
          All of this, <b>with a single click.</b><br /><br />
          The best part? <b>It's 100% free</b>, and always will be...<br /><br />
          Start receiving and managing cryptocurrency donations with Altruism now!<br /><br />
          Start your journey with us: <Link target="_blank" to="https://aglaia.network/">Get certified here</Link>.
        </Title>
        {/* <CardsContainer>
          <StyledCard>
            
            <CardContentContainer>
              <Title size="sm" strong withoutMargin>
                Create Safe
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">Create a new Safe that is controlled by one or multiple owners.</Text>
                <Text size="xl">You will be required to pay a network fee for creating your new Safe.</Text>
              </CardDescriptionContainer>
              <Button size="lg" color="primary" variant="contained" component={Link} to={OPEN_SAFE_ROUTE}>
                <Text size="xl" color="white">
                  + Create new Safe
                </Text>
              </Button>
            </CardContentContainer>
            <Divider orientation="vertical" flexItem />
            <CardContentContainer>
              
              <Title size="sm" strong withoutMargin>
                Load Existing Safe
              </Title>
              <CardDescriptionContainer>
                <Text size="xl">
                  Already have a Safe or want to access it from a different device? Easily load your Safe using your
                  Safe address.
                </Text>
              </CardDescriptionContainer>
              <Button
                variant="bordered"
                iconType="safe"
                iconSize="sm"
                size="lg"
                color="secondary"
                component={Link}
                to={LOAD_SAFE_ROUTE}
              >
                <StyledButtonLabel size="xl" color="secondary">
                  Add existing Safe
                </StyledButtonLabel>
              </Button>
            </CardContentContainer>
          </StyledCard>
        </CardsContainer> */}
      </Block>
    </Page >
  )
}

export default Welcome

const CardsContainer = styled.div`
  display: flex;
  height: 300px;
  max-width: 850px;
`

const StyledCard = styled(Card)`
  display: flex;
  flex: 0 1 100%;
  padding: 0;
`

const CardContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
`

const StyledButtonLabel = styled(Text)`
  min-width: 130px;
`

const CardDescriptionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: auto;
`

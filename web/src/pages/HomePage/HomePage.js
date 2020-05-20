import { Link, routes } from '@redwoodjs/router'
import image from 'web/public/images/rocket.png'
import styled from 'styled-components'
import GamesCell from 'src/components/GamesCell'
import HomeLayout from 'src/layouts/HomeLayout'

const Container = styled.div`
  display: grid;
  grid-template-columns: 41% 60%;
  margin-top: 90px;
`

const HomePage = () => {
  return (
    <HomeLayout>
      <Container>
        <Link to={routes.newGame()}>
          <img alt="Rocket image" src={image} />
        </Link>
        <div>
          <GamesCell />
        </div>
      </Container>
    </HomeLayout>
  )
}

export default HomePage

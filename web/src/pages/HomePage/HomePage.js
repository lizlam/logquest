import image from 'web/public/images/rocket.png'
import styled from 'styled-components'
import GamesCell from 'src/components/GamesCell'
import HomeLayout from 'src/layouts/HomeLayout'

const Container = styled.div`
  display: grid;
  grid-template-columns: 41% 60%;
`

const HomePage = () => {
  return (
    <HomeLayout>
      <Container>
        <img alt="Rocket image" src={image} />
        <div>
          <h2>Games</h2>
          <GamesCell />
        </div>
      </Container>
    </HomeLayout>
  )
}

export default HomePage

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
        <img alt="Rocket image" src={image} />
        <div>
          <GamesCell />
        </div>
      </Container>
    </HomeLayout>
  )
}

export default HomePage

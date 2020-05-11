import image from 'web/public/images/rocket.png'
import styled from 'styled-components'
import GamesCell from 'src/components/GamesCell'

const Container = styled.div`
  display: grid;
  grid-template-columns: 41% 60%;
`

const HomePage = () => {
  return (
    <Container>
      <img alt="Rocket image" src={image} />
      <div>
        <h1>Log Quest</h1>
        <GamesCell />
      </div>
    </Container>
  )
}

export default HomePage

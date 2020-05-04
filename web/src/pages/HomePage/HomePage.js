import image from 'web/public/images/rocket.png'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const HomePage = () => {
  return (
    <Container>
      <img alt="Rocket image" src={image} />
      <h1>Log Quest</h1>
    </Container>
  )
}

export default HomePage

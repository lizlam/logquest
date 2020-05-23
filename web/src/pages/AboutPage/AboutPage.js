import HomeLayout from 'src/layouts/HomeLayout'
import image from 'web/public/images/rocket2.png'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  margin-top: 90px;
`
const StyledH1 = styled.h1`
  font-size: 80px;
`

const StyledP = styled.p`
  font-size: 50px;
`

const AboutPage = () => {
  return (
    <HomeLayout>
      <Container>
        <img alt="Rocket2 image" src={image} />
        <div>
          <StyledH1>About Log Quest</StyledH1>
          <StyledP>
            {' '}
            You can't judge a game with just one play. <br />
            <br />
            Log Quest is an app to help keep track the number of times you play
            your favorite (or not so favorite) board games. <br /> <br />
            It is built on the premise that you need to play a game at least{' '}
            <b>10</b> times before you can really decide if you like a game or
            not.
          </StyledP>
        </div>
      </Container>
    </HomeLayout>
  )
}

export default AboutPage

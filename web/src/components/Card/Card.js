import styled from 'styled-components'
import Microlink from '@microlink/react'

const Container = styled.div`
  background-color: rgb(206, 239, 254);
  color: steelblue;
  text-align: center;
  height: 20rem;
  width: 40rem;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`

const InnerDiv = styled.div`
  background-color: rgb(206, 239, 254);
  height: 15rem;
  width: 35rem;
  margin: 26px;
  padding: 10px;
  border: solid 3px white;
  border-radius: 10px;
`
const Card = (props) => {
  return (
    <Container>
      <InnerDiv>
        <h1>{props.title}</h1>
        <p>
          <Microlink url={props.bgglink} style={{ borderRadius: 'l0px' }} />
        </p>
      </InnerDiv>
    </Container>
  )
}

export default Card

import styled from 'styled-components'

const Container = styled.div`
  //background-color: cornsilk;
  background-color: rgb(206, 239, 254);
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
  margin: 10px;
  padding: 10px;
  border: solid 3px white;
  border-radius: 10px;

`
const Card = (props) => {
  return (
    <Container>
      <InnerDiv>
      <h2>{props.title}</h2>
      <p>{props.bgglink}</p>
      </InnerDiv>
    </Container>
  )
}

export default Card

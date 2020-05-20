import styled from 'styled-components'
import Microlink from '@microlink/react'

const Container = styled.div`
  background-color: rgb(206, 239, 254);
  color: steelblue;
  text-align: center;
  height: 17rem;
  width: 33rem;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`

const InnerDiv = styled.div`
  background-color: rgb(206, 239, 254);
  height: 12rem;
  width: 31rem;
  margin: 5px;
  padding: 10px;
  border: solid 3px white;
  border-radius: 10px;
`

const StyledMeter = styled.meter`
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
`

const StyledDiv = styled.div`
  margin-top: 10px;
`

const StyledMicrolink = styled(Microlink)`
  max-width: 100%
  border-radius: 10px;
`

const Card = (props) => {
  console.log(props)
  return (
    <Container>
      <InnerDiv>
        <StyledMicrolink url={props.bgglink} />
        <StyledDiv>Total Plays: {props.completed} of 10</StyledDiv>
        <StyledMeter
          min={0}
          max={10}
          value={props.completed}
          optimum={'5'}
          high={'8'}
          low={'4'}
        ></StyledMeter>
      </InnerDiv>
    </Container>
  )
}

export default Card

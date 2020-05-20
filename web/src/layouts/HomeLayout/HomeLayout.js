import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: steelblue;
  color: white;
  z-index: 3;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const HomeLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar>
          <ul>
            <li>
              <StyledLink to={routes.home()}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={routes.about()}>About</StyledLink>
            </li>
          </ul>
        </Navbar>
      </header>
      {children}
    </>
  )
}

export default HomeLayout

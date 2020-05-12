import styled from 'styled-components'

const Navbar = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`;

const HomeLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>LogQuest</h1>
        <Navbar>
          <ul>
            <li> 
               Test
            </li>
          </ul> 
        </Navbar>
      </header> 
      {children} 
    </>
  )
}

export default HomeLayout

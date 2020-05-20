import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row; 
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: steelblue;
  color: white;
`;

const HomeLayout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar>
          <ul>
            <li> 
               Home 
            </li>
            <li>
               About 
            </li>
          </ul> 
        </Navbar>
      </header> 
      {children} 
    </>
  )
}

export default HomeLayout

import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #1D8BFA;
  padding: 20px;
  font-weight: bold;
  color: white;
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({title}) => {
  return ( 
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
}
 
export default Header;
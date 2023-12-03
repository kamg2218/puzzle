import React from "react";

import styled from "styled-components";

const Button = ({ label, handleClick }) => {
  return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  background: inherit;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 8rem;

  color: white;

  box-shadow: none;
  padding: 0.5rem 1rem;
  overflow: visible;
  cursor: pointer;
`;

export default Button;

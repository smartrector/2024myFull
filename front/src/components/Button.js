import React from "react";
import styled from "styled-components";

const ButtonWrap = styled.button`
  padding: 5px 16px;
  display: block;
  background: red;
  border-radius: 5px;
  color: white;
  &.text-button {
    background: white;
    border: 1px solid red;
    color: black;
  }
  &.small {
    font-size: 10px;
  }
`;

const TitleWrap = styled.h3`
  font-weight: bold;
  font-size: 2em;
`;

const ContentWrap = styled.section`
  font-size: 1em;
  color: red;
`;

function Button({children, textOnly, className, ...props}) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  return (
    <div>
      <ButtonWrap className={cssClasses} {...props}>
        {children}
      </ButtonWrap>
      <TitleWrap>test</TitleWrap>
      <ContentWrap>fdafdasfsa</ContentWrap>
    </div>
  );
}

export default Button;

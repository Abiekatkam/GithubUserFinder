import React from "react";
import styled from "styled-components";

function Card(props) {
  return <CardSection>{props.children}</CardSection>;
}

const CardSection = styled.section`
  max-width: 730px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media only screen and (max-width: 758px) {
    .card {
      max-width: 537px;
    }
  }

  @media only screen and (max-width: 568px) {
    .card {
      max-width: 327px;
      justify-content: flex-start;
      height: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    .card {
      padding: 1.8rem;
    }
  }
`;

export default Card;

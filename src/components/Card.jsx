import React from "react";
import PropTypes from "prop-types";
import { Flex, Heading } from "theme-ui";
import { Link } from "react-router-dom";

Card.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function Card(props) {
  const {
    background = "https://image.freepik.com/free-vector/colored-city-map-with-streets-park_23-2148318250.jpg",
    text = "text",
    link = "/",
    style = {},
  } = props;
  return (
    <Flex
      as={Link}
      to={link}
      css={`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 14px;
        min-height: 150px;
        align-items: center;
        justify-content: center;
        background: url(${background}) no-repeat center;
        background-size: cover;
        width: 100%;
        text-decoration: none;
      `}
      style={style}
      py={2}
      px={3}
      my={3}
    >
      <Heading>{text}</Heading>
    </Flex>
  );
}

export default Card;

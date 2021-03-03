import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Link } from "theme-ui";
import { Link as RouterLink } from "react-router-dom";
import Page from "../components/Page";
import Card from "../components/Card";
PageOne.propTypes = {};

function PageOne(props) {
  return (
    <Page>
      <Flex
        m={"0 auto"}
        css={`
          justify-content: center;
          align-items: center;
          flex-direction: column;
          max-width: 500px;
        `}
      >
        <Card
          background={
            "https://image.freepik.com/free-vector/colored-city-map-with-streets-park_23-2148318250.jpg"
          }
          link={"/routing"}
          text={"برو به نقشه"}
        />
        <Card
          background={
            "https://image.freepik.com/free-vector/maps-location-phone-cartoon-icon-illustration-transportation-technology-icon-concept-isolated-flat-cartoon-style_138676-2157.jpg"
          }
          link={"/search"}
          text={"برو به آدرس‌یاب"}
          style={{
            backgroundSize: "auto",
            backgroundPosition: "center",
            // backgroundOrigin: "top",
          }}
        />
      </Flex>
    </Page>
  );
}

export default PageOne;

import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";
import Nav from "./Nav";

Page.propTypes = {};

function Page(props) {
  const { children } = props;
  return (
    <>
      <Nav />
      <Box as={"main"} mx={"auto"} px={3}>
        {children}
      </Box>
    </>
  );
}

export default Page;

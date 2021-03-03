import React from "react";
import PropTypes from "prop-types";
import { Flex, Link } from "theme-ui";
import { Link as RouterLink } from "react-router-dom";
import routes from "../routes";

Nav.propTypes = {};

function Nav(props) {
  return (
    <Flex
      css={`
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
        //min-height: 80px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 14px;
        background-color: rgb(0, 119, 204);
        position: sticky;
        top: 0;
        z-index: 15;
      `}
      m={3}
      py={2}
      variant={"styles.header"}
    >
      {routes.map(({ path, label }) => (
        <Link
          css={`
            color: white;
            font-weight: bold;
            text-decoration: none;
          `}
          key={path}
          as={RouterLink}
          to={`/${path}`}
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          {label}
        </Link>
      ))}
    </Flex>
  );
}

export default Nav;

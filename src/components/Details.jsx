import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Text } from "theme-ui";

Details.propTypes = {};

function Details({ locationResult }) {
  return (
    <Box
      css={`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 14px;
        flex: 1;
      `}
      p={4}
      my={4}
      ml={2}
    >
      <Heading mb={3}>جزییات</Heading>
      <Box>
        {locationResult ? (
          <>
            <Box>
              <Text
                as={"p"}
                css={`
                  white-space: break-spaces;
                  line-height: 2em;
                `}
              >
                <Text
                  as={"span"}
                  css={`
                    font-weight: bold;
                  `}
                >
                  {"آدرس: "}
                </Text>
                {locationResult.address}
                {"\n"}
                <Text
                  as={"span"}
                  css={`
                    font-weight: bold;
                  `}
                >
                  {"استان: "}
                </Text>
                {locationResult.county}
                {"\n"}
                <Text
                  as={"span"}
                  css={`
                    font-weight: bold;
                  `}
                >
                  {"شهر: "}
                </Text>
                {locationResult.city}
                {"\n"}
                <Text
                  as={"span"}
                  css={`
                    font-weight: bold;
                  `}
                >
                  {"محله: "}
                </Text>
                {/*  u have two different spelling fix it*/}
                {locationResult.neighborhood || locationResult.neighbourhood}
              </Text>
            </Box>
          </>
        ) : null}
      </Box>
    </Box>
  );
}

export default Details;

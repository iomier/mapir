import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Flex, Input } from "theme-ui";

Search.propTypes = {};

function Search(props) {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const _handleChange = (e) => setTerm(e.target.value);
  const { _handleSubmit } = props;
  return (
    <Flex
      css={`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 14px;
        justify-items: center;
        align-items: center;
      `}
      as={"form"}
      onSubmit={(e) => _handleSubmit(e, term)}
    >
      <Input
        css={`
          border-radius: 0 14px 14px 0;
          border: none;
          font-family: Vazir;
        `}
        placeholder={"جستجو"}
        onChange={_handleChange}
      />
      <Button
        css={`
          border-radius: 14px 0 0 14px;
          //border: none;
          font-family: Vazir;
        `}
        type={"submit"}
        px={4}
      >
        جستجو
      </Button>
    </Flex>
  );
}

export default Search;

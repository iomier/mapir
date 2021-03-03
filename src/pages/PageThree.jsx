import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Input, Button, Box, Text, Spinner } from "theme-ui";
import Page from "../components/Page";
import axios from "axios";
import { apiKey } from "../shared/constants";
import Map from "../components/Map";
import Search from "../components/Search";
import Modal from "react-modal";
import Details from "../components/Details";

PageThree.propTypes = {};
const fetchSearch = async (text) => {
  const res = await axios.post(
    "https://map.ir/search/v2/autocomplete",
    {
      text,
    },
    {
      headers: {
        "x-api-key": apiKey,
        "content-type": "application/json",
      },
    }
  );
  return res.data.value;
};
//UID
function PageThree(props) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "592px",
    },
  };
  const _handleSubmit = async (e, term) => {
    e.preventDefault();
    setLoading(true);
    let data = await fetchSearch(term);
    setResult(data);
    setLoading(false);
  };
  const _handleModal = (entity) => {
    setCurrent(entity);
    setIsOpen(true);
  };
  return (
    <Page>
      <Search _handleSubmit={_handleSubmit} />
      {loading ? (
        <Flex
          css={`
            justify-content: center;
          `}
          mt={4}
        >
          <Spinner />
        </Flex>
      ) : (
        <Box
          css={`
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 14px;
          `}
          py={2}
          mt={3}
        >
          {result.length > 0 ? (
            result.map((entity) => (
              <Box as={"ul"}>
                <Text onClick={() => _handleModal(entity)} my={3} as={"li"}>
                  {entity.address}
                </Text>
              </Box>
            ))
          ) : (
            <Text p={2}>
              عبارت مورد نظر را برای جستجو در کادر بالا وارد کنید.
            </Text>
          )}
        </Box>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Map
          lng={current?.geom?.coordinates[0]}
          lat={current?.geom?.coordinates[1]}
          zoom={14}
          setters={{ setLocationResult: setCurrent }}
          containerOptions={{
            style: { width: "550px", height: "250px" },
          }}
        />
        <Details locationResult={current} />
      </Modal>
    </Page>
  );
}

export default PageThree;

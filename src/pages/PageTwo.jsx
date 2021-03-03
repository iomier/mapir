import React, { useState, useEffect, useRef, useCallback } from "react";
import Page from "../components/Page";
import { Box, Text, Heading, Flex } from "theme-ui";
import Map from "../components/Map";
import Details from "../components/Details";

PageTwo.propTypes = {};

function PageTwo(props) {
  //  Could be refactored to useReducer

  const [locationResult, setLocationResult] = useState({});
  return (
    <Page>
      <Map
        setters={{ setLocationResult }}
        containerOptions={{
          sx: { width: "auto !important" },
        }}
      />
      <Flex
        css={`
          align-items: stretch;
        `}
      >
        <Details locationResult={locationResult} />
        <Box
          css={`
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 14px;
            flex: 1;
          `}
          p={4}
          my={4}
          mr={2}
        >
          <Text>
            ما در مپ سرویس‌های تجاری نقشه رو در قالب API نقشه، بسته توسعه وب
            (map web sdk) و بسته‌های توسعه اپلیکیشن (android SDK و iOS SDK)
            ارائه می‌دیم. شما می‌تونین با استفاده از سرویس‌های نقشه مپ، به راحتی
            محصولات و پروژه‌های خودتون رو در بستر وب یا اپلیکیشن موبایل توسعه
            بدین و خیالتون راجع به کیفیت سرویس‌های نقشه هم راحت باشه. سرویس‌های
            نقشه مپ جایگزین مطمئنی برای google map api هست و شما به راحتی می
            تونین api‌های پیاده‌سازی شده در قالب restful api را درسرویس خودتون
            بجای google api استفاده کنین
          </Text>
        </Box>
      </Flex>
    </Page>
  );
}

export default PageTwo;

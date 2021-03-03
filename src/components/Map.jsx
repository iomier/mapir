import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "theme-ui";
import axios from "axios";
import { apiKey } from "../shared/constants";
import debounce from "lodash/debounce";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl/dist/svg/mapboxgl-ctrl-compass.svg";
import "mapbox-gl/dist/svg/mapboxgl-ctrl-geolocate.svg";
import "mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-in.svg";
import "mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-out.svg";

Map.propTypes = {};
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiaW9taWVyIiwiYSI6ImNrbHF3bTgzcTE2eXUycHFtaTk2YTdrbGcifQ.5eaRht-fizu4YSxikTC1_Q";
if (mapboxgl.getRTLTextPluginStatus() !== "loaded") {
  mapboxgl.setRTLTextPlugin(
    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js"
  );
}
function Map(props) {
  const { setters, containerOptions = {} } = props;
  const [lng, setLng] = useState(props.lng || 51.42047);
  const [lat, setLat] = useState(props.lat || 35.729054);
  const [zoom, setZoom] = useState(props.zoom || 12);
  const mapContainer = useRef(null);
  const delayedFnRef = useRef();
  const { setLocationResult = null } = setters;
  async function getLocationStatus() {
    try {
      const res = await axios.get(
        `https://map.ir/reverse/fast-reverse?lat=${lat}&lon=${lng}`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      setLocationResult && setLocationResult(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  delayedFnRef.current = getLocationStatus;
  // eslint-disable-next-line
  const delayedRequest = useCallback(
    debounce(() => delayedFnRef.current(), 300),
    []
  );
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: `https://map.ir/vector/styles/main/mapir-xyz-style.json?x-api-key=${apiKey}`,
      center: [lng, lat],
      zoom: zoom,
      transformRequest: (url, resourceType) => {
        return {
          url: url,
          headers: { "x-api-key": apiKey },
        };
      },
    });
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    map.on("click", (e) => {
      setLng(e.lngLat.lng.toFixed(4));
      setLat(e.lngLat.lat.toFixed(4));
    });
    return () => map.remove();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    delayedRequest();
    // eslint-disable-next-line
  }, [lat, lng]);
  return (
    <Box
      css={`
        position: relative;
        border-radius: 14px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      `}
      sx={{
        canvas: {
          borderRadius: "14px",
        },
      }}
    >
      <Box
        css={`
          border-top-left-radius: 14px;
          border-top-right-radius: 14px;
          position: absolute;
          width: 100%;
          top: 0;
          text-align: center;
          padding: 1em;
          background-color: rgba(0, 0, 0, 0.4);
          color: white;
          backdrop-filter: blur(5px);
          z-index: 14;
        `}
      >
        طول جغرافیایی: {lng} | عرض جفرافیایی: {lat} | بزرگنمایی: {zoom}
      </Box>
      <Box
        css={`
          width: 100%;
          height: 50vh;
        `}
        ref={mapContainer}
        {...containerOptions}
      />
    </Box>
  );
}

export default Map;

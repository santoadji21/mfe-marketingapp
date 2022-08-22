import { mount as MarketingMount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef();
  useEffect(() => {
    MarketingMount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

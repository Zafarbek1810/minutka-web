import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AnimatedBannerTextWrapper } from "./AnimatedBannerText.style";
import MBannerItem from "./MBannerItem";

const AnimatedBannerText = () => {
  const [activeBanner, setBanner] = useState(0);

  const slideNext = () => {
    setBanner((p) => (p === 1 ? 0 : p + 1));
  };

  useEffect(() => {
    const removeFn = setInterval(() => {
      slideNext();
    }, 5000);

    return () => clearInterval(removeFn);
  }, []);

  return (
    <AnimatedBannerTextWrapper>
      <div className="banner-text">
        <AnimatePresence mode='wait'>
          {activeBanner === 0 && <MBannerItem item={0} key={0} />}
          {activeBanner === 1 && <MBannerItem item={1} key={1} />}
        </AnimatePresence>
      </div>
    </AnimatedBannerTextWrapper>
  );
};

export default AnimatedBannerText;

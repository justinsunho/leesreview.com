import React from "react";
import { SmallCaps } from "components/atoms";
import * as styles from "./styles.module.scss";

const Info = ({
  address,
  isInHeader,
  className,
  smallCapsClass,
  darkSmallCapsClass,
}) => {
  // If the info is in the header, render the info in a darker gray color. Otherwise, return with regular smallCapsClass styling.
  if (isInHeader) {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <SmallCaps className={darkSmallCapsClass}>
          Phone: (909) 612-5700
        </SmallCaps>
        <SmallCaps className={darkSmallCapsClass}>
          Email: info@leesreview.com
        </SmallCaps>
      </div>
    );
  }
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <SmallCaps className={smallCapsClass}>Phone: (909) 612-5700</SmallCaps>
      <SmallCaps className={smallCapsClass}>
        Email: info@leesreview.com
      </SmallCaps>

      {address && (
        <SmallCaps className={smallCapsClass}>
          Address: 2040 Brea Canyon Road, Diamond Bar, CA.
        </SmallCaps>
      )}
    </div>
  );
};

export default Info;

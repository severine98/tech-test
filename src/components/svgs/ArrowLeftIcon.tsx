import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.363 20.736a.9.9 0 1 0 1.273-1.272L6.073 12.9H20.1a.9.9 0 1 0 0-1.8H6.071l6.565-6.565a.9.9 0 1 0-1.273-1.272l-8.1 8.1a.9.9 0 0 0 .02 1.292l8.08 8.08Z"
      fill="#867D7B"
    />
  </Svg>
);

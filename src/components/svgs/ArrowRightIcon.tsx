import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.637 21.236a.9.9 0 1 1-1.273-1.272l6.563-6.563H3.9a.9.9 0 1 1 0-1.8h14.029l-6.565-6.565a.9.9 0 1 1 1.273-1.272l8.1 8.1a.9.9 0 0 1-.02 1.292l-8.08 8.08Z"
      fill="#fff"
    />
  </Svg>
);

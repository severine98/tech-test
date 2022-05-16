import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BookIcon = (props: SvgProps) => (
  <Svg width={23} height={20} fill="none" {...props}>
    <Path
      d="M1 1h6.103c1.08 0 2.115.421 2.878 1.172A3.966 3.966 0 0 1 11.172 5v14c0-.796-.321-1.559-.893-2.121A3.079 3.079 0 0 0 8.12 16H1V1ZM21.344 1h-6.103c-1.08 0-2.114.421-2.877 1.172A3.966 3.966 0 0 0 11.172 5v14c0-.796.321-1.559.894-2.121A3.079 3.079 0 0 1 14.224 16h7.12V1Z"
      stroke={"#45403F"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { BookIcon };

import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BookIcon = (props: SvgProps) => (
  <Svg width={26} height={24} fill="none" {...props}>
    <Path
      d="M1 1h7.02a4.58 4.58 0 0 1 3.31 1.432 5.002 5.002 0 0 1 1.37 3.457V23c0-.973-.37-1.905-1.028-2.593a3.435 3.435 0 0 0-2.482-1.074H1V1Z"
      stroke={props.stroke ?? "#000000"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24.4 1h-7.02a4.58 4.58 0 0 0-3.31 1.432 5.002 5.002 0 0 0-1.37 3.457V23c0-.973.369-1.905 1.027-2.593a3.435 3.435 0 0 1 2.482-1.074h8.19V1Z"
      stroke={props.stroke ?? "#000000"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { BookIcon };

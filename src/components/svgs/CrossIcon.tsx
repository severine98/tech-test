import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export const CrossIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#1D1917">
      <Path d="M4.937 4.929a1 1 0 0 1 1.414 0L19.08 17.657a1 1 0 1 1-1.414 1.414L4.937 6.343a1 1 0 0 1 0-1.414Z" />
      <Path d="M4.937 19.071a1 1 0 0 1 0-1.414L17.665 4.929a1 1 0 1 1 1.414 1.414L6.351 19.071a1 1 0 0 1-1.414 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

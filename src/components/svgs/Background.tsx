import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Circle,
  Ellipse,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
  ClipPath,
} from "react-native-svg";

export const Background = (props: SvgProps) => (
  <Svg width={332} height={580} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M6 1h320v568H6z" />
      <G>
        <Circle
          r={108}
          transform="matrix(-1 0 0 1 304 156)"
          fill="url(#d)"
          fillOpacity={0.6}
        />
      </G>
      <G>
        <Ellipse
          rx={120}
          ry={128.5}
          transform="matrix(-1 0 0 1 186 12.5)"
          fill="url(#f)"
        />
      </G>
      <G>
        <Ellipse
          rx={282}
          ry={357.5}
          transform="matrix(1 0 0 -1 168 281.5)"
          fill="url(#h)"
          fillOpacity={0.3}
        />
      </G>
      <G>
        <Ellipse
          rx={84.263}
          ry={101.481}
          transform="scale(1 -1) rotate(-10.645 -2457.522 -659.646)"
          fill="url(#j)"
          fillOpacity={0.2}
        />
      </G>
      <G>
        <Circle
          r={120.5}
          transform="matrix(-1 0 0 1 6.5 421.5)"
          fill="url(#l)"
          fillOpacity={0.2}
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(90 0 108) scale(108)"
      >
        <Stop stopColor="#FFD9B5" />
        <Stop offset={1} stopColor="#F1E7AF" />
      </RadialGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(78.976 36.673 221.935) scale(491.571 160.556)"
      >
        <Stop stopColor="#F4F2EF" />
        <Stop offset={1} stopColor="#FFD9B5" />
      </RadialGradient>
      <RadialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 101.481 -191.8 0 84.263 101.481)"
      >
        <Stop stopColor="#CFD2F5" />
        <Stop offset={1} stopColor="#F1E7AF" />
      </RadialGradient>
      <RadialGradient
        id="l"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(90 0 120.5) scale(120.5)"
      >
        <Stop stopColor="#F1E7AF" />
        <Stop offset={1} stopColor="#CEECD9" />
      </RadialGradient>
      <LinearGradient
        id="f"
        x1={120}
        y1={0}
        x2={120}
        y2={257}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F4BDA7" stopOpacity={0} />
        <Stop offset={1} stopColor="#F1E7AF" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(6 1)" d="M0 0h320v568H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

import { isLargePhone, isSmallPhone } from "./dimensions";

const adjFactor = isSmallPhone ? 0.75 : isLargePhone ? 1.1 : 1;
const base = 24 * adjFactor;

export const spacing = {
  tiniest: 4 * adjFactor,
  tiny: 6 * adjFactor,
  small: 12 * adjFactor,
  baseSmall: 18 * adjFactor,
  base,
  baseMedium: 30 * adjFactor,
  baseLarge: 36 * adjFactor,
  large: 48 * adjFactor,
  huge: 60 * adjFactor,
};

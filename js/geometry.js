import { PAN_RADIUS } from './constants.js';
import { RELATIVE_PK_RADII } from './data.js';

export const getPKRadius = (npancakes) => {
  return RELATIVE_PK_RADII[npancakes] * PAN_RADIUS;
};

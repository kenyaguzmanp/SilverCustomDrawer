import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../theme';

const HamburguerMenuIcon = () => {
  return (
    <Svg width="30" height="30" fill="none" viewBox="0 0 24 24">
      <Path
        d="M4 18h16M4 12h16M4 6h16"
        stroke={colors.gray1}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default HamburguerMenuIcon;

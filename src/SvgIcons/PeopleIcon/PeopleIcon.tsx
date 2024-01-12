import React, { FC } from 'react';
import { Path, Svg } from 'react-native-svg';

interface PeopleIconProps {}

export const PeopleIcon: FC<PeopleIconProps> = () => {
  return (
    <Svg
      viewBox="0 0 32 32"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <Path d="M9.731 14.075A6.979 6.979 0 0 0 4 20.942v4.039a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4.039a6.979 6.979 0 0 0-5.731-6.867A7.004 7.004 0 0 0 16 3.958a7.004 7.004 0 0 0-6.269 10.117Zm11.169 1.88a6.974 6.974 0 0 1-4.9 2.003 6.974 6.974 0 0 1-4.9-2.003.966.966 0 0 1-.12.007A4.977 4.977 0 0 0 6 20.942v4.039a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4.039a4.98 4.98 0 0 0-4.98-4.98.966.966 0 0 1-.12-.007ZM16 5.958c2.76 0 5 2.241 5 5 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.759 2.24-5 5-5Z" />
    </Svg>
  );
};

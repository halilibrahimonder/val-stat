import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function DamageDistribituon({head, body, legs, ...props}) {
  return (
    <Svg
      height={50}
      width={50}
      viewBox="0 0 45 100"
      fill="none"
      stroke="gray"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}>
      <Path
        d="M30 7.416c0 4.179-3.358 8.977-7.5 8.977-4.142 0-7.5-4.798-7.5-8.977S18.358 0 22.5 0C26.642 0 30 3.237 30 7.416z"
        fill={head}
      />
      <Path
        d="M0 50.82l2.813 4.098 9.843-23.224 1.406 12.295 8.438 2.732 8.438-2.732 1.406-12.295 9.843 23.224L45 50.82l-8.438-30.055-7.812-2.732-2.5 1.64-3.75 1.639-3.75-1.64-2.5-1.639-7.813 2.732L0 50.82z"
        fill={body}
      />
      <Path
        d="M22.5 50.302l-8.5-2.76-5.667 48.77 4.25 3.688L22.5 59.966 32.417 100l4.25-3.689L31 47.541l-8.5 2.761z"
        fill={legs}
      />
    </Svg>
  );
}

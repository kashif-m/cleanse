import React from 'react'
import {Svg, Path, G, Defs, ClipPath, Circle, Rect} from 'react-native-svg'

export default function ProfileIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{isolation: 'isolate'}} viewBox="0 0 50 62.171" width={50} height="62.171" {...props}>
      <Defs>
        <ClipPath id="_clipPath_N7A79L8VV77rlNQMhsGOEumGd3TVqRDe">
          <Rect width={50} height="62.171" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#_clipPath_N7A79L8VV77rlNQMhsGOEumGd3TVqRDe)">
        <Path d=" M 42.857 55.029 M 0 55.029 C 0 48.4 2.629 42.036 7.321 37.35 C 12.007 32.664 18.371 30.029 25 30.029 C 31.629 30.029 37.993 32.664 42.679 37.35 C 47.371 42.036 50 48.4 50 55.029 C 50 56.921 49.243 58.743 47.907 60.079 C 46.571 61.421 44.75 62.171 42.857 62.171 L 7.143 62.171 C 5.25 62.171 3.429 61.421 2.093 60.079 C 0.757 58.743 0 56.921 0 55.029 Z " fillRule="evenodd" fill="rgb(0,0,0)" />
        <Circle vectorEffect="non-scaling-stroke" cx="25.000000000000014" cy={14} r="14.000000000000002" fill="rgb(0,0,0)" />
      </G>
    </Svg>
  );
}

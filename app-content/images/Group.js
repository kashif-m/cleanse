import React from 'react'
import {Svg, Defs, ClipPath, G, Path, Rect} from 'react-native-svg'

export default function Group(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{isolation: 'isolate'}} viewBox="0 0 50 50" width={50} height={50} {...props}>
      <Defs>
        <ClipPath id="_clipPath_iv2GnpApRRldiI9UyDvqewnTmFXBcqXD">
          <Rect width={50} height={50} />
        </ClipPath>
      </Defs>
      <G clipPath="url(#_clipPath_iv2GnpApRRldiI9UyDvqewnTmFXBcqXD)">
        <Path d=" M 25 0 C 11.188 0 0 11.188 0 25 C 0 38.8 11.188 50 25 50 C 38.813 50 50 38.8 50 25 C 50 11.188 38.813 0 25 0 Z  M 15 38.75 C 11.55 38.75 8.75 35.95 8.75 32.5 C 8.75 29.05 11.55 26.25 15 26.25 C 18.45 26.25 21.25 29.05 21.25 32.5 C 21.25 35.95 18.45 38.75 15 38.75 Z  M 18.75 15 C 18.75 11.55 21.55 8.75 25 8.75 C 28.45 8.75 31.25 11.55 31.25 15 C 31.25 18.45 28.45 21.25 25 21.25 C 21.55 21.25 18.75 18.45 18.75 15 Z  M 35 38.75 C 31.55 38.75 28.75 35.95 28.75 32.5 C 28.75 29.05 31.55 26.25 35 26.25 C 38.45 26.25 41.25 29.05 41.25 32.5 C 41.25 35.95 38.45 38.75 35 38.75 Z " fill="rgb(0,0,0)" />
      </G>
    </Svg>
  )
}

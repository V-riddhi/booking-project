/* import { Dimensions,Platform,PixelRatio } from "react-native";

const {width:SCREEN_WIDTH} = Dimensions.get("window");

const scale = SCREEN_WIDTH / 360;

export function pixelNormalize(size) {
    const newSize = size* scale;
    if(Platform.OS === "ios"){
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }else{
        Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

 */

import { PixelRatio, Platform, Dimensions } from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get("window");

// scale = SCREEN_WIDTH / 360;

export function pixelNormalize(size) {
  const scale = PixelRatio.get();
//   scale = SCREEN_WIDTH / 360;
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else if (Platform.OS === 'android') {
    // You should return the rounded value here
    return Math.round(newSize);
  }

  // If the platform is neither iOS nor Android, you might want to handle it differently.
  // You can add additional logic or fallback behavior as needed.
  return size;
}

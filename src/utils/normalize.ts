import { PixelRatio } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants';

const scale = DEVICE_WIDTH / 402;
const scaleHeight = DEVICE_HEIGHT / 874;

const normalize = (size: number, forHeight?: boolean): number => {
   const newSize = size * (forHeight ? scaleHeight : scale);
   return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default normalize;

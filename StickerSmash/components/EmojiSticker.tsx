import { ImageSourcePropType, View } from 'react-native';
import Animated from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
     const scaleImage = useSharedValue(imageSize);
     const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2);
    }
  });
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );    
}
Para u
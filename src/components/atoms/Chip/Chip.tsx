import useDimensions from '@hooks/useDimensions';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';

interface ChipProps {
  fontColor: string;
  color: string;
}

function Chip({fontColor, color}: ChipProps) {
  const {width, height} = useDimensions();

  const widthChip = width * 0.27;
  const heightChip = widthChip * 0.367;

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{width: widthChip, height: heightChip}}></View>
    </TouchableOpacity>
  );
}

export default Chip;

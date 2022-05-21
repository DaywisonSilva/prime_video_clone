import {COLORS} from '@themes/default';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Download} from 'react-native-feather';

interface IconButtonProps {
  label?: string;
  icon: string;
}
function IconButton({label, icon}: IconButtonProps) {
  return (
    <TouchableOpacity>
      <Download stroke={COLORS.darkBlueThird} width={100} height={100} />
      {label && <Text>{label}</Text>}
    </TouchableOpacity>
  );
}

export default IconButton;

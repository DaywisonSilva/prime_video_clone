import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StyledTab, StyledTabText} from './Tab.styled';

interface TabProps {
  children: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
}

function Tab({children, selected = false, onPress}: TabProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <StyledTab selected={selected}>
        <StyledTabText selected={selected}>{children}</StyledTabText>
      </StyledTab>
    </TouchableOpacity>
  );
}

export default Tab;

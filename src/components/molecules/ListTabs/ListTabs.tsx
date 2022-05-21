import Tab from '@components/atoms/Tab';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {StyledListTabs} from './ListTabs.styled';

interface ListTabsProps {
  list: Array<string>;
}

function ListTabs({list}: ListTabsProps) {
  const cloneList = list.map((item, index) => ({
    item,
    selected: index === 0 ? true : false
  }));

  const [listWithSelected, setListWithSelected] = useState(cloneList);

  const setSelected = (index: number) => {
    const cloneListSelected = listWithSelected.map(item => ({
      ...item,
      selected: false
    }));
    cloneListSelected[index].selected = true;

    setListWithSelected(cloneListSelected);
  };

  return (
    <StyledListTabs horizontal showsHorizontalScrollIndicator={false}>
      {list.map((item, index) => {
        return (
          <View key={index} style={{marginLeft: index === 0 ? 24 : 12}}>
            <Tab
              onPress={() => setSelected(index)}
              selected={listWithSelected[index].selected}>
              {item}
            </Tab>
          </View>
        );
      })}
    </StyledListTabs>
  );
}

export default ListTabs;

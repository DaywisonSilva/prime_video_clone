import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');

const StyledDownload = styled.ScrollView`
  flex: 1;
`;

const StyledTitleContainer = styled.View`
  margin-top: ${height * 0.043}px;
  margin-left: 24px;
`;

export {StyledDownload, StyledTitleContainer};

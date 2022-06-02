import {Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('screen');

const StyledOfflineContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  padding: ${height * 0.04}px 33px 0 33px;
`;

const StyledSubtitleOffline = styled.Text`
  color: ${props => props.theme.textColor};
  font-size: ${RFPercentage(2)}px;
  font-family: ${props => props.theme.fontFamilyMd};
  margin-top: 2px;
`;

const StyledOffilineContainerTitle = styled.View`
  /* display: flex; */
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledContainerOfflineImage = styled.View`
  position: relative;
`;

const StyledOfflineImage = styled.Image`
  width: ${width * 0.46}px;
  height: ${width * 0.46 * 1.5}px;
  border-radius: 12px;
  margin: ${height * 0.04}px auto 0 auto;
`;

export {
  StyledOfflineContainer,
  StyledSubtitleOffline,
  StyledOffilineContainerTitle,
  StyledContainerOfflineImage,
  StyledOfflineImage
};

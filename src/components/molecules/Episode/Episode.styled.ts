import {COLORS} from '@themes/default';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

interface TextProps {
  fontSize: number;
}

const StyledEpisode = styled.View`
  margin-bottom: 30px;
  flex-direction: row;
  padding: 0 30px;
`;

const StyledImageEpisode = styled.Image`
  width: ${width * 0.398}px;
  height: ${width * 0.398 * 0.56}px;
  border-radius: 8px;
  margin-right: 17px;
`;

const StyledEpisodeGroup = styled.View`
  width: ${width * 0.398}px;
  justify-content: space-between;
  padding: 5px 0;
`;

const StyledEpisodeText = styled.Text<TextProps>`
  color: ${COLORS.white};
  font-size: ${props => props.fontSize}px;
  font-family: ${props => props.theme.fontFamily};
`;

const StyledEpisodeTitle = styled.Text<TextProps>`
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamilyMd};
  font-size: ${props => props.fontSize}px;
`;

const StyledEpisodeDuration = styled.Text`
  color: ${COLORS.whiteBlue};
  font-weight: bold;
  font-family: ${props => props.theme.fontFamilyMd};
  margin-top: 5px;
`;

export {
  StyledEpisode,
  StyledImageEpisode,
  StyledEpisodeGroup,
  StyledEpisodeText,
  StyledEpisodeTitle,
  StyledEpisodeDuration
};

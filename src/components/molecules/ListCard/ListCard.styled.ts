import {COLORS} from '@themes/default';
import styled from 'styled-components/native';

interface TextProps {
  fontSize: number;
}

interface ContainerProps {
  children: React.ReactNode;
}

const StyledLabelContainer = styled.View<ContainerProps>`
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 12px;
  margin-top: 8px;
`;

const StyledLabel = styled.Text<TextProps>`
  color: ${COLORS.darkBlueThird};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.fontSize}px;
`;
const StyledLabelEmphasis = styled.Text<TextProps>`
  color: ${COLORS.whiteBlue};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.fontSize}px;
  margin-left: 5px;
`;

export {StyledLabel, StyledLabelEmphasis, StyledLabelContainer};

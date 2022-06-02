import {COLORS} from '@themes/default';
import styled from 'styled-components/native';

interface StyledTitleContainerProps {
  fontSize: number;
}

const StyledTitleContainer = styled.Text<StyledTitleContainerProps>`
  font-size: ${props => props.fontSize}px;
  color: ${COLORS.white};
  font-family: ${props => props.theme.fontFamily};
`;

export {StyledTitleContainer};

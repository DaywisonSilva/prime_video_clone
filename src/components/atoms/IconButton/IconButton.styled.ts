import styled from 'styled-components/native';

interface StyledIconButtonTextProps {
  fontSize: number;
}

const StyledIconButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const StyledIconButtonText = styled.Text<StyledIconButtonTextProps>`
  color: ${props => props.theme.textColor};
  margin-left: 6px;
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
`;

export {StyledIconButton, StyledIconButtonText};

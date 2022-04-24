import styled from 'styled-components/native';

interface StyledLogoTextProps {
  color: string;
  fontSize: number;
}

const StyledLogoText = styled.Text<StyledLogoTextProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: 'AmazonEmberDisplay-Bd';
  text-align: center;
`;

export default StyledLogoText;

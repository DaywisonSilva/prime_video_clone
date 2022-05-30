import styled from 'styled-components/native';

type StyledCardContainerProps = {
  width: number;
  height: number;
  show: boolean;
};

const StyledCardContainer = styled.View<StyledCardContainerProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: ${props => (props.show ? 'flex' : 'none')};
  overflow: hidden;
  border-radius: 20px;
`;

export {StyledCardContainer};

import styled from 'styled-components/native';

const StyledSkeletonView = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const StyledHomeView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;

export {StyledSkeletonView, StyledHomeView};

import styled from 'styled-components/native';

const StyledSkeletonSafeAreaView = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const StyledHomeSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
`;

export {StyledSkeletonSafeAreaView, StyledHomeSafeAreaView};

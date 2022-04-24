import {useState} from 'react';
import {Dimensions} from 'react-native';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('screen'));

  Dimensions.addEventListener('change', dimensions =>
    setDimensions(dimensions.screen),
  );
  return {...dimensions};
};

export default useDimensions;

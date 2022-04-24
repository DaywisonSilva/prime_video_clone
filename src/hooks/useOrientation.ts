import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const [orientation, setOrientation] = useState('');
  const [dimensions, setDimensions] = useState(Dimensions.get('screen'));

  Dimensions.addEventListener('change', dimensions =>
    setDimensions(dimensions.screen),
  );

  useEffect(() => {
    if (dimensions.width > dimensions.height) setOrientation('horizontal');
    else setOrientation('portrait');
  }, [dimensions]);

  return orientation;
};

export default useOrientation;

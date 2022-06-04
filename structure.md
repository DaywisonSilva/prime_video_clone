# Structure

This document will be used to explain some rules about the import structure present in this project. Know some rules:

#

## Import order

```typescript
// hooks
import react, {useState} from 'react';

// components
import {Image, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// assets
import img from '@assets/img/img.jpg';

// utils
import {COLORS} from '@themes/default';

// types
type CardProps = ContentCard & {
  width: number;
  height: number;
  onPress: () => void;
};
```

#

`This project is configured with alias to resolve relative paths. PR's that used 2 or more levels of nesting will not be accept.`

#

## Alias

| alias       | path             |
| ----------- | ---------------- |
| @components | ./src/components |
| @assets     | ./src/assets     |
| @hooks      | ./src/hooks      |
| @utils      | ./src/utils      |
| @views      | ./src/views      |
| @routes     | ./src/routes     |
| @themes     | ./src/themes     |
| @api        | ./src/api        |

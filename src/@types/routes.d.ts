type RootStackParamList = {
  Home: {
    bannerCards: Array<Card>;
  };
  Loading: undefined;
  Content: {
    id: number;
    urlCover: string;
    episodes: Array<Episode>;
  };
};

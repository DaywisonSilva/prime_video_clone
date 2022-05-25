type RootStackParamList = {
  Home: {
    bannerCards: Array<Card>;
  };
  Loading: undefined;
  BottomTabs: {bannerCards: Array<Card>};
  Content: {
    id: number;
    urlCover: string;
    episodes: Array<Episode>;
  };
};

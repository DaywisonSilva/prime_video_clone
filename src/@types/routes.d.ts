type RootStackParamList = {
  Home: {
    bannerCards: Array<Card>;
    contentCards: Array<ContentCard>;
    channelCards: Array<ContentCard>;
  };
  Loading: undefined;
  BottomTabs: {
    bannerCards: Array<Card>;
    contentCards: Array<ContentCard>;
    channelCards: Array<ContentCard>;
  };
  Content: {
    id: number;
    urlCover: string;
    episodes: Array<Episode>;
  };
  Download: undefined;
  Offline: undefined;
};

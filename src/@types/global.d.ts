type Card = {
  id: number;
  name: string;
  url_card: string;
  url_cover: string;
  episodes: Array<Episode>;
};

type Episode = {
  episode: string;
  title: string;
  image: string;
  duration: string;
};

type ContentCard = {
  id: number;
  name: string;
  url_card: string;
  url_cover?: string;
  episodes?: Array<Episode>;
};

export type GameCardProps = {
  title: string;
  source: string;
  url: string;
  created_utc: number;
  reddit_url: string;
  img: string | null;
};

export type GamesProps = {
  games: Array<GameCardProps>;
};

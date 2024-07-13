export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: ReleaseDates;
  tail: string;
  type: string;
}

export interface ReleaseDates {
  au: string;
  eu: string;
  jp: string;
  na: string;
}

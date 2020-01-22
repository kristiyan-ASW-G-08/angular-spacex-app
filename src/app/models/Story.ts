export default interface Story {
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  flight_number: number;
  details: string;
  links: {
    reddit: null | string;
    article: null | string;
    wikipedia: null | string;
  };
}

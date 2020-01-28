export default interface Launch {
  flight_number: number;
  mission_name: string;
  launch_success: boolean;
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  upcoming: boolean;
  details: string;
  links: {
    [key: string]: string | string[];
  };
  launch_date_utc: number;
}

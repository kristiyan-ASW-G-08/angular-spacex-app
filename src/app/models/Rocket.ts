export default interface Launch {
  first_flight: string;
  country: string;
  company: string;
  active: boolean;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
}

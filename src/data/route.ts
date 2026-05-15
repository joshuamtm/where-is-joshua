export type Stop = {
  ordinal: number;
  time: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
  note: string;
  durationMin: number;
  /**
   * Quick, quintessentially-NYC things to do at this stop. 15–30 min each.
   * Optional; render as a small list below the note in the timeline.
   */
  bucketList?: string[];
};

export const stops: Stop[] = [
  {
    ordinal: 1,
    time: "9:00 AM",
    name: "Masseria Caffè",
    shortName: "Coffee start",
    lat: 40.7684962,
    lng: -73.9856429,
    note: "Strong espresso, no laptops. Pastries are real. Sets the tone before the food assault.",
    durationMin: 45,
    bucketList: [
      "Stand at the bar and have an espresso the Italian way",
      "Keep the laptop closed",
    ],
  },
  {
    ordinal: 2,
    time: "10:00 AM",
    name: "9th Ave Food Festival (north entry)",
    shortName: "Food Festival",
    lat: 40.767931,
    lng: -73.9857354,
    note: "Enter at 57th, graze south to 42nd. 51st year, mile-long. Don't fill up on the first three blocks.",
    durationMin: 90,
    bucketList: [
      "Try something from a vendor I've never seen before",
      "Fresh zeppole on the sidewalk",
      "Don't fill up before block four",
    ],
  },
  {
    ordinal: 3,
    time: "12:00 PM",
    name: "High Line (30th St entrance)",
    shortName: "High Line",
    lat: 40.7528349,
    lng: -74.0022969,
    note: "Walk south on the elevated park. Full bloom in mid-May.",
    durationMin: 45,
    bucketList: [
      "Find a city view I've never noticed before",
      "Sit on the 10th Ave overlook for 5 minutes",
    ],
  },
  {
    ordinal: 4,
    time: "12:45 PM",
    name: "Little Island",
    shortName: "Little Island",
    lat: 40.7420024,
    lng: -74.010299,
    note: "Hudson views, 15 minutes. Pier 55.",
    durationMin: 30,
    bucketList: [
      "Take a slow 360° at the top platform and count the bridges",
    ],
  },
  {
    ordinal: 5,
    time: "1:45 PM",
    name: "Caffè Reggio",
    shortName: "Village pit stop",
    lat: 40.7303079,
    lng: -74.0003706,
    note: "1927. America's first cappuccino machine is still on the bar. Sit, regroup.",
    durationMin: 45,
    bucketList: [
      "Order a real cappuccino at the 1927 bar",
      "Stay long enough to overhear someone arguing about a screenplay",
    ],
  },
  {
    ordinal: 6,
    time: "2:30 PM",
    name: "Washington Square Park",
    shortName: "Washington Sq",
    lat: 40.7308838,
    lng: -73.997332,
    note: "Cut through east. Pianist, chess, the usual.",
    durationMin: 20,
    bucketList: [
      "Lose two games of speed chess to a regular",
      "Tip a busker enough to feel slightly weird about it",
      "Walk under the arch slowly",
    ],
  },
  {
    ordinal: 7,
    time: "2:50 PM",
    name: "Astor Place & St Marks",
    shortName: "Catch the parade",
    lat: 40.7295384,
    lng: -73.9898709,
    note: "Parade turns east on St Marks. Fall in with the dancers for the final stretch.",
    durationMin: 25,
    bucketList: [
      "Give the Astor Place Cube a spin",
      "Buy something for under $5 from a St Marks vendor",
    ],
  },
  {
    ordinal: 8,
    time: "3:30 PM",
    name: "Tompkins Square Park (DanceFest)",
    shortName: "DanceFest",
    lat: 40.7264295,
    lng: -73.9817841,
    note: "Multiple stages, teaching stage, DJ area. 3–7 PM. The day's anchor.",
    durationMin: 150,
    bucketList: [
      "Dance with at least one stranger",
      "Stay for one full set on a stage I wandered into",
      "Find the dog run for 5 minutes",
    ],
  },
  {
    ordinal: 9,
    time: "6:15 PM",
    name: "Veselka",
    shortName: "Dinner",
    lat: 40.7290155,
    lng: -73.9871139,
    note: "Pierogies, borscht, latkes. Three blocks from Tompkins. Open 24h on Saturday.",
    durationMin: 75,
    bucketList: [
      "Order both pierogies AND borscht",
      "Sit in a booth long enough that someone tries to share it",
    ],
  },
];

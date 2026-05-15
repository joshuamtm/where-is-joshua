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
    name: "Grand Central Terminal",
    shortName: "Grand Central",
    lat: 40.7527,
    lng: -73.9772,
    note: "Start under the celestial ceiling. Quick coffee in the food court, then head north on Madison toward the park.",
    durationMin: 30,
    bucketList: [
      "Look up and find the orientation error in the ceiling mural",
      "Whisper to a friend across the Whispering Gallery archway",
    ],
  },
  {
    ordinal: 2,
    time: "9:45 AM",
    name: "Bethesda Terrace & Fountain",
    shortName: "Bethesda",
    lat: 40.7740,
    lng: -73.9712,
    note: "Enter at Grand Army Plaza, walk down the Mall, through the Bethesda arcade. Spring is doing its thing.",
    durationMin: 30,
    bucketList: [
      "Stand under the lower arcade and listen for a busker echo",
      "Find the Angel of the Waters",
    ],
  },
  {
    ordinal: 3,
    time: "10:30 AM",
    name: "Belvedere Castle",
    shortName: "Belvedere",
    lat: 40.7794,
    lng: -73.9692,
    note: "Through the Ramble to the castle. The best view in the park from the upper deck.",
    durationMin: 30,
    bucketList: [
      "Climb to the upper deck and pick out three landmarks south of the park",
    ],
  },
  {
    ordinal: 4,
    time: "11:30 AM",
    name: "Columbus Circle",
    shortName: "Columbus Circle",
    lat: 40.7681,
    lng: -73.9819,
    note: "Exit the park southwest. Slow lap around the fountain before heading south on 9th Ave.",
    durationMin: 15,
    bucketList: [
      "Find the USS Maine Monument and read the south face",
    ],
  },
  {
    ordinal: 5,
    time: "12:00 PM",
    name: "9th Ave Food Festival (north entry)",
    shortName: "Food Festival",
    lat: 40.7679,
    lng: -73.9857,
    note: "Enter at 57th, graze south to 42nd. 51st year, mile-long. Don't fill up on the first three blocks.",
    durationMin: 120,
    bucketList: [
      "Try something from a vendor I've never seen before",
      "Fresh zeppole on the sidewalk",
      "Don't fill up before block four",
    ],
  },
  {
    ordinal: 6,
    time: "2:15 PM",
    name: "High Line (30th St entrance)",
    shortName: "High Line",
    lat: 40.7528,
    lng: -74.0023,
    note: "Walk south on the elevated park. Full bloom in mid-May.",
    durationMin: 45,
    bucketList: [
      "Find a city view I've never noticed before",
      "Sit on the 10th Ave overlook for 5 minutes",
    ],
  },
  {
    ordinal: 7,
    time: "3:00 PM",
    name: "Little Island",
    shortName: "Little Island",
    lat: 40.7420,
    lng: -74.0103,
    note: "Hudson views, 15–20 minutes. Pier 55.",
    durationMin: 25,
    bucketList: [
      "Take a slow 360° at the top platform and count the bridges",
    ],
  },
  {
    ordinal: 8,
    time: "3:45 PM",
    name: "Caffè Reggio",
    shortName: "Village pit stop",
    lat: 40.7303,
    lng: -74.0004,
    note: "1927. America's first cappuccino machine is still on the bar. Sit, regroup.",
    durationMin: 30,
    bucketList: [
      "Order a real cappuccino at the 1927 bar",
      "Stay long enough to overhear someone arguing about a screenplay",
    ],
  },
  {
    ordinal: 9,
    time: "4:30 PM",
    name: "Washington Square Park",
    shortName: "Washington Sq",
    lat: 40.7309,
    lng: -73.9973,
    note: "Find a chess hustler. Sit at the fountain. The afternoon pause before DanceFest.",
    durationMin: 45,
    bucketList: [
      "Lose two games of speed chess to a regular",
      "Tip a busker enough to feel slightly weird about it",
      "Walk under the arch slowly",
    ],
  },
  {
    ordinal: 10,
    time: "5:30 PM",
    name: "Astor Place & St Marks",
    shortName: "St Marks",
    lat: 40.7295,
    lng: -73.9899,
    note: "Cube spin. Down St Marks toward Tompkins.",
    durationMin: 25,
    bucketList: [
      "Give the Astor Place Cube a spin",
      "Buy something for under $5 from a St Marks vendor",
    ],
  },
  {
    ordinal: 11,
    time: "6:00 PM",
    name: "Tompkins Square Park (DanceFest)",
    shortName: "DanceFest",
    lat: 40.7264,
    lng: -73.9818,
    note: "Catch the last hour of DanceFest. Multiple stages until 7 PM. The day's evening anchor.",
    durationMin: 75,
    bucketList: [
      "Dance with at least one stranger",
      "Stay for one full set on a stage I wandered into",
      "Find the dog run for 5 minutes",
    ],
  },
  {
    ordinal: 12,
    time: "7:30 PM",
    name: "Veselka",
    shortName: "Dinner",
    lat: 40.7290,
    lng: -73.9871,
    note: "Pierogies, borscht, latkes. Three blocks from Tompkins. Open 24h on Saturday.",
    durationMin: 75,
    bucketList: [
      "Order both pierogies AND borscht",
      "Sit in a booth long enough that someone tries to share it",
    ],
  },
];

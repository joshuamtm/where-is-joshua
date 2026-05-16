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
    time: "10:00 AM",
    name: "Grand Central Terminal",
    shortName: "Grand Central",
    lat: 40.7527,
    lng: -73.9772,
    note: "Start under the celestial ceiling. Quick coffee in the food court, then head north on Madison toward the park.",
    durationMin: 30,
    bucketList: [
      "Look up and find the orientation error in the celestial ceiling mural",
      "Locate the \"dirty\" rectangle the restorers left in the ceiling and salute it",
      "Order a coffee using milk-and-sugar shorthand from at least four countries before landing on \"light and sweet\" for New York (flat white → Australia, café au lait → France, cortado → Spain, melange → Austria, then: \"light and sweet\")",
    ],
  },
  {
    ordinal: 2,
    time: "10:45 AM",
    name: "Bethesda Terrace & Fountain",
    shortName: "Bethesda",
    lat: 40.7740,
    lng: -73.9712,
    note: "Enter at Grand Army Plaza, walk down the Mall, through the Bethesda arcade. Spring is doing its thing.",
    durationMin: 30,
    bucketList: [
      "Stand under the lower arcade and listen for a busker echo",
      "Hum one sustained note under the arcade and briefly become the busker",
      "Propose marriage to a stranger under the arcade; accept ANY counteroffer",
    ],
  },
  {
    ordinal: 3,
    time: "11:30 AM",
    name: "Belvedere Castle",
    shortName: "Belvedere",
    lat: 40.7794,
    lng: -73.9692,
    note: "Through the Ramble to the castle. The best view in the park from the upper deck.",
    durationMin: 30,
    bucketList: [
      "Climb to the upper deck and pick out three landmarks south of the park",
      "Point at three landmarks and confidently misname two of them",
      "Declare a minor war on a landmark south of the park, then sue for peace before lunch",
    ],
  },
  {
    ordinal: 4,
    time: "12:30 PM",
    name: "Columbus Circle",
    shortName: "Columbus Circle",
    lat: 40.7681,
    lng: -73.9819,
    note: "Exit the park southwest. Slow lap around the fountain before heading south on 9th Ave.",
    durationMin: 15,
    bucketList: [
      "Find the USS Maine Monument and read the south face",
      "Read the inscription aloud as if delivering a wedding toast",
      "Lap the fountain counterclockwise to spite Columbus personally",
    ],
  },
  {
    ordinal: 5,
    time: "1:00 PM",
    name: "9th Ave Food Festival (north entry)",
    shortName: "Food Festival",
    lat: 40.7679,
    lng: -73.9857,
    note: "Enter at 57th, graze south to 42nd. 51st year, mile-long. Don't fill up on the first three blocks.",
    durationMin: 120,
    bucketList: [
      "Try something from a vendor I've never seen before",
      "Eat something on a stick whose origin I cannot identify",
      "Get powdered sugar on at least one consenting stranger; document the exchange",
    ],
  },
  {
    ordinal: 6,
    time: "3:30 PM",
    name: "Pier 57 (Hudson River Park)",
    shortName: "Pier 57",
    lat: 40.7434,
    lng: -74.0103,
    note: "Walk south down Hudson River Park from the festival end. Market 57 food hall + rooftop park. Lunch + a sit-down rest before the long pivot east into the Village.",
    durationMin: 60,
    bucketList: [
      "Eat at a Market 57 stall I've never tried",
      "Take the rooftop staircase and look back at the route I just walked",
    ],
  },
  {
    ordinal: 7,
    time: "4:45 PM",
    name: "Washington Square Park (chess)",
    shortName: "Chess at the Square",
    lat: 40.7309,
    lng: -73.9973,
    note: "The real reason for this detour. Sit at the chess tables in the southwest corner, find a hustler, play. Leave by 5:45 to cab to Daredevil — don't get into a third game.",
    durationMin: 60,
    bucketList: [
      "Lose two games of speed chess to a regular",
      "Win one and immediately retire on the high note",
      "Watch one game between two hustlers and don't say a word",
    ],
  },
  {
    ordinal: 8,
    time: "6:00 PM",
    name: "Daredevil Tattoo",
    shortName: "Daredevil",
    lat: 40.7138,
    lng: -73.9919,
    note: "Booked appointment. 141 Division St, edge of LES and Chinatown. Cab from Washington Sq — ~10 min, much beats a 30-min walk on tired legs. Shop houses the NYC Tattoo History Museum: original flash from Samuel O'Reilly (patented the first electric tattoo machine), Bert Grimm, Cap Coleman.",
    durationMin: 90,
    bucketList: [
      "Walk the museum wall before the needle starts",
      "Pick out one piece of flash from the 1920s and silently apologize to my future self for not getting that one too",
      "Leave with at least one more story than I came in with",
    ],
  },
  {
    ordinal: 9,
    time: "7:45 PM",
    name: "Tompkins Square Park (DanceFest)",
    shortName: "DanceFest",
    lat: 40.7264,
    lng: -73.9818,
    note: "12-min walk north from Daredevil. Catch whatever's left of the post-DanceFest park energy, or just sit on a bench and feel the day. Last stop — home from here.",
    durationMin: 45,
    bucketList: [
      "Find a dog at the dog run that looks exactly like a person I know",
      "Sit on a bench long enough to watch one full conversation happen at the next bench over",
      "Start a slow clap that does not catch on",
    ],
  },
];

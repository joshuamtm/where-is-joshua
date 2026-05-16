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
    note: "Walk west from 42nd, then south through Hudson River Park to Pier 57. Market 57 food hall on the ground, rooftop park up top. The day's lunch + real-sit-down rest before the long pivot east.",
    durationMin: 90,
    bucketList: [
      "Eat at one of the Market 57 stalls I've never tried",
      "Take the rooftop staircase and look back at the route I just walked",
      "Sit long enough that a seagull commits to the bit and lands within striking distance",
    ],
  },
  {
    ordinal: 7,
    time: "5:15 PM",
    name: "Caffè Reggio",
    shortName: "Village pit stop",
    lat: 40.7303,
    lng: -74.0004,
    note: "1927. America's first cappuccino machine is still on the bar. Sit, regroup.",
    durationMin: 30,
    bucketList: [
      "Order a real cappuccino at the 1927 bar",
      "Audibly say '1927' before the first sip, like a vintage",
      "Eavesdrop on a screenplay argument, pick a side, and defend it to my tablemate as if I wrote it",
    ],
  },
  {
    ordinal: 8,
    time: "6:00 PM",
    name: "Washington Square Park",
    shortName: "Washington Sq",
    lat: 40.7309,
    lng: -73.9973,
    note: "Find a chess hustler. Sit at the fountain. The afternoon pause before DanceFest.",
    durationMin: 30,
    bucketList: [
      "Lose two games of speed chess to a regular",
      "Help at least two tourists lose their virginity (logistics: my problem)",
    ],
  },
  {
    ordinal: 9,
    time: "6:45 PM",
    name: "Astor Place & St Marks",
    shortName: "St Marks",
    lat: 40.7295,
    lng: -73.9899,
    note: "Cube spin. Down St Marks toward Tompkins.",
    durationMin: 20,
    bucketList: [
      "Give the Astor Place Cube a spin",
      "Buy something under $5 from a St Marks vendor that cannot legally be returned",
      "Make brief, confusing eye contact with at least three people in leather",
    ],
  },
  {
    ordinal: 10,
    time: "7:15 PM",
    name: "Tompkins Square Park (DanceFest)",
    shortName: "DanceFest",
    lat: 40.7264,
    lng: -73.9818,
    note: "Catch the tail end if anything's still running, or just absorb the post-fest park energy.",
    durationMin: 45,
    bucketList: [
      "Stay for one full set on a stage I wandered into",
      "Dance with a stranger using one signature move; commit until they leave",
      "Start a slow clap that does not catch on",
    ],
  },
  {
    ordinal: 11,
    time: "8:15 PM",
    name: "Veselka",
    shortName: "Dinner",
    lat: 40.7290,
    lng: -73.9871,
    note: "Pierogies, borscht, latkes. Three blocks from Tompkins. Open 24h on Saturday.",
    durationMin: 75,
    bucketList: [
      "Order both pierogies AND borscht",
      "Sit in a booth long enough that someone tries to share it",
      "Order a fourth thing I do not need, \"for the table\"",
    ],
  },
];

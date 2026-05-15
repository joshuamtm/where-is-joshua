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
      "Look up and find the orientation error in the celestial ceiling mural",
      "Locate the \"dirty\" rectangle the restorers left in the ceiling and salute it",
      "Order a coffee using milk-and-sugar shorthand from at least four countries before landing on \"light and sweet\" for New York (flat white → Australia, café au lait → France, cortado → Spain, melange → Austria, then: \"light and sweet\")",
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
      "Hum one sustained note under the arcade and briefly become the busker",
      "Propose marriage to a stranger under the arcade; accept their counteroffer",
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
      "Point at three landmarks and confidently misname two of them",
      "Declare a minor war on a landmark south of the park, then sue for peace before lunch",
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
      "Read the inscription aloud as if delivering a wedding toast",
      "Lap the fountain counterclockwise to spite Columbus personally",
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
      "Eat something on a stick whose origin I cannot identify",
      "Get powdered sugar on at least one consenting stranger; document the exchange",
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
      "Sit on the 10th Ave overlook for 5 minutes",
      "Identify one plant by a name I invent on the spot and defend it under questioning",
      "Stare at one window of one apartment long enough that the resident notices",
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
      "Miscount the bridges on purpose and argue with myself about it",
      "Tell one tourist this is where they filmed something. Don't specify what.",
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
      "Audibly say '1927' before the first sip, like a vintage",
      "Eavesdrop on a screenplay argument, pick a side, and defend it to my tablemate as if I wrote it",
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
      "Help at least two tourists lose their virginity (logistics: my problem)",
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
      "Buy something under $5 from a St Marks vendor that cannot legally be returned",
      "Make brief, confusing eye contact with at least three people in leather",
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
      "Stay for one full set on a stage I wandered into",
      "Dance with a stranger using one signature move; commit until they leave",
      "Start a slow clap that does not catch on",
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
      "Order a fourth thing I do not need, \"for the table\"",
    ],
  },
];

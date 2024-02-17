export const enum Group {
  SingleStroke,
  DrumRoll,
  Paradiddle,
  Flam,
  Drag,
}

export const enum Difficulty {
  Easy,
  Medium,
  Hard,
  Expert,
}

export type Reference = "fourtyDrumRudiments" | "vicFirth" | "drumeo";

export type RudimentMetadata = {
  file: string;
  group: Group;
  difficulty: Difficulty;
  links: Record<Reference, string>;
};

export const metadata: RudimentMetadata[] = [
  {
    file: "01_single_stroke_roll.ly",
    group: Group.SingleStroke,
    difficulty: Difficulty.Easy,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/single-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/essential-rudiments-single-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/single-stroke-roll/",
    },
  },
  {
    file: "02_single_stroke_four.ly",
    group: Group.SingleStroke,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/single-stroke-four/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/essential-snare-drum-rudiments-02-single-stroke-4/",
      drumeo: "https://www.drumeo.com/beat/single-stroke-four/",
    },
  },
  {
    file: "03_single_stroke_seven.ly",
    group: Group.SingleStroke,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/single-stroke-seven/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-single-stroke-7/",
      drumeo: "https://www.drumeo.com/beat/single-stroke-seven/",
    },
  },
  {
    file: "04_multiple_bounce_roll.ly",
    group: Group.SingleStroke,
    difficulty: Difficulty.Easy,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/multiple-bounce-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-multiple-bounce-roll/",
      drumeo: "https://www.drumeo.com/beat/multiple-bounce-roll/",
    },
  },
  {
    file: "05_double_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Easy,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/double-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-double-stroke-open-roll/",
      drumeo: "https://www.drumeo.com/beat/double-stroke-roll/",
    },
  },
  {
    file: "06_triple_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/triple-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-triple-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/triple-stroke-roll/",
    },
  },
  {
    file: "07_five_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/five-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-five-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/five-stroke-roll/",
    },
  },
  {
    file: "08_six_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/six-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-six-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/six-stroke-roll/",
    },
  },
  {
    file: "09_seven_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/seven-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-seven-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/seven-stroke-roll/",
    },
  },
  {
    file: "10_nine_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/nine-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-nine-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/nine-stroke-roll/",
    },
  },
  {
    file: "11_ten_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/ten-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-ten-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/ten-stroke-roll/",
    },
  },
  {
    file: "12_eleven_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/eleven-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-eleven-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/eleven-stroke-roll/",
    },
  },
  {
    file: "13_thirteen_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/thirteen-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-thirteen-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/thirteen-stroke-roll/",
    },
  },
  {
    file: "14_fifteen_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/fifteen-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-fifteen-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/fifteen-stroke-roll/",
    },
  },
  {
    file: "15_seventeen_stroke_roll.ly",
    group: Group.DrumRoll,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/seventeen-stroke-roll/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-seventeen-stroke-roll/",
      drumeo: "https://www.drumeo.com/beat/seventeen-stroke-roll/",
    },
  },
  {
    file: "16_single_paradiddle.ly",
    group: Group.Paradiddle,
    difficulty: Difficulty.Easy,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/single-paradiddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-single-paradiddle/",
      drumeo: "https://www.drumeo.com/beat/single-paradiddle/",
    },
  },
  {
    file: "17_double_paradiddle.ly",
    group: Group.Paradiddle,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/double-paradiddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-double-paradiddle/",
      drumeo: "https://www.drumeo.com/beat/double-paradiddle/",
    },
  },
  {
    file: "18_triple_paradiddle.ly",
    group: Group.Paradiddle,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/triple-paradiddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-triple-paradiddle/",
      drumeo: "https://www.drumeo.com/beat/triple-paradiddle/",
    },
  },
  {
    file: "19_single_paradiddle-diddle.ly",
    group: Group.Paradiddle,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/single-paradiddle-diddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-paradiddlediddle/",
      drumeo: "https://www.drumeo.com/beat/single-paradiddle-diddle/",
    },
  },
  {
    file: "20_flam.ly",
    group: Group.Flam,
    difficulty: Difficulty.Easy,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/flam/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flam/",
      drumeo: "https://www.drumeo.com/beat/flam/",
    },
  },
  {
    file: "21_flam_tap.ly",
    group: Group.Flam,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/flam-tap/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flam-tap/",
      drumeo: "https://www.drumeo.com/beat/flam-tap/",
    },
  },
  {
    file: "22_flam_accent.ly",
    group: Group.Flam,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/flam-accent/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flam-accent/",
      drumeo: "https://www.drumeo.com/beat/flam-accent/",
    },
  },
  {
    file: "23_flamacue.ly",
    group: Group.Flam,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/flamacue/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flamacue/",
      drumeo: "https://www.drumeo.com/beat/flamacue/",
    },
  },
  {
    file: "24_flam_paradiddle.ly",
    group: Group.Flam,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/flam-paradiddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flam-paradiddle/",
      drumeo: "https://www.drumeo.com/beat/flam-paradiddle/",
    },
  },
  {
    file: "25_single_flammed_mill.ly",
    group: Group.Flam,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/single-flammed-mill/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flammed-mill/",
      drumeo: "https://www.drumeo.com/beat/single-flammed-mill/",
    },
  },
  {
    file: "26_flam_paradiddle-diddle.ly",
    group: Group.Flam,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/flam-paradiddle-diddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flam-paradiddle-diddle/",
      drumeo: "https://www.drumeo.com/beat/flam-paradiddle-diddle/",
    },
  },
  {
    file: "27_swiss_army_triplet.ly",
    group: Group.Flam,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/swiss-army-triplet/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-swiss-army-triplet/",
      drumeo: "https://www.drumeo.com/beat/swiss-army-triplet/",
    },
  },
  {
    file: "28_inverted_flam_tap.ly",
    group: Group.Flam,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/inverted-flam-tap/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-inverted-flam-tap/",
      drumeo: "https://www.drumeo.com/beat/inverted-flam-tap/",
    },
  },
  {
    file: "29_flam_drag.ly",
    group: Group.Flam,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/flam-drag/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-flam-drag/",
      drumeo: "https://www.drumeo.com/beat/flam-drag/",
    },
  },
  {
    file: "30_pataflafla.ly",
    group: Group.Flam,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/pataflafla/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-patafla-fla/",
      drumeo: "https://www.drumeo.com/beat/pataflafla/",
    },
  },
  {
    file: "31_drag_ruff.ly",
    group: Group.Drag,
    difficulty: Difficulty.Easy,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/drag-ruff/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-drag/",
      drumeo: "https://www.drumeo.com/beat/drag-ruff/",
    },
  },
  {
    file: "32_single_drag_tap.ly",
    group: Group.Drag,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/single-drag-tap/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-single-drag-tap/",
      drumeo: "https://www.drumeo.com/beat/single-drag-tap/",
    },
  },
  {
    file: "33_double_drag_tap.ly",
    group: Group.Drag,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/double-drag-tap/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-double-drag/",
      drumeo: "https://www.drumeo.com/beat/double-drag-tap/",
    },
  },
  {
    file: "34_lesson_25.ly",
    group: Group.Drag,
    difficulty: Difficulty.Medium,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/lesson-25/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-lesson-25/",
      drumeo: "https://www.drumeo.com/beat/lesson-25/",
    },
  },
  {
    file: "35_single_dragadiddle.ly",
    group: Group.Drag,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments:
        "https://www.40drumrudiments.com/single-dragadiddle/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-single-dragadiddle/",
      drumeo: "https://www.drumeo.com/beat/single-dragadiddle/",
    },
  },
  {
    file: "36_dragadiddle_1.ly",
    group: Group.Drag,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/dragadiddle-1/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-drag-paradiddle1/",
      drumeo: "https://www.drumeo.com/beat/drag-paradiddle-1/",
    },
  },
  {
    file: "37_dragadiddle_2.ly",
    group: Group.Drag,
    difficulty: Difficulty.Hard,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/dragadiddle-2/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-drag-paradiddle2/",
      drumeo: "https://www.drumeo.com/beat/drag-paradiddle-2/",
    },
  },
  {
    file: "38_single_ratamacue.ly",
    group: Group.Drag,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/single-ratamacue/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-single-ratamacue/",
      drumeo: "https://www.drumeo.com/beat/single-ratamacue/",
    },
  },
  {
    file: "39_double_ratamacue.ly",
    group: Group.Drag,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/double-ratamacue/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-double-ratamacue/",
      drumeo: "https://www.drumeo.com/beat/double-ratamacue/",
    },
  },
  {
    file: "40_triple_ratamacue.ly",
    group: Group.Drag,
    difficulty: Difficulty.Expert,
    links: {
      fourtyDrumRudiments: "https://www.40drumrudiments.com/triple-ratamacue/",
      vicFirth:
        "https://ae.vicfirth.com/education/40-essential-rudiments/40-essential-rudiments-triple-ratamacue/",
      drumeo: "https://www.drumeo.com/beat/triple-ratamacue/",
    },
  },
];

export const referenceNames: Record<Reference, string> = {
  fourtyDrumRudiments: "40 Drum Rudiments",
  vicFirth: "Vic Firth",
  drumeo: "Drumeo",
};

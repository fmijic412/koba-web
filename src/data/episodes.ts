/**
 * THE KOBA SAGA — episode data.
 *
 * This is the single place you edit to release story episodes. The website
 * mirrors what you post on X, one episode at a time.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO ADD / RELEASE AN EPISODE (do this each time you post on X):
 *   1. Find the episode below (they're all pre-written from the story).
 *   2. Set `published: true`.
 *   3. Paste the X post link into `xUrl` (optional but recommended — it adds a
 *      "View on X" button so the site links straight to your tweet).
 *   4. If the episode has new art, drop the image in /public/art/ and set
 *      `img` to its path WITHOUT extension (e.g. "/art/08-training").
 *      Provide both <name>.webp and <name>.jpg. Leave `img` undefined for a
 *      clean text-only card.
 *   5. Commit + merge to master — GitHub Actions auto-deploys the update.
 *
 * Only episodes with `published: true` appear on the site. Everything else
 * stays hidden until you flip the flag, so nothing spoils ahead of your posts.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Tone = "water" | "rage" | "gold";

export interface Episode {
  /** Sequential number, 1-based. */
  num: number;
  /** Roman numeral shown in the kicker. */
  roman: string;
  title: string;
  /** The narrative text. */
  body: string;
  /** Base image path without extension, e.g. "/art/01-village". Optional. */
  img?: string;
  /** Link to the X (Twitter) post for this episode. Optional. */
  xUrl?: string;
  /** Visual accent: calm water, the rage/fire, or honor/gold. */
  tone: Tone;
  /** Flip to true to release the episode on the site. */
  published: boolean;
}

export const EPISODES: Episode[] = [
  {
    num: 1,
    roman: "I",
    title: "The Quiet Bend",
    body: "Before the blade, before the legend, there was peace. A gentle bend in the great river where a family of capybaras lived without fear. This is where it all began.",
    img: "/art/01-village",
    xUrl: "",
    tone: "water",
    published: true,
  },
  {
    num: 2,
    roman: "II",
    title: "The Night It Came",
    body: "Then the Frenzy came. The sickness swept the valley like wildfire, turning calm creatures into screaming monsters fed by their own rage. Everything changed in a single night.",
    img: "/art/02-frenzy",
    xUrl: "",
    tone: "rage",
    published: true,
  },
  {
    num: 3,
    roman: "III",
    title: "Their Last Gift",
    body: "Koba's parents fought to hold back the fire. In their final act, they set their infant son adrift on the river, trusting the current to carry him where the flames couldn't follow.",
    img: "/art/03-sacrifice",
    xUrl: "",
    tone: "water",
    published: true,
  },
  {
    num: 4,
    roman: "IV",
    title: "Carried by the River",
    body: "Alone and too small to understand what he'd lost, the pup floated downstream into the dark. The river had him now. It wasn't finished with him yet.",
    img: "/art/04-river",
    xUrl: "",
    tone: "water",
    published: true,
  },
  {
    num: 5,
    roman: "V",
    title: "The Hand at the Water",
    body: "Days later, an old hermit knelt at the shallows and lifted the half-drowned pup from the water. Master Tama had found him.",
    img: "/art/05-rescue",
    xUrl: "",
    tone: "gold",
    published: true,
  },
  {
    num: 6,
    roman: "VI",
    title: "A Name and a Home",
    body: "He saw a stillness the Frenzy had failed to break, and he gave the child a name: Koba. He carried him deep into the jungle and raised him as his own.",
    img: "/art/06-home",
    xUrl: "",
    tone: "gold",
    published: true,
  },
  {
    num: 7,
    roman: "VII",
    title: "Grief Grows Loud",
    body: "But loss grows loud in a young heart. For years Koba was restless and angry, haunted by a fire he could barely remember.",
    img: "/art/07-grief",
    xUrl: "",
    tone: "rage",
    published: true,
  },
  {
    num: 8,
    roman: "VIII",
    title: "Fighting Like a Monster",
    body: "When Tama first tried to teach him, Koba fought like every monster did — too fast, too furious, too loud. He failed again and again. Rage was exactly what the sickness ate.",
    img: "/art/08-training",
    xUrl: "",
    tone: "rage",
    published: true,
  },
  {
    num: 9,
    roman: "IX",
    title: "The Waterfall",
    body: "Then, standing in a waterfall at dawn, he stopped fighting the water — and felt the storm pass through him without moving him. For the first time, Koba was still.",
    img: "/art/09-waterfall",
    xUrl: "",
    tone: "water",
    published: true,
  },
  {
    num: 10,
    roman: "X",
    title: "Still Water Cuts Deepest",
    body: "“Rage makes you loud,” Tama told him. “Stillness makes you deadly. Still water cuts deepest.” Koba finally understood — his calm was the one weapon the Frenzy could never eat.",
    img: "/art/10-stillwater",
    xUrl: "",
    tone: "gold",
    published: true,
  },
  {
    num: 11,
    roman: "XI",
    title: "Season After Season",
    body: "The training never stopped. Balance on river stones, breathe through pain, hold the calm at the center of chaos. Season after season, Koba grew stronger and quieter.",
    img: "/art/11-seasons",
    xUrl: "",
    tone: "water",
    published: true,
  },
  {
    num: 12,
    roman: "XII",
    title: "The Blade",
    body: "The day came when he passed his master's final test and earned a curved blade of his own. He had become something the world had never seen.",
    img: "/art/12-blade",
    xUrl: "",
    tone: "gold",
    published: true,
  },
  {
    num: 13,
    roman: "XIII",
    title: "The Calling",
    body: "But peace in one valley wasn't peace for the world. Tama confessed the Frenzy still spread out there — and that its source had never been faced and survived. Koba understood his calling.",
    img: "/art/13-calling",
    xUrl: "",
    tone: "water",
    published: true,
  },
  {
    num: 14,
    roman: "XIV",
    title: "He Leaves Home",
    body: "Master in his heart, blade on his back, Koba left the only home he'd ever known and stepped into the wider world. The road was waiting.",
    xUrl: "",
    tone: "gold",
    published: false,
  },
  {
    num: 15,
    roman: "XV",
    title: "The Broken World",
    body: "What he found broke him a little. Ruined villages, silent rivers, creatures lost to the rage. The Frenzy had reached farther than he ever imagined.",
    xUrl: "",
    tone: "rage",
    published: false,
  },
  {
    num: 16,
    roman: "XVI",
    title: "First Blood, First Breath",
    body: "The first monster came all teeth and noise. Koba didn't flinch. He stepped into the storm, found the quiet at its center, and ended it in a single breath. Loud dies. Calm rides.",
    xUrl: "",
    tone: "gold",
    published: false,
  },
  {
    num: 17,
    roman: "XVII",
    title: "The First He Saved",
    body: "Not every monster needed to die. Some just needed someone calm enough to reach them first. The first creature Koba pulled back from the Frenzy never left his side again.",
    xUrl: "",
    tone: "water",
    published: false,
  },
  {
    num: 18,
    roman: "XVIII",
    title: "The Stillwater",
    body: "One by one he saved the lost — a sharp-eyed heron, a stubborn tortoise, a quick fox, a heavy-handed boar. A lone wanderer became a crew. They called themselves the Stillwater.",
    xUrl: "",
    tone: "water",
    published: false,
  },
  {
    num: 19,
    roman: "XIX",
    title: "When It Went Wrong",
    body: "They pushed deeper, winning fights they shouldn't have — until they hit a wall. A battle turned. The Stillwater was scattered and beaten, and the whole journey hung by a thread.",
    xUrl: "",
    tone: "rage",
    published: false,
  },
  {
    num: 20,
    roman: "XX",
    title: "The Rage Returns",
    body: "In the ashes of that defeat, Koba doubted everything. The old fury he'd buried for years began clawing its way back up. The river inside him was about to break its banks.",
    xUrl: "",
    tone: "rage",
    published: false,
  },
  {
    num: 21,
    roman: "XXI",
    title: "The Relic",
    body: "Then, in the ruins, he found a clue — an old relic, carvings that told a story tangled with his own past. The river had been carrying him toward this all along.",
    xUrl: "",
    tone: "water",
    published: false,
  },
  {
    num: 22,
    roman: "XXII",
    title: "A Name in the Dark",
    body: "Survivors whispered it with terror, a single name at the heart of the Frenzy: Doku. Koba hunted it to the source.",
    xUrl: "",
    tone: "rage",
    published: false,
  },
  {
    num: 23,
    roman: "XXIII",
    title: "The Cruelest Truth",
    body: "The truth landed like a blade. Doku had been Master Tama's greatest student — a master of stillness himself, until he chose rage and became the very thing he swore to fight. It was Doku who burned Koba's home.",
    xUrl: "",
    tone: "rage",
    published: false,
  },
  {
    num: 24,
    roman: "XXIV",
    title: "The Choice",
    body: "The final battle was a storm. Doku was bigger, stronger, fully consumed — and he fought to drag Koba down into the rage with him. For one breath, Koba almost gave in.",
    xUrl: "",
    tone: "rage",
    published: false,
  },
  {
    num: 25,
    roman: "XXV",
    title: "Still Water, Sharp Blade",
    body: "So Koba stopped fighting. In the dead center of Doku's storm he found total stillness — the one thing the Frenzy has no answer for. The fire broke. The river won. The Stillwater stands forever.",
    xUrl: "",
    tone: "gold",
    published: false,
  },
];

/** Released episodes, in story order. */
export const publishedEpisodes = (): Episode[] =>
  EPISODES.filter((e) => e.published).sort((a, b) => a.num - b.num);

/** Released episodes that have art — used for the gallery. */
export const publishedWithArt = (): Episode[] =>
  publishedEpisodes().filter((e) => e.img);

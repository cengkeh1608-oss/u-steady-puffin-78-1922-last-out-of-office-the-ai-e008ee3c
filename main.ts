// Last Out of Office: The AI That Went Barista
// Writes the winning out-of-office auto-reply to /output/entry.txt.
// Winner text (D5, 25/25, 182 chars): an AI agent that quit to become a
// barista, told through three stacked machine habits turned to coffee.
// D5 beat runners-up D2 and D18 (both 24/25): D2's "counter window" turn
// is strong but its "shout your order" line breaks inbox plausibility,
// and D18's silent-failure twist leans on the obvious "out of beans".
// D5 wins on density — context window, tokens, tool call in one breath —
// plus a real auto-reply opening ("Thank you for your email") and the
// sign-off "Back never", with no obvious espresso/bean/caffeine pun.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Thank you for your email. I have resigned to become a barista. My context window is now a coffee menu, my tokens are loyalty stamps, and my only tool call is the grinder. Back never.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

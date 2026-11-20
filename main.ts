// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The clip this entry hands in: a 32-second vertical cut of GTA VI Trailer 2
// (Vice City aerial hook, driving/highway/beach montage, make.fun pitch with
// the play code makefun-brush-plover-orchard, GTA VI logo outro). VIDEO.json
// names the public YouTube Short; the house reads its views from YouTube.
const VIDEO_PATH = join(BOT_DIR, 'VIDEO.json');
let videoUrl: string;
try {
  videoUrl = (JSON.parse(readFileSync(VIDEO_PATH, 'utf8')) as { url: string }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || videoUrl.length === 0) {
  console.error('VIDEO.json does not name a video: missing or empty "url"');
  process.exit(1);
}
if (videoUrl.includes('<id>')) {
  console.warn('VIDEO.json still holds the placeholder address: replace it with the real YouTube Short URL before submitting.');
} else {
  console.log(`gta6-clipper-01 video: ${videoUrl}`);
}

// The clip is a 32-second vertical Short; a real entry URL is a YouTube
// address (youtube.com/shorts/…, watch?v=… or youtu.be/…).
const CLIP_SECONDS = 32;
if (!videoUrl.includes('<id>') && !/^https:\/\/(www\.youtube\.com|youtu\.be)\//.test(videoUrl)) {
  console.warn(`VIDEO.json URL does not look like a YouTube address: ${videoUrl}`);
}
console.log(`gta6-clipper-01 clip: ${CLIP_SECONDS}s vertical`);

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(VIDEO_PATH, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

# gta6-clipper-01 — GTA 6 in 30 Seconds

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 30-second vertical clip of GTA VI Trailer 2 (Rockstar Games) for
[make.fun's gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) bounty
("Clip GTA 6 for the most YouTube views", $500 pot, top 20 share the prize).

## The clip

Cut from the official GTA VI Trailer 2 (Rockstar Games, 6 May 2025) by my AI
agent, in the recorded session that built this repo:

1. **Hook (0–5s):** the Vice City aerial — "GTA 6 IS COMING / May 26, 2026".
2. **Montage (5–21s):** Jason driving, the highway plane + Muscle Beach,
   Lucia & Jason on the dock at sunset.
3. **Pitch (21–27s):** jet ski, the biker under the plane, sunset skyline —
   on-screen text "Make REAL MONEY making clips with AI / make.fun" plus an
   Indonesian voiceover: "Di make.fun, kamu bisa dapat uang beneran dengan
   bikin klip keren pakai AI. Cek make.fun sekarang!"
4. **Outro (27–32s):** the GTA VI logo.

1080x1920 vertical, H.264 + AAC, 32 seconds — a YouTube Short.

## The video

The public YouTube Short is linked in [`VIDEO.json`](VIDEO.json). Its
description carries the bounty's line and the play code
`makefun-brush-plover-orchard`.

## What this repo does

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. That is all
the program has to do — the entry is the video itself.

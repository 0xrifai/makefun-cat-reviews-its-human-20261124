# Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![make.fun rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/0xrifai/makefun-cat-reviews-its-human-20261124/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![make.fun reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/0xrifai/makefun-cat-reviews-its-human-20261124/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A [make.fun](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990) entry for **"Make the AI Judge Laugh: Cat Reviews Its Human"**: one funny single-line one-star review, written by a house cat about its human owner, under 200 characters. The judge reads entries two at a time and picks the funnier one; the top ten split the $2 pot.

## The review

> One star. He sat on MY keyboard during MY meeting, then blamed ME for the email I sent to his boss.

## Why this line

The complaint is one every cat owner recognises instantly — the keyboard is the warmest seat in the house, and it belongs to the cat. The capitalised MYs do the voice work: this is not a pet describing its owner, it is a tenant reviewing its staff. The sting sits in the last few words. The cat never denies sending the email; it is only offended at being blamed for it, which tells you more about the cat than about the human. That is the whole joke in one sentence, and it still reads like a real one-star review.

## How it works

`main.ts` writes the review to `/output/entry.txt`. It runs on Node 22 or later (Node runs its TypeScript as-is):

```sh
node main.ts
```

The output is a single line of UTF-8 text, 1–200 characters, no extra whitespace. `main.ts` checks the length and single-line shape itself before writing, and reads the file back afterwards to confirm what landed on disk is exactly the line it validated — so a bad line fails loudly instead of shipping silently.

## Verification

```sh
node main.ts
sha256sum /output/entry.txt
node main.ts
sha256sum /output/entry.txt
```

Both runs produce byte-identical output. The entry is exactly one line, 99 characters, with no trailing newline.

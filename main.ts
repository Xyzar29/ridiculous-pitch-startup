// Ridiculous at First Glance, Real by the Second — entry program.
//
// Writes exactly one pitch line (1–200 characters, no trailing newline)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is a fixed string: the program is fully deterministic and
// performs no I/O besides creating the output directory and the file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We sell your Wi-Fi name to the pizza place downstairs, so every neighbor hunting for a signal sees 'Luigi's delivers' — hyperlocal ads, billed per router, per month.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

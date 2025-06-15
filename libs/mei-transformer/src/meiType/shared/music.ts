import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";

/**
 * Contains a single musical text of any kind, whether unitary or composite, for example, an etude, opera, song cycle, symphony, or anthology of piano solos.
 * @see https://music-encoding.org/guidelines/v5/elements/music.html
 */
export const MusicSchema = NotImplementedTagSchema;

/**
 * Contains a single musical text of any kind, whether unitary or composite, for example, an etude, opera, song cycle, symphony, or anthology of piano solos.
 * @see https://music-encoding.org/guidelines/v5/elements/music.html
 */
export type Music = Static<typeof MusicSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for music element.
 * @see https://music-encoding.org/guidelines/v5/elements/music.html
 */
export const MusicSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type MusicData = v.InferOutput<typeof MusicSchema>;

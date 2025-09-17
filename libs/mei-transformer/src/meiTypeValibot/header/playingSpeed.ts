import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for playingSpeed element.
 * @see https://music-encoding.org/guidelines/v5/elements/playingSpeed.html
 */
export const PlayingSpeedSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type PlayingSpeedData = v.InferOutput<typeof PlayingSpeedSchema>;

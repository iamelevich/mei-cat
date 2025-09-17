import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for soundChan element.
 * @see https://music-encoding.org/guidelines/v5/elements/soundChan.html
 */
export const SoundChanSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SoundChanData = v.InferOutput<typeof SoundChanSchema>;

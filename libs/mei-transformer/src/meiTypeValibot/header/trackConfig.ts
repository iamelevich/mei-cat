import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for trackConfig element.
 * @see https://music-encoding.org/guidelines/v5/elements/trackConfig.html
 */
export const TrackConfigSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TrackConfigData = v.InferOutput<typeof TrackConfigSchema>;

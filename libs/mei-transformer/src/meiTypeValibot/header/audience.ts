import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for audience element.
 * @see https://music-encoding.org/guidelines/v5/elements/audience.html
 */
export const AudienceSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AudienceData = v.InferOutput<typeof AudienceSchema>;

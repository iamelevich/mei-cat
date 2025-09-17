import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for locusGrp element.
 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
 */
export const LocusGrpSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LocusGrpData = v.InferOutput<typeof LocusGrpSchema>;

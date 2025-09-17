import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for acquisition element.
 * @see https://music-encoding.org/guidelines/v5/elements/acquisition.html
 */
export const AcquisitionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AcquisitionData = v.InferOutput<typeof AcquisitionSchema>;

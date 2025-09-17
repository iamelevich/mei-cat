import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for restore element.
 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
 */
export const RestoreSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type RestoreData = v.InferOutput<typeof RestoreSchema>;

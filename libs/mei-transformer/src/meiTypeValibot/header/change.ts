import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for change element.
 * @see https://music-encoding.org/guidelines/v5/elements/change.html
 */
export const ChangeSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ChangeData = v.InferOutput<typeof ChangeSchema>;

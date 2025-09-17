import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for manifestationList element.
 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
 */
export const ManifestationListSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ManifestationListData = v.InferOutput<typeof ManifestationListSchema>;

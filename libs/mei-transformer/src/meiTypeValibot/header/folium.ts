import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for folium element.
 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
 */
export const FoliumSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type FoliumData = v.InferOutput<typeof FoliumSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for classification element.
 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
 */
export const ClassificationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ClassificationData = v.InferOutput<typeof ClassificationSchema>;

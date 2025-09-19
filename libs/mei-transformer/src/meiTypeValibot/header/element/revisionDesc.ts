import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { ChangeSchema } from ".";

/**
 * Base schema with attribute, to simplify types for RevisionDescSchema
 */
const RevisionDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Container for information about alterations that have been made to an MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
 */
export const RevisionDescSchema = v.intersect([
	RevisionDescBaseSchema,
	v.object({
		/**
		 * Reference to element change
		 * @see https://music-encoding.org/guidelines/v5/elements/change.html
		 */
		change: v.union([
			v.lazy(() => ChangeSchema),
			v.array(v.lazy(() => ChangeSchema)),
		]),
	}),
	ModelHeadLikeSchema,
]);

export type RevisionDescData = v.InferOutput<typeof RevisionDescSchema>;

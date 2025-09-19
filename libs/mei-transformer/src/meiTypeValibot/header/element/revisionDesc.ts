import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ChangeSchema } from "../element/change";

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
export const RevisionDescSchema = v.lazy(() =>
	v.intersect([
		RevisionDescBaseSchema,
		v.object({
			/**
			 * Reference to element change
			 * @see https://music-encoding.org/guidelines/v5/elements/change.html
			 */
			change: v.union([v.array(ChangeSchema), ChangeSchema]),
		}),
		ModelHeadLikeSchema,
	]),
);

export type RevisionDescData = v.InferOutput<typeof RevisionDescSchema>;

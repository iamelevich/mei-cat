import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelHeadLikeSchema,
} from "../../shared";
import { ModelPubStmtPartSchema } from "..";
import { UnpubSchema } from ".";

/**
 * Base schema with attribute, to simplify types for PubStmtSchema
 */
const PubStmtBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Container for information regarding the publication or distribution of a bibliographic item, including the publisher’s name and address, the date of publication, and other relevant details.
 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
 */
export const PubStmtSchema = v.intersect([
	PubStmtBaseSchema,
	v.object({
		/**
		 * Reference to element unpub
		 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
		 */
		unpub: v.optional(
			v.union([v.lazy(() => UnpubSchema), v.array(v.lazy(() => UnpubSchema))]),
		),
	}),
	ModelHeadLikeSchema,
	ModelPubStmtPartSchema,
]);

export type PubStmtData = v.InferOutput<typeof PubStmtSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPubStmtPartSchema } from "../model/pubStmtPart";
import { UnpubSchema } from "./unpub";

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
export const PubStmtSchema = v.lazy(() =>
	v.intersect([
		PubStmtBaseSchema,
		v.object({
			/**
			 * Reference to element unpub
			 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
			 */
			unpub: v.optional(v.union([v.array(UnpubSchema), UnpubSchema])),
		}),
		ModelHeadLikeSchema,
		ModelPubStmtPartSchema,
	]),
);

export type PubStmtData = v.InferOutput<typeof PubStmtSchema>;

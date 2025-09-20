import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../attr/authorized";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDatableSchema } from "../attr/datable";
import { AttrEvidenceSchema } from "../attr/evidence";
import { AttrPlistSchema } from "../attr/plist";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";

/**
 * Base schema with attribute, to simplify types for RelationSchema
 */
const RelationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrPlistSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,

	// Direct attributes
	/**
	 * Describes the relationship between the entities identified by the plist and target attributes.
	 */
	"@rel": v.optional(v.string()),
});

/**
 * Describes a relationship or linkage amongst entities.
 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
 */
export const RelationSchema = v.lazy(() => v.intersect([RelationBaseSchema]));

export type RelationData = v.InferOutput<typeof RelationSchema>;

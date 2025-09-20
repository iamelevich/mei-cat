import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDataPointingSchema } from "../attr/dataPointing";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { ModelBiblLikeSchema } from "../model/biblLike";

/**
 * Base schema with attribute, to simplify types for RelatedItemSchema
 */
const RelatedItemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,

	// Direct attributes
	/**
	 * Describes the relationship between the entity identified by the <gi scheme="MEI" >relatedItem</gi> element and the resource described in the parent element, <abbr>i.e.</abbr>, <gi scheme="MEI">bibl</gi>, <gi scheme="MEI">source</gi> or <gi scheme="MEI" >relatedItem</gi>.
	 */
	"@rel": v.optional(v.string()),
});

/**
 * Contains or references another bibliographic item which is related to the present one.
 * @see https://music-encoding.org/guidelines/v5/elements/relatedItem.html
 */
export const RelatedItemSchema = v.lazy(() =>
	v.intersect([RelatedItemBaseSchema, ModelBiblLikeSchema]),
);

export type RelatedItemData = v.InferOutput<typeof RelatedItemSchema>;

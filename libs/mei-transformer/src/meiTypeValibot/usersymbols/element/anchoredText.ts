import * as v from "valibot";
import { AttrAnchoredTextAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrAnchoredTextGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrAnchoredTextVisSchema } from "../../visual";
import { AttrAnchoredTextLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for AnchoredTextSchema
 */
const AnchoredTextBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAnchoredTextAnlSchema.entries,
	...AttrAnchoredTextGesSchema.entries,
	...AttrAnchoredTextLogSchema.entries,
	...AttrAnchoredTextVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Container for text that is fixed to a particular page location, regardless of changes made to the layout of the measures around it.
 * @see https://music-encoding.org/guidelines/v5/elements/anchoredText.html
 */
export const AnchoredTextSchema = v.intersect([
	AnchoredTextBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type AnchoredTextData = v.InferOutput<typeof AnchoredTextSchema>;

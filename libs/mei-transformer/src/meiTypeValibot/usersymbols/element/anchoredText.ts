import * as v from "valibot";
import { AttrAnchoredTextAnlSchema } from "../../analytical/attr/anchoredText.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAnchoredTextGesSchema } from "../../gestural/attr/anchoredText.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrAnchoredTextVisSchema } from "../../visual/attr/anchoredText.vis";
import { AttrAnchoredTextLogSchema } from "../attr/anchoredText.log";

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
export const AnchoredTextSchema = v.lazy(() =>
	v.intersect([
		AnchoredTextBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type AnchoredTextData = v.InferOutput<typeof AnchoredTextSchema>;

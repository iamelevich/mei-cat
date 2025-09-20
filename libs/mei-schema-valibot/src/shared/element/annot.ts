import * as v from "valibot";
import { AttrAnnotAnlSchema } from "../../analytical/attr/annot.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAnnotGesSchema } from "../../gestural/attr/annot.ges";
import { AttrAnnotVisSchema } from "../../visual/attr/annot.vis";
import { AttrAnnotLogSchema } from "../attr/annot.log";
import { AttrAudienceSchema } from "../attr/audience";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDataPointingSchema } from "../attr/dataPointing";
import { AttrLangSchema } from "../attr/lang";
import { AttrPlistSchema } from "../attr/plist";
import { AttrSourceSchema } from "../attr/source";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { ModelHeadLikeSchema } from "../model/headLike";
import { ModelTextComponentLikeSchema } from "../model/textComponentLike";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for AnnotSchema
 */
const AnnotBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAnnotAnlSchema.entries,
	...AttrAnnotGesSchema.entries,
	...AttrAnnotLogSchema.entries,
	...AttrAnnotVisSchema.entries,
	...AttrAudienceSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrPlistSchema.entries,
	...AttrSourceSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Provides a statement explaining the text or indicating the basis for an assertion.
 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
 */
export const AnnotSchema = v.lazy(() =>
	v.intersect([
		AnnotBaseSchema,
		ModelEditLikeSchema,
		ModelHeadLikeSchema,
		ModelTextComponentLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type AnnotData = v.InferOutput<typeof AnnotSchema>;

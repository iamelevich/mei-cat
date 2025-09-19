import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrSourceSchema } from "../attr/source";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for LabelAbbrSchema
 */
const LabelAbbrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * A label on the pages following the first.
 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
 */
export const LabelAbbrSchema = v.lazy(() =>
	v.intersect([
		LabelAbbrBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type LabelAbbrData = v.InferOutput<typeof LabelAbbrSchema>;

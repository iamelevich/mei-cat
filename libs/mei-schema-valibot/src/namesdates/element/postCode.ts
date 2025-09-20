import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";

/**
 * Base schema with attribute, to simplify types for PostCodeSchema
 */
const PostCodeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a numerical or alphanumeric code used as part of a postal address to simplify sorting or delivery of mail.
 * @see https://music-encoding.org/guidelines/v5/elements/postCode.html
 */
export const PostCodeSchema = v.lazy(() =>
	v.intersect([
		PostCodeBaseSchema,
		ModelEditLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type PostCodeData = v.InferOutput<typeof PostCodeSchema>;

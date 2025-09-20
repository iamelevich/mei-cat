import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";

/**
 * Base schema with attribute, to simplify types for PostBoxSchema
 */
const PostBoxBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a number or other identifier for some postal delivery point other than a street address.
 * @see https://music-encoding.org/guidelines/v5/elements/postBox.html
 */
export const PostBoxSchema = v.lazy(() =>
	v.intersect([
		PostBoxBaseSchema,
		ModelEditLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type PostBoxData = v.InferOutput<typeof PostBoxSchema>;

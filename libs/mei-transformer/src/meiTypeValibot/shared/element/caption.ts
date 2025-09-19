import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for CaptionSchema
 */
const CaptionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A label which accompanies an illustration or a table.
 * @see https://music-encoding.org/guidelines/v5/elements/caption.html
 */
export const CaptionSchema = v.intersect([
	CaptionBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type CaptionData = v.InferOutput<typeof CaptionSchema>;

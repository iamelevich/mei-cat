import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrXySchema,
	ModelTextPhraseLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for HeadSchema
 */
const HeadBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Contains any heading, for example, the title of a section of text, or the heading of a list.
 * @see https://music-encoding.org/guidelines/v5/elements/head.html
 */
export const HeadSchema = v.intersect([
	HeadBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type HeadData = v.InferOutput<typeof HeadSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrLangSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

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
export const PostBoxSchema = v.intersect([
	PostBoxBaseSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type PostBoxData = v.InferOutput<typeof PostBoxSchema>;

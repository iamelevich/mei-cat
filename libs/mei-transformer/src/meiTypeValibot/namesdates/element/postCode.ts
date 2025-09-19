import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrCommonSchema, AttrLangSchema } from "../../shared";

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
export const PostCodeSchema = v.intersect([
	PostCodeBaseSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type PostCodeData = v.InferOutput<typeof PostCodeSchema>;

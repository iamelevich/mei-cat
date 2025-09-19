import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelLbLikeSchema,
	ModelRendLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for AltIdSchema
 */
const AltIdBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * May contain a bibliographic identifier that does not fit within the meiHead element’s id attribute, for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
 */
export const AltIdSchema = v.intersect([
	AltIdBaseSchema,
	ModelLbLikeSchema,
	ModelRendLikeSchema,
]);

export type AltIdData = v.InferOutput<typeof AltIdSchema>;

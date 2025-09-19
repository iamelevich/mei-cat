import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrPointingSchema,
	ModelBiblPartSchema,
	ModelImprintPartSchema,
	ModelTextPhraseLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for BiblSchema
 */
const BiblBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Provides a loosely-structured bibliographic citation in which the sub-components may or may not be explicitly marked.
 * @see https://music-encoding.org/guidelines/v5/elements/bibl.html
 */
export const BiblSchema = v.intersect([
	BiblBaseSchema,
	ModelBiblPartSchema,
	ModelImprintPartSchema,
	ModelTextPhraseLikeSchema,
]);

export type BiblData = v.InferOutput<typeof BiblSchema>;

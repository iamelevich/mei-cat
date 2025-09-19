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
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for StreetSchema
 */
const StreetBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * full street address including any name or number identifying a building as well as the name of the street or route on which it is located.
 * @see https://music-encoding.org/guidelines/v5/elements/street.html
 */
export const StreetSchema = v.intersect([
	StreetBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type StreetData = v.InferOutput<typeof StreetSchema>;

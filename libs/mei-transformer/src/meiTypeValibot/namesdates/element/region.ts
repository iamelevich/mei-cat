import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrNameSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for RegionSchema
 */
const RegionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Contains the name of an administrative unit such as a state, province, or county, larger than a settlement, but smaller than a country.
 * @see https://music-encoding.org/guidelines/v5/elements/region.html
 */
export const RegionSchema = v.intersect([
	RegionBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type RegionData = v.InferOutput<typeof RegionSchema>;

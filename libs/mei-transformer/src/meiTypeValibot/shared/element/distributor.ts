import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DistributorSchema
 */
const DistributorBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Person or agency, other than a publisher, from which access (including electronic access) to a bibliographic entity may be obtained.
 * @see https://music-encoding.org/guidelines/v5/elements/distributor.html
 */
export const DistributorSchema = v.intersect([
	DistributorBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type DistributorData = v.InferOutput<typeof DistributorSchema>;

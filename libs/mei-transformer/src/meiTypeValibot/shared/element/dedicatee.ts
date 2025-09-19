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
 * Base schema with attribute, to simplify types for DedicateeSchema
 */
const DedicateeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Entity to whom a creative work is formally offered.
 * @see https://music-encoding.org/guidelines/v5/elements/dedicatee.html
 */
export const DedicateeSchema = v.intersect([
	DedicateeBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type DedicateeData = v.InferOutput<typeof DedicateeSchema>;

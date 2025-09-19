import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for ArrangerSchema
 */
const ArrangerBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
 */
export const ArrangerSchema = v.intersect([
	ArrangerBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type ArrangerData = v.InferOutput<typeof ArrangerSchema>;

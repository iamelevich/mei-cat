import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	AttrMeasurementSchema,
	MacroStrucUnstrucContentSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DimensionsSchema
 */
const DimensionsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrLangSchema.entries,
	...AttrMeasurementSchema.entries,
});

/**
 * Information about the physical size of an entity; usually includes numerical data.
 * @see https://music-encoding.org/guidelines/v5/elements/dimensions.html
 */
export const DimensionsSchema = v.intersect([
	DimensionsBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type DimensionsData = v.InferOutput<typeof DimensionsSchema>;

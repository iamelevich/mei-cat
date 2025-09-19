import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for AccMatSchema
 */
const AccMatBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Holds a description of any additional material bound with an item, such as non-contemporaneous documents or fragments.
 * @see https://music-encoding.org/guidelines/v5/elements/accMat.html
 */
export const AccMatSchema = v.intersect([
	AccMatBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type AccMatData = v.InferOutput<typeof AccMatSchema>;

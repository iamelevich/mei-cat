import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for SignaturesSchema
 */
const SignaturesBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Provides a description of the leaf or quire signatures found within a codex.
 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
 */
export const SignaturesSchema = v.intersect([
	SignaturesBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type SignaturesData = v.InferOutput<typeof SignaturesSchema>;

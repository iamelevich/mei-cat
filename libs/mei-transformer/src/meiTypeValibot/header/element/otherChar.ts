import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for OtherCharSchema
 */
const OtherCharBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Any characteristic that serves to differentiate a work or expression from another.
 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
 */
export const OtherCharSchema = v.intersect([
	OtherCharBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type OtherCharData = v.InferOutput<typeof OtherCharSchema>;

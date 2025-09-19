import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for CatchwordsSchema
 */
const CatchwordsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
 */
export const CatchwordsSchema = v.intersect([
	CatchwordsBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type CatchwordsData = v.InferOutput<typeof CatchwordsSchema>;

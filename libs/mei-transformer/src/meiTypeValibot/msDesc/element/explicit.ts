import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for ExplicitSchema
 */
const ExplicitBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains the explicit of a manuscript item; that is, the closing words of the text proper, exclusive of any rubric or colophon which might follow it.
 * @see https://music-encoding.org/guidelines/v5/elements/explicit.html
 */
export const ExplicitSchema = v.intersect([
	ExplicitBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type ExplicitData = v.InferOutput<typeof ExplicitSchema>;

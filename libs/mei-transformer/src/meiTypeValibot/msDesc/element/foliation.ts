import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for FoliationSchema
 */
const FoliationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the numbering system or systems used to count the leaves or pages in a codex.
 * @see https://music-encoding.org/guidelines/v5/elements/foliation.html
 */
export const FoliationSchema = v.intersect([
	FoliationBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type FoliationData = v.InferOutput<typeof FoliationSchema>;

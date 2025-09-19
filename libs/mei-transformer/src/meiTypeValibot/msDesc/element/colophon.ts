import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for ColophonSchema
 */
const ColophonBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a statement providing information regarding the date, place, agency, or reason for production of the item.
 * @see https://music-encoding.org/guidelines/v5/elements/colophon.html
 */
export const ColophonSchema = v.intersect([
	ColophonBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type ColophonData = v.InferOutput<typeof ColophonSchema>;

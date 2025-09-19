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
 * Base schema with attribute, to simplify types for PlateNumSchema
 */
const PlateNumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Designation assigned to a resource by a music publisher, usually printed at the bottom of each page, and sometimes appearing also on the title page.
 * @see https://music-encoding.org/guidelines/v5/elements/plateNum.html
 */
export const PlateNumSchema = v.intersect([
	PlateNumBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type PlateNumData = v.InferOutput<typeof PlateNumSchema>;

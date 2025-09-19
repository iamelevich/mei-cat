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
 * Base schema with attribute, to simplify types for HeraldrySchema
 */
const HeraldryBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
 */
export const HeraldrySchema = v.intersect([
	HeraldryBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type HeraldryData = v.InferOutput<typeof HeraldrySchema>;

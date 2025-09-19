import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for StampSchema
 */
const StampBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
 */
export const StampSchema = v.intersect([
	StampBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type StampData = v.InferOutput<typeof StampSchema>;

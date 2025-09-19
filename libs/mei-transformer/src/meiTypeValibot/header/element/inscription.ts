import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for InscriptionSchema
 */
const InscriptionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * An inscription added to an item, such as a bookplate, a note designating the item as a gift, and/or the author’s signature.
 * @see https://music-encoding.org/guidelines/v5/elements/inscription.html
 */
export const InscriptionSchema = v.intersect([
	InscriptionBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type InscriptionData = v.InferOutput<typeof InscriptionSchema>;

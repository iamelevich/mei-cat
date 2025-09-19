import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

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
export const OtherCharSchema = v.lazy(() =>
	v.intersect([OtherCharBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type OtherCharData = v.InferOutput<typeof OtherCharSchema>;

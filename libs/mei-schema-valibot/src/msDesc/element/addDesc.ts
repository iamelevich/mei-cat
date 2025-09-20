import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for AddDescSchema
 */
const AddDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Provides a description of significant additions found within an item, such as marginalia or other annotations.
 * @see https://music-encoding.org/guidelines/v5/elements/addDesc.html
 */
export const AddDescSchema = v.lazy(() =>
	v.intersect([AddDescBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type AddDescData = v.InferOutput<typeof AddDescSchema>;

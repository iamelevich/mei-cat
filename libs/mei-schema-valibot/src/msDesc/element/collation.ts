import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for CollationSchema
 */
const CollationBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Records a description of how the leaves or bifolia of an item are physically arranged.
 * @see https://music-encoding.org/guidelines/v5/elements/collation.html
 */
export const CollationSchema = v.lazy(() =>
	v.intersect([CollationBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type CollationData = v.InferOutput<typeof CollationSchema>;

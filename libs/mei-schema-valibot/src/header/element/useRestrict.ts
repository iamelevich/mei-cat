import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for UseRestrictSchema
 */
const UseRestrictBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Container for information about the conditions that affect use of a bibliographic item after access has been granted.
 * @see https://music-encoding.org/guidelines/v5/elements/useRestrict.html
 */
export const UseRestrictSchema = v.lazy(() =>
	v.intersect([UseRestrictBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type UseRestrictData = v.InferOutput<typeof UseRestrictSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";

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
export const UseRestrictSchema = v.intersect([
	UseRestrictBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type UseRestrictData = v.InferOutput<typeof UseRestrictSchema>;

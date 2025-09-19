import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for AccessRestrictSchema
 */
const AccessRestrictBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Describes the conditions that affect the accessibility of material.
 * @see https://music-encoding.org/guidelines/v5/elements/accessRestrict.html
 */
export const AccessRestrictSchema = v.lazy(() =>
	v.intersect([AccessRestrictBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type AccessRestrictData = v.InferOutput<typeof AccessRestrictSchema>;

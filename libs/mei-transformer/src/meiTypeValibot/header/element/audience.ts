import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for AudienceSchema
 */
const AudienceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Defines the class of user for which the work is intended, as defined by age group (<abbr>e.g.</abbr>, children, young adults, adults, etc.), educational level (<abbr>e.g.</abbr>, primary, secondary, etc.), or other categorization.
 * @see https://music-encoding.org/guidelines/v5/elements/audience.html
 */
export const AudienceSchema = v.lazy(() =>
	v.intersect([AudienceBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type AudienceData = v.InferOutput<typeof AudienceSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for SpecReproSchema
 */
const SpecReproBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The equalization system, noise reduction system, etc. used in making the recording (<abbr>e.g.</abbr>, NAB, DBX, Dolby, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/specRepro.html
 */
export const SpecReproSchema = v.lazy(() =>
	v.intersect([SpecReproBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type SpecReproData = v.InferOutput<typeof SpecReproSchema>;

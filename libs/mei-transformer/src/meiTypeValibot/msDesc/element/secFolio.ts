import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for SecFolioSchema
 */
const SecFolioBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
 */
export const SecFolioSchema = v.lazy(() =>
	v.intersect([SecFolioBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type SecFolioData = v.InferOutput<typeof SecFolioSchema>;

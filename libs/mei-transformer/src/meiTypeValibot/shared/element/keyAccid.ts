import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrKeyAccidLogSchema } from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrKeyAccidAnlSchema } from "../../analytical";
import { AttrKeyAccidGesSchema } from "../../gestural";
import { AttrKeyAccidVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for KeyAccidSchema
 */
const KeyAccidBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrKeyAccidAnlSchema.entries,
	...AttrKeyAccidGesSchema.entries,
	...AttrKeyAccidLogSchema.entries,
	...AttrKeyAccidVisSchema.entries,

	// Direct attributes
	/**
	 * Specifies whether enharmonic (written) values or implicit ("perform-able") values are allowed.
	 */
	"@form": v.optional(v.string()),
});

/**
 * Accidental in a key signature.
 * @see https://music-encoding.org/guidelines/v5/elements/keyAccid.html
 */
export const KeyAccidSchema = v.intersect([KeyAccidBaseSchema]);

export type KeyAccidData = v.InferOutput<typeof KeyAccidSchema>;

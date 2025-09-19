import * as v from "valibot";
import { AttrKeyAccidAnlSchema } from "../../analytical/attr/keyAccid.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrKeyAccidGesSchema } from "../../gestural/attr/keyAccid.ges";
import { AttrKeyAccidVisSchema } from "../../visual/attr/keyAccid.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrKeyAccidLogSchema } from "../attr/keyAccid.log";

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
export const KeyAccidSchema = v.lazy(() => v.intersect([KeyAccidBaseSchema]));

export type KeyAccidData = v.InferOutput<typeof KeyAccidSchema>;

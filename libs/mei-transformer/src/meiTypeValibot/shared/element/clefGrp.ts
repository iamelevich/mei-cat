import * as v from "valibot";
import { AttrClefGrpAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrClefGrpGesSchema } from "../../gestural";
import { AttrClefGrpVisSchema } from "../../visual";
import { AttrClefGrpLogSchema, AttrCommonSchema, AttrEventSchema } from "..";
import { ClefSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ClefGrpSchema
 */
const ClefGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrClefGrpAnlSchema.entries,
	...AttrClefGrpGesSchema.entries,
	...AttrClefGrpLogSchema.entries,
	...AttrClefGrpVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEventSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A set of simultaneously-occurring clefs.
 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
 */
export const ClefGrpSchema = v.intersect([
	ClefGrpBaseSchema,
	v.object({
		/**
		 * Reference to element clef
		 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
		 */
		clef: v.union([
			v.lazy(() => ClefSchema),
			v.array(v.lazy(() => ClefSchema)),
		]),
	}),
]);

export type ClefGrpData = v.InferOutput<typeof ClefGrpSchema>;

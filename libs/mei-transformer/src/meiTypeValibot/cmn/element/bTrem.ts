import * as v from "valibot";
import { AttrBTremAnlSchema } from "../../analytical/attr/bTrem.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBTremGesSchema } from "../../gestural/attr/bTrem.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ChordSchema } from "../../shared/element/chord";
import { NoteSchema } from "../../shared/element/note";
import { AttrBTremVisSchema } from "../../visual/attr/bTrem.vis";
import { AttrBTremLogSchema } from "../attr/bTrem.log";

/**
 * Base schema with attribute, to simplify types for BTremSchema
 */
const BTremBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBTremAnlSchema.entries,
	...AttrBTremGesSchema.entries,
	...AttrBTremLogSchema.entries,
	...AttrBTremVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A rapid alternation on a single pitch or chord.
 * @see https://music-encoding.org/guidelines/v5/elements/bTrem.html
 */
export const BTremSchema = v.lazy(() =>
	v.intersect([
		BTremBaseSchema,
		v.object({
			/**
			 * Reference to element chord
			 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
			 */
			chord: v.optional(ChordSchema),
			/**
			 * Reference to element note
			 * @see https://music-encoding.org/guidelines/v5/elements/note.html
			 */
			note: v.optional(NoteSchema),
		}),
	]),
);

export type BTremData = v.InferOutput<typeof BTremSchema>;

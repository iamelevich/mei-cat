import * as v from "valibot";
import { AttrBTremAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrBTremGesSchema } from "../../gestural";
import { AttrCommonSchema, ChordSchema, NoteSchema } from "../../shared";
import { AttrBTremVisSchema } from "../../visual";
import { AttrBTremLogSchema } from "..";

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
export const BTremSchema = v.intersect([
	BTremBaseSchema,
	v.object({
		/**
		 * Reference to element chord
		 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
		 */
		chord: v.optional(v.lazy(() => ChordSchema)),
		/**
		 * Reference to element note
		 * @see https://music-encoding.org/guidelines/v5/elements/note.html
		 */
		note: v.optional(v.lazy(() => NoteSchema)),
	}),
]);

export type BTremData = v.InferOutput<typeof BTremSchema>;

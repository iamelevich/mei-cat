import * as v from "valibot";
import { AttrTabGrpAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTabGrpGesSchema } from "../../gestural";
import { AttrCommonSchema, NoteSchema, RestSchema } from "../../shared";
import { AttrTabGrpVisSchema } from "../../visual";
import { AttrTabGrpLogSchema } from "..";
import { TabDurSymSchema } from ".";

/**
 * Base schema with attribute, to simplify types for TabGrpSchema
 */
const TabGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTabGrpAnlSchema.entries,
	...AttrTabGrpGesSchema.entries,
	...AttrTabGrpLogSchema.entries,
	...AttrTabGrpVisSchema.entries,
});

/**
 * A group of simultaneous tab notes, comparable to a <gi scheme="MEI">chord</gi> in CMN. Rarely, may also contain rests, as in some "German" lute tablatures.
 * @see https://music-encoding.org/guidelines/v5/elements/tabGrp.html
 */
export const TabGrpSchema = v.intersect([
	TabGrpBaseSchema,
	v.object({
		/**
		 * Reference to element note
		 * @see https://music-encoding.org/guidelines/v5/elements/note.html
		 */
		note: v.optional(
			v.union([v.lazy(() => NoteSchema), v.array(v.lazy(() => NoteSchema))]),
		),
		/**
		 * Reference to element rest
		 * @see https://music-encoding.org/guidelines/v5/elements/rest.html
		 */
		rest: v.optional(
			v.union([v.lazy(() => RestSchema), v.array(v.lazy(() => RestSchema))]),
		),
		/**
		 * Reference to element tabDurSym
		 * @see https://music-encoding.org/guidelines/v5/elements/tabDurSym.html
		 */
		tabDurSym: v.optional(v.lazy(() => TabDurSymSchema)),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type TabGrpData = v.InferOutput<typeof TabGrpSchema>;

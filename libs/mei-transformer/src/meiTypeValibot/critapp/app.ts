import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrCommonSchema, AttrLangSchema } from "../shared";
import { LemSchema } from "./lem";
import { RdgSchema } from "./rdg";

/**
 * Contains one or more alternative encodings for the same point in a text.
 * @see https://music-encoding.org/guidelines/v5/elements/app.html
 */
export const AppSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	/**
	 * Contains a single reading within a textual variation.
	 * @see https://music-encoding.org/guidelines/v5/elements/rdg.html
	 */
	rdg: v.union([v.lazy(() => RdgSchema), v.array(v.lazy(() => RdgSchema))]),

	/**
	 * Contains the lemma, or base text, of a textual variation.
	 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
	 */
	lem: v.optional(
		v.union([v.lazy(() => LemSchema), v.array(v.lazy(() => LemSchema))]),
	),
});

export type AppData = v.InferOutput<typeof AppSchema>;

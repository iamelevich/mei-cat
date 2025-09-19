import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { LemSchema, RdgSchema } from ".";

/**
 * Base schema with attribute, to simplify types for AppSchema
 */
const AppBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Contains one or more alternative encodings.
 * @see https://music-encoding.org/guidelines/v5/elements/app.html
 */
export const AppSchema = v.intersect([
	AppBaseSchema,
	v.object({
		/**
		 * Reference to element lem
		 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
		 */
		lem: v.optional(v.lazy(() => LemSchema)),
		/**
		 * Reference to element rdg
		 * @see https://music-encoding.org/guidelines/v5/elements/rdg.html
		 */
		rdg: v.optional(
			v.union([v.lazy(() => RdgSchema), v.array(v.lazy(() => RdgSchema))]),
		),
	}),
]);

export type AppData = v.InferOutput<typeof AppSchema>;

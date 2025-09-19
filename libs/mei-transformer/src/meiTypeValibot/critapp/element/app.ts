import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { LemSchema } from "../element/lem";
import { RdgSchema } from "../element/rdg";

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
export const AppSchema = v.lazy(() =>
	v.intersect([
		AppBaseSchema,
		v.object({
			/**
			 * Reference to element lem
			 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
			 */
			lem: v.optional(LemSchema),
			/**
			 * Reference to element rdg
			 * @see https://music-encoding.org/guidelines/v5/elements/rdg.html
			 */
			rdg: v.optional(v.union([RdgSchema, v.array(RdgSchema)])),
		}),
	]),
);

export type AppData = v.InferOutput<typeof AppSchema>;

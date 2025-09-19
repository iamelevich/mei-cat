import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrMeiVersionSchema,
	MeiSchema,
} from "../../shared";
import { MeiHeadSchema } from "../../header";

/**
 * Base schema with attribute, to simplify types for MeiCorpusSchema
 */
const MeiCorpusBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMeiVersionSchema.entries,
});

/**
 * A group of related MEI documents, consisting of a header for the group, and one or more <gi scheme="MEI">mei</gi> elements, each with its own complete header.
 * @see https://music-encoding.org/guidelines/v5/elements/meiCorpus.html
 */
export const MeiCorpusSchema = v.intersect([
	MeiCorpusBaseSchema,
	v.object({
		/**
		 * Reference to element mei
		 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
		 */
		mei: v.optional(
			v.union([v.lazy(() => MeiSchema), v.array(v.lazy(() => MeiSchema))]),
		),
		/**
		 * Reference to element meiHead
		 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
		 */
		meiHead: v.optional(v.lazy(() => MeiHeadSchema)),
	}),
]);

export type MeiCorpusData = v.InferOutput<typeof MeiCorpusSchema>;

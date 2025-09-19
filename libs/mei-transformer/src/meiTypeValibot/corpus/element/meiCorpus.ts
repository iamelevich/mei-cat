import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { MeiHeadSchema } from "../../header/element/meiHead";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMeiVersionSchema } from "../../shared/attr/meiVersion";
import { MeiSchema } from "../../shared/element/mei";

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
export const MeiCorpusSchema = v.lazy(() =>
	v.intersect([
		MeiCorpusBaseSchema,
		v.object({
			/**
			 * Reference to element mei
			 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
			 */
			mei: v.optional(v.union([v.array(MeiSchema), MeiSchema])),
			/**
			 * Reference to element meiHead
			 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
			 */
			meiHead: v.optional(MeiHeadSchema),
		}),
	]),
);

export type MeiCorpusData = v.InferOutput<typeof MeiCorpusSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { MeiHeadSchema } from "../../header/element/meiHead";
import { AttrIdSchema } from "../attr/id";
import { AttrMeiVersionSchema } from "../attr/meiVersion";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { MusicSchema } from "../element/music";

/**
 * Base schema with attribute, to simplify types for MeiSchema
 */
const MeiBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrIdSchema.entries,
	...AttrMeiVersionSchema.entries,
	...AttrResponsibilitySchema.entries,
});

/**
 * Contains a single MEI-conformant document, consisting of an MEI header and a musical text, either in isolation or as part of an meiCorpus element.
 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
 */
export const MeiSchema = v.lazy(() =>
	v.intersect([
		MeiBaseSchema,
		v.object({
			/**
			 * Reference to element meiHead
			 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
			 */
			meiHead: v.optional(MeiHeadSchema),
			/**
			 * Reference to element music
			 * @see https://music-encoding.org/guidelines/v5/elements/music.html
			 */
			music: v.optional(MusicSchema),
		}),
	]),
);

export type MeiData = v.InferOutput<typeof MeiSchema>;

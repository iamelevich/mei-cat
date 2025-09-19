import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { MeiHeadSchema } from "../../header";
import {
	AttrIdSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
} from "..";
import { MusicSchema } from ".";

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
export const MeiSchema = v.intersect([
	MeiBaseSchema,
	v.object({
		/**
		 * Reference to element meiHead
		 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
		 */
		meiHead: v.optional(v.lazy(() => MeiHeadSchema)),
		/**
		 * Reference to element music
		 * @see https://music-encoding.org/guidelines/v5/elements/music.html
		 */
		music: v.optional(v.lazy(() => MusicSchema)),
	}),
]);

export type MeiData = v.InferOutput<typeof MeiSchema>;

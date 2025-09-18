import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { MeiHeadSchema } from "../header/meiHead";
import { AttrIdSchema } from "./attr/id";
import { AttrMeiVersionSchema } from "./attr/meiVersion";
import { AttrResponsibilitySchema } from "./attr/responsibility";
import { MusicSchema } from "./music";

/**
 * Simplified schema for mei element.
 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
 */
export const MeiSchema = v.object({
	...StandardTagSchema.entries,
	...AttrIdSchema.entries,
	...AttrMeiVersionSchema.entries,
	...AttrResponsibilitySchema.entries,

	/**
	 * Supplies the descriptive and declarative metadata prefixed to every MEI-conformant text.
	 * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
	 */
	meiHead: v.lazy(() => MeiHeadSchema),

	/**
	 * Contains a single musical text of any kind, whether unitary or composite,
	 * for example, an etude, opera, song cycle, symphony, or anthology of piano solos.
	 * @see https://music-encoding.org/guidelines/v5/elements/music.html
	 */
	music: v.lazy(() => MusicSchema),
});

export type MeiData = v.InferOutput<typeof MeiSchema>;

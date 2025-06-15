import { type Static, Type } from "@sinclair/typebox";
import {
	AttrIdSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
} from "../attributes";
import { StandardTagSchema } from "../common";
import { MeiHeadSchema } from "../header/meiHead";
import { MusicSchema } from "./music";

/**
 * Contains a single MEI-conformant document, consisting of an MEI header and a musical text, either in isolation or as part of an meiCorpus element.
 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
 */
export const MeiSchema = Type.Composite([
	StandardTagSchema,
	AttrIdSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
	Type.Object({
		meiHead: MeiHeadSchema,
		music: MusicSchema,
	}),
]);

/**
 * Contains a single MEI-conformant document, consisting of an MEI header and a musical text, either in isolation or as part of an meiCorpus element.
 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
 */
export type Mei = Static<typeof MeiSchema>;

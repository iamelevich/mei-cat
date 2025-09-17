import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrIdSchema } from "./attr/id";
import { AttrMeiVersionSchema } from "./attr/meiVersion";
import { AttrResponsibilitySchema } from "./attr/responsibility";

/**
 * Contains a single MEI-conformant document, consisting of an MEI header and a musical text, either in isolation or as part of an meiCorpus element.
 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
 */
export const MeiSchema = Type.Intersect([
	StandardTagSchema,
	AttrIdSchema,
	AttrMeiVersionSchema,
	AttrResponsibilitySchema,
	Type.Object({
    /**
     * The MEI header.
     * @see https://music-encoding.org/guidelines/v5/elements/meiHead.html
     */
		meiHead: Type.Ref("meihead"),

    /**
     * The musical text.
     * @see https://music-encoding.org/guidelines/v5/elements/music.html
     */
		music: Type.Ref("music"),
	}),
]);

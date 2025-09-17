import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrTypedSchema } from "./attr/typed";

/**
 * Person or organization who is a writer of the text of a song.
 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
 */
export const LyricistSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);


import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";

/**
 * Individual lyric syllable.
 * @see https://music-encoding.org/guidelines/v5/elements/syl.html
 */
export const SylSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTextRenditionSchema.entries,
});

export type SylData = v.InferOutput<typeof SylSchema>;

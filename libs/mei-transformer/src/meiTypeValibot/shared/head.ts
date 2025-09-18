import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { EditLikeSchema, TranscriptionLikeSchema } from "../edittrans";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";
import { AttrXySchema } from "./attr/xy";
import { TextPhraseLikeSchema } from "./model/textPhraseLike";

/**
 * Simplified schema for head element.
 * @see https://music-encoding.org/guidelines/v5/elements/head.html
 */
export const HeadSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrLangSchema.entries,
		...AttrXySchema.entries,
	}),
	TextPhraseLikeSchema,
	EditLikeSchema,
	TranscriptionLikeSchema,
]);

export type HeadData = v.InferOutput<typeof HeadSchema>;

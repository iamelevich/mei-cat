import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { FLikeSchema } from "../harmony";
import {
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
} from "../neumes";
import {
	AttrCommonSchema,
	AttrLangSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
} from "../shared";
import { DivLikeSchema } from "../text";
import { GraphicPrimitiveLikeSchema } from "../usersymbols";
import { AttrEditSchema } from "./attr/edit";
import { AttrTransSchema } from "./attr/trans";
import {
	EditLikeSchema,
	EditTransPartSchema,
	TranscriptionLikeSchema,
} from "./model";

/**
 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
 */
export const AbbrSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrEditSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrLangSchema.entries,
		...AttrTransSchema.entries,

		/**
		 * Records the expansion of a text abbreviation.
		 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html#expan
		 */
		"@expan": v.optional(v.string()),
	}),
	DivLikeSchema,
	EditLikeSchema,
	EditTransPartSchema,
	FLikeSchema,
	GraphicPrimitiveLikeSchema,
	LayerPartSchema,
	MilestoneLikeMusicSchema,
	NeumeComponentModifierLikeSchema,
	NeumeModifierLikeSchema,
	NeumePartSchema,
	SectionPartSchema,
	StaffGrpLikeSchema,
	TranscriptionLikeSchema,
]);

export type AbbrData = v.InferOutput<typeof AbbrSchema>;

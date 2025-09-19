import * as v from "valibot";
import { AttrDirAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrDirGesSchema } from "../../gestural";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrDirVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrDirLogSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DirSchema
 */
const DirBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDirAnlSchema.entries,
	...AttrDirGesSchema.entries,
	...AttrDirLogSchema.entries,
	...AttrDirVisSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * An instruction expressed as a combination of text and symbols, typically above, below, or between staves, but not on the staff — that is not encoded elsewhere in more specific elements, like <gi scheme="MEI">tempo</gi>, <gi scheme="MEI">dynam</gi> or <gi scheme="MEI">repeatMark</gi>.
 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
 */
export const DirSchema = v.intersect([
	DirBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type DirData = v.InferOutput<typeof DirSchema>;

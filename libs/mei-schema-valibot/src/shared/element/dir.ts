import * as v from "valibot";
import { AttrDirAnlSchema } from "../../analytical/attr/dir.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrDirGesSchema } from "../../gestural/attr/dir.ges";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrDirVisSchema } from "../../visual/attr/dir.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrDirLogSchema } from "../attr/dir.log";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

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
export const DirSchema = v.lazy(() =>
	v.intersect([
		DirBaseSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type DirData = v.InferOutput<typeof DirSchema>;

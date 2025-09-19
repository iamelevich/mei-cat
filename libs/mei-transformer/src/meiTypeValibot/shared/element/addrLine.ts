import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for AddrLineSchema
 */
const AddrLineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Single line of a postal address.
 * @see https://music-encoding.org/guidelines/v5/elements/addrLine.html
 */
export const AddrLineSchema = v.lazy(() =>
	v.intersect([
		AddrLineBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type AddrLineData = v.InferOutput<typeof AddrLineSchema>;

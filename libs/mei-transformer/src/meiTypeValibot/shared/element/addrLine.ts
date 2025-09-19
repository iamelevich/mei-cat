import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeSchema,
} from "..";

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
export const AddrLineSchema = v.intersect([
	AddrLineBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type AddrLineData = v.InferOutput<typeof AddrLineSchema>;

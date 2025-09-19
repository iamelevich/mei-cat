import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrEditSchema } from "../../edittrans/attr/edit";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrNameSchema } from "../../shared/attr/name";
import { ModelTextPhraseLikeSchema } from "../../shared/model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for SettlementSchema
 */
const SettlementBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrNameSchema.entries,
});

/**
 * Contains the name of a settlement such as a city, town, or village identified as a single geopolitical or administrative unit.
 * @see https://music-encoding.org/guidelines/v5/elements/settlement.html
 */
export const SettlementSchema = v.lazy(() =>
	v.intersect([
		SettlementBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type SettlementData = v.InferOutput<typeof SettlementSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrNameSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const SettlementSchema = v.intersect([
	SettlementBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type SettlementData = v.InferOutput<typeof SettlementSchema>;

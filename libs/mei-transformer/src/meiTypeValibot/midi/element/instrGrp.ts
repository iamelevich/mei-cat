import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelInstrDefLikeSchema } from "../../shared";

/**
 * Base schema with attribute, to simplify types for InstrGrpSchema
 */
const InstrGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Collects MIDI instrument definitions.
 * @see https://music-encoding.org/guidelines/v5/elements/instrGrp.html
 */
export const InstrGrpSchema = v.intersect([
	InstrGrpBaseSchema,
	ModelInstrDefLikeSchema,
]);

export type InstrGrpData = v.InferOutput<typeof InstrGrpSchema>;

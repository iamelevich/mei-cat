import * as v from "valibot";
import { type InstrDefData, InstrDefSchema } from "../../midi/element/instrDef";

/**
 * Groups elements used to declare a MIDI instrument.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.instrDefLike.html
 */
export const ModelInstrDefLikeSchema: v.GenericSchema<ModelInstrDefLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * MIDI instrument declaration.
			 * @see https://music-encoding.org/guidelines/v5/elements/instrDef.html
			 */
			instrDef: v.optional(v.union([InstrDefSchema, v.array(InstrDefSchema)])),
		}),
	);

export type ModelInstrDefLikeData = {
	instrDef?: InstrDefData | InstrDefData[];
};

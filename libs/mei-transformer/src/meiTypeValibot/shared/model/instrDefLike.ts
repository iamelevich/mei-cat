import * as v from "valibot";
import { type InstrDefData, InstrDefSchema } from "../../midi";

/**
 * Groups elements used to declare a MIDI instrument.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.instrDefLike.html
 */
export const ModelInstrDefLikeSchema: v.GenericSchema<ModelInstrDefLikeData> =
	v.object({
		/**
		 * MIDI instrument declaration.
		 * @see https://music-encoding.org/guidelines/v5/elements/instrDef.html
		 */
		instrDef: v.optional(
			v.union([
				v.lazy(() => InstrDefSchema),
				v.array(v.lazy(() => InstrDefSchema)),
			]),
		),
	});

export type ModelInstrDefLikeData = {
	instrDef?: InstrDefData | InstrDefData[];
};

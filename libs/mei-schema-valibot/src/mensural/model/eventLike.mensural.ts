import * as v from "valibot";
import { type DotData, DotSchema } from "../../shared/element/dot";
import { type LigatureData, LigatureSchema } from "../element/ligature";
import { type MensurData, MensurSchema } from "../element/mensur";
import { type ProportData, ProportSchema } from "../element/proport";

/**
 * Groups event elements that occur in the mensural repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.mensural.html
 */
export const ModelEventLikeMensuralSchema: v.GenericSchema<ModelEventLikeMensuralData> =
	v.lazy(() =>
		v.object({
			/**
			 * Dot of augmentation or division.
			 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
			 */
			dot: v.optional(v.union([v.array(DotSchema), DotSchema])),
			/**
			 * A mensural notation symbol that combines two or more notes into a single sign.
			 * @see https://music-encoding.org/guidelines/v5/elements/ligature.html
			 */
			ligature: v.optional(v.union([v.array(LigatureSchema), LigatureSchema])),
			/**
			 * Collects information about the metrical relationship between a note value and the next smaller value; that is, either triple or duple.
			 * @see https://music-encoding.org/guidelines/v5/elements/mensur.html
			 */
			mensur: v.optional(v.union([v.array(MensurSchema), MensurSchema])),
			/**
			 * Description of note duration as arithmetic ratio.
			 * @see https://music-encoding.org/guidelines/v5/elements/proport.html
			 */
			proport: v.optional(v.union([v.array(ProportSchema), ProportSchema])),
		}),
	);

export type ModelEventLikeMensuralData = {
	dot?: DotData | DotData[];
	ligature?: LigatureData | LigatureData[];
	mensur?: MensurData | MensurData[];
	proport?: ProportData | ProportData[];
};

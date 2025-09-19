import * as v from "valibot";
import { type DotData, DotSchema } from "../../shared";
import {
	type LigatureData,
	LigatureSchema,
	type MensurData,
	MensurSchema,
	type ProportData,
	ProportSchema,
} from "..";

/**
 * Groups event elements that occur in the mensural repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.mensural.html
 */
export const ModelEventLikeMensuralSchema: v.GenericSchema<ModelEventLikeMensuralData> =
	v.object({
		/**
		 * Dot of augmentation or division.
		 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
		 */
		dot: v.optional(
			v.union([v.lazy(() => DotSchema), v.array(v.lazy(() => DotSchema))]),
		),
		/**
		 * A mensural notation symbol that combines two or more notes into a single sign.
		 * @see https://music-encoding.org/guidelines/v5/elements/ligature.html
		 */
		ligature: v.optional(
			v.union([
				v.lazy(() => LigatureSchema),
				v.array(v.lazy(() => LigatureSchema)),
			]),
		),
		/**
		 * Collects information about the metrical relationship between a note value and the next smaller value; that is, either triple or duple.
		 * @see https://music-encoding.org/guidelines/v5/elements/mensur.html
		 */
		mensur: v.optional(
			v.union([
				v.lazy(() => MensurSchema),
				v.array(v.lazy(() => MensurSchema)),
			]),
		),
		/**
		 * Description of note duration as arithmetic ratio.
		 * @see https://music-encoding.org/guidelines/v5/elements/proport.html
		 */
		proport: v.optional(
			v.union([
				v.lazy(() => ProportSchema),
				v.array(v.lazy(() => ProportSchema)),
			]),
		),
	});

export type ModelEventLikeMensuralData = {
	dot?: DotData | DotData[];
	ligature?: LigatureData | LigatureData[];
	mensur?: MensurData | MensurData[];
	proport?: ProportData | ProportData[];
};

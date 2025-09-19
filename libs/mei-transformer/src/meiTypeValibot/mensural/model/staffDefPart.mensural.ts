import * as v from "valibot";
import {
	type MensurData,
	MensurSchema,
	type ProportData,
	ProportSchema,
} from "..";

/**
 * Groups elements that may appear in the declaration of staff features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.staffDefPart.mensural.html
 */
export const ModelStaffDefPartMensuralSchema: v.GenericSchema<ModelStaffDefPartMensuralData> =
	v.object({
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

export type ModelStaffDefPartMensuralData = {
	mensur?: MensurData | MensurData[];
	proport?: ProportData | ProportData[];
};

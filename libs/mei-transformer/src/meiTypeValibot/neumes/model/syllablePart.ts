import * as v from "valibot";
import {
	type AccidData,
	AccidSchema,
	type ClefData,
	ClefSchema,
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
	type ModelSylLikeData,
	ModelSylLikeSchema,
} from "../../shared";
import { type ModelEventLikeNeumesData, ModelEventLikeNeumesSchema } from "..";
import { type ModelMidiLikeData, ModelMidiLikeSchema } from "../../midi";
import { type ModelVerseLikeData, ModelVerseLikeSchema } from "../../lyrics";

/**
 * Groups elements that may appear as part of the content of a syllable.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.syllablePart.html
 */
export const ModelSyllablePartSchema: v.GenericSchema<ModelSyllablePartData> =
	v.intersect([
		v.object({
			/**
			 * Records a temporary alteration to the pitch of a note.
			 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
			 */
			accid: v.optional(
				v.union([
					v.lazy(() => AccidSchema),
					v.array(v.lazy(() => AccidSchema)),
				]),
			),
			/**
			 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
			 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
			 */
			clef: v.optional(
				v.union([v.lazy(() => ClefSchema), v.array(v.lazy(() => ClefSchema))]),
			),
		}),
		ModelControlEventLikeSchema,
		ModelEventLikeNeumesSchema,
		ModelMidiLikeSchema,
		ModelSylLikeSchema,
		ModelVerseLikeSchema,
	]);

export type ModelSyllablePartData = {
	accid?: AccidData | AccidData[];
	clef?: ClefData | ClefData[];
} & ModelControlEventLikeData &
	ModelEventLikeNeumesData &
	ModelMidiLikeData &
	ModelSylLikeData &
	ModelVerseLikeData;

import * as v from "valibot";
import {
	type ModelVerseLikeData,
	ModelVerseLikeSchema,
} from "../../lyrics/model/verseLike";
import {
	type ModelMidiLikeData,
	ModelMidiLikeSchema,
} from "../../midi/model/midiLike";
import { type AccidData, AccidSchema } from "../../shared/element/accid";
import { type ClefData, ClefSchema } from "../../shared/element/clef";
import {
	type ModelControlEventLikeData,
	ModelControlEventLikeSchema,
} from "../../shared/model/controlEventLike";
import {
	type ModelSylLikeData,
	ModelSylLikeSchema,
} from "../../shared/model/sylLike";
import {
	type ModelEventLikeNeumesData,
	ModelEventLikeNeumesSchema,
} from "../model/eventLike.neumes";

/**
 * Groups elements that may appear as part of the content of a syllable.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.syllablePart.html
 */
export const ModelSyllablePartSchema: v.GenericSchema<ModelSyllablePartData> =
	v.lazy(() =>
		v.intersect([
			v.object({
				/**
				 * Records a temporary alteration to the pitch of a note.
				 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
				 */
				accid: v.optional(v.union([AccidSchema, v.array(AccidSchema)])),
				/**
				 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
				 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
				 */
				clef: v.optional(v.union([ClefSchema, v.array(ClefSchema)])),
			}),
			ModelControlEventLikeSchema,
			ModelEventLikeNeumesSchema,
			ModelMidiLikeSchema,
			ModelSylLikeSchema,
			ModelVerseLikeSchema,
		]),
	);

export type ModelSyllablePartData = {
	accid?: AccidData | AccidData[];
	clef?: ClefData | ClefData[];
} & ModelControlEventLikeData &
	ModelEventLikeNeumesData &
	ModelMidiLikeData &
	ModelSylLikeData &
	ModelVerseLikeData;

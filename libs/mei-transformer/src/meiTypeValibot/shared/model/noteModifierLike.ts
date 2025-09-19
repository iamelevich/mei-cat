import * as v from "valibot";
import { type AccidData, AccidSchema } from "../element/accid";
import { type ArticData, ArticSchema } from "../element/artic";
import { type DotData, DotSchema } from "../element/dot";

/**
 * Groups elements that modify note-like features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.noteModifierLike.html
 */
export const ModelNoteModifierLikeSchema: v.GenericSchema<ModelNoteModifierLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Records a temporary alteration to the pitch of a note.
			 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
			 */
			accid: v.optional(v.union([AccidSchema, v.array(AccidSchema)])),
			/**
			 * An indication of how to play a note or chord.
			 * @see https://music-encoding.org/guidelines/v5/elements/artic.html
			 */
			artic: v.optional(v.union([ArticSchema, v.array(ArticSchema)])),
			/**
			 * Dot of augmentation or division.
			 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
			 */
			dot: v.optional(v.union([DotSchema, v.array(DotSchema)])),
		}),
	);

export type ModelNoteModifierLikeData = {
	accid?: AccidData | AccidData[];
	artic?: ArticData | ArticData[];
	dot?: DotData | DotData[];
};

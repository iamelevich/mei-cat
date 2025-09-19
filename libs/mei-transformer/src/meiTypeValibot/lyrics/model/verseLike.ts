import * as v from "valibot";
import { type RefrainData, RefrainSchema } from "../element/refrain";
import { type VerseData, VerseSchema } from "../element/verse";

/**
 * Groups elements that contain a lyric verse.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.verseLike.html
 */
export const ModelVerseLikeSchema: v.GenericSchema<ModelVerseLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Recurring lyrics, especially at the end of each verse or stanza of a poem or song lyrics; a chorus.
			 * @see https://music-encoding.org/guidelines/v5/elements/refrain.html
			 */
			refrain: v.optional(v.union([v.array(RefrainSchema), RefrainSchema])),
			/**
			 * Division of a poem or song lyrics, sometimes having a fixed length, meter or rhyme scheme; a stanza.
			 * @see https://music-encoding.org/guidelines/v5/elements/verse.html
			 */
			verse: v.optional(v.union([v.array(VerseSchema), VerseSchema])),
		}),
);

export type ModelVerseLikeData = {
	refrain?: RefrainData | RefrainData[];
	verse?: VerseData | VerseData[];
};

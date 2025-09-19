import * as v from "valibot";
import {
	type RefrainData,
	RefrainSchema,
	type VerseData,
	VerseSchema,
} from "..";

/**
 * Groups elements that contain a lyric verse.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.verseLike.html
 */
export const ModelVerseLikeSchema: v.GenericSchema<ModelVerseLikeData> =
	v.object({
		/**
		 * Recurring lyrics, especially at the end of each verse or stanza of a poem or song lyrics; a chorus.
		 * @see https://music-encoding.org/guidelines/v5/elements/refrain.html
		 */
		refrain: v.optional(
			v.union([
				v.lazy(() => RefrainSchema),
				v.array(v.lazy(() => RefrainSchema)),
			]),
		),
		/**
		 * Division of a poem or song lyrics, sometimes having a fixed length, meter or rhyme scheme; a stanza.
		 * @see https://music-encoding.org/guidelines/v5/elements/verse.html
		 */
		verse: v.optional(
			v.union([v.lazy(() => VerseSchema), v.array(v.lazy(() => VerseSchema))]),
		),
	});

export type ModelVerseLikeData = {
	refrain?: RefrainData | RefrainData[];
	verse?: VerseData | VerseData[];
};

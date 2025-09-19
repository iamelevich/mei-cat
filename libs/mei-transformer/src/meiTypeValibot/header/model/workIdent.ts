import * as v from "valibot";
import {
	type ModelIncipLikeData,
	ModelIncipLikeSchema,
	type TempoData,
	TempoSchema,
} from "../../shared";
import {
	type KeyData,
	KeySchema,
	type MensurationData,
	MensurationSchema,
	type MeterData,
	MeterSchema,
} from "..";

/**
 * Groups elements that assist in the identification of a work.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.workIdent.html
 */
export const ModelWorkIdentSchema: v.GenericSchema<ModelWorkIdentData> =
	v.intersect([
		v.object({
			/**
			 * Key captures information about tonal center and mode.
			 * @see https://music-encoding.org/guidelines/v5/elements/key.html
			 */
			key: v.optional(
				v.union([v.lazy(() => KeySchema), v.array(v.lazy(() => KeySchema))]),
			),
			/**
			 * Captures information about mensuration within bibliographic descriptions.
			 * @see https://music-encoding.org/guidelines/v5/elements/mensuration.html
			 */
			mensuration: v.optional(
				v.union([
					v.lazy(() => MensurationSchema),
					v.array(v.lazy(() => MensurationSchema)),
				]),
			),
			/**
			 * Captures information about the time signature within bibliographic descriptions.
			 * @see https://music-encoding.org/guidelines/v5/elements/meter.html
			 */
			meter: v.optional(
				v.union([
					v.lazy(() => MeterSchema),
					v.array(v.lazy(() => MeterSchema)),
				]),
			),
			/**
			 * Text and symbols descriptive of tempo, mood, or style, e.g. , &#34;allarg.&#34;, &#34;a tempo&#34;, &#34;cantabile&#34;, &#34;Moderato&#34;, &#34;♩=60&#34;, &#34;Moderato ♩ =60&#34;).
			 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
			 */
			tempo: v.optional(
				v.union([
					v.lazy(() => TempoSchema),
					v.array(v.lazy(() => TempoSchema)),
				]),
			),
		}),
		ModelIncipLikeSchema,
	]);

export type ModelWorkIdentData = {
	key?: KeyData | KeyData[];
	mensuration?: MensurationData | MensurationData[];
	meter?: MeterData | MeterData[];
	tempo?: TempoData | TempoData[];
} & ModelIncipLikeData;

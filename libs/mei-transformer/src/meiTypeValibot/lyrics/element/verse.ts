import * as v from "valibot";
import { AttrVerseAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelEditLikeSchema } from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrVerseGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	AttrLangSchema,
	DirSchema,
	DynamSchema,
	LabelAbbrSchema,
	LabelSchema,
	ModelLbLikeSchema,
	ModelSylLikeSchema,
	SpaceSchema,
	TempoSchema,
} from "../../shared";
import { AttrVerseVisSchema } from "../../visual";
import { AttrVerseLogSchema } from "..";
import { VoltaSchema } from ".";

/**
 * Base schema with attribute, to simplify types for VerseSchema
 */
const VerseBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrVerseAnlSchema.entries,
	...AttrVerseGesSchema.entries,
	...AttrVerseLogSchema.entries,
	...AttrVerseVisSchema.entries,
});

/**
 * Division of a poem or song lyrics, sometimes having a fixed length, meter or rhyme scheme; a stanza.
 * @see https://music-encoding.org/guidelines/v5/elements/verse.html
 */
export const VerseSchema = v.intersect([
	VerseBaseSchema,
	v.object({
		/**
		 * Reference to element dir
		 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
		 */
		dir: v.optional(
			v.union([v.lazy(() => DirSchema), v.array(v.lazy(() => DirSchema))]),
		),
		/**
		 * Reference to element dynam
		 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
		 */
		dynam: v.optional(
			v.union([v.lazy(() => DynamSchema), v.array(v.lazy(() => DynamSchema))]),
		),
		/**
		 * Reference to element label
		 * @see https://music-encoding.org/guidelines/v5/elements/label.html
		 */
		label: v.optional(
			v.union([v.lazy(() => LabelSchema), v.array(v.lazy(() => LabelSchema))]),
		),
		/**
		 * Reference to element labelAbbr
		 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
		 */
		labelAbbr: v.optional(
			v.union([
				v.lazy(() => LabelAbbrSchema),
				v.array(v.lazy(() => LabelAbbrSchema)),
			]),
		),
		/**
		 * Reference to element space
		 * @see https://music-encoding.org/guidelines/v5/elements/space.html
		 */
		space: v.optional(
			v.union([v.lazy(() => SpaceSchema), v.array(v.lazy(() => SpaceSchema))]),
		),
		/**
		 * Reference to element tempo
		 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
		 */
		tempo: v.optional(
			v.union([v.lazy(() => TempoSchema), v.array(v.lazy(() => TempoSchema))]),
		),
		/**
		 * Reference to element volta
		 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
		 */
		volta: v.union([
			v.lazy(() => VoltaSchema),
			v.array(v.lazy(() => VoltaSchema)),
		]),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelLbLikeSchema,
	ModelSylLikeSchema,
]);

export type VerseData = v.InferOutput<typeof VerseSchema>;

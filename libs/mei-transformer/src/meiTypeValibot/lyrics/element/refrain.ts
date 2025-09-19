import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	DirSchema,
	DynamSchema,
	ModelLbLikeSchema,
	ModelSylLikeSchema,
	SpaceSchema,
	TempoSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrRefrainAnlSchema } from "../../analytical";
import { AttrRefrainGesSchema } from "../../gestural";
import { AttrRefrainLogSchema } from "..";
import { AttrRefrainVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelEditLikeSchema } from "../../edittrans";
import { VoltaSchema } from ".";

/**
 * Base schema with attribute, to simplify types for RefrainSchema
 */
const RefrainBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrRefrainAnlSchema.entries,
	...AttrRefrainGesSchema.entries,
	...AttrRefrainLogSchema.entries,
	...AttrRefrainVisSchema.entries,
});

/**
 * Recurring lyrics, especially at the end of each verse or stanza of a poem or song lyrics; a chorus.
 * @see https://music-encoding.org/guidelines/v5/elements/refrain.html
 */
export const RefrainSchema = v.intersect([
	RefrainBaseSchema,
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

export type RefrainData = v.InferOutput<typeof RefrainSchema>;

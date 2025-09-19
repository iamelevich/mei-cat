import * as v from "valibot";
import { AttrVerseAnlSchema } from "../../analytical/attr/verse.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrVerseGesSchema } from "../../gestural/attr/verse.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { DirSchema } from "../../shared/element/dir";
import { DynamSchema } from "../../shared/element/dynam";
import { LabelSchema } from "../../shared/element/label";
import { LabelAbbrSchema } from "../../shared/element/labelAbbr";
import { SpaceSchema } from "../../shared/element/space";
import { TempoSchema } from "../../shared/element/tempo";
import { ModelLbLikeSchema } from "../../shared/model/lbLike";
import { ModelSylLikeSchema } from "../../shared/model/sylLike";
import { AttrVerseVisSchema } from "../../visual/attr/verse.vis";
import { AttrVerseLogSchema } from "../attr/verse.log";
import { VoltaSchema } from "../element/volta";

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
export const VerseSchema = v.lazy(() =>
	v.intersect([
		VerseBaseSchema,
		v.object({
			/**
			 * Reference to element dir
			 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
			 */
			dir: v.optional(v.union([DirSchema, v.array(DirSchema)])),
			/**
			 * Reference to element dynam
			 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
			 */
			dynam: v.optional(v.union([DynamSchema, v.array(DynamSchema)])),
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([LabelSchema, v.array(LabelSchema)])),
			/**
			 * Reference to element labelAbbr
			 * @see https://music-encoding.org/guidelines/v5/elements/labelAbbr.html
			 */
			labelAbbr: v.optional(
				v.union([LabelAbbrSchema, v.array(LabelAbbrSchema)]),
			),
			/**
			 * Reference to element space
			 * @see https://music-encoding.org/guidelines/v5/elements/space.html
			 */
			space: v.optional(v.union([SpaceSchema, v.array(SpaceSchema)])),
			/**
			 * Reference to element tempo
			 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
			 */
			tempo: v.optional(v.union([TempoSchema, v.array(TempoSchema)])),
			/**
			 * Reference to element volta
			 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
			 */
			volta: v.union([VoltaSchema, v.array(VoltaSchema)]),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelLbLikeSchema,
		ModelSylLikeSchema,
	]),
);

export type VerseData = v.InferOutput<typeof VerseSchema>;

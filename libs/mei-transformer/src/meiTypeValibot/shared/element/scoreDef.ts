import * as v from "valibot";
import { AttrScoreDefAnlSchema } from "../../analytical/attr/scoreDef.anl";
import { StandardTagSchema } from "../../common";
import { AttrScoreDefGesSchema } from "../../gestural/attr/scoreDef.ges";
import { ModelChordTableLikeSchema } from "../../harmony/model/chordTableLike";
import { InstrGrpSchema } from "../../midi/element/instrGrp";
import { ModelSymbolTableLikeSchema } from "../../usersymbols/model/symbolTableLike";
import { AttrScoreDefVisSchema } from "../../visual/attr/scoreDef.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrScoreDefLogSchema } from "../attr/scoreDef.log";
import { AmbitusSchema } from "../element/ambitus";
import { GrpSymSchema } from "../element/grpSym";
import { PgFootSchema } from "../element/pgFoot";
import { PgHeadSchema } from "../element/pgHead";
import { ModelKeySigLikeSchema } from "../model/keySigLike";
import { ModelMeterSigLikeSchema } from "../model/meterSigLike";
import { ModelStaffGrpLikeSchema } from "../model/staffGrpLike";

/**
 * Base schema with attribute, to simplify types for ScoreDefSchema
 */
const ScoreDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrScoreDefAnlSchema.entries,
	...AttrScoreDefGesSchema.entries,
	...AttrScoreDefLogSchema.entries,
	...AttrScoreDefVisSchema.entries,
});

/**
 * Container for score meta-information.
 * @see https://music-encoding.org/guidelines/v5/elements/scoreDef.html
 */
export const ScoreDefSchema = v.lazy(() =>
	v.intersect([
		ScoreDefBaseSchema,
		v.object({
			/**
			 * Reference to element ambitus
			 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
			 */
			ambitus: v.optional(AmbitusSchema),
			/**
			 * Reference to element grpSym
			 * @see https://music-encoding.org/guidelines/v5/elements/grpSym.html
			 */
			grpSym: v.optional(v.union([GrpSymSchema, v.array(GrpSymSchema)])),
			/**
			 * Reference to element instrGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/instrGrp.html
			 */
			instrGrp: v.optional(InstrGrpSchema),
			/**
			 * Reference to element pgFoot
			 * @see https://music-encoding.org/guidelines/v5/elements/pgFoot.html
			 */
			pgFoot: v.optional(v.union([PgFootSchema, v.array(PgFootSchema)])),
			/**
			 * Reference to element pgHead
			 * @see https://music-encoding.org/guidelines/v5/elements/pgHead.html
			 */
			pgHead: v.optional(v.union([PgHeadSchema, v.array(PgHeadSchema)])),
		}),
		ModelChordTableLikeSchema,
		ModelKeySigLikeSchema,
		ModelMeterSigLikeSchema,
		ModelStaffGrpLikeSchema,
		ModelSymbolTableLikeSchema,
	]),
);

export type ScoreDefData = v.InferOutput<typeof ScoreDefSchema>;

import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrScoreDefLogSchema,
	ModelKeySigLikeSchema,
	ModelMeterSigLikeSchema,
	ModelStaffGrpLikeSchema,
} from "..";
import { AttrScoreDefAnlSchema } from "../../analytical";
import { AttrScoreDefGesSchema } from "../../gestural";
import { AttrScoreDefVisSchema } from "../../visual";
import { AmbitusSchema, GrpSymSchema, PgFootSchema, PgHeadSchema } from ".";
import { InstrGrpSchema } from "../../midi";
import { ModelChordTableLikeSchema } from "../../harmony";
import { ModelSymbolTableLikeSchema } from "../../usersymbols";

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
export const ScoreDefSchema = v.intersect([
	ScoreDefBaseSchema,
	v.object({
		/**
		 * Reference to element ambitus
		 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
		 */
		ambitus: v.optional(v.lazy(() => AmbitusSchema)),
		/**
		 * Reference to element grpSym
		 * @see https://music-encoding.org/guidelines/v5/elements/grpSym.html
		 */
		grpSym: v.optional(
			v.union([
				v.lazy(() => GrpSymSchema),
				v.array(v.lazy(() => GrpSymSchema)),
			]),
		),
		/**
		 * Reference to element instrGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/instrGrp.html
		 */
		instrGrp: v.optional(v.lazy(() => InstrGrpSchema)),
		/**
		 * Reference to element pgFoot
		 * @see https://music-encoding.org/guidelines/v5/elements/pgFoot.html
		 */
		pgFoot: v.optional(
			v.union([
				v.lazy(() => PgFootSchema),
				v.array(v.lazy(() => PgFootSchema)),
			]),
		),
		/**
		 * Reference to element pgHead
		 * @see https://music-encoding.org/guidelines/v5/elements/pgHead.html
		 */
		pgHead: v.optional(
			v.union([
				v.lazy(() => PgHeadSchema),
				v.array(v.lazy(() => PgHeadSchema)),
			]),
		),
	}),
	ModelChordTableLikeSchema,
	ModelKeySigLikeSchema,
	ModelMeterSigLikeSchema,
	ModelStaffGrpLikeSchema,
	ModelSymbolTableLikeSchema,
]);

export type ScoreDefData = v.InferOutput<typeof ScoreDefSchema>;

import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
// Import child element schemas
import { AbbrSchema } from "../shared/abbr";
import { AttrCommonSchema } from "../shared/attr/common";
import { CorrSchema } from "./corr";
import { ExpanSchema } from "./expan";
import { OrigSchema } from "./orig";
import { RegSchema } from "./reg";
import { SicSchema } from "./sic";
import { SubstSchema } from "./subst";
import { UnclearSchema } from "./unclear";

/**
 * Groups a number of alternative encodings for the same point in a text.
 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
 */
export const ChoiceSchema: any = Type.Recursive((Self) =>
	Type.Intersect([
		StandardTagSchema,
		AttrCommonSchema,
		Type.Object(
			{
				// Child elements - zero or more of each
				/**
				 * Abbreviation or expansion.
				 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
				 */
				abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

				/**
				 * Choice element (recursive).
				 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
				 */
				choice: Type.Optional(Type.Union([Self, Type.Array(Self)])),

				/**
				 * Correction.
				 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
				 */
				corr: Type.Optional(Type.Union([CorrSchema, Type.Array(CorrSchema)])),

				/**
				 * Expansion.
				 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
				 */
				expan: Type.Optional(
					Type.Union([ExpanSchema, Type.Array(ExpanSchema)]),
				),

				/**
				 * Original text.
				 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
				 */
				orig: Type.Optional(Type.Union([OrigSchema, Type.Array(OrigSchema)])),

				/**
				 * Regularization.
				 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
				 */
				reg: Type.Optional(Type.Union([RegSchema, Type.Array(RegSchema)])),

				/**
				 * Sic.
				 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
				 */
				sic: Type.Optional(Type.Union([SicSchema, Type.Array(SicSchema)])),

				/**
				 * Substitution.
				 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
				 */
				subst: Type.Optional(
					Type.Union([SubstSchema, Type.Array(SubstSchema)]),
				),

				/**
				 * Unclear text.
				 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
				 */
				unclear: Type.Optional(
					Type.Union([UnclearSchema, Type.Array(UnclearSchema)]),
				),
			},
			{ additionalProperties: false },
		),
	]),
);

export type Choice = Static<typeof ChoiceSchema>;

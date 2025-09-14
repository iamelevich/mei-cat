import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
// Import child element schemas - avoiding circular references
import { AbbrSchema } from "../shared/abbr";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrExtentSchema } from "../shared/attr/extent";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrHandIdentSchema } from "../shared/attr/handIdent";
import { AttrLangSchema } from "../shared/attr/lang";
import { PSchema } from "../shared/p";
import { AttrAgentIdentSchema } from "./attr/agentIdent";
import { DelSchema } from "./del";
import { GapSchema } from "./gap";
import { OrigSchema } from "./orig";
import { RegSchema } from "./reg";
import { RestoreSchema } from "./restore";
import { SicSchema } from "./sic";
import { SubstSchema } from "./subst";
import { SuppliedSchema } from "./supplied";
import { UnclearSchema } from "./unclear";

/**
 * Contains an area of damage to the physical medium.
 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
 */
export const DamageSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAgentIdentSchema,
	AttrExtentSchema,
	AttrFacsimileSchema,
	AttrHandIdentSchema,
	AttrLangSchema,
	Type.Object(
		{
			/**
			 * Records the degree of damage.
			 * Value is plain text.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html#degree
			 */
			"@degree": Type.Optional(Type.String()),

			// Child elements - zero or more of each
			// Note: This is a simplified version with key elements to avoid circular references
			// Additional elements can be added as needed

			/**
			 * Abbreviation or expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

			// Note: add and corr elements are excluded to avoid circular references
			// They can be added later if needed

			/**
			 * Deletion.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(Type.Union([DelSchema, Type.Array(DelSchema)])),

			/**
			 * Gap.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(Type.Union([GapSchema, Type.Array(GapSchema)])),

			/**
			 * Original text.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(Type.Union([OrigSchema, Type.Array(OrigSchema)])),

			/**
			 * Paragraph.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),

			/**
			 * Regularization.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(Type.Union([RegSchema, Type.Array(RegSchema)])),

			/**
			 * Restoration.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([RestoreSchema, Type.Array(RestoreSchema)]),
			),

			/**
			 * Sic.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(Type.Union([SicSchema, Type.Array(SicSchema)])),

			/**
			 * Substitution.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(Type.Union([SubstSchema, Type.Array(SubstSchema)])),

			/**
			 * Supplied text.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([SuppliedSchema, Type.Array(SuppliedSchema)]),
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
]);

export type Damage = Static<typeof DamageSchema>;

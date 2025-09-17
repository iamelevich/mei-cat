import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrExtentSchema } from "../shared/attr/extent";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrHandIdentSchema } from "../shared/attr/handIdent";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrAgentIdentSchema } from "./attr/agentIdent";

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
			abbr: Type.Optional(
				Type.Union([Type.Ref("abbr"), Type.Array(Type.Ref("abbr"))]),
			),

			// Elements that would create circular dependencies
			/**
			 * Addition.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: Type.Optional(
				Type.Union([Type.Ref("add"), Type.Array(Type.Ref("add"))]),
			),

			/**
			 * Correction.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: Type.Optional(
				Type.Union([Type.Ref("corr"), Type.Array(Type.Ref("corr"))]),
			),

			/**
			 * Deletion.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(
				Type.Union([Type.Ref("del"), Type.Array(Type.Ref("del"))]),
			),

			/**
			 * Gap.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(
				Type.Union([Type.Ref("gap"), Type.Array(Type.Ref("gap"))]),
			),

			/**
			 * Original text.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(
				Type.Union([Type.Ref("orig"), Type.Array(Type.Ref("orig"))]),
			),

			/**
			 * Paragraph.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),

			/**
			 * Regularization.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(
				Type.Union([Type.Ref("reg"), Type.Array(Type.Ref("reg"))]),
			),

			/**
			 * Restoration.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([Type.Ref("restore"), Type.Array(Type.Ref("restore"))]),
			),

			/**
			 * Sic.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(
				Type.Union([Type.Ref("sic"), Type.Array(Type.Ref("sic"))]),
			),

			/**
			 * Substitution.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(
				Type.Union([Type.Ref("subst"), Type.Array(Type.Ref("subst"))]),
			),

			/**
			 * Supplied text.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([Type.Ref("supplied"), Type.Array(Type.Ref("supplied"))]),
			),

			/**
			 * Unclear text.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: Type.Optional(
				Type.Union([Type.Ref("unclear"), Type.Array(Type.Ref("unclear"))]),
			),
		},
		{ additionalProperties: false },
	),
]);

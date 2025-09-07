import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * (domains declaration) – Indicates which domains are included in the encoding.
 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html
 */
export const DomainsDeclSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Value conforms to data.BOOLEAN.
			 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html#anl
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
			 */
			"@anl": Type.Boolean(),
			/**
			 * Value conforms to data.BOOLEAN.
			 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html#ges
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
			 */
			"@ges": Type.Boolean(),
			/**
			 * Value conforms to data.BOOLEAN.
			 * @see https://music-encoding.org/guidelines/v5/elements/domainsDecl.html#vis
			 * @see https://music-encoding.org/guidelines/v5/data-types/data.BOOLEAN.html
			 */
			"@vis": Type.Boolean(),
		},
		{ additionalProperties: false },
	),
]);

export type DomainsDecl = Static<typeof DomainsDeclSchema>;

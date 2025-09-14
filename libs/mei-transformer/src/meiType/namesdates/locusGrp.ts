import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrFoliationSchemeSchema } from "../msDesc/attr/foliation";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { LocusSchema } from "./locus";

/**
 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
 */
export const LocusGrpSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFoliationSchemeSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - locus elements only
			// This element groups locations which together form a distinct but discontinuous item

			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(Type.Union([LocusSchema, Type.Array(LocusSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type LocusGrp = Static<typeof LocusGrpSchema>;

import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrFoliationSchemeSchema } from "../msDesc/attr/foliation";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
 */
export const LocusSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrFoliationSchemeSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - choice of text OR locus OR rend OR symbol
			// Text content is handled by Type.String() in the schema

			// Direct children elements
			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: Type.Optional(
				Type.Union([Type.Ref("locus"), Type.Array(Type.Ref("locus"))]),
			),

			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(
				Type.Union([Type.Ref("rend"), Type.Array(Type.Ref("rend"))]),
			),

			/**
			 * A reference to a previously defined symbol.
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: Type.Optional(
				Type.Union([Type.Ref("symbol"), Type.Array(Type.Ref("symbol"))]),
			),

			// Direct attributes for location specification
			/**
			 * Specifies the starting point of the location in a normalized form.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html#from
			 */
			from: Type.Optional(Type.String()),

			/**
			 * Specifies the end-point of the location in a normalized form.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html#to
			 */
			to: Type.Optional(Type.String()),
		},
		{ additionalProperties: false },
	),
]);

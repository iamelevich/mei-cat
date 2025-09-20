import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { type RendData, RendSchema } from "../../shared/element/rend";
import { type SymbolData, SymbolSchema } from "../../shared/element/symbol";
import { AttrFoliationSchemeSchema } from "../attr/foliation.scheme";

/**
 * Base schema with attribute, to simplify types for LocusSchema
 */
const LocusBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFoliationSchemeSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Specifies the starting point of the location in a normalized form.
	 */
	"@from": v.optional(v.string()),
	/**
	 * Specifies the end-point of the location in a normalized form.
	 */
	"@to": v.optional(v.string()),
});

type LocusBaseData = v.InferOutput<typeof LocusBaseSchema>;

/**
 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
 */
export const LocusSchema: v.GenericSchema<LocusData> = v.lazy(() =>
	v.intersect([
		LocusBaseSchema,
		v.object({
			/**
			 * Reference to element locus
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: v.optional(v.union([v.array(LocusSchema), LocusSchema])),
			/**
			 * Reference to element rend
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: v.optional(v.union([v.array(RendSchema), RendSchema])),
			/**
			 * Reference to element symbol
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: v.optional(v.union([v.array(SymbolSchema), SymbolSchema])),
		}),
	]),
);

export type LocusData = LocusBaseData & {
	locus?: LocusData | LocusData[];
	rend?: RendData | RendData[];
	symbol?: SymbolData | SymbolData[];
};

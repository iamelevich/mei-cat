import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrFoliationSchemeSchema } from "../attr/foliation.scheme";
import { LocusSchema } from "./locus";

/**
 * Base schema with attribute, to simplify types for LocusGrpSchema
 */
const LocusGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFoliationSchemeSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
 */
export const LocusGrpSchema = v.lazy(() =>
	v.intersect([
		LocusGrpBaseSchema,
		v.object({
			/**
			 * Reference to element locus
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: v.optional(v.union([v.array(LocusSchema), LocusSchema])),
		}),
	]),
);

export type LocusGrpData = v.InferOutput<typeof LocusGrpSchema>;

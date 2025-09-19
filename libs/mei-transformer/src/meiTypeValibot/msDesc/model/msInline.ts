import * as v from "valibot";
import {
	type WatermarkData,
	WatermarkSchema,
} from "../../header/element/watermark";
import { type CatchwordsData, CatchwordsSchema } from "../element/catchwords";
import { type HeraldryData, HeraldrySchema } from "../element/heraldry";
import { type LocusData, LocusSchema } from "../element/locus";
import { type LocusGrpData, LocusGrpSchema } from "../element/locusGrp";
import { type SecFolioData, SecFolioSchema } from "../element/secFolio";
import { type SignaturesData, SignaturesSchema } from "../element/signatures";
import { type StampData, StampSchema } from "../element/stamp";

/**
 * Groups elements that may appear inline when the msdesc module is active.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.msInline.html
 */
export const ModelMsInlineSchema: v.GenericSchema<ModelMsInlineData> = v.lazy(
	() =>
		v.object({
			/**
			 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
			 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
			 */
			catchwords: v.optional(
				v.union([v.array(CatchwordsSchema), CatchwordsSchema]),
			),
			/**
			 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
			 */
			heraldry: v.optional(v.union([v.array(HeraldrySchema), HeraldrySchema])),
			/**
			 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: v.optional(v.union([v.array(LocusSchema), LocusSchema])),
			/**
			 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: v.optional(v.union([v.array(LocusGrpSchema), LocusGrpSchema])),
			/**
			 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
			 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
			 */
			secFolio: v.optional(v.union([v.array(SecFolioSchema), SecFolioSchema])),
			/**
			 * Provides a description of the leaf or quire signatures found within a codex.
			 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
			 */
			signatures: v.optional(
				v.union([v.array(SignaturesSchema), SignaturesSchema]),
			),
			/**
			 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
			 */
			stamp: v.optional(v.union([v.array(StampSchema), StampSchema])),
			/**
			 * Contains a description of a watermark or similar device.
			 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
			 */
			watermark: v.optional(
				v.union([v.array(WatermarkSchema), WatermarkSchema]),
			),
		}),
);

export type ModelMsInlineData = {
	catchwords?: CatchwordsData | CatchwordsData[];
	heraldry?: HeraldryData | HeraldryData[];
	locus?: LocusData | LocusData[];
	locusGrp?: LocusGrpData | LocusGrpData[];
	secFolio?: SecFolioData | SecFolioData[];
	signatures?: SignaturesData | SignaturesData[];
	stamp?: StampData | StampData[];
	watermark?: WatermarkData | WatermarkData[];
};

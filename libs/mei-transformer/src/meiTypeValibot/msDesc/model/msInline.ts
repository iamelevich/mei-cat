import * as v from "valibot";
import {
	type CatchwordsData,
	CatchwordsSchema,
	type HeraldryData,
	HeraldrySchema,
	type LocusData,
	LocusSchema,
	type LocusGrpData,
	LocusGrpSchema,
	type SecFolioData,
	SecFolioSchema,
	type SignaturesData,
	SignaturesSchema,
	type StampData,
	StampSchema,
} from "..";
import { type WatermarkData, WatermarkSchema } from "../../header";

/**
 * Groups elements that may appear inline when the msdesc module is active.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.msInline.html
 */
export const ModelMsInlineSchema: v.GenericSchema<ModelMsInlineData> = v.object(
	{
		/**
		 * Describes the system used to ensure correct ordering of the quires making up an item, typically by means of annotations at the foot of the page.
		 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
		 */
		catchwords: v.optional(
			v.union([
				v.lazy(() => CatchwordsSchema),
				v.array(v.lazy(() => CatchwordsSchema)),
			]),
		),
		/**
		 * Contains a heraldic formula or phrase, typically found as part of a blazon, coat of arms, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/heraldry.html
		 */
		heraldry: v.optional(
			v.union([
				v.lazy(() => HeraldrySchema),
				v.array(v.lazy(() => HeraldrySchema)),
			]),
		),
		/**
		 * Defines a location within a manuscript or manuscript component, usually as a (possibly discontinuous) sequence of folio references.
		 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
		 */
		locus: v.optional(
			v.union([v.lazy(() => LocusSchema), v.array(v.lazy(() => LocusSchema))]),
		),
		/**
		 * Groups locations which together form a distinct but discontinuous item within a manuscript or manuscript part, according to a specific foliation.
		 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
		 */
		locusGrp: v.optional(
			v.union([
				v.lazy(() => LocusGrpSchema),
				v.array(v.lazy(() => LocusGrpSchema)),
			]),
		),
		/**
		 * Marks the word or words taken from a fixed point in a codex (typically the beginning of the second leaf) in order to provide a unique identifier for the item.
		 * @see https://music-encoding.org/guidelines/v5/elements/secFolio.html
		 */
		secFolio: v.optional(
			v.union([
				v.lazy(() => SecFolioSchema),
				v.array(v.lazy(() => SecFolioSchema)),
			]),
		),
		/**
		 * Provides a description of the leaf or quire signatures found within a codex.
		 * @see https://music-encoding.org/guidelines/v5/elements/signatures.html
		 */
		signatures: v.optional(
			v.union([
				v.lazy(() => SignaturesSchema),
				v.array(v.lazy(() => SignaturesSchema)),
			]),
		),
		/**
		 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
		 */
		stamp: v.optional(
			v.union([v.lazy(() => StampSchema), v.array(v.lazy(() => StampSchema))]),
		),
		/**
		 * Contains a description of a watermark or similar device.
		 * @see https://music-encoding.org/guidelines/v5/elements/watermark.html
		 */
		watermark: v.optional(
			v.union([
				v.lazy(() => WatermarkSchema),
				v.array(v.lazy(() => WatermarkSchema)),
			]),
		),
	},
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

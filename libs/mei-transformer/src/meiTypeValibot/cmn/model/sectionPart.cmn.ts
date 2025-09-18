import * as v from "valibot";
import { type MeasureLikeData, MeasureLikeSchema } from "./measureLike";

/**
 * Groups elements that may appear as part of a section.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionPart.cmn.html
 */
export const SectionPartCmnSchema: v.GenericSchema<SectionPartCmnData> =
	v.intersect([MeasureLikeSchema]);

export type SectionPartCmnData = MeasureLikeData;

import * as v from "valibot";
import { type PhysLocData, PhysLocSchema } from "../../shared";
import {
	type AvailabilityData,
	AvailabilitySchema,
	type EditionStmtData,
	EditionStmtSchema,
	type PhysDescData,
	PhysDescSchema,
	type PubStmtData,
	PubStmtSchema,
	type SeriesStmtData,
	SeriesStmtSchema,
} from "..";

/**
 * Groups manifestation- and item-specific elements that may appear as part of a bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.bibldescPart.html
 */
export const MacroBibldescPartSchema: v.GenericSchema<MacroBibldescPartData> =
	v.object({
		/**
		 * Reference to element availability
		 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
		 */
		availability: v.optional(v.lazy(() => AvailabilitySchema)),
		/**
		 * Reference to element editionStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
		 */
		editionStmt: v.optional(v.lazy(() => EditionStmtSchema)),
		/**
		 * Reference to element physDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
		 */
		physDesc: v.optional(
			v.union([
				v.lazy(() => PhysDescSchema),
				v.array(v.lazy(() => PhysDescSchema)),
			]),
		),
		/**
		 * Reference to element physLoc
		 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
		 */
		physLoc: v.optional(
			v.union([
				v.lazy(() => PhysLocSchema),
				v.array(v.lazy(() => PhysLocSchema)),
			]),
		),
		/**
		 * Reference to element pubStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
		 */
		pubStmt: v.optional(v.lazy(() => PubStmtSchema)),
		/**
		 * Reference to element seriesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
		 */
		seriesStmt: v.optional(
			v.union([
				v.lazy(() => SeriesStmtSchema),
				v.array(v.lazy(() => SeriesStmtSchema)),
			]),
		),
	});

export type MacroBibldescPartData = {
	availability?: AvailabilityData;
	editionStmt?: EditionStmtData;
	physDesc?: PhysDescData | PhysDescData[];
	physLoc?: PhysLocData | PhysLocData[];
	pubStmt?: PubStmtData;
	seriesStmt?: SeriesStmtData | SeriesStmtData[];
};

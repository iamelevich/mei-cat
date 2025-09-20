import * as v from "valibot";
import { type PhysLocData, PhysLocSchema } from "../../shared/element/physLoc";
import {
	type AvailabilityData,
	AvailabilitySchema,
} from "../element/availability";
import {
	type EditionStmtData,
	EditionStmtSchema,
} from "../element/editionStmt";
import { type PhysDescData, PhysDescSchema } from "../element/physDesc";
import { type PubStmtData, PubStmtSchema } from "../element/pubStmt";
import { type SeriesStmtData, SeriesStmtSchema } from "../element/seriesStmt";

/**
 * Groups manifestation- and item-specific elements that may appear as part of a bibliographic description.
 * @see https://music-encoding.org/guidelines/v5/macro-groups/macro.bibldescPart.html
 */
export const MacroBibldescPartSchema: v.GenericSchema<MacroBibldescPartData> =
	v.lazy(() =>
		v.object({
			/**
			 * Reference to element availability
			 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
			 */
			availability: v.optional(AvailabilitySchema),
			/**
			 * Reference to element editionStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
			 */
			editionStmt: v.optional(EditionStmtSchema),
			/**
			 * Reference to element physDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
			 */
			physDesc: v.optional(v.union([v.array(PhysDescSchema), PhysDescSchema])),
			/**
			 * Reference to element physLoc
			 * @see https://music-encoding.org/guidelines/v5/elements/physLoc.html
			 */
			physLoc: v.optional(v.union([v.array(PhysLocSchema), PhysLocSchema])),
			/**
			 * Reference to element pubStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/pubStmt.html
			 */
			pubStmt: v.optional(PubStmtSchema),
			/**
			 * Reference to element seriesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: v.optional(
				v.union([v.array(SeriesStmtSchema), SeriesStmtSchema]),
			),
		}),
	);

export type MacroBibldescPartData = {
	availability?: AvailabilityData;
	editionStmt?: EditionStmtData;
	physDesc?: PhysDescData | PhysDescData[];
	physLoc?: PhysLocData | PhysLocData[];
	pubStmt?: PubStmtData;
	seriesStmt?: SeriesStmtData | SeriesStmtData[];
};

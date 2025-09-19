import * as v from "valibot";
import { AttrTurnAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTurnGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrTurnVisSchema } from "../../visual";
import { AttrTurnLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for TurnSchema
 */
const TurnBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTurnAnlSchema.entries,
	...AttrTurnGesSchema.entries,
	...AttrTurnLogSchema.entries,
	...AttrTurnVisSchema.entries,
});

/**
 * An ornament consisting of four notes — the upper neighbor of the written note, the written note, the lower neighbor, and the written note.
 * @see https://music-encoding.org/guidelines/v5/elements/turn.html
 */
export const TurnSchema = v.intersect([TurnBaseSchema]);

export type TurnData = v.InferOutput<typeof TurnSchema>;

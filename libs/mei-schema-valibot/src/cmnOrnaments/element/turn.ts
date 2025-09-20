import * as v from "valibot";
import { AttrTurnAnlSchema } from "../../analytical/attr/turn.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTurnGesSchema } from "../../gestural/attr/turn.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrTurnVisSchema } from "../../visual/attr/turn.vis";
import { AttrTurnLogSchema } from "../attr/turn.log";

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
export const TurnSchema = v.lazy(() => v.intersect([TurnBaseSchema]));

export type TurnData = v.InferOutput<typeof TurnSchema>;

import * as v from "valibot";
import { AttrTieAnlSchema } from "../analytical/attr/tie.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrTieGesSchema } from "../gestural/attr/tie.ges";
import { AttrCommonSchema } from "../shared";
import { AttrTieVisSchema } from "../visual/attr/tie.vis";
import { AttrTieLogSchema } from "./attr/tie.log";

/**
 * An indication that two notes of the same pitch form a single note with their combined rhythmic values.
 * @see https://music-encoding.org/guidelines/v5/elements/tie.html
 */
export const TieSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTieLogSchema.entries,
	...AttrTieVisSchema.entries,
	...AttrTieGesSchema.entries,
	...AttrTieAnlSchema.entries,
});

export type TieData = v.InferOutput<typeof TieSchema>;

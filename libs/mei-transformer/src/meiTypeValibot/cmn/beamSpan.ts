import * as v from "valibot";
import { AttrBeamSpanAnlSchema } from "../analytical/attr/beamSpan.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrBeamSpanGesSchema } from "../gestural/attr/beamSpan.ges";
import { AttrCommonSchema } from "../shared";
import { AttrBeamSpanVisSchema } from "../visual/attr/beamSpan.vis";
import { AttrBeamSpanLogSchema } from "./attr/beamSpan.log";

/**
 * Alternative element for explicitly encoding beams, particularly those which extend across bar lines.
 * @see https://music-encoding.org/guidelines/v5/elements/beamSpan.html
 */
export const BeamSpanSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrBeamSpanLogSchema.entries,
	...AttrBeamSpanVisSchema.entries,
	...AttrBeamSpanGesSchema.entries,
	...AttrBeamSpanAnlSchema.entries,
});

export type BeamSpanData = v.InferOutput<typeof BeamSpanSchema>;

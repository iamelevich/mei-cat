import * as v from "valibot";
import { AttrBeamSpanAnlSchema } from "../../analytical/attr/beamSpan.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBeamSpanGesSchema } from "../../gestural/attr/beamSpan.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrBeamSpanVisSchema } from "../../visual/attr/beamSpan.vis";
import { AttrBeamSpanLogSchema } from "../attr/beamSpan.log";

/**
 * Base schema with attribute, to simplify types for BeamSpanSchema
 */
const BeamSpanBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBeamSpanAnlSchema.entries,
	...AttrBeamSpanGesSchema.entries,
	...AttrBeamSpanLogSchema.entries,
	...AttrBeamSpanVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Alternative element for explicitly encoding beams, particularly those which extend across bar lines.
 * @see https://music-encoding.org/guidelines/v5/elements/beamSpan.html
 */
export const BeamSpanSchema = v.lazy(() => v.intersect([BeamSpanBaseSchema]));

export type BeamSpanData = v.InferOutput<typeof BeamSpanSchema>;

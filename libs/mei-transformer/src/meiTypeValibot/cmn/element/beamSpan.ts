import * as v from "valibot";
import { AttrBeamSpanAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrBeamSpanGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrBeamSpanVisSchema } from "../../visual";
import { AttrBeamSpanLogSchema } from "..";

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
export const BeamSpanSchema = v.intersect([BeamSpanBaseSchema]);

export type BeamSpanData = v.InferOutput<typeof BeamSpanSchema>;

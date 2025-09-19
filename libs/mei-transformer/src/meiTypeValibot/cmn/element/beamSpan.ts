import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBeamSpanAnlSchema } from "../../analytical";
import { AttrBeamSpanGesSchema } from "../../gestural";
import { AttrBeamSpanLogSchema } from "..";
import { AttrBeamSpanVisSchema } from "../../visual";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

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

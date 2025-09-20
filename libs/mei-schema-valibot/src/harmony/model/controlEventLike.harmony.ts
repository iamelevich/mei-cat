import * as v from "valibot";
import { type ModelHarmLikeData, ModelHarmLikeSchema } from "./harmLike";

/**
 * Groups harmonic elements that function as control events; that is, those events that modify or otherwise depend on the existence of notated events.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.controlEventLike.harmony.html
 */
export const ModelControlEventLikeHarmonySchema: v.GenericSchema<ModelControlEventLikeHarmonyData> =
	v.lazy(() => v.intersect([ModelHarmLikeSchema]));

export type ModelControlEventLikeHarmonyData = ModelHarmLikeData;

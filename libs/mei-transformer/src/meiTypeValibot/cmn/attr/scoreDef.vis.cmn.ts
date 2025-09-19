import * as v from "valibot";
import { AttrBeamingVisSchema, AttrGuitarGridVisSchema } from "../../visual";
import {
	AttrPianoPedalsSchema,
	AttrRehearsalSchema,
	AttrSlurRendSchema,
	AttrTieRendSchema,
} from "..";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.cmn.html
 */
export const AttrScoreDefVisCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamingVisSchema.entries,
	...AttrGuitarGridVisSchema.entries,
	...AttrPianoPedalsSchema.entries,
	...AttrRehearsalSchema.entries,
	...AttrSlurRendSchema.entries,
	...AttrTieRendSchema.entries,
});

export type AttrScoreDefVisCmnData = v.InferOutput<
	typeof AttrScoreDefVisCmnSchema
>;

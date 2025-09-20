import * as v from "valibot";
import { AttrBeamingVisSchema } from "../../visual/attr/beaming.vis";
import { AttrGuitarGridVisSchema } from "../../visual/attr/guitarGrid.vis";
import { AttrPianoPedalsSchema } from "./pianoPedals";
import { AttrRehearsalSchema } from "./rehearsal";
import { AttrSlurRendSchema } from "./slurRend";
import { AttrTieRendSchema } from "./tieRend";

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

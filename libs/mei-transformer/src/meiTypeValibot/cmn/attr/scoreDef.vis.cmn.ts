import * as v from "valibot";
import { AttrBeamingVisSchema } from "../../visual/attr/beaming.vis";
import { AttrGuitarGridVisSchema } from "../../visual/attr/guitarGrid.vis";
import { AttrPianoPedalsSchema } from "../attr/pianoPedals";
import { AttrRehearsalSchema } from "../attr/rehearsal";
import { AttrSlurRendSchema } from "../attr/slurRend";
import { AttrTieRendSchema } from "../attr/tieRend";

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

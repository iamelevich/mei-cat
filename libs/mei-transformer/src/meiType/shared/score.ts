import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";

/**
 * Full score view of the musical content.
 * @see https://music-encoding.org/guidelines/v5/elements/score.html
 */
export const ScoreSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrFacsimileSchema,
]);

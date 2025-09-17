import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Contains historical information given as a sequence of significant past events.
 * @see https://music-encoding.org/guidelines/v5/elements/eventList.html
 */
export const EventListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);

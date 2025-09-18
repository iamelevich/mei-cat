import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * turn element.
 * @see https://music-encoding.org/guidelines/v5/elements/turn.html
 */
export const TurnSchema = AnythingObjectSchema; // TODO: implement element

export type TurnData = v.InferOutput<typeof TurnSchema>;

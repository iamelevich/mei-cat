import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * mordent element.
 * @see https://music-encoding.org/guidelines/v5/elements/mordent.html
 */
export const MordentSchema = AnythingObjectSchema; // TODO: implement element

export type MordentData = v.InferOutput<typeof MordentSchema>;

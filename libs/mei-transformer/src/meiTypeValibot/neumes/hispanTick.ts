import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * hispanTick element.
 * @see https://music-encoding.org/guidelines/v5/elements/hispanTick.html
 */
export const HispanTickSchema = AnythingObjectSchema; // TODO: implement element

export type HispanTickData = v.InferOutput<typeof HispanTickSchema>;

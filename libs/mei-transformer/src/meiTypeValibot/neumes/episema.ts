import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * episema element.
 * @see https://music-encoding.org/guidelines/v5/elements/episema.html
 */
export const EpisemaSchema = AnythingObjectSchema; // TODO: implement element

export type EpisemaData = v.InferOutput<typeof EpisemaSchema>;

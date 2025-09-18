import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the name of an actor appearing within a cast list.
 * @see https://music-encoding.org/guidelines/v5/elements/actor.html
 */
export const ActorSchema = AnythingObjectSchema; // TODO: implement element

export type ActorData = v.InferOutput<typeof ActorSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a single event in a performance history.
 * @see https://music-encoding.org/guidelines/v5/elements/event.html
 */
export const EventSchema = AnythingObjectSchema; // TODO: implement element

export type EventData = v.InferOutput<typeof EventSchema>;

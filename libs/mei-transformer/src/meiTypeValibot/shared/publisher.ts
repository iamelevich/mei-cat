import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the name of the publisher.
 * @see https://music-encoding.org/guidelines/v5/elements/publisher.html
 */
export const PublisherSchema = AnythingObjectSchema; // TODO: implement element

export type PublisherData = v.InferOutput<typeof PublisherSchema>;

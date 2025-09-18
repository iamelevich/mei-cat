import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * port element.
 * @see https://music-encoding.org/guidelines/v5/elements/port.html
 */
export const PortSchema = AnythingObjectSchema; // TODO: implement element

export type PortData = v.InferOutput<typeof PortSchema>;

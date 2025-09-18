import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Describes the column layout of a text.
 * @see https://music-encoding.org/guidelines/v5/elements/colLayout.html
 */
export const ColLayoutSchema = AnythingObjectSchema; // TODO: implement element

export type ColLayoutData = v.InferOutput<typeof ColLayoutSchema>;

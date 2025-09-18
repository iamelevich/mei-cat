import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * A prose description of the appearance, content, or usage of an element.
 * @see https://music-encoding.org/guidelines/v5/elements/argument.html
 */
export const ArgumentSchema = AnythingObjectSchema; // TODO: implement element

export type ArgumentData = v.InferOutput<typeof ArgumentSchema>;

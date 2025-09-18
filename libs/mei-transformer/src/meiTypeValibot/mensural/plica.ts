import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * plica element.
 * @see https://music-encoding.org/guidelines/v5/elements/plica.html
 */
export const PlicaSchema = AnythingObjectSchema; // TODO: implement element

export type PlicaData = v.InferOutput<typeof PlicaSchema>;

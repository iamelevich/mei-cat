import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Records a temporary alteration to the pitch of a note.
 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
 */
export const AccidSchema = AnythingObjectSchema; // TODO: implement element

export type AccidData = v.InferOutput<typeof AccidSchema>;

import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a chord member.
 * @see https://music-encoding.org/guidelines/v5/elements/chordMember.html
 */
export const ChordMemberSchema = AnythingObjectSchema; // TODO: implement element

export type ChordMemberData = v.InferOutput<typeof ChordMemberSchema>;

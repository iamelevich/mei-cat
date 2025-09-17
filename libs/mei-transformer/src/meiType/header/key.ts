import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrAccidentalSchema } from "../shared/attr/accidental";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrKeyModeSchema } from "../shared/attr/keyMode";
import { AttrPitchSchema } from "../shared/attr/pitch";

/**
 * Key captures information about tonal center and mode.
 * @see https://music-encoding.org/guidelines/v5/elements/key.html
 */
export const KeySchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAccidentalSchema,
	AttrBiblSchema,
	AttrKeyModeSchema,
	AttrPitchSchema,
]);

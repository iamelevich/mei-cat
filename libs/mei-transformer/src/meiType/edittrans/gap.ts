import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrExtentSchema } from "../shared/attr/extent";
import { AttrHandIdentSchema } from "../shared/attr/handIdent";
import { AttrEditSchema } from "./attr/edit";
import { AttrReasonIdentSchema } from "./attr/reasonIdent";

/**
 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
 */
export const GapSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrEditSchema,
	AttrExtentSchema,
	AttrHandIdentSchema,
	AttrReasonIdentSchema,
]);

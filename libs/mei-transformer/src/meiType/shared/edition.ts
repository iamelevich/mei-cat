import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLabelledSchema } from "./attr/labelled";
import { AttrLangSchema } from "./attr/lang";
import { AttrTypedSchema } from "./attr/typed";

/**
 * A word or text phrase that indicates a difference in either content or form between the item being described
 * and a related item previously issued by the same publisher/distributor (e.g., 2nd edition, version 2.0, etc.),
 * or simultaneously issued by either the same publisher/distributor or another publisher/distributor
 * (e.g., large print edition, British edition, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/edition.html
 */
export const EditionSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrLabelledSchema,
	AttrTypedSchema,
]);

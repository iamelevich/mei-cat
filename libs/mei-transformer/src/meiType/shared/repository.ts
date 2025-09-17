import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";

/**
 * Institution, agency, or individual which holds a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/repository.html
 */
export const RepositorySchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
]);


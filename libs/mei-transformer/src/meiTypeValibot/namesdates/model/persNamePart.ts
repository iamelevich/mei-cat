import * as v from "valibot";
import { type AddNameData, AddNameSchema } from "../element/addName";
import { type FamNameData, FamNameSchema } from "../element/famName";
import { type ForeNameData, ForeNameSchema } from "../element/foreName";
import { type GenNameData, GenNameSchema } from "../element/genName";
import { type NameLinkData, NameLinkSchema } from "../element/nameLink";
import { type RoleNameData, RoleNameSchema } from "../element/roleName";

/**
 * Groups elements which form part of a personal name.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.persNamePart.html
 */
export const ModelPersNamePartSchema: v.GenericSchema<ModelPersNamePartData> =
	v.lazy(() =>
		v.object({
			/**
			 * Contains an additional name component, such as a nickname, epithet, or alias, or any other descriptive phrase used within a personal name.
			 * @see https://music-encoding.org/guidelines/v5/elements/addName.html
			 */
			addName: v.optional(v.union([v.array(AddNameSchema), AddNameSchema])),
			/**
			 * Contains a family (inherited) name, as opposed to a given, baptismal, or nick name.
			 * @see https://music-encoding.org/guidelines/v5/elements/famName.html
			 */
			famName: v.optional(v.union([v.array(FamNameSchema), FamNameSchema])),
			/**
			 * Contains a forename, given or baptismal name.
			 * @see https://music-encoding.org/guidelines/v5/elements/foreName.html
			 */
			foreName: v.optional(v.union([v.array(ForeNameSchema), ForeNameSchema])),
			/**
			 * Contains a name component used to distinguish otherwise similar names on the basis of the relative ages or generations of the persons named.
			 * @see https://music-encoding.org/guidelines/v5/elements/genName.html
			 */
			genName: v.optional(v.union([v.array(GenNameSchema), GenNameSchema])),
			/**
			 * Contains a connecting phrase or link used within a name but not regarded as part of it, such as &#34;van der&#34; or &#34;of&#34;, &#34;from&#34;, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/nameLink.html
			 */
			nameLink: v.optional(v.union([v.array(NameLinkSchema), NameLinkSchema])),
			/**
			 * Contains a name component which indicates that the referent has a particular role or position in society, such as an official title or rank.
			 * @see https://music-encoding.org/guidelines/v5/elements/roleName.html
			 */
			roleName: v.optional(v.union([v.array(RoleNameSchema), RoleNameSchema])),
		}),
	);

export type ModelPersNamePartData = {
	addName?: AddNameData | AddNameData[];
	famName?: FamNameData | FamNameData[];
	foreName?: ForeNameData | ForeNameData[];
	genName?: GenNameData | GenNameData[];
	nameLink?: NameLinkData | NameLinkData[];
	roleName?: RoleNameData | RoleNameData[];
};

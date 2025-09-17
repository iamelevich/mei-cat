import { type Static, Type } from "typebox";
import { mei } from "./module";

export const MeiJSONSchema = Type.Object({
	mei,
});

export type MeiJSON = Static<typeof MeiJSONSchema>;

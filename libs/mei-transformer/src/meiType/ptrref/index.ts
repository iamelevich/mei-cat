import Type from "typebox";
import { PtrSchema } from "./ptr";
import { RefSchema } from "./ref";

export const PtrrefModule = Type.Module({
	ptr: PtrSchema,
	ref: RefSchema,
});

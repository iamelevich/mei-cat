import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { TitleStmtSchema } from "./titleStmt";

/**
 * Contains a full bibliographic description of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/fileDesc.html
 */
export const FileDescSchema = Type.Composite([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			titleStmt: TitleStmtSchema,
			editionStmt: Type.Optional(NotImplementedTagSchema),
			notesStmt: Type.Optional(NotImplementedTagSchema),
			pubStmt: Type.Optional(NotImplementedTagSchema),
			seriesStmt: Type.Optional(NotImplementedTagSchema),
			sourceDesc: Type.Optional(NotImplementedTagSchema),
			extend: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

export type FileDesc = Static<typeof FileDescSchema>;

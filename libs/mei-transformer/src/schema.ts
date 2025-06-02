import { type Static, Type } from "@sinclair/typebox";

export const PhysLocSchema = Type.Object({
	repository: Type.Optional(
		Type.Object({
			name: Type.Optional(Type.String()),
			identifier: Type.Optional(
				Type.Union([
					Type.String(),
					Type.Object({
						auth: Type.String(),
						uri: Type.String(),
						text: Type.Optional(Type.String()),
					}),
				]),
			),
		}),
	),
	identifier: Type.String(),
});

export const ItemSchema = Type.Object({
	label: Type.Optional(Type.String()),
	id: Type.Optional(Type.String()),
	identifier: Type.Optional(Type.String()),
	physLoc: Type.Optional(PhysLocSchema),
});

export const ClassificationSchema = Type.Object({
	contentClass: Type.Optional(Type.String()),
	presentationClass: Type.Optional(Type.String()),
	authorityClass: Type.Optional(Type.String()),
	scoringClass: Type.Optional(Type.String()),
	stateClass: Type.Optional(Type.String()),
	completenessClass: Type.Optional(Type.String()),
});

export const RelationSchema = Type.Object({
	label: Type.Optional(Type.String()),
	rel: Type.Optional(Type.String()),
	target: Type.Optional(Type.String()),
});

export const ManifestationSchema = Type.Object({
	label: Type.Optional(Type.String()),
	title: Type.Optional(Type.String()),
	classification: Type.Optional(ClassificationSchema),
	items: Type.Optional(Type.Array(ItemSchema)),
	relations: Type.Optional(Type.Array(RelationSchema)),
});

export const MEIBiblioSchema = Type.Object({
	manifestations: Type.Array(ManifestationSchema),
});

export type MEIBiblio = Static<typeof MEIBiblioSchema>;
export type MEIBiblioManifestation = Static<typeof ManifestationSchema>;
export type PhysLoc = Static<typeof PhysLocSchema>;

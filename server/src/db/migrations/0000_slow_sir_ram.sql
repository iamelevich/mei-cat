CREATE TYPE "public"."storage_type" AS ENUM('local', 's3');--> statement-breakpoint
CREATE TABLE "mei_files" (
	"id" text PRIMARY KEY NOT NULL,
	"original_file_name" text NOT NULL,
	"original_mei_version" text NOT NULL,
	"converted_file_name" text NOT NULL,
	"storage_type" "storage_type" NOT NULL,
	"storage_path" text NOT NULL,
	"title" text NOT NULL,
	"language" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

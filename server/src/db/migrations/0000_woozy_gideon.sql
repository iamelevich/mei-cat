CREATE TYPE "public"."resp_stmt_like_enum" AS ENUM('arranger', 'author', 'composer', 'contributor', 'editor', 'funder', 'librettist', 'lyricist', 'respStmt');--> statement-breakpoint
CREATE TYPE "public"."storage_type" AS ENUM('local', 's3');--> statement-breakpoint
CREATE TABLE "file_desc" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file_id" uuid
);
--> statement-breakpoint
CREATE TABLE "mei_files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hash" text NOT NULL,
	"original_file_name" text NOT NULL,
	"original_mei_version" text NOT NULL,
	"converted_file_name" text NOT NULL,
	"storage_type" "storage_type" NOT NULL,
	"storage_path" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "resp_stmt" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_stmt_id" uuid,
	"type" "resp_stmt_like_enum" NOT NULL,
	"data" json NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "title" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_stmt_id" uuid,
	"title" text NOT NULL,
	"language" text
);
--> statement-breakpoint
CREATE TABLE "title_stmt" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"file_desc_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "file_desc" ADD CONSTRAINT "file_desc_file_id_mei_files_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."mei_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resp_stmt" ADD CONSTRAINT "resp_stmt_title_stmt_id_title_stmt_id_fk" FOREIGN KEY ("title_stmt_id") REFERENCES "public"."title_stmt"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "title" ADD CONSTRAINT "title_title_stmt_id_title_stmt_id_fk" FOREIGN KEY ("title_stmt_id") REFERENCES "public"."title_stmt"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "title_stmt" ADD CONSTRAINT "title_stmt_file_desc_id_file_desc_id_fk" FOREIGN KEY ("file_desc_id") REFERENCES "public"."file_desc"("id") ON DELETE no action ON UPDATE no action;
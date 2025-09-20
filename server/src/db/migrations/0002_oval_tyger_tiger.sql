ALTER TABLE "file_desc" DROP CONSTRAINT "file_desc_file_id_mei_files_id_fk";
--> statement-breakpoint
ALTER TABLE "resp_stmt" DROP CONSTRAINT "resp_stmt_title_stmt_id_title_stmt_id_fk";
--> statement-breakpoint
ALTER TABLE "title" DROP CONSTRAINT "title_title_stmt_id_title_stmt_id_fk";
--> statement-breakpoint
ALTER TABLE "title_stmt" DROP CONSTRAINT "title_stmt_file_desc_id_file_desc_id_fk";
--> statement-breakpoint
ALTER TABLE "file_desc" ADD CONSTRAINT "file_desc_file_id_mei_files_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."mei_files"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resp_stmt" ADD CONSTRAINT "resp_stmt_title_stmt_id_title_stmt_id_fk" FOREIGN KEY ("title_stmt_id") REFERENCES "public"."title_stmt"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "title" ADD CONSTRAINT "title_title_stmt_id_title_stmt_id_fk" FOREIGN KEY ("title_stmt_id") REFERENCES "public"."title_stmt"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "title_stmt" ADD CONSTRAINT "title_stmt_file_desc_id_file_desc_id_fk" FOREIGN KEY ("file_desc_id") REFERENCES "public"."file_desc"("id") ON DELETE cascade ON UPDATE no action;
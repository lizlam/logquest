# Migration `20200523104146-try-with-postgres`

This migration has been generated by Liz Lam at 5/23/2020, 10:41:46 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Game" (
    "bgglink" text  NOT NULL ,
    "completed" text  NOT NULL DEFAULT '0',
    "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL,
    "title" text  NOT NULL ,
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200523104146-try-with-postgres
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,23 @@
+datasource DS {
+  provider = "postgres"
+  //provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+
+model Game {
+  id Int @id @default(autoincrement())
+  title String
+  bgglink String
+  completed String @default("0")
+  createdAt DateTime @default(now())
+}
+
```


import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import type { NeonQueryFunction } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.DATABASE_URL!;
const client: NeonQueryFunction<boolean, boolean> = neon(connectionString);

export const db = drizzle(client, { schema: schema, logger: true });

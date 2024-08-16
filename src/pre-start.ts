/**
 * Pre-start is where we want to place things that must run BEFORE the express 
 * server is started. This is useful for environment variables, command-line 
 * arguments, and cron-jobs.
 */

// NOTE: DO NOT IMPORT ANY SOURCE CODE HERE
import path from 'path';
import dotenv from 'dotenv';

const result2 = dotenv.config({
  path: path.join(__dirname, `../.env`),
});
if (result2.error) {
  throw result2.error;
}

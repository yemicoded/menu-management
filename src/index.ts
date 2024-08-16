/* eslint-disable @typescript-eslint/no-unsafe-argument */
import "./pre-start"; // Must be the first import
import server from "./app/config";
import { ENV_VARS } from "./app/config/environment";
import logger from "jet-logger";

// **** Run **** //

const SERVER_START_MSG = "Express server started on port: " + ENV_VARS.PORT;

server.listen(ENV_VARS.PORT, () => logger.info(SERVER_START_MSG));

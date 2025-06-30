import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const connectionToDatabase = async () => {
  await initMongoConnection();
  // await createDirIfNotExists(TEMP_UPLOAD_DIR);
  // await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};

connectionToDatabase();

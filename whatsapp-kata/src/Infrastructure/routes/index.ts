import { readdirSync } from "fs";
import { Router } from "express";
const router: Router = Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName: string): string => <string>fileName.split(".").shift();

/**
 *
 * @param file tracks.ts
 */
function loadRouter(file: string): void {
  const name = removeExtension(file);
  if (name !== "index") {
    import(`./${file}`).then((routerModule) => {
      router.use(`/${name}`, routerModule.router);
    });
  }
}

readdirSync(PATH_ROUTES).filter((file) => loadRouter(file));

export default router;
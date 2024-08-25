import Handlebars from "handlebars";
import InstallPageTemplate from './installPage.hbs' with { type: "text" };

export async function buildBookmarkletInstallPage(bookmarklet: string, hotReloadBookmarklet: string): Promise<string> {
  const template = Handlebars.compile(InstallPageTemplate);
  return template({
    bookmarklet,
    hotReloadBookmarklet
  });
}

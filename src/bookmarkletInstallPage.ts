import Handlebars from "handlebars";
// @ts-ignore
import installPageTemplate from './installPage.hbs' with { type: 'text' };

export async function buildBookmarkletInstallPage(bookmarklet: string, hotReloadBookmarklet: string): Promise<string> {
  const template = Handlebars.compile(installPageTemplate);
  return template({
    bookmarklet,
    hotReloadBookmarklet
  });
}

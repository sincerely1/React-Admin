import common from './common.json';
import sys from './sys.json';
import error_page from './error_pages.json'
import account_page from './account_page.json'
export default {
  ...common,
  ...sys,
  ...error_page,
  ...account_page
};

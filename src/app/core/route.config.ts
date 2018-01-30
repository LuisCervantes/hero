import {UIRouter} from "@uirouter/angular";

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter) {
  
  router.urlService.rules.otherwise({ state: 'main' });
  
}
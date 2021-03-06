/**
 * In Development, this module does nothing.
 * However, in production, all the HTML templates from the application, and all programs, use this module to inject themselves into the
 * Angular Template Cache. Meaning no more requests for the html files, and everything is pre-loaded, ready to serve.
 *
 * In the individual programs, they do NOT insert their template cache inserts into this file, because that would require modification
 * of the main application itself.
 *
 * They don't need to, as when they load, they can be sure the main application has already fired up. They execute their inserts within the runblocks
 */
define(["angular"],function(angular){
    console.log("Template Module");
    var templates = angular.module("templateStorage",[]);

    templates.run(["$templateCache",function($templateCache){
    /** @preserve inject:templates **/
    /** Contents of html templates will be injected here via gulp task **/
    /** @preserve endinject **/
    }]);

    return templates;
});
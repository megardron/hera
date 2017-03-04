// Compiled by ClojureScript 1.9.229 {}
goog.provide('hera.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('hera.views');
goog.require('hera.config');
goog.require('hera.subs');
goog.require('hera.events');
goog.require('re_frame.core');
hera.core.dev_setup = (function hera$core$dev_setup(){
if(cljs.core.truth_(hera.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
hera.core.mount_root = (function hera$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hera.views.main_panel], null),document.getElementById("app"));
});
hera.core.init = (function hera$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

hera.core.dev_setup.call(null);

return hera.core.mount_root.call(null);
});
goog.exportSymbol('hera.core.init', hera.core.init);

//# sourceMappingURL=core.js.map?rel=1488655658458
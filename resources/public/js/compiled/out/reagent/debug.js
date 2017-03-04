// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26432__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26434__i = 0, G__26434__a = new Array(arguments.length -  0);
while (G__26434__i < G__26434__a.length) {G__26434__a[G__26434__i] = arguments[G__26434__i + 0]; ++G__26434__i;}
  args = new cljs.core.IndexedSeq(G__26434__a,0);
} 
return G__26432__delegate.call(this,args);};
G__26432.cljs$lang$maxFixedArity = 0;
G__26432.cljs$lang$applyTo = (function (arglist__26435){
var args = cljs.core.seq(arglist__26435);
return G__26432__delegate(args);
});
G__26432.cljs$core$IFn$_invoke$arity$variadic = G__26432__delegate;
return G__26432;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26436__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26437__i = 0, G__26437__a = new Array(arguments.length -  0);
while (G__26437__i < G__26437__a.length) {G__26437__a[G__26437__i] = arguments[G__26437__i + 0]; ++G__26437__i;}
  args = new cljs.core.IndexedSeq(G__26437__a,0);
} 
return G__26436__delegate.call(this,args);};
G__26436.cljs$lang$maxFixedArity = 0;
G__26436.cljs$lang$applyTo = (function (arglist__26438){
var args = cljs.core.seq(arglist__26438);
return G__26436__delegate(args);
});
G__26436.cljs$core$IFn$_invoke$arity$variadic = G__26436__delegate;
return G__26436;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1488653196700
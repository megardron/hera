goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('hera.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40583__delegate = function (x){
if(cljs.core.truth_(hera.core.mount_root)){
return cljs.core.apply.call(null,hera.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hera.core/mount-root' is missing");
}
};
var G__40583 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40584__i = 0, G__40584__a = new Array(arguments.length -  0);
while (G__40584__i < G__40584__a.length) {G__40584__a[G__40584__i] = arguments[G__40584__i + 0]; ++G__40584__i;}
  x = new cljs.core.IndexedSeq(G__40584__a,0);
} 
return G__40583__delegate.call(this,x);};
G__40583.cljs$lang$maxFixedArity = 0;
G__40583.cljs$lang$applyTo = (function (arglist__40585){
var x = cljs.core.seq(arglist__40585);
return G__40583__delegate(x);
});
G__40583.cljs$core$IFn$_invoke$arity$variadic = G__40583__delegate;
return G__40583;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

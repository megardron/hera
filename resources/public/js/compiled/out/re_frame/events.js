// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__27209_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__27209_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___27210 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___27210)){
var not_i_27211 = temp__4657__auto___27210;
if(cljs.core.fn_QMARK_.call(null,not_i_27211)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_27211);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_27211);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_27226 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_27227 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27184__auto___27240 = re_frame.interop.now.call(null);
var duration__27185__auto___27241 = (end__27184__auto___27240 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__27228_27242 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__27229_27243 = null;
var count__27230_27244 = (0);
var i__27231_27245 = (0);
while(true){
if((i__27231_27245 < count__27230_27244)){
var vec__27232_27246 = cljs.core._nth.call(null,chunk__27229_27243,i__27231_27245);
var k__27186__auto___27247 = cljs.core.nth.call(null,vec__27232_27246,(0),null);
var cb__27187__auto___27248 = cljs.core.nth.call(null,vec__27232_27246,(1),null);
try{cb__27187__auto___27248.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27185__auto___27241,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27235){if((e27235 instanceof java.lang.Exception)){
var e__27188__auto___27249 = e27235;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27186__auto___27247,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27188__auto___27249);
} else {
throw e27235;

}
}
var G__27250 = seq__27228_27242;
var G__27251 = chunk__27229_27243;
var G__27252 = count__27230_27244;
var G__27253 = (i__27231_27245 + (1));
seq__27228_27242 = G__27250;
chunk__27229_27243 = G__27251;
count__27230_27244 = G__27252;
i__27231_27245 = G__27253;
continue;
} else {
var temp__4657__auto___27254 = cljs.core.seq.call(null,seq__27228_27242);
if(temp__4657__auto___27254){
var seq__27228_27255__$1 = temp__4657__auto___27254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27228_27255__$1)){
var c__25879__auto___27256 = cljs.core.chunk_first.call(null,seq__27228_27255__$1);
var G__27257 = cljs.core.chunk_rest.call(null,seq__27228_27255__$1);
var G__27258 = c__25879__auto___27256;
var G__27259 = cljs.core.count.call(null,c__25879__auto___27256);
var G__27260 = (0);
seq__27228_27242 = G__27257;
chunk__27229_27243 = G__27258;
count__27230_27244 = G__27259;
i__27231_27245 = G__27260;
continue;
} else {
var vec__27236_27261 = cljs.core.first.call(null,seq__27228_27255__$1);
var k__27186__auto___27262 = cljs.core.nth.call(null,vec__27236_27261,(0),null);
var cb__27187__auto___27263 = cljs.core.nth.call(null,vec__27236_27261,(1),null);
try{cb__27187__auto___27263.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27185__auto___27241,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27239){if((e27239 instanceof java.lang.Exception)){
var e__27188__auto___27264 = e27239;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27186__auto___27262,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27188__auto___27264);
} else {
throw e27239;

}
}
var G__27265 = cljs.core.next.call(null,seq__27228_27255__$1);
var G__27266 = null;
var G__27267 = (0);
var G__27268 = (0);
seq__27228_27242 = G__27265;
chunk__27229_27243 = G__27266;
count__27230_27244 = G__27267;
i__27231_27245 = G__27268;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27227;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_27226;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1488653198356
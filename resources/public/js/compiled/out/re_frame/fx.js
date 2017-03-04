// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__27353 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27354 = null;
var count__27355 = (0);
var i__27356 = (0);
while(true){
if((i__27356 < count__27355)){
var vec__27357 = cljs.core._nth.call(null,chunk__27354,i__27356);
var effect_k = cljs.core.nth.call(null,vec__27357,(0),null);
var value = cljs.core.nth.call(null,vec__27357,(1),null);
var temp__4655__auto___27363 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27363)){
var effect_fn_27364 = temp__4655__auto___27363;
effect_fn_27364.call(null,value);
} else {
}

var G__27365 = seq__27353;
var G__27366 = chunk__27354;
var G__27367 = count__27355;
var G__27368 = (i__27356 + (1));
seq__27353 = G__27365;
chunk__27354 = G__27366;
count__27355 = G__27367;
i__27356 = G__27368;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27353);
if(temp__4657__auto__){
var seq__27353__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27353__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__27353__$1);
var G__27369 = cljs.core.chunk_rest.call(null,seq__27353__$1);
var G__27370 = c__25879__auto__;
var G__27371 = cljs.core.count.call(null,c__25879__auto__);
var G__27372 = (0);
seq__27353 = G__27369;
chunk__27354 = G__27370;
count__27355 = G__27371;
i__27356 = G__27372;
continue;
} else {
var vec__27360 = cljs.core.first.call(null,seq__27353__$1);
var effect_k = cljs.core.nth.call(null,vec__27360,(0),null);
var value = cljs.core.nth.call(null,vec__27360,(1),null);
var temp__4655__auto___27373 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27373)){
var effect_fn_27374 = temp__4655__auto___27373;
effect_fn_27374.call(null,value);
} else {
}

var G__27375 = cljs.core.next.call(null,seq__27353__$1);
var G__27376 = null;
var G__27377 = (0);
var G__27378 = (0);
seq__27353 = G__27375;
chunk__27354 = G__27376;
count__27355 = G__27377;
i__27356 = G__27378;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27379 = cljs.core.seq.call(null,value);
var chunk__27380 = null;
var count__27381 = (0);
var i__27382 = (0);
while(true){
if((i__27382 < count__27381)){
var map__27383 = cljs.core._nth.call(null,chunk__27380,i__27382);
var map__27383__$1 = ((((!((map__27383 == null)))?((((map__27383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27383):map__27383);
var effect = map__27383__$1;
var ms = cljs.core.get.call(null,map__27383__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27383__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27379,chunk__27380,count__27381,i__27382,map__27383,map__27383__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27379,chunk__27380,count__27381,i__27382,map__27383,map__27383__$1,effect,ms,dispatch))
,ms);
}

var G__27387 = seq__27379;
var G__27388 = chunk__27380;
var G__27389 = count__27381;
var G__27390 = (i__27382 + (1));
seq__27379 = G__27387;
chunk__27380 = G__27388;
count__27381 = G__27389;
i__27382 = G__27390;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27379);
if(temp__4657__auto__){
var seq__27379__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27379__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__27379__$1);
var G__27391 = cljs.core.chunk_rest.call(null,seq__27379__$1);
var G__27392 = c__25879__auto__;
var G__27393 = cljs.core.count.call(null,c__25879__auto__);
var G__27394 = (0);
seq__27379 = G__27391;
chunk__27380 = G__27392;
count__27381 = G__27393;
i__27382 = G__27394;
continue;
} else {
var map__27385 = cljs.core.first.call(null,seq__27379__$1);
var map__27385__$1 = ((((!((map__27385 == null)))?((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var effect = map__27385__$1;
var ms = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27379,chunk__27380,count__27381,i__27382,map__27385,map__27385__$1,effect,ms,dispatch,seq__27379__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27379,chunk__27380,count__27381,i__27382,map__27385,map__27385__$1,effect,ms,dispatch,seq__27379__$1,temp__4657__auto__))
,ms);
}

var G__27395 = cljs.core.next.call(null,seq__27379__$1);
var G__27396 = null;
var G__27397 = (0);
var G__27398 = (0);
seq__27379 = G__27395;
chunk__27380 = G__27396;
count__27381 = G__27397;
i__27382 = G__27398;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__27399 = cljs.core.seq.call(null,value);
var chunk__27400 = null;
var count__27401 = (0);
var i__27402 = (0);
while(true){
if((i__27402 < count__27401)){
var event = cljs.core._nth.call(null,chunk__27400,i__27402);
re_frame.router.dispatch.call(null,event);

var G__27403 = seq__27399;
var G__27404 = chunk__27400;
var G__27405 = count__27401;
var G__27406 = (i__27402 + (1));
seq__27399 = G__27403;
chunk__27400 = G__27404;
count__27401 = G__27405;
i__27402 = G__27406;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27399);
if(temp__4657__auto__){
var seq__27399__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27399__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__27399__$1);
var G__27407 = cljs.core.chunk_rest.call(null,seq__27399__$1);
var G__27408 = c__25879__auto__;
var G__27409 = cljs.core.count.call(null,c__25879__auto__);
var G__27410 = (0);
seq__27399 = G__27407;
chunk__27400 = G__27408;
count__27401 = G__27409;
i__27402 = G__27410;
continue;
} else {
var event = cljs.core.first.call(null,seq__27399__$1);
re_frame.router.dispatch.call(null,event);

var G__27411 = cljs.core.next.call(null,seq__27399__$1);
var G__27412 = null;
var G__27413 = (0);
var G__27414 = (0);
seq__27399 = G__27411;
chunk__27400 = G__27412;
count__27401 = G__27413;
i__27402 = G__27414;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__27415 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__27416 = null;
var count__27417 = (0);
var i__27418 = (0);
while(true){
if((i__27418 < count__27417)){
var event = cljs.core._nth.call(null,chunk__27416,i__27418);
clear_event.call(null,event);

var G__27419 = seq__27415;
var G__27420 = chunk__27416;
var G__27421 = count__27417;
var G__27422 = (i__27418 + (1));
seq__27415 = G__27419;
chunk__27416 = G__27420;
count__27417 = G__27421;
i__27418 = G__27422;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27415);
if(temp__4657__auto__){
var seq__27415__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27415__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__27415__$1);
var G__27423 = cljs.core.chunk_rest.call(null,seq__27415__$1);
var G__27424 = c__25879__auto__;
var G__27425 = cljs.core.count.call(null,c__25879__auto__);
var G__27426 = (0);
seq__27415 = G__27423;
chunk__27416 = G__27424;
count__27417 = G__27425;
i__27418 = G__27426;
continue;
} else {
var event = cljs.core.first.call(null,seq__27415__$1);
clear_event.call(null,event);

var G__27427 = cljs.core.next.call(null,seq__27415__$1);
var G__27428 = null;
var G__27429 = (0);
var G__27430 = (0);
seq__27415 = G__27427;
chunk__27416 = G__27428;
count__27417 = G__27429;
i__27418 = G__27430;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1488653198579
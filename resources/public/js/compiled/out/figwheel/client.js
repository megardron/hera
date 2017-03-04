// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36338 = [];
var len__26143__auto___36341 = arguments.length;
var i__26144__auto___36342 = (0);
while(true){
if((i__26144__auto___36342 < len__26143__auto___36341)){
args36338.push((arguments[i__26144__auto___36342]));

var G__36343 = (i__26144__auto___36342 + (1));
i__26144__auto___36342 = G__36343;
continue;
} else {
}
break;
}

var G__36340 = args36338.length;
switch (G__36340) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36338.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26150__auto__ = [];
var len__26143__auto___36346 = arguments.length;
var i__26144__auto___36347 = (0);
while(true){
if((i__26144__auto___36347 < len__26143__auto___36346)){
args__26150__auto__.push((arguments[i__26144__auto___36347]));

var G__36348 = (i__26144__auto___36347 + (1));
i__26144__auto___36347 = G__36348;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36345){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36345));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26150__auto__ = [];
var len__26143__auto___36350 = arguments.length;
var i__26144__auto___36351 = (0);
while(true){
if((i__26144__auto___36351 < len__26143__auto___36350)){
args__26150__auto__.push((arguments[i__26144__auto___36351]));

var G__36352 = (i__26144__auto___36351 + (1));
i__26144__auto___36351 = G__36352;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36349){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36349));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36353 = cljs.core._EQ_;
var expr__36354 = (function (){var or__25068__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36357){if((e36357 instanceof Error)){
var e = e36357;
return false;
} else {
throw e36357;

}
}})();
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36353.call(null,"true",expr__36354))){
return true;
} else {
if(cljs.core.truth_(pred__36353.call(null,"false",expr__36354))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36354)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36359){if((e36359 instanceof Error)){
var e = e36359;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36359;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36360){
var map__36363 = p__36360;
var map__36363__$1 = ((((!((map__36363 == null)))?((((map__36363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36363):map__36363);
var message = cljs.core.get.call(null,map__36363__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36363__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25068__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25056__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25056__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25056__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28978__auto___36525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___36525,ch){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___36525,ch){
return (function (state_36494){
var state_val_36495 = (state_36494[(1)]);
if((state_val_36495 === (7))){
var inst_36490 = (state_36494[(2)]);
var state_36494__$1 = state_36494;
var statearr_36496_36526 = state_36494__$1;
(statearr_36496_36526[(2)] = inst_36490);

(statearr_36496_36526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (1))){
var state_36494__$1 = state_36494;
var statearr_36497_36527 = state_36494__$1;
(statearr_36497_36527[(2)] = null);

(statearr_36497_36527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (4))){
var inst_36447 = (state_36494[(7)]);
var inst_36447__$1 = (state_36494[(2)]);
var state_36494__$1 = (function (){var statearr_36498 = state_36494;
(statearr_36498[(7)] = inst_36447__$1);

return statearr_36498;
})();
if(cljs.core.truth_(inst_36447__$1)){
var statearr_36499_36528 = state_36494__$1;
(statearr_36499_36528[(1)] = (5));

} else {
var statearr_36500_36529 = state_36494__$1;
(statearr_36500_36529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (15))){
var inst_36454 = (state_36494[(8)]);
var inst_36469 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36454);
var inst_36470 = cljs.core.first.call(null,inst_36469);
var inst_36471 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36470);
var inst_36472 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36471)].join('');
var inst_36473 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36472);
var state_36494__$1 = state_36494;
var statearr_36501_36530 = state_36494__$1;
(statearr_36501_36530[(2)] = inst_36473);

(statearr_36501_36530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (13))){
var inst_36478 = (state_36494[(2)]);
var state_36494__$1 = state_36494;
var statearr_36502_36531 = state_36494__$1;
(statearr_36502_36531[(2)] = inst_36478);

(statearr_36502_36531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (6))){
var state_36494__$1 = state_36494;
var statearr_36503_36532 = state_36494__$1;
(statearr_36503_36532[(2)] = null);

(statearr_36503_36532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (17))){
var inst_36476 = (state_36494[(2)]);
var state_36494__$1 = state_36494;
var statearr_36504_36533 = state_36494__$1;
(statearr_36504_36533[(2)] = inst_36476);

(statearr_36504_36533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (3))){
var inst_36492 = (state_36494[(2)]);
var state_36494__$1 = state_36494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36494__$1,inst_36492);
} else {
if((state_val_36495 === (12))){
var inst_36453 = (state_36494[(9)]);
var inst_36467 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36453,opts);
var state_36494__$1 = state_36494;
if(cljs.core.truth_(inst_36467)){
var statearr_36505_36534 = state_36494__$1;
(statearr_36505_36534[(1)] = (15));

} else {
var statearr_36506_36535 = state_36494__$1;
(statearr_36506_36535[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (2))){
var state_36494__$1 = state_36494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36494__$1,(4),ch);
} else {
if((state_val_36495 === (11))){
var inst_36454 = (state_36494[(8)]);
var inst_36459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36460 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36454);
var inst_36461 = cljs.core.async.timeout.call(null,(1000));
var inst_36462 = [inst_36460,inst_36461];
var inst_36463 = (new cljs.core.PersistentVector(null,2,(5),inst_36459,inst_36462,null));
var state_36494__$1 = state_36494;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36494__$1,(14),inst_36463);
} else {
if((state_val_36495 === (9))){
var inst_36454 = (state_36494[(8)]);
var inst_36480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36481 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36454);
var inst_36482 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36481);
var inst_36483 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36482)].join('');
var inst_36484 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36483);
var state_36494__$1 = (function (){var statearr_36507 = state_36494;
(statearr_36507[(10)] = inst_36480);

return statearr_36507;
})();
var statearr_36508_36536 = state_36494__$1;
(statearr_36508_36536[(2)] = inst_36484);

(statearr_36508_36536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (5))){
var inst_36447 = (state_36494[(7)]);
var inst_36449 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36450 = (new cljs.core.PersistentArrayMap(null,2,inst_36449,null));
var inst_36451 = (new cljs.core.PersistentHashSet(null,inst_36450,null));
var inst_36452 = figwheel.client.focus_msgs.call(null,inst_36451,inst_36447);
var inst_36453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36452);
var inst_36454 = cljs.core.first.call(null,inst_36452);
var inst_36455 = figwheel.client.autoload_QMARK_.call(null);
var state_36494__$1 = (function (){var statearr_36509 = state_36494;
(statearr_36509[(9)] = inst_36453);

(statearr_36509[(8)] = inst_36454);

return statearr_36509;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36510_36537 = state_36494__$1;
(statearr_36510_36537[(1)] = (8));

} else {
var statearr_36511_36538 = state_36494__$1;
(statearr_36511_36538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (14))){
var inst_36465 = (state_36494[(2)]);
var state_36494__$1 = state_36494;
var statearr_36512_36539 = state_36494__$1;
(statearr_36512_36539[(2)] = inst_36465);

(statearr_36512_36539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (16))){
var state_36494__$1 = state_36494;
var statearr_36513_36540 = state_36494__$1;
(statearr_36513_36540[(2)] = null);

(statearr_36513_36540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (10))){
var inst_36486 = (state_36494[(2)]);
var state_36494__$1 = (function (){var statearr_36514 = state_36494;
(statearr_36514[(11)] = inst_36486);

return statearr_36514;
})();
var statearr_36515_36541 = state_36494__$1;
(statearr_36515_36541[(2)] = null);

(statearr_36515_36541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36495 === (8))){
var inst_36453 = (state_36494[(9)]);
var inst_36457 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36453,opts);
var state_36494__$1 = state_36494;
if(cljs.core.truth_(inst_36457)){
var statearr_36516_36542 = state_36494__$1;
(statearr_36516_36542[(1)] = (11));

} else {
var statearr_36517_36543 = state_36494__$1;
(statearr_36517_36543[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28978__auto___36525,ch))
;
return ((function (switch__28866__auto__,c__28978__auto___36525,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28867__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28867__auto____0 = (function (){
var statearr_36521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36521[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28867__auto__);

(statearr_36521[(1)] = (1));

return statearr_36521;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28867__auto____1 = (function (state_36494){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_36494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e36522){if((e36522 instanceof Object)){
var ex__28870__auto__ = e36522;
var statearr_36523_36544 = state_36494;
(statearr_36523_36544[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36545 = state_36494;
state_36494 = G__36545;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28867__auto__ = function(state_36494){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28867__auto____1.call(this,state_36494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28867__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28867__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___36525,ch))
})();
var state__28980__auto__ = (function (){var statearr_36524 = f__28979__auto__.call(null);
(statearr_36524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___36525);

return statearr_36524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___36525,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36546_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36546_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36549 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36549){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36548){if((e36548 instanceof Error)){
var e = e36548;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36549], null));
} else {
var e = e36548;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36549))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36550){
var map__36559 = p__36550;
var map__36559__$1 = ((((!((map__36559 == null)))?((((map__36559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36559):map__36559);
var opts = map__36559__$1;
var build_id = cljs.core.get.call(null,map__36559__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36559,map__36559__$1,opts,build_id){
return (function (p__36561){
var vec__36562 = p__36561;
var seq__36563 = cljs.core.seq.call(null,vec__36562);
var first__36564 = cljs.core.first.call(null,seq__36563);
var seq__36563__$1 = cljs.core.next.call(null,seq__36563);
var map__36565 = first__36564;
var map__36565__$1 = ((((!((map__36565 == null)))?((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36565):map__36565);
var msg = map__36565__$1;
var msg_name = cljs.core.get.call(null,map__36565__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36563__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36562,seq__36563,first__36564,seq__36563__$1,map__36565,map__36565__$1,msg,msg_name,_,map__36559,map__36559__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36562,seq__36563,first__36564,seq__36563__$1,map__36565,map__36565__$1,msg,msg_name,_,map__36559,map__36559__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36559,map__36559__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36573){
var vec__36574 = p__36573;
var seq__36575 = cljs.core.seq.call(null,vec__36574);
var first__36576 = cljs.core.first.call(null,seq__36575);
var seq__36575__$1 = cljs.core.next.call(null,seq__36575);
var map__36577 = first__36576;
var map__36577__$1 = ((((!((map__36577 == null)))?((((map__36577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36577):map__36577);
var msg = map__36577__$1;
var msg_name = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36575__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36579){
var map__36591 = p__36579;
var map__36591__$1 = ((((!((map__36591 == null)))?((((map__36591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591):map__36591);
var on_compile_warning = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36591,map__36591__$1,on_compile_warning,on_compile_fail){
return (function (p__36593){
var vec__36594 = p__36593;
var seq__36595 = cljs.core.seq.call(null,vec__36594);
var first__36596 = cljs.core.first.call(null,seq__36595);
var seq__36595__$1 = cljs.core.next.call(null,seq__36595);
var map__36597 = first__36596;
var map__36597__$1 = ((((!((map__36597 == null)))?((((map__36597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36597):map__36597);
var msg = map__36597__$1;
var msg_name = cljs.core.get.call(null,map__36597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36595__$1;
var pred__36599 = cljs.core._EQ_;
var expr__36600 = msg_name;
if(cljs.core.truth_(pred__36599.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36600))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36599.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36600))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36591,map__36591__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__,msg_hist,msg_names,msg){
return (function (state_36828){
var state_val_36829 = (state_36828[(1)]);
if((state_val_36829 === (7))){
var inst_36748 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36748)){
var statearr_36830_36880 = state_36828__$1;
(statearr_36830_36880[(1)] = (8));

} else {
var statearr_36831_36881 = state_36828__$1;
(statearr_36831_36881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (20))){
var inst_36822 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36832_36882 = state_36828__$1;
(statearr_36832_36882[(2)] = inst_36822);

(statearr_36832_36882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (27))){
var inst_36818 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36833_36883 = state_36828__$1;
(statearr_36833_36883[(2)] = inst_36818);

(statearr_36833_36883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (1))){
var inst_36741 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36741)){
var statearr_36834_36884 = state_36828__$1;
(statearr_36834_36884[(1)] = (2));

} else {
var statearr_36835_36885 = state_36828__$1;
(statearr_36835_36885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (24))){
var inst_36820 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36836_36886 = state_36828__$1;
(statearr_36836_36886[(2)] = inst_36820);

(statearr_36836_36886[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (4))){
var inst_36826 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36828__$1,inst_36826);
} else {
if((state_val_36829 === (15))){
var inst_36824 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36837_36887 = state_36828__$1;
(statearr_36837_36887[(2)] = inst_36824);

(statearr_36837_36887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (21))){
var inst_36777 = (state_36828[(2)]);
var inst_36778 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36779 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36778);
var state_36828__$1 = (function (){var statearr_36838 = state_36828;
(statearr_36838[(7)] = inst_36777);

return statearr_36838;
})();
var statearr_36839_36888 = state_36828__$1;
(statearr_36839_36888[(2)] = inst_36779);

(statearr_36839_36888[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (31))){
var inst_36807 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36807)){
var statearr_36840_36889 = state_36828__$1;
(statearr_36840_36889[(1)] = (34));

} else {
var statearr_36841_36890 = state_36828__$1;
(statearr_36841_36890[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (32))){
var inst_36816 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36842_36891 = state_36828__$1;
(statearr_36842_36891[(2)] = inst_36816);

(statearr_36842_36891[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (33))){
var inst_36803 = (state_36828[(2)]);
var inst_36804 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36805 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36804);
var state_36828__$1 = (function (){var statearr_36843 = state_36828;
(statearr_36843[(8)] = inst_36803);

return statearr_36843;
})();
var statearr_36844_36892 = state_36828__$1;
(statearr_36844_36892[(2)] = inst_36805);

(statearr_36844_36892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (13))){
var inst_36762 = figwheel.client.heads_up.clear.call(null);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(16),inst_36762);
} else {
if((state_val_36829 === (22))){
var inst_36783 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36784 = figwheel.client.heads_up.append_warning_message.call(null,inst_36783);
var state_36828__$1 = state_36828;
var statearr_36845_36893 = state_36828__$1;
(statearr_36845_36893[(2)] = inst_36784);

(statearr_36845_36893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (36))){
var inst_36814 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36846_36894 = state_36828__$1;
(statearr_36846_36894[(2)] = inst_36814);

(statearr_36846_36894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (29))){
var inst_36794 = (state_36828[(2)]);
var inst_36795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36796 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36795);
var state_36828__$1 = (function (){var statearr_36847 = state_36828;
(statearr_36847[(9)] = inst_36794);

return statearr_36847;
})();
var statearr_36848_36895 = state_36828__$1;
(statearr_36848_36895[(2)] = inst_36796);

(statearr_36848_36895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (6))){
var inst_36743 = (state_36828[(10)]);
var state_36828__$1 = state_36828;
var statearr_36849_36896 = state_36828__$1;
(statearr_36849_36896[(2)] = inst_36743);

(statearr_36849_36896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (28))){
var inst_36790 = (state_36828[(2)]);
var inst_36791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36792 = figwheel.client.heads_up.display_warning.call(null,inst_36791);
var state_36828__$1 = (function (){var statearr_36850 = state_36828;
(statearr_36850[(11)] = inst_36790);

return statearr_36850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(29),inst_36792);
} else {
if((state_val_36829 === (25))){
var inst_36788 = figwheel.client.heads_up.clear.call(null);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(28),inst_36788);
} else {
if((state_val_36829 === (34))){
var inst_36809 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(37),inst_36809);
} else {
if((state_val_36829 === (17))){
var inst_36768 = (state_36828[(2)]);
var inst_36769 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36770 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36769);
var state_36828__$1 = (function (){var statearr_36851 = state_36828;
(statearr_36851[(12)] = inst_36768);

return statearr_36851;
})();
var statearr_36852_36897 = state_36828__$1;
(statearr_36852_36897[(2)] = inst_36770);

(statearr_36852_36897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (3))){
var inst_36760 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36760)){
var statearr_36853_36898 = state_36828__$1;
(statearr_36853_36898[(1)] = (13));

} else {
var statearr_36854_36899 = state_36828__$1;
(statearr_36854_36899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (12))){
var inst_36756 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36855_36900 = state_36828__$1;
(statearr_36855_36900[(2)] = inst_36756);

(statearr_36855_36900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (2))){
var inst_36743 = (state_36828[(10)]);
var inst_36743__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36828__$1 = (function (){var statearr_36856 = state_36828;
(statearr_36856[(10)] = inst_36743__$1);

return statearr_36856;
})();
if(cljs.core.truth_(inst_36743__$1)){
var statearr_36857_36901 = state_36828__$1;
(statearr_36857_36901[(1)] = (5));

} else {
var statearr_36858_36902 = state_36828__$1;
(statearr_36858_36902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (23))){
var inst_36786 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36786)){
var statearr_36859_36903 = state_36828__$1;
(statearr_36859_36903[(1)] = (25));

} else {
var statearr_36860_36904 = state_36828__$1;
(statearr_36860_36904[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (35))){
var state_36828__$1 = state_36828;
var statearr_36861_36905 = state_36828__$1;
(statearr_36861_36905[(2)] = null);

(statearr_36861_36905[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (19))){
var inst_36781 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36781)){
var statearr_36862_36906 = state_36828__$1;
(statearr_36862_36906[(1)] = (22));

} else {
var statearr_36863_36907 = state_36828__$1;
(statearr_36863_36907[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (11))){
var inst_36752 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36864_36908 = state_36828__$1;
(statearr_36864_36908[(2)] = inst_36752);

(statearr_36864_36908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (9))){
var inst_36754 = figwheel.client.heads_up.clear.call(null);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(12),inst_36754);
} else {
if((state_val_36829 === (5))){
var inst_36745 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36828__$1 = state_36828;
var statearr_36865_36909 = state_36828__$1;
(statearr_36865_36909[(2)] = inst_36745);

(statearr_36865_36909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (14))){
var inst_36772 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36772)){
var statearr_36866_36910 = state_36828__$1;
(statearr_36866_36910[(1)] = (18));

} else {
var statearr_36867_36911 = state_36828__$1;
(statearr_36867_36911[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (26))){
var inst_36798 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36798)){
var statearr_36868_36912 = state_36828__$1;
(statearr_36868_36912[(1)] = (30));

} else {
var statearr_36869_36913 = state_36828__$1;
(statearr_36869_36913[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (16))){
var inst_36764 = (state_36828[(2)]);
var inst_36765 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36766 = figwheel.client.heads_up.display_exception.call(null,inst_36765);
var state_36828__$1 = (function (){var statearr_36870 = state_36828;
(statearr_36870[(13)] = inst_36764);

return statearr_36870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(17),inst_36766);
} else {
if((state_val_36829 === (30))){
var inst_36800 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36801 = figwheel.client.heads_up.display_warning.call(null,inst_36800);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(33),inst_36801);
} else {
if((state_val_36829 === (10))){
var inst_36758 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36871_36914 = state_36828__$1;
(statearr_36871_36914[(2)] = inst_36758);

(statearr_36871_36914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (18))){
var inst_36774 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36775 = figwheel.client.heads_up.display_exception.call(null,inst_36774);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(21),inst_36775);
} else {
if((state_val_36829 === (37))){
var inst_36811 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36872_36915 = state_36828__$1;
(statearr_36872_36915[(2)] = inst_36811);

(statearr_36872_36915[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (8))){
var inst_36750 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(11),inst_36750);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28978__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28866__auto__,c__28978__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto____0 = (function (){
var statearr_36876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36876[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto__);

(statearr_36876[(1)] = (1));

return statearr_36876;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto____1 = (function (state_36828){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_36828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e36877){if((e36877 instanceof Object)){
var ex__28870__auto__ = e36877;
var statearr_36878_36916 = state_36828;
(statearr_36878_36916[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_36828;
state_36828 = G__36917;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto__ = function(state_36828){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto____1.call(this,state_36828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__,msg_hist,msg_names,msg))
})();
var state__28980__auto__ = (function (){var statearr_36879 = f__28979__auto__.call(null);
(statearr_36879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_36879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__,msg_hist,msg_names,msg))
);

return c__28978__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28978__auto___36980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___36980,ch){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___36980,ch){
return (function (state_36963){
var state_val_36964 = (state_36963[(1)]);
if((state_val_36964 === (1))){
var state_36963__$1 = state_36963;
var statearr_36965_36981 = state_36963__$1;
(statearr_36965_36981[(2)] = null);

(statearr_36965_36981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (2))){
var state_36963__$1 = state_36963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36963__$1,(4),ch);
} else {
if((state_val_36964 === (3))){
var inst_36961 = (state_36963[(2)]);
var state_36963__$1 = state_36963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36963__$1,inst_36961);
} else {
if((state_val_36964 === (4))){
var inst_36951 = (state_36963[(7)]);
var inst_36951__$1 = (state_36963[(2)]);
var state_36963__$1 = (function (){var statearr_36966 = state_36963;
(statearr_36966[(7)] = inst_36951__$1);

return statearr_36966;
})();
if(cljs.core.truth_(inst_36951__$1)){
var statearr_36967_36982 = state_36963__$1;
(statearr_36967_36982[(1)] = (5));

} else {
var statearr_36968_36983 = state_36963__$1;
(statearr_36968_36983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (5))){
var inst_36951 = (state_36963[(7)]);
var inst_36953 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36951);
var state_36963__$1 = state_36963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36963__$1,(8),inst_36953);
} else {
if((state_val_36964 === (6))){
var state_36963__$1 = state_36963;
var statearr_36969_36984 = state_36963__$1;
(statearr_36969_36984[(2)] = null);

(statearr_36969_36984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (7))){
var inst_36959 = (state_36963[(2)]);
var state_36963__$1 = state_36963;
var statearr_36970_36985 = state_36963__$1;
(statearr_36970_36985[(2)] = inst_36959);

(statearr_36970_36985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36964 === (8))){
var inst_36955 = (state_36963[(2)]);
var state_36963__$1 = (function (){var statearr_36971 = state_36963;
(statearr_36971[(8)] = inst_36955);

return statearr_36971;
})();
var statearr_36972_36986 = state_36963__$1;
(statearr_36972_36986[(2)] = null);

(statearr_36972_36986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28978__auto___36980,ch))
;
return ((function (switch__28866__auto__,c__28978__auto___36980,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28867__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28867__auto____0 = (function (){
var statearr_36976 = [null,null,null,null,null,null,null,null,null];
(statearr_36976[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28867__auto__);

(statearr_36976[(1)] = (1));

return statearr_36976;
});
var figwheel$client$heads_up_plugin_$_state_machine__28867__auto____1 = (function (state_36963){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_36963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e36977){if((e36977 instanceof Object)){
var ex__28870__auto__ = e36977;
var statearr_36978_36987 = state_36963;
(statearr_36978_36987[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36988 = state_36963;
state_36963 = G__36988;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28867__auto__ = function(state_36963){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28867__auto____1.call(this,state_36963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28867__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28867__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___36980,ch))
})();
var state__28980__auto__ = (function (){var statearr_36979 = f__28979__auto__.call(null);
(statearr_36979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___36980);

return statearr_36979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___36980,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__){
return (function (state_37009){
var state_val_37010 = (state_37009[(1)]);
if((state_val_37010 === (1))){
var inst_37004 = cljs.core.async.timeout.call(null,(3000));
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37009__$1,(2),inst_37004);
} else {
if((state_val_37010 === (2))){
var inst_37006 = (state_37009[(2)]);
var inst_37007 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37009__$1 = (function (){var statearr_37011 = state_37009;
(statearr_37011[(7)] = inst_37006);

return statearr_37011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37009__$1,inst_37007);
} else {
return null;
}
}
});})(c__28978__auto__))
;
return ((function (switch__28866__auto__,c__28978__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28867__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28867__auto____0 = (function (){
var statearr_37015 = [null,null,null,null,null,null,null,null];
(statearr_37015[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28867__auto__);

(statearr_37015[(1)] = (1));

return statearr_37015;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28867__auto____1 = (function (state_37009){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_37009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e37016){if((e37016 instanceof Object)){
var ex__28870__auto__ = e37016;
var statearr_37017_37019 = state_37009;
(statearr_37017_37019[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37020 = state_37009;
state_37009 = G__37020;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28867__auto__ = function(state_37009){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28867__auto____1.call(this,state_37009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28867__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28867__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__))
})();
var state__28980__auto__ = (function (){var statearr_37018 = f__28979__auto__.call(null);
(statearr_37018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_37018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__))
);

return c__28978__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37043){
var state_val_37044 = (state_37043[(1)]);
if((state_val_37044 === (1))){
var inst_37037 = cljs.core.async.timeout.call(null,(2000));
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37043__$1,(2),inst_37037);
} else {
if((state_val_37044 === (2))){
var inst_37039 = (state_37043[(2)]);
var inst_37040 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37041 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37040);
var state_37043__$1 = (function (){var statearr_37045 = state_37043;
(statearr_37045[(7)] = inst_37039);

return statearr_37045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37043__$1,inst_37041);
} else {
return null;
}
}
});})(c__28978__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28866__auto__,c__28978__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto____0 = (function (){
var statearr_37049 = [null,null,null,null,null,null,null,null];
(statearr_37049[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto__);

(statearr_37049[(1)] = (1));

return statearr_37049;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto____1 = (function (state_37043){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_37043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e37050){if((e37050 instanceof Object)){
var ex__28870__auto__ = e37050;
var statearr_37051_37053 = state_37043;
(statearr_37051_37053[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37054 = state_37043;
state_37043 = G__37054;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto__ = function(state_37043){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto____1.call(this,state_37043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28980__auto__ = (function (){var statearr_37052 = f__28979__auto__.call(null);
(statearr_37052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_37052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__,figwheel_version,temp__4657__auto__))
);

return c__28978__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37055){
var map__37059 = p__37055;
var map__37059__$1 = ((((!((map__37059 == null)))?((((map__37059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37059):map__37059);
var file = cljs.core.get.call(null,map__37059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37059__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37059__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37061 = "";
var G__37061__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37061),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37061);
var G__37061__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37061__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37061__$1);
if(cljs.core.truth_((function (){var and__25056__auto__ = line;
if(cljs.core.truth_(and__25056__auto__)){
return column;
} else {
return and__25056__auto__;
}
})())){
return [cljs.core.str(G__37061__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37061__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37062){
var map__37069 = p__37062;
var map__37069__$1 = ((((!((map__37069 == null)))?((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37069):map__37069);
var ed = map__37069__$1;
var formatted_exception = cljs.core.get.call(null,map__37069__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37069__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37069__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37071_37075 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37072_37076 = null;
var count__37073_37077 = (0);
var i__37074_37078 = (0);
while(true){
if((i__37074_37078 < count__37073_37077)){
var msg_37079 = cljs.core._nth.call(null,chunk__37072_37076,i__37074_37078);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37079);

var G__37080 = seq__37071_37075;
var G__37081 = chunk__37072_37076;
var G__37082 = count__37073_37077;
var G__37083 = (i__37074_37078 + (1));
seq__37071_37075 = G__37080;
chunk__37072_37076 = G__37081;
count__37073_37077 = G__37082;
i__37074_37078 = G__37083;
continue;
} else {
var temp__4657__auto___37084 = cljs.core.seq.call(null,seq__37071_37075);
if(temp__4657__auto___37084){
var seq__37071_37085__$1 = temp__4657__auto___37084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37071_37085__$1)){
var c__25879__auto___37086 = cljs.core.chunk_first.call(null,seq__37071_37085__$1);
var G__37087 = cljs.core.chunk_rest.call(null,seq__37071_37085__$1);
var G__37088 = c__25879__auto___37086;
var G__37089 = cljs.core.count.call(null,c__25879__auto___37086);
var G__37090 = (0);
seq__37071_37075 = G__37087;
chunk__37072_37076 = G__37088;
count__37073_37077 = G__37089;
i__37074_37078 = G__37090;
continue;
} else {
var msg_37091 = cljs.core.first.call(null,seq__37071_37085__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37091);

var G__37092 = cljs.core.next.call(null,seq__37071_37085__$1);
var G__37093 = null;
var G__37094 = (0);
var G__37095 = (0);
seq__37071_37075 = G__37092;
chunk__37072_37076 = G__37093;
count__37073_37077 = G__37094;
i__37074_37078 = G__37095;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37096){
var map__37099 = p__37096;
var map__37099__$1 = ((((!((map__37099 == null)))?((((map__37099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37099):map__37099);
var w = map__37099__$1;
var message = cljs.core.get.call(null,map__37099__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25056__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25056__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25056__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37111 = cljs.core.seq.call(null,plugins);
var chunk__37112 = null;
var count__37113 = (0);
var i__37114 = (0);
while(true){
if((i__37114 < count__37113)){
var vec__37115 = cljs.core._nth.call(null,chunk__37112,i__37114);
var k = cljs.core.nth.call(null,vec__37115,(0),null);
var plugin = cljs.core.nth.call(null,vec__37115,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37121 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37111,chunk__37112,count__37113,i__37114,pl_37121,vec__37115,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37121.call(null,msg_hist);
});})(seq__37111,chunk__37112,count__37113,i__37114,pl_37121,vec__37115,k,plugin))
);
} else {
}

var G__37122 = seq__37111;
var G__37123 = chunk__37112;
var G__37124 = count__37113;
var G__37125 = (i__37114 + (1));
seq__37111 = G__37122;
chunk__37112 = G__37123;
count__37113 = G__37124;
i__37114 = G__37125;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37111);
if(temp__4657__auto__){
var seq__37111__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37111__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__37111__$1);
var G__37126 = cljs.core.chunk_rest.call(null,seq__37111__$1);
var G__37127 = c__25879__auto__;
var G__37128 = cljs.core.count.call(null,c__25879__auto__);
var G__37129 = (0);
seq__37111 = G__37126;
chunk__37112 = G__37127;
count__37113 = G__37128;
i__37114 = G__37129;
continue;
} else {
var vec__37118 = cljs.core.first.call(null,seq__37111__$1);
var k = cljs.core.nth.call(null,vec__37118,(0),null);
var plugin = cljs.core.nth.call(null,vec__37118,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37130 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37111,chunk__37112,count__37113,i__37114,pl_37130,vec__37118,k,plugin,seq__37111__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37130.call(null,msg_hist);
});})(seq__37111,chunk__37112,count__37113,i__37114,pl_37130,vec__37118,k,plugin,seq__37111__$1,temp__4657__auto__))
);
} else {
}

var G__37131 = cljs.core.next.call(null,seq__37111__$1);
var G__37132 = null;
var G__37133 = (0);
var G__37134 = (0);
seq__37111 = G__37131;
chunk__37112 = G__37132;
count__37113 = G__37133;
i__37114 = G__37134;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37135 = [];
var len__26143__auto___37142 = arguments.length;
var i__26144__auto___37143 = (0);
while(true){
if((i__26144__auto___37143 < len__26143__auto___37142)){
args37135.push((arguments[i__26144__auto___37143]));

var G__37144 = (i__26144__auto___37143 + (1));
i__26144__auto___37143 = G__37144;
continue;
} else {
}
break;
}

var G__37137 = args37135.length;
switch (G__37137) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37135.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37138_37146 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37139_37147 = null;
var count__37140_37148 = (0);
var i__37141_37149 = (0);
while(true){
if((i__37141_37149 < count__37140_37148)){
var msg_37150 = cljs.core._nth.call(null,chunk__37139_37147,i__37141_37149);
figwheel.client.socket.handle_incoming_message.call(null,msg_37150);

var G__37151 = seq__37138_37146;
var G__37152 = chunk__37139_37147;
var G__37153 = count__37140_37148;
var G__37154 = (i__37141_37149 + (1));
seq__37138_37146 = G__37151;
chunk__37139_37147 = G__37152;
count__37140_37148 = G__37153;
i__37141_37149 = G__37154;
continue;
} else {
var temp__4657__auto___37155 = cljs.core.seq.call(null,seq__37138_37146);
if(temp__4657__auto___37155){
var seq__37138_37156__$1 = temp__4657__auto___37155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37138_37156__$1)){
var c__25879__auto___37157 = cljs.core.chunk_first.call(null,seq__37138_37156__$1);
var G__37158 = cljs.core.chunk_rest.call(null,seq__37138_37156__$1);
var G__37159 = c__25879__auto___37157;
var G__37160 = cljs.core.count.call(null,c__25879__auto___37157);
var G__37161 = (0);
seq__37138_37146 = G__37158;
chunk__37139_37147 = G__37159;
count__37140_37148 = G__37160;
i__37141_37149 = G__37161;
continue;
} else {
var msg_37162 = cljs.core.first.call(null,seq__37138_37156__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37162);

var G__37163 = cljs.core.next.call(null,seq__37138_37156__$1);
var G__37164 = null;
var G__37165 = (0);
var G__37166 = (0);
seq__37138_37146 = G__37163;
chunk__37139_37147 = G__37164;
count__37140_37148 = G__37165;
i__37141_37149 = G__37166;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37171 = arguments.length;
var i__26144__auto___37172 = (0);
while(true){
if((i__26144__auto___37172 < len__26143__auto___37171)){
args__26150__auto__.push((arguments[i__26144__auto___37172]));

var G__37173 = (i__26144__auto___37172 + (1));
i__26144__auto___37172 = G__37173;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37168){
var map__37169 = p__37168;
var map__37169__$1 = ((((!((map__37169 == null)))?((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37169):map__37169);
var opts = map__37169__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37167){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37167));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37175){if((e37175 instanceof Error)){
var e = e37175;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37175;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37179){
var map__37180 = p__37179;
var map__37180__$1 = ((((!((map__37180 == null)))?((((map__37180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37180):map__37180);
var msg_name = cljs.core.get.call(null,map__37180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1488653208436
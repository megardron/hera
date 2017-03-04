// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25731__auto__ = (((value == null))?null:value);
var m__25732__auto__ = (devtools.format._header[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,value);
} else {
var m__25732__auto____$1 = (devtools.format._header["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25731__auto__ = (((value == null))?null:value);
var m__25732__auto__ = (devtools.format._has_body[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,value);
} else {
var m__25732__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25731__auto__ = (((value == null))?null:value);
var m__25732__auto__ = (devtools.format._body[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,value);
} else {
var m__25732__auto____$1 = (devtools.format._body["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37230__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37230__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37230__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37230__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37229__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37229__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37251 = arguments.length;
var i__26144__auto___37252 = (0);
while(true){
if((i__26144__auto___37252 < len__26143__auto___37251)){
args__26150__auto__.push((arguments[i__26144__auto___37252]));

var G__37253 = (i__26144__auto___37252 + (1));
i__26144__auto___37252 = G__37253;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37250){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37250));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37255 = arguments.length;
var i__26144__auto___37256 = (0);
while(true){
if((i__26144__auto___37256 < len__26143__auto___37255)){
args__26150__auto__.push((arguments[i__26144__auto___37256]));

var G__37257 = (i__26144__auto___37256 + (1));
i__26144__auto___37256 = G__37257;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37254){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37254));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37259 = arguments.length;
var i__26144__auto___37260 = (0);
while(true){
if((i__26144__auto___37260 < len__26143__auto___37259)){
args__26150__auto__.push((arguments[i__26144__auto___37260]));

var G__37261 = (i__26144__auto___37260 + (1));
i__26144__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37258){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37258));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37263 = arguments.length;
var i__26144__auto___37264 = (0);
while(true){
if((i__26144__auto___37264 < len__26143__auto___37263)){
args__26150__auto__.push((arguments[i__26144__auto___37264]));

var G__37265 = (i__26144__auto___37264 + (1));
i__26144__auto___37264 = G__37265;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37262){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37262));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37267 = arguments.length;
var i__26144__auto___37268 = (0);
while(true){
if((i__26144__auto___37268 < len__26143__auto___37267)){
args__26150__auto__.push((arguments[i__26144__auto___37268]));

var G__37269 = (i__26144__auto___37268 + (1));
i__26144__auto___37268 = G__37269;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37266){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37266));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37271 = arguments.length;
var i__26144__auto___37272 = (0);
while(true){
if((i__26144__auto___37272 < len__26143__auto___37271)){
args__26150__auto__.push((arguments[i__26144__auto___37272]));

var G__37273 = (i__26144__auto___37272 + (1));
i__26144__auto___37272 = G__37273;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37270){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37270));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37275 = arguments.length;
var i__26144__auto___37276 = (0);
while(true){
if((i__26144__auto___37276 < len__26143__auto___37275)){
args__26150__auto__.push((arguments[i__26144__auto___37276]));

var G__37277 = (i__26144__auto___37276 + (1));
i__26144__auto___37276 = G__37277;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37274){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37274));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37285 = arguments.length;
var i__26144__auto___37286 = (0);
while(true){
if((i__26144__auto___37286 < len__26143__auto___37285)){
args__26150__auto__.push((arguments[i__26144__auto___37286]));

var G__37287 = (i__26144__auto___37286 + (1));
i__26144__auto___37286 = G__37287;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((1) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26151__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37281){
var vec__37282 = p__37281;
var state_override = cljs.core.nth.call(null,vec__37282,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37282,state_override){
return (function (p1__37278_SHARP_){
return cljs.core.merge.call(null,p1__37278_SHARP_,state_override);
});})(vec__37282,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37279){
var G__37280 = cljs.core.first.call(null,seq37279);
var seq37279__$1 = cljs.core.next.call(null,seq37279);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37280,seq37279__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37289 = arguments.length;
var i__26144__auto___37290 = (0);
while(true){
if((i__26144__auto___37290 < len__26143__auto___37289)){
args__26150__auto__.push((arguments[i__26144__auto___37290]));

var G__37291 = (i__26144__auto___37290 + (1));
i__26144__auto___37290 = G__37291;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37288){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37288));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26150__auto__ = [];
var len__26143__auto___37294 = arguments.length;
var i__26144__auto___37295 = (0);
while(true){
if((i__26144__auto___37295 < len__26143__auto___37294)){
args__26150__auto__.push((arguments[i__26144__auto___37295]));

var G__37296 = (i__26144__auto___37295 + (1));
i__26144__auto___37295 = G__37296;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((1) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26151__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37292){
var G__37293 = cljs.core.first.call(null,seq37292);
var seq37292__$1 = cljs.core.next.call(null,seq37292);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37293,seq37292__$1);
});


//# sourceMappingURL=format.js.map?rel=1488653208723
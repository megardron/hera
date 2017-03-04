// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x39715_39716 = value;
x39715_39716.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x39720_39721 = value;
x39720_39721.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x39725_39726 = value;
x39725_39726.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25056__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25056__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25056__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26150__auto__ = [];
var len__26143__auto___39734 = arguments.length;
var i__26144__auto___39735 = (0);
while(true){
if((i__26144__auto___39735 < len__26143__auto___39734)){
args__26150__auto__.push((arguments[i__26144__auto___39735]));

var G__39736 = (i__26144__auto___39735 + (1));
i__26144__auto___39735 = G__39736;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((0) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26151__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__39730_39737 = cljs.core.seq.call(null,items);
var chunk__39731_39738 = null;
var count__39732_39739 = (0);
var i__39733_39740 = (0);
while(true){
if((i__39733_39740 < count__39732_39739)){
var item_39741 = cljs.core._nth.call(null,chunk__39731_39738,i__39733_39740);
if(cljs.core.some_QMARK_.call(null,item_39741)){
if(cljs.core.coll_QMARK_.call(null,item_39741)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39741)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39741));
}
} else {
}

var G__39742 = seq__39730_39737;
var G__39743 = chunk__39731_39738;
var G__39744 = count__39732_39739;
var G__39745 = (i__39733_39740 + (1));
seq__39730_39737 = G__39742;
chunk__39731_39738 = G__39743;
count__39732_39739 = G__39744;
i__39733_39740 = G__39745;
continue;
} else {
var temp__4657__auto___39746 = cljs.core.seq.call(null,seq__39730_39737);
if(temp__4657__auto___39746){
var seq__39730_39747__$1 = temp__4657__auto___39746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39730_39747__$1)){
var c__25879__auto___39748 = cljs.core.chunk_first.call(null,seq__39730_39747__$1);
var G__39749 = cljs.core.chunk_rest.call(null,seq__39730_39747__$1);
var G__39750 = c__25879__auto___39748;
var G__39751 = cljs.core.count.call(null,c__25879__auto___39748);
var G__39752 = (0);
seq__39730_39737 = G__39749;
chunk__39731_39738 = G__39750;
count__39732_39739 = G__39751;
i__39733_39740 = G__39752;
continue;
} else {
var item_39753 = cljs.core.first.call(null,seq__39730_39747__$1);
if(cljs.core.some_QMARK_.call(null,item_39753)){
if(cljs.core.coll_QMARK_.call(null,item_39753)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39753)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39753));
}
} else {
}

var G__39754 = cljs.core.next.call(null,seq__39730_39747__$1);
var G__39755 = null;
var G__39756 = (0);
var G__39757 = (0);
seq__39730_39737 = G__39754;
chunk__39731_39738 = G__39755;
count__39732_39739 = G__39756;
i__39733_39740 = G__39757;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq39729){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39729));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26150__auto__ = [];
var len__26143__auto___39765 = arguments.length;
var i__26144__auto___39766 = (0);
while(true){
if((i__26144__auto___39766 < len__26143__auto___39765)){
args__26150__auto__.push((arguments[i__26144__auto___39766]));

var G__39767 = (i__26144__auto___39766 + (1));
i__26144__auto___39766 = G__39767;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((2) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26151__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__39761_39768 = cljs.core.seq.call(null,children);
var chunk__39762_39769 = null;
var count__39763_39770 = (0);
var i__39764_39771 = (0);
while(true){
if((i__39764_39771 < count__39763_39770)){
var child_39772 = cljs.core._nth.call(null,chunk__39762_39769,i__39764_39771);
if(cljs.core.some_QMARK_.call(null,child_39772)){
if(cljs.core.coll_QMARK_.call(null,child_39772)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39772))));
} else {
var temp__4655__auto___39773 = devtools.formatters.helpers.pref.call(null,child_39772);
if(cljs.core.truth_(temp__4655__auto___39773)){
var child_value_39774 = temp__4655__auto___39773;
template.push(child_value_39774);
} else {
}
}
} else {
}

var G__39775 = seq__39761_39768;
var G__39776 = chunk__39762_39769;
var G__39777 = count__39763_39770;
var G__39778 = (i__39764_39771 + (1));
seq__39761_39768 = G__39775;
chunk__39762_39769 = G__39776;
count__39763_39770 = G__39777;
i__39764_39771 = G__39778;
continue;
} else {
var temp__4657__auto___39779 = cljs.core.seq.call(null,seq__39761_39768);
if(temp__4657__auto___39779){
var seq__39761_39780__$1 = temp__4657__auto___39779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39761_39780__$1)){
var c__25879__auto___39781 = cljs.core.chunk_first.call(null,seq__39761_39780__$1);
var G__39782 = cljs.core.chunk_rest.call(null,seq__39761_39780__$1);
var G__39783 = c__25879__auto___39781;
var G__39784 = cljs.core.count.call(null,c__25879__auto___39781);
var G__39785 = (0);
seq__39761_39768 = G__39782;
chunk__39762_39769 = G__39783;
count__39763_39770 = G__39784;
i__39764_39771 = G__39785;
continue;
} else {
var child_39786 = cljs.core.first.call(null,seq__39761_39780__$1);
if(cljs.core.some_QMARK_.call(null,child_39786)){
if(cljs.core.coll_QMARK_.call(null,child_39786)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39786))));
} else {
var temp__4655__auto___39787 = devtools.formatters.helpers.pref.call(null,child_39786);
if(cljs.core.truth_(temp__4655__auto___39787)){
var child_value_39788 = temp__4655__auto___39787;
template.push(child_value_39788);
} else {
}
}
} else {
}

var G__39789 = cljs.core.next.call(null,seq__39761_39780__$1);
var G__39790 = null;
var G__39791 = (0);
var G__39792 = (0);
seq__39761_39768 = G__39789;
chunk__39762_39769 = G__39790;
count__39763_39770 = G__39791;
i__39764_39771 = G__39792;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq39758){
var G__39759 = cljs.core.first.call(null,seq39758);
var seq39758__$1 = cljs.core.next.call(null,seq39758);
var G__39760 = cljs.core.first.call(null,seq39758__$1);
var seq39758__$2 = cljs.core.next.call(null,seq39758__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__39759,G__39760,seq39758__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26150__auto__ = [];
var len__26143__auto___39795 = arguments.length;
var i__26144__auto___39796 = (0);
while(true){
if((i__26144__auto___39796 < len__26143__auto___39795)){
args__26150__auto__.push((arguments[i__26144__auto___39796]));

var G__39797 = (i__26144__auto___39796 + (1));
i__26144__auto___39796 = G__39797;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((1) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26151__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq39793){
var G__39794 = cljs.core.first.call(null,seq39793);
var seq39793__$1 = cljs.core.next.call(null,seq39793);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39794,seq39793__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26150__auto__ = [];
var len__26143__auto___39800 = arguments.length;
var i__26144__auto___39801 = (0);
while(true){
if((i__26144__auto___39801 < len__26143__auto___39800)){
args__26150__auto__.push((arguments[i__26144__auto___39801]));

var G__39802 = (i__26144__auto___39801 + (1));
i__26144__auto___39801 = G__39802;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((1) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26151__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq39798){
var G__39799 = cljs.core.first.call(null,seq39798);
var seq39798__$1 = cljs.core.next.call(null,seq39798);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39799,seq39798__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args39803 = [];
var len__26143__auto___39808 = arguments.length;
var i__26144__auto___39809 = (0);
while(true){
if((i__26144__auto___39809 < len__26143__auto___39808)){
args39803.push((arguments[i__26144__auto___39809]));

var G__39810 = (i__26144__auto___39809 + (1));
i__26144__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var G__39805 = args39803.length;
switch (G__39805) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39803.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj39807 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25068__auto__ = start_index;
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return (0);
}
})()};
return obj39807;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26150__auto__ = [];
var len__26143__auto___39818 = arguments.length;
var i__26144__auto___39819 = (0);
while(true){
if((i__26144__auto___39819 < len__26143__auto___39818)){
args__26150__auto__.push((arguments[i__26144__auto___39819]));

var G__39820 = (i__26144__auto___39819 + (1));
i__26144__auto___39819 = G__39820;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((1) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26151__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39814){
var vec__39815 = p__39814;
var state_override_fn = cljs.core.nth.call(null,vec__39815,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq39812){
var G__39813 = cljs.core.first.call(null,seq39812);
var seq39812__$1 = cljs.core.next.call(null,seq39812);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__39813,seq39812__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26054__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39824_39827 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39825_39828 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39824_39827,_STAR_print_fn_STAR_39825_39828,sb__26054__auto__){
return (function (x__26055__auto__){
return sb__26054__auto__.append(x__26055__auto__);
});})(_STAR_print_newline_STAR_39824_39827,_STAR_print_fn_STAR_39825_39828,sb__26054__auto__))
;

try{var _STAR_print_level_STAR_39826_39829 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39826_39829;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39825_39828;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39824_39827;
}
return [cljs.core.str(sb__26054__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_39831 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39831;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__39833 = name;
switch (G__39833) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__39838 = tag;
var html_tag = cljs.core.nth.call(null,vec__39838,(0),null);
var style = cljs.core.nth.call(null,vec__39838,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_39842 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39842;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_39845 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_39846 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39846;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_39845;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__39847 = initial_value;
var G__39848 = value.call(null);
initial_value = G__39847;
value = G__39848;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__39849 = initial_value;
var G__39850 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__39849;
value = G__39850;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__39851 = initial_value;
var G__39852 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__39851;
value = G__39852;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1488653213075
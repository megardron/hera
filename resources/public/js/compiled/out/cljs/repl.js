// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34185){
var map__34210 = p__34185;
var map__34210__$1 = ((((!((map__34210 == null)))?((((map__34210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34210):map__34210);
var m = map__34210__$1;
var n = cljs.core.get.call(null,map__34210__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34210__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34212_34234 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34213_34235 = null;
var count__34214_34236 = (0);
var i__34215_34237 = (0);
while(true){
if((i__34215_34237 < count__34214_34236)){
var f_34238 = cljs.core._nth.call(null,chunk__34213_34235,i__34215_34237);
cljs.core.println.call(null,"  ",f_34238);

var G__34239 = seq__34212_34234;
var G__34240 = chunk__34213_34235;
var G__34241 = count__34214_34236;
var G__34242 = (i__34215_34237 + (1));
seq__34212_34234 = G__34239;
chunk__34213_34235 = G__34240;
count__34214_34236 = G__34241;
i__34215_34237 = G__34242;
continue;
} else {
var temp__4657__auto___34243 = cljs.core.seq.call(null,seq__34212_34234);
if(temp__4657__auto___34243){
var seq__34212_34244__$1 = temp__4657__auto___34243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34212_34244__$1)){
var c__25879__auto___34245 = cljs.core.chunk_first.call(null,seq__34212_34244__$1);
var G__34246 = cljs.core.chunk_rest.call(null,seq__34212_34244__$1);
var G__34247 = c__25879__auto___34245;
var G__34248 = cljs.core.count.call(null,c__25879__auto___34245);
var G__34249 = (0);
seq__34212_34234 = G__34246;
chunk__34213_34235 = G__34247;
count__34214_34236 = G__34248;
i__34215_34237 = G__34249;
continue;
} else {
var f_34250 = cljs.core.first.call(null,seq__34212_34244__$1);
cljs.core.println.call(null,"  ",f_34250);

var G__34251 = cljs.core.next.call(null,seq__34212_34244__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__34212_34234 = G__34251;
chunk__34213_34235 = G__34252;
count__34214_34236 = G__34253;
i__34215_34237 = G__34254;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34255 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25068__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34255);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34255)))?cljs.core.second.call(null,arglists_34255):arglists_34255));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34216_34256 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34217_34257 = null;
var count__34218_34258 = (0);
var i__34219_34259 = (0);
while(true){
if((i__34219_34259 < count__34218_34258)){
var vec__34220_34260 = cljs.core._nth.call(null,chunk__34217_34257,i__34219_34259);
var name_34261 = cljs.core.nth.call(null,vec__34220_34260,(0),null);
var map__34223_34262 = cljs.core.nth.call(null,vec__34220_34260,(1),null);
var map__34223_34263__$1 = ((((!((map__34223_34262 == null)))?((((map__34223_34262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34223_34262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34223_34262):map__34223_34262);
var doc_34264 = cljs.core.get.call(null,map__34223_34263__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34265 = cljs.core.get.call(null,map__34223_34263__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34261);

cljs.core.println.call(null," ",arglists_34265);

if(cljs.core.truth_(doc_34264)){
cljs.core.println.call(null," ",doc_34264);
} else {
}

var G__34266 = seq__34216_34256;
var G__34267 = chunk__34217_34257;
var G__34268 = count__34218_34258;
var G__34269 = (i__34219_34259 + (1));
seq__34216_34256 = G__34266;
chunk__34217_34257 = G__34267;
count__34218_34258 = G__34268;
i__34219_34259 = G__34269;
continue;
} else {
var temp__4657__auto___34270 = cljs.core.seq.call(null,seq__34216_34256);
if(temp__4657__auto___34270){
var seq__34216_34271__$1 = temp__4657__auto___34270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34216_34271__$1)){
var c__25879__auto___34272 = cljs.core.chunk_first.call(null,seq__34216_34271__$1);
var G__34273 = cljs.core.chunk_rest.call(null,seq__34216_34271__$1);
var G__34274 = c__25879__auto___34272;
var G__34275 = cljs.core.count.call(null,c__25879__auto___34272);
var G__34276 = (0);
seq__34216_34256 = G__34273;
chunk__34217_34257 = G__34274;
count__34218_34258 = G__34275;
i__34219_34259 = G__34276;
continue;
} else {
var vec__34225_34277 = cljs.core.first.call(null,seq__34216_34271__$1);
var name_34278 = cljs.core.nth.call(null,vec__34225_34277,(0),null);
var map__34228_34279 = cljs.core.nth.call(null,vec__34225_34277,(1),null);
var map__34228_34280__$1 = ((((!((map__34228_34279 == null)))?((((map__34228_34279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34228_34279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34228_34279):map__34228_34279);
var doc_34281 = cljs.core.get.call(null,map__34228_34280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34282 = cljs.core.get.call(null,map__34228_34280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34278);

cljs.core.println.call(null," ",arglists_34282);

if(cljs.core.truth_(doc_34281)){
cljs.core.println.call(null," ",doc_34281);
} else {
}

var G__34283 = cljs.core.next.call(null,seq__34216_34271__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__34216_34256 = G__34283;
chunk__34217_34257 = G__34284;
count__34218_34258 = G__34285;
i__34219_34259 = G__34286;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__34230 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34231 = null;
var count__34232 = (0);
var i__34233 = (0);
while(true){
if((i__34233 < count__34232)){
var role = cljs.core._nth.call(null,chunk__34231,i__34233);
var temp__4657__auto___34287__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34287__$1)){
var spec_34288 = temp__4657__auto___34287__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34288));
} else {
}

var G__34289 = seq__34230;
var G__34290 = chunk__34231;
var G__34291 = count__34232;
var G__34292 = (i__34233 + (1));
seq__34230 = G__34289;
chunk__34231 = G__34290;
count__34232 = G__34291;
i__34233 = G__34292;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__34230);
if(temp__4657__auto____$1){
var seq__34230__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34230__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__34230__$1);
var G__34293 = cljs.core.chunk_rest.call(null,seq__34230__$1);
var G__34294 = c__25879__auto__;
var G__34295 = cljs.core.count.call(null,c__25879__auto__);
var G__34296 = (0);
seq__34230 = G__34293;
chunk__34231 = G__34294;
count__34232 = G__34295;
i__34233 = G__34296;
continue;
} else {
var role = cljs.core.first.call(null,seq__34230__$1);
var temp__4657__auto___34297__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___34297__$2)){
var spec_34298 = temp__4657__auto___34297__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_34298));
} else {
}

var G__34299 = cljs.core.next.call(null,seq__34230__$1);
var G__34300 = null;
var G__34301 = (0);
var G__34302 = (0);
seq__34230 = G__34299;
chunk__34231 = G__34300;
count__34232 = G__34301;
i__34233 = G__34302;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1488653204692
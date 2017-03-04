// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25068__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25068__auto__){
return or__25068__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25068__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31833_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31833_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31838 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31839 = null;
var count__31840 = (0);
var i__31841 = (0);
while(true){
if((i__31841 < count__31840)){
var n = cljs.core._nth.call(null,chunk__31839,i__31841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31842 = seq__31838;
var G__31843 = chunk__31839;
var G__31844 = count__31840;
var G__31845 = (i__31841 + (1));
seq__31838 = G__31842;
chunk__31839 = G__31843;
count__31840 = G__31844;
i__31841 = G__31845;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31838);
if(temp__4657__auto__){
var seq__31838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31838__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__31838__$1);
var G__31846 = cljs.core.chunk_rest.call(null,seq__31838__$1);
var G__31847 = c__25879__auto__;
var G__31848 = cljs.core.count.call(null,c__25879__auto__);
var G__31849 = (0);
seq__31838 = G__31846;
chunk__31839 = G__31847;
count__31840 = G__31848;
i__31841 = G__31849;
continue;
} else {
var n = cljs.core.first.call(null,seq__31838__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31850 = cljs.core.next.call(null,seq__31838__$1);
var G__31851 = null;
var G__31852 = (0);
var G__31853 = (0);
seq__31838 = G__31850;
chunk__31839 = G__31851;
count__31840 = G__31852;
i__31841 = G__31853;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31904_31915 = cljs.core.seq.call(null,deps);
var chunk__31905_31916 = null;
var count__31906_31917 = (0);
var i__31907_31918 = (0);
while(true){
if((i__31907_31918 < count__31906_31917)){
var dep_31919 = cljs.core._nth.call(null,chunk__31905_31916,i__31907_31918);
topo_sort_helper_STAR_.call(null,dep_31919,(depth + (1)),state);

var G__31920 = seq__31904_31915;
var G__31921 = chunk__31905_31916;
var G__31922 = count__31906_31917;
var G__31923 = (i__31907_31918 + (1));
seq__31904_31915 = G__31920;
chunk__31905_31916 = G__31921;
count__31906_31917 = G__31922;
i__31907_31918 = G__31923;
continue;
} else {
var temp__4657__auto___31924 = cljs.core.seq.call(null,seq__31904_31915);
if(temp__4657__auto___31924){
var seq__31904_31925__$1 = temp__4657__auto___31924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31904_31925__$1)){
var c__25879__auto___31926 = cljs.core.chunk_first.call(null,seq__31904_31925__$1);
var G__31927 = cljs.core.chunk_rest.call(null,seq__31904_31925__$1);
var G__31928 = c__25879__auto___31926;
var G__31929 = cljs.core.count.call(null,c__25879__auto___31926);
var G__31930 = (0);
seq__31904_31915 = G__31927;
chunk__31905_31916 = G__31928;
count__31906_31917 = G__31929;
i__31907_31918 = G__31930;
continue;
} else {
var dep_31931 = cljs.core.first.call(null,seq__31904_31925__$1);
topo_sort_helper_STAR_.call(null,dep_31931,(depth + (1)),state);

var G__31932 = cljs.core.next.call(null,seq__31904_31925__$1);
var G__31933 = null;
var G__31934 = (0);
var G__31935 = (0);
seq__31904_31915 = G__31932;
chunk__31905_31916 = G__31933;
count__31906_31917 = G__31934;
i__31907_31918 = G__31935;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31908){
var vec__31912 = p__31908;
var seq__31913 = cljs.core.seq.call(null,vec__31912);
var first__31914 = cljs.core.first.call(null,seq__31913);
var seq__31913__$1 = cljs.core.next.call(null,seq__31913);
var x = first__31914;
var xs = seq__31913__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31912,seq__31913,first__31914,seq__31913__$1,x,xs,get_deps__$1){
return (function (p1__31854_SHARP_){
return clojure.set.difference.call(null,p1__31854_SHARP_,x);
});})(vec__31912,seq__31913,first__31914,seq__31913__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31948 = cljs.core.seq.call(null,provides);
var chunk__31949 = null;
var count__31950 = (0);
var i__31951 = (0);
while(true){
if((i__31951 < count__31950)){
var prov = cljs.core._nth.call(null,chunk__31949,i__31951);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31952_31960 = cljs.core.seq.call(null,requires);
var chunk__31953_31961 = null;
var count__31954_31962 = (0);
var i__31955_31963 = (0);
while(true){
if((i__31955_31963 < count__31954_31962)){
var req_31964 = cljs.core._nth.call(null,chunk__31953_31961,i__31955_31963);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31964,prov);

var G__31965 = seq__31952_31960;
var G__31966 = chunk__31953_31961;
var G__31967 = count__31954_31962;
var G__31968 = (i__31955_31963 + (1));
seq__31952_31960 = G__31965;
chunk__31953_31961 = G__31966;
count__31954_31962 = G__31967;
i__31955_31963 = G__31968;
continue;
} else {
var temp__4657__auto___31969 = cljs.core.seq.call(null,seq__31952_31960);
if(temp__4657__auto___31969){
var seq__31952_31970__$1 = temp__4657__auto___31969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31952_31970__$1)){
var c__25879__auto___31971 = cljs.core.chunk_first.call(null,seq__31952_31970__$1);
var G__31972 = cljs.core.chunk_rest.call(null,seq__31952_31970__$1);
var G__31973 = c__25879__auto___31971;
var G__31974 = cljs.core.count.call(null,c__25879__auto___31971);
var G__31975 = (0);
seq__31952_31960 = G__31972;
chunk__31953_31961 = G__31973;
count__31954_31962 = G__31974;
i__31955_31963 = G__31975;
continue;
} else {
var req_31976 = cljs.core.first.call(null,seq__31952_31970__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31976,prov);

var G__31977 = cljs.core.next.call(null,seq__31952_31970__$1);
var G__31978 = null;
var G__31979 = (0);
var G__31980 = (0);
seq__31952_31960 = G__31977;
chunk__31953_31961 = G__31978;
count__31954_31962 = G__31979;
i__31955_31963 = G__31980;
continue;
}
} else {
}
}
break;
}

var G__31981 = seq__31948;
var G__31982 = chunk__31949;
var G__31983 = count__31950;
var G__31984 = (i__31951 + (1));
seq__31948 = G__31981;
chunk__31949 = G__31982;
count__31950 = G__31983;
i__31951 = G__31984;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31948);
if(temp__4657__auto__){
var seq__31948__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31948__$1)){
var c__25879__auto__ = cljs.core.chunk_first.call(null,seq__31948__$1);
var G__31985 = cljs.core.chunk_rest.call(null,seq__31948__$1);
var G__31986 = c__25879__auto__;
var G__31987 = cljs.core.count.call(null,c__25879__auto__);
var G__31988 = (0);
seq__31948 = G__31985;
chunk__31949 = G__31986;
count__31950 = G__31987;
i__31951 = G__31988;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31948__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31956_31989 = cljs.core.seq.call(null,requires);
var chunk__31957_31990 = null;
var count__31958_31991 = (0);
var i__31959_31992 = (0);
while(true){
if((i__31959_31992 < count__31958_31991)){
var req_31993 = cljs.core._nth.call(null,chunk__31957_31990,i__31959_31992);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31993,prov);

var G__31994 = seq__31956_31989;
var G__31995 = chunk__31957_31990;
var G__31996 = count__31958_31991;
var G__31997 = (i__31959_31992 + (1));
seq__31956_31989 = G__31994;
chunk__31957_31990 = G__31995;
count__31958_31991 = G__31996;
i__31959_31992 = G__31997;
continue;
} else {
var temp__4657__auto___31998__$1 = cljs.core.seq.call(null,seq__31956_31989);
if(temp__4657__auto___31998__$1){
var seq__31956_31999__$1 = temp__4657__auto___31998__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31956_31999__$1)){
var c__25879__auto___32000 = cljs.core.chunk_first.call(null,seq__31956_31999__$1);
var G__32001 = cljs.core.chunk_rest.call(null,seq__31956_31999__$1);
var G__32002 = c__25879__auto___32000;
var G__32003 = cljs.core.count.call(null,c__25879__auto___32000);
var G__32004 = (0);
seq__31956_31989 = G__32001;
chunk__31957_31990 = G__32002;
count__31958_31991 = G__32003;
i__31959_31992 = G__32004;
continue;
} else {
var req_32005 = cljs.core.first.call(null,seq__31956_31999__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32005,prov);

var G__32006 = cljs.core.next.call(null,seq__31956_31999__$1);
var G__32007 = null;
var G__32008 = (0);
var G__32009 = (0);
seq__31956_31989 = G__32006;
chunk__31957_31990 = G__32007;
count__31958_31991 = G__32008;
i__31959_31992 = G__32009;
continue;
}
} else {
}
}
break;
}

var G__32010 = cljs.core.next.call(null,seq__31948__$1);
var G__32011 = null;
var G__32012 = (0);
var G__32013 = (0);
seq__31948 = G__32010;
chunk__31949 = G__32011;
count__31950 = G__32012;
i__31951 = G__32013;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32018_32022 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32019_32023 = null;
var count__32020_32024 = (0);
var i__32021_32025 = (0);
while(true){
if((i__32021_32025 < count__32020_32024)){
var ns_32026 = cljs.core._nth.call(null,chunk__32019_32023,i__32021_32025);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32026);

var G__32027 = seq__32018_32022;
var G__32028 = chunk__32019_32023;
var G__32029 = count__32020_32024;
var G__32030 = (i__32021_32025 + (1));
seq__32018_32022 = G__32027;
chunk__32019_32023 = G__32028;
count__32020_32024 = G__32029;
i__32021_32025 = G__32030;
continue;
} else {
var temp__4657__auto___32031 = cljs.core.seq.call(null,seq__32018_32022);
if(temp__4657__auto___32031){
var seq__32018_32032__$1 = temp__4657__auto___32031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32018_32032__$1)){
var c__25879__auto___32033 = cljs.core.chunk_first.call(null,seq__32018_32032__$1);
var G__32034 = cljs.core.chunk_rest.call(null,seq__32018_32032__$1);
var G__32035 = c__25879__auto___32033;
var G__32036 = cljs.core.count.call(null,c__25879__auto___32033);
var G__32037 = (0);
seq__32018_32022 = G__32034;
chunk__32019_32023 = G__32035;
count__32020_32024 = G__32036;
i__32021_32025 = G__32037;
continue;
} else {
var ns_32038 = cljs.core.first.call(null,seq__32018_32032__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32038);

var G__32039 = cljs.core.next.call(null,seq__32018_32032__$1);
var G__32040 = null;
var G__32041 = (0);
var G__32042 = (0);
seq__32018_32022 = G__32039;
chunk__32019_32023 = G__32040;
count__32020_32024 = G__32041;
i__32021_32025 = G__32042;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25068__auto__ = goog.require__;
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32043__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32044__i = 0, G__32044__a = new Array(arguments.length -  0);
while (G__32044__i < G__32044__a.length) {G__32044__a[G__32044__i] = arguments[G__32044__i + 0]; ++G__32044__i;}
  args = new cljs.core.IndexedSeq(G__32044__a,0);
} 
return G__32043__delegate.call(this,args);};
G__32043.cljs$lang$maxFixedArity = 0;
G__32043.cljs$lang$applyTo = (function (arglist__32045){
var args = cljs.core.seq(arglist__32045);
return G__32043__delegate(args);
});
G__32043.cljs$core$IFn$_invoke$arity$variadic = G__32043__delegate;
return G__32043;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32047 = cljs.core._EQ_;
var expr__32048 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32047.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32048))){
var path_parts = ((function (pred__32047,expr__32048){
return (function (p1__32046_SHARP_){
return clojure.string.split.call(null,p1__32046_SHARP_,/[\/\\]/);
});})(pred__32047,expr__32048))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32047,expr__32048){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32050){if((e32050 instanceof Error)){
var e = e32050;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32050;

}
}})());
});
;})(path_parts,sep,root,pred__32047,expr__32048))
} else {
if(cljs.core.truth_(pred__32047.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32048))){
return ((function (pred__32047,expr__32048){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32047,expr__32048){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32047,expr__32048))
);

return deferred.addErrback(((function (deferred,pred__32047,expr__32048){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32047,expr__32048))
);
});
;})(pred__32047,expr__32048))
} else {
return ((function (pred__32047,expr__32048){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32047,expr__32048))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32051,callback){
var map__32054 = p__32051;
var map__32054__$1 = ((((!((map__32054 == null)))?((((map__32054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32054):map__32054);
var file_msg = map__32054__$1;
var request_url = cljs.core.get.call(null,map__32054__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32054,map__32054__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32054,map__32054__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__){
return (function (state_32078){
var state_val_32079 = (state_32078[(1)]);
if((state_val_32079 === (7))){
var inst_32074 = (state_32078[(2)]);
var state_32078__$1 = state_32078;
var statearr_32080_32100 = state_32078__$1;
(statearr_32080_32100[(2)] = inst_32074);

(statearr_32080_32100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (1))){
var state_32078__$1 = state_32078;
var statearr_32081_32101 = state_32078__$1;
(statearr_32081_32101[(2)] = null);

(statearr_32081_32101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (4))){
var inst_32058 = (state_32078[(7)]);
var inst_32058__$1 = (state_32078[(2)]);
var state_32078__$1 = (function (){var statearr_32082 = state_32078;
(statearr_32082[(7)] = inst_32058__$1);

return statearr_32082;
})();
if(cljs.core.truth_(inst_32058__$1)){
var statearr_32083_32102 = state_32078__$1;
(statearr_32083_32102[(1)] = (5));

} else {
var statearr_32084_32103 = state_32078__$1;
(statearr_32084_32103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (6))){
var state_32078__$1 = state_32078;
var statearr_32085_32104 = state_32078__$1;
(statearr_32085_32104[(2)] = null);

(statearr_32085_32104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (3))){
var inst_32076 = (state_32078[(2)]);
var state_32078__$1 = state_32078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32078__$1,inst_32076);
} else {
if((state_val_32079 === (2))){
var state_32078__$1 = state_32078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32078__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32079 === (11))){
var inst_32070 = (state_32078[(2)]);
var state_32078__$1 = (function (){var statearr_32086 = state_32078;
(statearr_32086[(8)] = inst_32070);

return statearr_32086;
})();
var statearr_32087_32105 = state_32078__$1;
(statearr_32087_32105[(2)] = null);

(statearr_32087_32105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (9))){
var inst_32064 = (state_32078[(9)]);
var inst_32062 = (state_32078[(10)]);
var inst_32066 = inst_32064.call(null,inst_32062);
var state_32078__$1 = state_32078;
var statearr_32088_32106 = state_32078__$1;
(statearr_32088_32106[(2)] = inst_32066);

(statearr_32088_32106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (5))){
var inst_32058 = (state_32078[(7)]);
var inst_32060 = figwheel.client.file_reloading.blocking_load.call(null,inst_32058);
var state_32078__$1 = state_32078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32078__$1,(8),inst_32060);
} else {
if((state_val_32079 === (10))){
var inst_32062 = (state_32078[(10)]);
var inst_32068 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32062);
var state_32078__$1 = state_32078;
var statearr_32089_32107 = state_32078__$1;
(statearr_32089_32107[(2)] = inst_32068);

(statearr_32089_32107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (8))){
var inst_32064 = (state_32078[(9)]);
var inst_32058 = (state_32078[(7)]);
var inst_32062 = (state_32078[(2)]);
var inst_32063 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32064__$1 = cljs.core.get.call(null,inst_32063,inst_32058);
var state_32078__$1 = (function (){var statearr_32090 = state_32078;
(statearr_32090[(9)] = inst_32064__$1);

(statearr_32090[(10)] = inst_32062);

return statearr_32090;
})();
if(cljs.core.truth_(inst_32064__$1)){
var statearr_32091_32108 = state_32078__$1;
(statearr_32091_32108[(1)] = (9));

} else {
var statearr_32092_32109 = state_32078__$1;
(statearr_32092_32109[(1)] = (10));

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
});})(c__28978__auto__))
;
return ((function (switch__28866__auto__,c__28978__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28867__auto__ = null;
var figwheel$client$file_reloading$state_machine__28867__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = figwheel$client$file_reloading$state_machine__28867__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var figwheel$client$file_reloading$state_machine__28867__auto____1 = (function (state_32078){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_32078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e32097){if((e32097 instanceof Object)){
var ex__28870__auto__ = e32097;
var statearr_32098_32110 = state_32078;
(statearr_32098_32110[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32111 = state_32078;
state_32078 = G__32111;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28867__auto__ = function(state_32078){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28867__auto____1.call(this,state_32078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28867__auto____0;
figwheel$client$file_reloading$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28867__auto____1;
return figwheel$client$file_reloading$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__))
})();
var state__28980__auto__ = (function (){var statearr_32099 = f__28979__auto__.call(null);
(statearr_32099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__))
);

return c__28978__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32112,callback){
var map__32115 = p__32112;
var map__32115__$1 = ((((!((map__32115 == null)))?((((map__32115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);
var file_msg = map__32115__$1;
var namespace = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32115,map__32115__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32115,map__32115__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32117){
var map__32120 = p__32117;
var map__32120__$1 = ((((!((map__32120 == null)))?((((map__32120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);
var file_msg = map__32120__$1;
var namespace = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25056__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25056__auto__){
var or__25068__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
var or__25068__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25068__auto____$1)){
return or__25068__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25056__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32122,callback){
var map__32125 = p__32122;
var map__32125__$1 = ((((!((map__32125 == null)))?((((map__32125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32125):map__32125);
var file_msg = map__32125__$1;
var request_url = cljs.core.get.call(null,map__32125__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28978__auto___32229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___32229,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___32229,out){
return (function (state_32211){
var state_val_32212 = (state_32211[(1)]);
if((state_val_32212 === (1))){
var inst_32185 = cljs.core.seq.call(null,files);
var inst_32186 = cljs.core.first.call(null,inst_32185);
var inst_32187 = cljs.core.next.call(null,inst_32185);
var inst_32188 = files;
var state_32211__$1 = (function (){var statearr_32213 = state_32211;
(statearr_32213[(7)] = inst_32188);

(statearr_32213[(8)] = inst_32187);

(statearr_32213[(9)] = inst_32186);

return statearr_32213;
})();
var statearr_32214_32230 = state_32211__$1;
(statearr_32214_32230[(2)] = null);

(statearr_32214_32230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (2))){
var inst_32188 = (state_32211[(7)]);
var inst_32194 = (state_32211[(10)]);
var inst_32193 = cljs.core.seq.call(null,inst_32188);
var inst_32194__$1 = cljs.core.first.call(null,inst_32193);
var inst_32195 = cljs.core.next.call(null,inst_32193);
var inst_32196 = (inst_32194__$1 == null);
var inst_32197 = cljs.core.not.call(null,inst_32196);
var state_32211__$1 = (function (){var statearr_32215 = state_32211;
(statearr_32215[(11)] = inst_32195);

(statearr_32215[(10)] = inst_32194__$1);

return statearr_32215;
})();
if(inst_32197){
var statearr_32216_32231 = state_32211__$1;
(statearr_32216_32231[(1)] = (4));

} else {
var statearr_32217_32232 = state_32211__$1;
(statearr_32217_32232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (3))){
var inst_32209 = (state_32211[(2)]);
var state_32211__$1 = state_32211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32211__$1,inst_32209);
} else {
if((state_val_32212 === (4))){
var inst_32194 = (state_32211[(10)]);
var inst_32199 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32194);
var state_32211__$1 = state_32211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32211__$1,(7),inst_32199);
} else {
if((state_val_32212 === (5))){
var inst_32205 = cljs.core.async.close_BANG_.call(null,out);
var state_32211__$1 = state_32211;
var statearr_32218_32233 = state_32211__$1;
(statearr_32218_32233[(2)] = inst_32205);

(statearr_32218_32233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (6))){
var inst_32207 = (state_32211[(2)]);
var state_32211__$1 = state_32211;
var statearr_32219_32234 = state_32211__$1;
(statearr_32219_32234[(2)] = inst_32207);

(statearr_32219_32234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (7))){
var inst_32195 = (state_32211[(11)]);
var inst_32201 = (state_32211[(2)]);
var inst_32202 = cljs.core.async.put_BANG_.call(null,out,inst_32201);
var inst_32188 = inst_32195;
var state_32211__$1 = (function (){var statearr_32220 = state_32211;
(statearr_32220[(7)] = inst_32188);

(statearr_32220[(12)] = inst_32202);

return statearr_32220;
})();
var statearr_32221_32235 = state_32211__$1;
(statearr_32221_32235[(2)] = null);

(statearr_32221_32235[(1)] = (2));


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
});})(c__28978__auto___32229,out))
;
return ((function (switch__28866__auto__,c__28978__auto___32229,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto____0 = (function (){
var statearr_32225 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32225[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto__);

(statearr_32225[(1)] = (1));

return statearr_32225;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto____1 = (function (state_32211){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_32211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e32226){if((e32226 instanceof Object)){
var ex__28870__auto__ = e32226;
var statearr_32227_32236 = state_32211;
(statearr_32227_32236[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32237 = state_32211;
state_32211 = G__32237;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto__ = function(state_32211){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto____1.call(this,state_32211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___32229,out))
})();
var state__28980__auto__ = (function (){var statearr_32228 = f__28979__auto__.call(null);
(statearr_32228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___32229);

return statearr_32228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___32229,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32238,opts){
var map__32242 = p__32238;
var map__32242__$1 = ((((!((map__32242 == null)))?((((map__32242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);
var eval_body__$1 = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25056__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25056__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25056__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32244){var e = e32244;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32245_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32245_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32254){
var vec__32255 = p__32254;
var k = cljs.core.nth.call(null,vec__32255,(0),null);
var v = cljs.core.nth.call(null,vec__32255,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32258){
var vec__32259 = p__32258;
var k = cljs.core.nth.call(null,vec__32259,(0),null);
var v = cljs.core.nth.call(null,vec__32259,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32265,p__32266){
var map__32513 = p__32265;
var map__32513__$1 = ((((!((map__32513 == null)))?((((map__32513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32513):map__32513);
var opts = map__32513__$1;
var before_jsload = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32514 = p__32266;
var map__32514__$1 = ((((!((map__32514 == null)))?((((map__32514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32514):map__32514);
var msg = map__32514__$1;
var files = cljs.core.get.call(null,map__32514__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32514__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32514__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32667){
var state_val_32668 = (state_32667[(1)]);
if((state_val_32668 === (7))){
var inst_32528 = (state_32667[(7)]);
var inst_32530 = (state_32667[(8)]);
var inst_32531 = (state_32667[(9)]);
var inst_32529 = (state_32667[(10)]);
var inst_32536 = cljs.core._nth.call(null,inst_32529,inst_32531);
var inst_32537 = figwheel.client.file_reloading.eval_body.call(null,inst_32536,opts);
var inst_32538 = (inst_32531 + (1));
var tmp32669 = inst_32528;
var tmp32670 = inst_32530;
var tmp32671 = inst_32529;
var inst_32528__$1 = tmp32669;
var inst_32529__$1 = tmp32671;
var inst_32530__$1 = tmp32670;
var inst_32531__$1 = inst_32538;
var state_32667__$1 = (function (){var statearr_32672 = state_32667;
(statearr_32672[(7)] = inst_32528__$1);

(statearr_32672[(11)] = inst_32537);

(statearr_32672[(8)] = inst_32530__$1);

(statearr_32672[(9)] = inst_32531__$1);

(statearr_32672[(10)] = inst_32529__$1);

return statearr_32672;
})();
var statearr_32673_32759 = state_32667__$1;
(statearr_32673_32759[(2)] = null);

(statearr_32673_32759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (20))){
var inst_32571 = (state_32667[(12)]);
var inst_32579 = figwheel.client.file_reloading.sort_files.call(null,inst_32571);
var state_32667__$1 = state_32667;
var statearr_32674_32760 = state_32667__$1;
(statearr_32674_32760[(2)] = inst_32579);

(statearr_32674_32760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (27))){
var state_32667__$1 = state_32667;
var statearr_32675_32761 = state_32667__$1;
(statearr_32675_32761[(2)] = null);

(statearr_32675_32761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (1))){
var inst_32520 = (state_32667[(13)]);
var inst_32517 = before_jsload.call(null,files);
var inst_32518 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32519 = (function (){return ((function (inst_32520,inst_32517,inst_32518,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32262_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32262_SHARP_);
});
;})(inst_32520,inst_32517,inst_32518,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32520__$1 = cljs.core.filter.call(null,inst_32519,files);
var inst_32521 = cljs.core.not_empty.call(null,inst_32520__$1);
var state_32667__$1 = (function (){var statearr_32676 = state_32667;
(statearr_32676[(14)] = inst_32517);

(statearr_32676[(15)] = inst_32518);

(statearr_32676[(13)] = inst_32520__$1);

return statearr_32676;
})();
if(cljs.core.truth_(inst_32521)){
var statearr_32677_32762 = state_32667__$1;
(statearr_32677_32762[(1)] = (2));

} else {
var statearr_32678_32763 = state_32667__$1;
(statearr_32678_32763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (24))){
var state_32667__$1 = state_32667;
var statearr_32679_32764 = state_32667__$1;
(statearr_32679_32764[(2)] = null);

(statearr_32679_32764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (39))){
var inst_32621 = (state_32667[(16)]);
var state_32667__$1 = state_32667;
var statearr_32680_32765 = state_32667__$1;
(statearr_32680_32765[(2)] = inst_32621);

(statearr_32680_32765[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (46))){
var inst_32662 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32681_32766 = state_32667__$1;
(statearr_32681_32766[(2)] = inst_32662);

(statearr_32681_32766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (4))){
var inst_32565 = (state_32667[(2)]);
var inst_32566 = cljs.core.List.EMPTY;
var inst_32567 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32566);
var inst_32568 = (function (){return ((function (inst_32565,inst_32566,inst_32567,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32263_SHARP_){
var and__25056__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32263_SHARP_);
if(cljs.core.truth_(and__25056__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32263_SHARP_));
} else {
return and__25056__auto__;
}
});
;})(inst_32565,inst_32566,inst_32567,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32569 = cljs.core.filter.call(null,inst_32568,files);
var inst_32570 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32571 = cljs.core.concat.call(null,inst_32569,inst_32570);
var state_32667__$1 = (function (){var statearr_32682 = state_32667;
(statearr_32682[(12)] = inst_32571);

(statearr_32682[(17)] = inst_32565);

(statearr_32682[(18)] = inst_32567);

return statearr_32682;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32683_32767 = state_32667__$1;
(statearr_32683_32767[(1)] = (16));

} else {
var statearr_32684_32768 = state_32667__$1;
(statearr_32684_32768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (15))){
var inst_32555 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32685_32769 = state_32667__$1;
(statearr_32685_32769[(2)] = inst_32555);

(statearr_32685_32769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (21))){
var inst_32581 = (state_32667[(19)]);
var inst_32581__$1 = (state_32667[(2)]);
var inst_32582 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32581__$1);
var state_32667__$1 = (function (){var statearr_32686 = state_32667;
(statearr_32686[(19)] = inst_32581__$1);

return statearr_32686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32667__$1,(22),inst_32582);
} else {
if((state_val_32668 === (31))){
var inst_32665 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32667__$1,inst_32665);
} else {
if((state_val_32668 === (32))){
var inst_32621 = (state_32667[(16)]);
var inst_32626 = inst_32621.cljs$lang$protocol_mask$partition0$;
var inst_32627 = (inst_32626 & (64));
var inst_32628 = inst_32621.cljs$core$ISeq$;
var inst_32629 = (inst_32627) || (inst_32628);
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32629)){
var statearr_32687_32770 = state_32667__$1;
(statearr_32687_32770[(1)] = (35));

} else {
var statearr_32688_32771 = state_32667__$1;
(statearr_32688_32771[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (40))){
var inst_32642 = (state_32667[(20)]);
var inst_32641 = (state_32667[(2)]);
var inst_32642__$1 = cljs.core.get.call(null,inst_32641,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32643 = cljs.core.get.call(null,inst_32641,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32644 = cljs.core.not_empty.call(null,inst_32642__$1);
var state_32667__$1 = (function (){var statearr_32689 = state_32667;
(statearr_32689[(20)] = inst_32642__$1);

(statearr_32689[(21)] = inst_32643);

return statearr_32689;
})();
if(cljs.core.truth_(inst_32644)){
var statearr_32690_32772 = state_32667__$1;
(statearr_32690_32772[(1)] = (41));

} else {
var statearr_32691_32773 = state_32667__$1;
(statearr_32691_32773[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (33))){
var state_32667__$1 = state_32667;
var statearr_32692_32774 = state_32667__$1;
(statearr_32692_32774[(2)] = false);

(statearr_32692_32774[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (13))){
var inst_32541 = (state_32667[(22)]);
var inst_32545 = cljs.core.chunk_first.call(null,inst_32541);
var inst_32546 = cljs.core.chunk_rest.call(null,inst_32541);
var inst_32547 = cljs.core.count.call(null,inst_32545);
var inst_32528 = inst_32546;
var inst_32529 = inst_32545;
var inst_32530 = inst_32547;
var inst_32531 = (0);
var state_32667__$1 = (function (){var statearr_32693 = state_32667;
(statearr_32693[(7)] = inst_32528);

(statearr_32693[(8)] = inst_32530);

(statearr_32693[(9)] = inst_32531);

(statearr_32693[(10)] = inst_32529);

return statearr_32693;
})();
var statearr_32694_32775 = state_32667__$1;
(statearr_32694_32775[(2)] = null);

(statearr_32694_32775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (22))){
var inst_32584 = (state_32667[(23)]);
var inst_32585 = (state_32667[(24)]);
var inst_32589 = (state_32667[(25)]);
var inst_32581 = (state_32667[(19)]);
var inst_32584__$1 = (state_32667[(2)]);
var inst_32585__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32584__$1);
var inst_32586 = (function (){var all_files = inst_32581;
var res_SINGLEQUOTE_ = inst_32584__$1;
var res = inst_32585__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32584,inst_32585,inst_32589,inst_32581,inst_32584__$1,inst_32585__$1,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32264_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32264_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32584,inst_32585,inst_32589,inst_32581,inst_32584__$1,inst_32585__$1,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32587 = cljs.core.filter.call(null,inst_32586,inst_32584__$1);
var inst_32588 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32589__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32588);
var inst_32590 = cljs.core.not_empty.call(null,inst_32589__$1);
var state_32667__$1 = (function (){var statearr_32695 = state_32667;
(statearr_32695[(23)] = inst_32584__$1);

(statearr_32695[(24)] = inst_32585__$1);

(statearr_32695[(25)] = inst_32589__$1);

(statearr_32695[(26)] = inst_32587);

return statearr_32695;
})();
if(cljs.core.truth_(inst_32590)){
var statearr_32696_32776 = state_32667__$1;
(statearr_32696_32776[(1)] = (23));

} else {
var statearr_32697_32777 = state_32667__$1;
(statearr_32697_32777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (36))){
var state_32667__$1 = state_32667;
var statearr_32698_32778 = state_32667__$1;
(statearr_32698_32778[(2)] = false);

(statearr_32698_32778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (41))){
var inst_32642 = (state_32667[(20)]);
var inst_32646 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32647 = cljs.core.map.call(null,inst_32646,inst_32642);
var inst_32648 = cljs.core.pr_str.call(null,inst_32647);
var inst_32649 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32648)].join('');
var inst_32650 = figwheel.client.utils.log.call(null,inst_32649);
var state_32667__$1 = state_32667;
var statearr_32699_32779 = state_32667__$1;
(statearr_32699_32779[(2)] = inst_32650);

(statearr_32699_32779[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (43))){
var inst_32643 = (state_32667[(21)]);
var inst_32653 = (state_32667[(2)]);
var inst_32654 = cljs.core.not_empty.call(null,inst_32643);
var state_32667__$1 = (function (){var statearr_32700 = state_32667;
(statearr_32700[(27)] = inst_32653);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32654)){
var statearr_32701_32780 = state_32667__$1;
(statearr_32701_32780[(1)] = (44));

} else {
var statearr_32702_32781 = state_32667__$1;
(statearr_32702_32781[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (29))){
var inst_32621 = (state_32667[(16)]);
var inst_32584 = (state_32667[(23)]);
var inst_32585 = (state_32667[(24)]);
var inst_32589 = (state_32667[(25)]);
var inst_32581 = (state_32667[(19)]);
var inst_32587 = (state_32667[(26)]);
var inst_32617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32620 = (function (){var all_files = inst_32581;
var res_SINGLEQUOTE_ = inst_32584;
var res = inst_32585;
var files_not_loaded = inst_32587;
var dependencies_that_loaded = inst_32589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32621,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32617,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32619){
var map__32703 = p__32619;
var map__32703__$1 = ((((!((map__32703 == null)))?((((map__32703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32703):map__32703);
var namespace = cljs.core.get.call(null,map__32703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32621,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32617,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32621__$1 = cljs.core.group_by.call(null,inst_32620,inst_32587);
var inst_32623 = (inst_32621__$1 == null);
var inst_32624 = cljs.core.not.call(null,inst_32623);
var state_32667__$1 = (function (){var statearr_32705 = state_32667;
(statearr_32705[(16)] = inst_32621__$1);

(statearr_32705[(28)] = inst_32617);

return statearr_32705;
})();
if(inst_32624){
var statearr_32706_32782 = state_32667__$1;
(statearr_32706_32782[(1)] = (32));

} else {
var statearr_32707_32783 = state_32667__$1;
(statearr_32707_32783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (44))){
var inst_32643 = (state_32667[(21)]);
var inst_32656 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32643);
var inst_32657 = cljs.core.pr_str.call(null,inst_32656);
var inst_32658 = [cljs.core.str("not required: "),cljs.core.str(inst_32657)].join('');
var inst_32659 = figwheel.client.utils.log.call(null,inst_32658);
var state_32667__$1 = state_32667;
var statearr_32708_32784 = state_32667__$1;
(statearr_32708_32784[(2)] = inst_32659);

(statearr_32708_32784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (6))){
var inst_32562 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32709_32785 = state_32667__$1;
(statearr_32709_32785[(2)] = inst_32562);

(statearr_32709_32785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (28))){
var inst_32587 = (state_32667[(26)]);
var inst_32614 = (state_32667[(2)]);
var inst_32615 = cljs.core.not_empty.call(null,inst_32587);
var state_32667__$1 = (function (){var statearr_32710 = state_32667;
(statearr_32710[(29)] = inst_32614);

return statearr_32710;
})();
if(cljs.core.truth_(inst_32615)){
var statearr_32711_32786 = state_32667__$1;
(statearr_32711_32786[(1)] = (29));

} else {
var statearr_32712_32787 = state_32667__$1;
(statearr_32712_32787[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (25))){
var inst_32585 = (state_32667[(24)]);
var inst_32601 = (state_32667[(2)]);
var inst_32602 = cljs.core.not_empty.call(null,inst_32585);
var state_32667__$1 = (function (){var statearr_32713 = state_32667;
(statearr_32713[(30)] = inst_32601);

return statearr_32713;
})();
if(cljs.core.truth_(inst_32602)){
var statearr_32714_32788 = state_32667__$1;
(statearr_32714_32788[(1)] = (26));

} else {
var statearr_32715_32789 = state_32667__$1;
(statearr_32715_32789[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (34))){
var inst_32636 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32636)){
var statearr_32716_32790 = state_32667__$1;
(statearr_32716_32790[(1)] = (38));

} else {
var statearr_32717_32791 = state_32667__$1;
(statearr_32717_32791[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (17))){
var state_32667__$1 = state_32667;
var statearr_32718_32792 = state_32667__$1;
(statearr_32718_32792[(2)] = recompile_dependents);

(statearr_32718_32792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (3))){
var state_32667__$1 = state_32667;
var statearr_32719_32793 = state_32667__$1;
(statearr_32719_32793[(2)] = null);

(statearr_32719_32793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (12))){
var inst_32558 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32720_32794 = state_32667__$1;
(statearr_32720_32794[(2)] = inst_32558);

(statearr_32720_32794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (2))){
var inst_32520 = (state_32667[(13)]);
var inst_32527 = cljs.core.seq.call(null,inst_32520);
var inst_32528 = inst_32527;
var inst_32529 = null;
var inst_32530 = (0);
var inst_32531 = (0);
var state_32667__$1 = (function (){var statearr_32721 = state_32667;
(statearr_32721[(7)] = inst_32528);

(statearr_32721[(8)] = inst_32530);

(statearr_32721[(9)] = inst_32531);

(statearr_32721[(10)] = inst_32529);

return statearr_32721;
})();
var statearr_32722_32795 = state_32667__$1;
(statearr_32722_32795[(2)] = null);

(statearr_32722_32795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (23))){
var inst_32584 = (state_32667[(23)]);
var inst_32585 = (state_32667[(24)]);
var inst_32589 = (state_32667[(25)]);
var inst_32581 = (state_32667[(19)]);
var inst_32587 = (state_32667[(26)]);
var inst_32592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32594 = (function (){var all_files = inst_32581;
var res_SINGLEQUOTE_ = inst_32584;
var res = inst_32585;
var files_not_loaded = inst_32587;
var dependencies_that_loaded = inst_32589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32592,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32593){
var map__32723 = p__32593;
var map__32723__$1 = ((((!((map__32723 == null)))?((((map__32723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32723):map__32723);
var request_url = cljs.core.get.call(null,map__32723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32592,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32595 = cljs.core.reverse.call(null,inst_32589);
var inst_32596 = cljs.core.map.call(null,inst_32594,inst_32595);
var inst_32597 = cljs.core.pr_str.call(null,inst_32596);
var inst_32598 = figwheel.client.utils.log.call(null,inst_32597);
var state_32667__$1 = (function (){var statearr_32725 = state_32667;
(statearr_32725[(31)] = inst_32592);

return statearr_32725;
})();
var statearr_32726_32796 = state_32667__$1;
(statearr_32726_32796[(2)] = inst_32598);

(statearr_32726_32796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (35))){
var state_32667__$1 = state_32667;
var statearr_32727_32797 = state_32667__$1;
(statearr_32727_32797[(2)] = true);

(statearr_32727_32797[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (19))){
var inst_32571 = (state_32667[(12)]);
var inst_32577 = figwheel.client.file_reloading.expand_files.call(null,inst_32571);
var state_32667__$1 = state_32667;
var statearr_32728_32798 = state_32667__$1;
(statearr_32728_32798[(2)] = inst_32577);

(statearr_32728_32798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (11))){
var state_32667__$1 = state_32667;
var statearr_32729_32799 = state_32667__$1;
(statearr_32729_32799[(2)] = null);

(statearr_32729_32799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (9))){
var inst_32560 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32730_32800 = state_32667__$1;
(statearr_32730_32800[(2)] = inst_32560);

(statearr_32730_32800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (5))){
var inst_32530 = (state_32667[(8)]);
var inst_32531 = (state_32667[(9)]);
var inst_32533 = (inst_32531 < inst_32530);
var inst_32534 = inst_32533;
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32534)){
var statearr_32731_32801 = state_32667__$1;
(statearr_32731_32801[(1)] = (7));

} else {
var statearr_32732_32802 = state_32667__$1;
(statearr_32732_32802[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (14))){
var inst_32541 = (state_32667[(22)]);
var inst_32550 = cljs.core.first.call(null,inst_32541);
var inst_32551 = figwheel.client.file_reloading.eval_body.call(null,inst_32550,opts);
var inst_32552 = cljs.core.next.call(null,inst_32541);
var inst_32528 = inst_32552;
var inst_32529 = null;
var inst_32530 = (0);
var inst_32531 = (0);
var state_32667__$1 = (function (){var statearr_32733 = state_32667;
(statearr_32733[(7)] = inst_32528);

(statearr_32733[(32)] = inst_32551);

(statearr_32733[(8)] = inst_32530);

(statearr_32733[(9)] = inst_32531);

(statearr_32733[(10)] = inst_32529);

return statearr_32733;
})();
var statearr_32734_32803 = state_32667__$1;
(statearr_32734_32803[(2)] = null);

(statearr_32734_32803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (45))){
var state_32667__$1 = state_32667;
var statearr_32735_32804 = state_32667__$1;
(statearr_32735_32804[(2)] = null);

(statearr_32735_32804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (26))){
var inst_32584 = (state_32667[(23)]);
var inst_32585 = (state_32667[(24)]);
var inst_32589 = (state_32667[(25)]);
var inst_32581 = (state_32667[(19)]);
var inst_32587 = (state_32667[(26)]);
var inst_32604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32606 = (function (){var all_files = inst_32581;
var res_SINGLEQUOTE_ = inst_32584;
var res = inst_32585;
var files_not_loaded = inst_32587;
var dependencies_that_loaded = inst_32589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32604,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32605){
var map__32736 = p__32605;
var map__32736__$1 = ((((!((map__32736 == null)))?((((map__32736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32736):map__32736);
var namespace = cljs.core.get.call(null,map__32736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32604,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32607 = cljs.core.map.call(null,inst_32606,inst_32585);
var inst_32608 = cljs.core.pr_str.call(null,inst_32607);
var inst_32609 = figwheel.client.utils.log.call(null,inst_32608);
var inst_32610 = (function (){var all_files = inst_32581;
var res_SINGLEQUOTE_ = inst_32584;
var res = inst_32585;
var files_not_loaded = inst_32587;
var dependencies_that_loaded = inst_32589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32604,inst_32606,inst_32607,inst_32608,inst_32609,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32584,inst_32585,inst_32589,inst_32581,inst_32587,inst_32604,inst_32606,inst_32607,inst_32608,inst_32609,state_val_32668,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32611 = setTimeout(inst_32610,(10));
var state_32667__$1 = (function (){var statearr_32738 = state_32667;
(statearr_32738[(33)] = inst_32604);

(statearr_32738[(34)] = inst_32609);

return statearr_32738;
})();
var statearr_32739_32805 = state_32667__$1;
(statearr_32739_32805[(2)] = inst_32611);

(statearr_32739_32805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (16))){
var state_32667__$1 = state_32667;
var statearr_32740_32806 = state_32667__$1;
(statearr_32740_32806[(2)] = reload_dependents);

(statearr_32740_32806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (38))){
var inst_32621 = (state_32667[(16)]);
var inst_32638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32621);
var state_32667__$1 = state_32667;
var statearr_32741_32807 = state_32667__$1;
(statearr_32741_32807[(2)] = inst_32638);

(statearr_32741_32807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (30))){
var state_32667__$1 = state_32667;
var statearr_32742_32808 = state_32667__$1;
(statearr_32742_32808[(2)] = null);

(statearr_32742_32808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (10))){
var inst_32541 = (state_32667[(22)]);
var inst_32543 = cljs.core.chunked_seq_QMARK_.call(null,inst_32541);
var state_32667__$1 = state_32667;
if(inst_32543){
var statearr_32743_32809 = state_32667__$1;
(statearr_32743_32809[(1)] = (13));

} else {
var statearr_32744_32810 = state_32667__$1;
(statearr_32744_32810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (18))){
var inst_32575 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32575)){
var statearr_32745_32811 = state_32667__$1;
(statearr_32745_32811[(1)] = (19));

} else {
var statearr_32746_32812 = state_32667__$1;
(statearr_32746_32812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (42))){
var state_32667__$1 = state_32667;
var statearr_32747_32813 = state_32667__$1;
(statearr_32747_32813[(2)] = null);

(statearr_32747_32813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (37))){
var inst_32633 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32748_32814 = state_32667__$1;
(statearr_32748_32814[(2)] = inst_32633);

(statearr_32748_32814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (8))){
var inst_32528 = (state_32667[(7)]);
var inst_32541 = (state_32667[(22)]);
var inst_32541__$1 = cljs.core.seq.call(null,inst_32528);
var state_32667__$1 = (function (){var statearr_32749 = state_32667;
(statearr_32749[(22)] = inst_32541__$1);

return statearr_32749;
})();
if(inst_32541__$1){
var statearr_32750_32815 = state_32667__$1;
(statearr_32750_32815[(1)] = (10));

} else {
var statearr_32751_32816 = state_32667__$1;
(statearr_32751_32816[(1)] = (11));

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
});})(c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28866__auto__,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto____0 = (function (){
var statearr_32755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32755[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto__);

(statearr_32755[(1)] = (1));

return statearr_32755;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto____1 = (function (state_32667){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_32667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e32756){if((e32756 instanceof Object)){
var ex__28870__auto__ = e32756;
var statearr_32757_32817 = state_32667;
(statearr_32757_32817[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32818 = state_32667;
state_32667 = G__32818;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto__ = function(state_32667){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto____1.call(this,state_32667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28980__auto__ = (function (){var statearr_32758 = f__28979__auto__.call(null);
(statearr_32758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_32758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__,map__32513,map__32513__$1,opts,before_jsload,on_jsload,reload_dependents,map__32514,map__32514__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28978__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32821,link){
var map__32824 = p__32821;
var map__32824__$1 = ((((!((map__32824 == null)))?((((map__32824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32824):map__32824);
var file = cljs.core.get.call(null,map__32824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32824,map__32824__$1,file){
return (function (p1__32819_SHARP_,p2__32820_SHARP_){
if(cljs.core._EQ_.call(null,p1__32819_SHARP_,p2__32820_SHARP_)){
return p1__32819_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32824,map__32824__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32830){
var map__32831 = p__32830;
var map__32831__$1 = ((((!((map__32831 == null)))?((((map__32831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32831):map__32831);
var match_length = cljs.core.get.call(null,map__32831__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32831__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32826_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32826_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32833 = [];
var len__26143__auto___32836 = arguments.length;
var i__26144__auto___32837 = (0);
while(true){
if((i__26144__auto___32837 < len__26143__auto___32836)){
args32833.push((arguments[i__26144__auto___32837]));

var G__32838 = (i__26144__auto___32837 + (1));
i__26144__auto___32837 = G__32838;
continue;
} else {
}
break;
}

var G__32835 = args32833.length;
switch (G__32835) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32833.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32840_SHARP_,p2__32841_SHARP_){
return cljs.core.assoc.call(null,p1__32840_SHARP_,cljs.core.get.call(null,p2__32841_SHARP_,key),p2__32841_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32842){
var map__32845 = p__32842;
var map__32845__$1 = ((((!((map__32845 == null)))?((((map__32845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32845):map__32845);
var f_data = map__32845__$1;
var file = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32847,p__32848){
var map__32857 = p__32847;
var map__32857__$1 = ((((!((map__32857 == null)))?((((map__32857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32857):map__32857);
var opts = map__32857__$1;
var on_cssload = cljs.core.get.call(null,map__32857__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32858 = p__32848;
var map__32858__$1 = ((((!((map__32858 == null)))?((((map__32858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32858):map__32858);
var files_msg = map__32858__$1;
var files = cljs.core.get.call(null,map__32858__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32861_32865 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__32862_32866 = null;
var count__32863_32867 = (0);
var i__32864_32868 = (0);
while(true){
if((i__32864_32868 < count__32863_32867)){
var f_32869 = cljs.core._nth.call(null,chunk__32862_32866,i__32864_32868);
figwheel.client.file_reloading.reload_css_file.call(null,f_32869);

var G__32870 = seq__32861_32865;
var G__32871 = chunk__32862_32866;
var G__32872 = count__32863_32867;
var G__32873 = (i__32864_32868 + (1));
seq__32861_32865 = G__32870;
chunk__32862_32866 = G__32871;
count__32863_32867 = G__32872;
i__32864_32868 = G__32873;
continue;
} else {
var temp__4657__auto___32874 = cljs.core.seq.call(null,seq__32861_32865);
if(temp__4657__auto___32874){
var seq__32861_32875__$1 = temp__4657__auto___32874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32861_32875__$1)){
var c__25879__auto___32876 = cljs.core.chunk_first.call(null,seq__32861_32875__$1);
var G__32877 = cljs.core.chunk_rest.call(null,seq__32861_32875__$1);
var G__32878 = c__25879__auto___32876;
var G__32879 = cljs.core.count.call(null,c__25879__auto___32876);
var G__32880 = (0);
seq__32861_32865 = G__32877;
chunk__32862_32866 = G__32878;
count__32863_32867 = G__32879;
i__32864_32868 = G__32880;
continue;
} else {
var f_32881 = cljs.core.first.call(null,seq__32861_32875__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32881);

var G__32882 = cljs.core.next.call(null,seq__32861_32875__$1);
var G__32883 = null;
var G__32884 = (0);
var G__32885 = (0);
seq__32861_32865 = G__32882;
chunk__32862_32866 = G__32883;
count__32863_32867 = G__32884;
i__32864_32868 = G__32885;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32857,map__32857__$1,opts,on_cssload,map__32858,map__32858__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__32857,map__32857__$1,opts,on_cssload,map__32858,map__32858__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1488653202532
// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29023 = [];
var len__26143__auto___29029 = arguments.length;
var i__26144__auto___29030 = (0);
while(true){
if((i__26144__auto___29030 < len__26143__auto___29029)){
args29023.push((arguments[i__26144__auto___29030]));

var G__29031 = (i__26144__auto___29030 + (1));
i__26144__auto___29030 = G__29031;
continue;
} else {
}
break;
}

var G__29025 = args29023.length;
switch (G__29025) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29023.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29026 = (function (f,blockable,meta29027){
this.f = f;
this.blockable = blockable;
this.meta29027 = meta29027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29028,meta29027__$1){
var self__ = this;
var _29028__$1 = this;
return (new cljs.core.async.t_cljs$core$async29026(self__.f,self__.blockable,meta29027__$1));
});

cljs.core.async.t_cljs$core$async29026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29028){
var self__ = this;
var _29028__$1 = this;
return self__.meta29027;
});

cljs.core.async.t_cljs$core$async29026.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29027","meta29027",1687394654,null)], null);
});

cljs.core.async.t_cljs$core$async29026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29026";

cljs.core.async.t_cljs$core$async29026.cljs$lang$ctorPrWriter = (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async29026");
});

cljs.core.async.__GT_t_cljs$core$async29026 = (function cljs$core$async$__GT_t_cljs$core$async29026(f__$1,blockable__$1,meta29027){
return (new cljs.core.async.t_cljs$core$async29026(f__$1,blockable__$1,meta29027));
});

}

return (new cljs.core.async.t_cljs$core$async29026(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29035 = [];
var len__26143__auto___29038 = arguments.length;
var i__26144__auto___29039 = (0);
while(true){
if((i__26144__auto___29039 < len__26143__auto___29038)){
args29035.push((arguments[i__26144__auto___29039]));

var G__29040 = (i__26144__auto___29039 + (1));
i__26144__auto___29039 = G__29040;
continue;
} else {
}
break;
}

var G__29037 = args29035.length;
switch (G__29037) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29035.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29042 = [];
var len__26143__auto___29045 = arguments.length;
var i__26144__auto___29046 = (0);
while(true){
if((i__26144__auto___29046 < len__26143__auto___29045)){
args29042.push((arguments[i__26144__auto___29046]));

var G__29047 = (i__26144__auto___29046 + (1));
i__26144__auto___29046 = G__29047;
continue;
} else {
}
break;
}

var G__29044 = args29042.length;
switch (G__29044) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29042.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29049 = [];
var len__26143__auto___29052 = arguments.length;
var i__26144__auto___29053 = (0);
while(true){
if((i__26144__auto___29053 < len__26143__auto___29052)){
args29049.push((arguments[i__26144__auto___29053]));

var G__29054 = (i__26144__auto___29053 + (1));
i__26144__auto___29053 = G__29054;
continue;
} else {
}
break;
}

var G__29051 = args29049.length;
switch (G__29051) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29049.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29056 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29056);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29056,ret){
return (function (){
return fn1.call(null,val_29056);
});})(val_29056,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29057 = [];
var len__26143__auto___29060 = arguments.length;
var i__26144__auto___29061 = (0);
while(true){
if((i__26144__auto___29061 < len__26143__auto___29060)){
args29057.push((arguments[i__26144__auto___29061]));

var G__29062 = (i__26144__auto___29061 + (1));
i__26144__auto___29061 = G__29062;
continue;
} else {
}
break;
}

var G__29059 = args29057.length;
switch (G__29059) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29057.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25983__auto___29064 = n;
var x_29065 = (0);
while(true){
if((x_29065 < n__25983__auto___29064)){
(a[x_29065] = (0));

var G__29066 = (x_29065 + (1));
x_29065 = G__29066;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29067 = (i + (1));
i = G__29067;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29071 = (function (alt_flag,flag,meta29072){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29072 = meta29072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29073,meta29072__$1){
var self__ = this;
var _29073__$1 = this;
return (new cljs.core.async.t_cljs$core$async29071(self__.alt_flag,self__.flag,meta29072__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29073){
var self__ = this;
var _29073__$1 = this;
return self__.meta29072;
});})(flag))
;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29071.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29072","meta29072",664860802,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29071";

cljs.core.async.t_cljs$core$async29071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async29071");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29071 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29071(alt_flag__$1,flag__$1,meta29072){
return (new cljs.core.async.t_cljs$core$async29071(alt_flag__$1,flag__$1,meta29072));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29071(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29077 = (function (alt_handler,flag,cb,meta29078){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29078 = meta29078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29079,meta29078__$1){
var self__ = this;
var _29079__$1 = this;
return (new cljs.core.async.t_cljs$core$async29077(self__.alt_handler,self__.flag,self__.cb,meta29078__$1));
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29079){
var self__ = this;
var _29079__$1 = this;
return self__.meta29078;
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29078","meta29078",242576089,null)], null);
});

cljs.core.async.t_cljs$core$async29077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29077";

cljs.core.async.t_cljs$core$async29077.cljs$lang$ctorPrWriter = (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async29077");
});

cljs.core.async.__GT_t_cljs$core$async29077 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29077(alt_handler__$1,flag__$1,cb__$1,meta29078){
return (new cljs.core.async.t_cljs$core$async29077(alt_handler__$1,flag__$1,cb__$1,meta29078));
});

}

return (new cljs.core.async.t_cljs$core$async29077(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29080_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29081_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29081_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25068__auto__ = wport;
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29082 = (i + (1));
i = G__29082;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25068__auto__ = ret;
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25056__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25056__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25056__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26150__auto__ = [];
var len__26143__auto___29088 = arguments.length;
var i__26144__auto___29089 = (0);
while(true){
if((i__26144__auto___29089 < len__26143__auto___29088)){
args__26150__auto__.push((arguments[i__26144__auto___29089]));

var G__29090 = (i__26144__auto___29089 + (1));
i__26144__auto___29089 = G__29090;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((1) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26151__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29085){
var map__29086 = p__29085;
var map__29086__$1 = ((((!((map__29086 == null)))?((((map__29086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29086):map__29086);
var opts = map__29086__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29083){
var G__29084 = cljs.core.first.call(null,seq29083);
var seq29083__$1 = cljs.core.next.call(null,seq29083);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29084,seq29083__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29091 = [];
var len__26143__auto___29141 = arguments.length;
var i__26144__auto___29142 = (0);
while(true){
if((i__26144__auto___29142 < len__26143__auto___29141)){
args29091.push((arguments[i__26144__auto___29142]));

var G__29143 = (i__26144__auto___29142 + (1));
i__26144__auto___29142 = G__29143;
continue;
} else {
}
break;
}

var G__29093 = args29091.length;
switch (G__29093) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29091.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28978__auto___29145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___29145){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___29145){
return (function (state_29117){
var state_val_29118 = (state_29117[(1)]);
if((state_val_29118 === (7))){
var inst_29113 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29119_29146 = state_29117__$1;
(statearr_29119_29146[(2)] = inst_29113);

(statearr_29119_29146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (1))){
var state_29117__$1 = state_29117;
var statearr_29120_29147 = state_29117__$1;
(statearr_29120_29147[(2)] = null);

(statearr_29120_29147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (4))){
var inst_29096 = (state_29117[(7)]);
var inst_29096__$1 = (state_29117[(2)]);
var inst_29097 = (inst_29096__$1 == null);
var state_29117__$1 = (function (){var statearr_29121 = state_29117;
(statearr_29121[(7)] = inst_29096__$1);

return statearr_29121;
})();
if(cljs.core.truth_(inst_29097)){
var statearr_29122_29148 = state_29117__$1;
(statearr_29122_29148[(1)] = (5));

} else {
var statearr_29123_29149 = state_29117__$1;
(statearr_29123_29149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (13))){
var state_29117__$1 = state_29117;
var statearr_29124_29150 = state_29117__$1;
(statearr_29124_29150[(2)] = null);

(statearr_29124_29150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (6))){
var inst_29096 = (state_29117[(7)]);
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29117__$1,(11),to,inst_29096);
} else {
if((state_val_29118 === (3))){
var inst_29115 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29117__$1,inst_29115);
} else {
if((state_val_29118 === (12))){
var state_29117__$1 = state_29117;
var statearr_29125_29151 = state_29117__$1;
(statearr_29125_29151[(2)] = null);

(statearr_29125_29151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (2))){
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29117__$1,(4),from);
} else {
if((state_val_29118 === (11))){
var inst_29106 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
if(cljs.core.truth_(inst_29106)){
var statearr_29126_29152 = state_29117__$1;
(statearr_29126_29152[(1)] = (12));

} else {
var statearr_29127_29153 = state_29117__$1;
(statearr_29127_29153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (9))){
var state_29117__$1 = state_29117;
var statearr_29128_29154 = state_29117__$1;
(statearr_29128_29154[(2)] = null);

(statearr_29128_29154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (5))){
var state_29117__$1 = state_29117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29129_29155 = state_29117__$1;
(statearr_29129_29155[(1)] = (8));

} else {
var statearr_29130_29156 = state_29117__$1;
(statearr_29130_29156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (14))){
var inst_29111 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29131_29157 = state_29117__$1;
(statearr_29131_29157[(2)] = inst_29111);

(statearr_29131_29157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (10))){
var inst_29103 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29132_29158 = state_29117__$1;
(statearr_29132_29158[(2)] = inst_29103);

(statearr_29132_29158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (8))){
var inst_29100 = cljs.core.async.close_BANG_.call(null,to);
var state_29117__$1 = state_29117;
var statearr_29133_29159 = state_29117__$1;
(statearr_29133_29159[(2)] = inst_29100);

(statearr_29133_29159[(1)] = (10));


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
});})(c__28978__auto___29145))
;
return ((function (switch__28866__auto__,c__28978__auto___29145){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_29137 = [null,null,null,null,null,null,null,null];
(statearr_29137[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_29137[(1)] = (1));

return statearr_29137;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_29117){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29138){if((e29138 instanceof Object)){
var ex__28870__auto__ = e29138;
var statearr_29139_29160 = state_29117;
(statearr_29139_29160[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29161 = state_29117;
state_29117 = G__29161;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_29117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_29117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___29145))
})();
var state__28980__auto__ = (function (){var statearr_29140 = f__28979__auto__.call(null);
(statearr_29140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___29145);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___29145))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29349){
var vec__29350 = p__29349;
var v = cljs.core.nth.call(null,vec__29350,(0),null);
var p = cljs.core.nth.call(null,vec__29350,(1),null);
var job = vec__29350;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28978__auto___29536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___29536,res,vec__29350,v,p,job,jobs,results){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___29536,res,vec__29350,v,p,job,jobs,results){
return (function (state_29357){
var state_val_29358 = (state_29357[(1)]);
if((state_val_29358 === (1))){
var state_29357__$1 = state_29357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29357__$1,(2),res,v);
} else {
if((state_val_29358 === (2))){
var inst_29354 = (state_29357[(2)]);
var inst_29355 = cljs.core.async.close_BANG_.call(null,res);
var state_29357__$1 = (function (){var statearr_29359 = state_29357;
(statearr_29359[(7)] = inst_29354);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29357__$1,inst_29355);
} else {
return null;
}
}
});})(c__28978__auto___29536,res,vec__29350,v,p,job,jobs,results))
;
return ((function (switch__28866__auto__,c__28978__auto___29536,res,vec__29350,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null,null];
(statearr_29363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1 = (function (state_29357){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29364){if((e29364 instanceof Object)){
var ex__28870__auto__ = e29364;
var statearr_29365_29537 = state_29357;
(statearr_29365_29537[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29538 = state_29357;
state_29357 = G__29538;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = function(state_29357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1.call(this,state_29357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___29536,res,vec__29350,v,p,job,jobs,results))
})();
var state__28980__auto__ = (function (){var statearr_29366 = f__28979__auto__.call(null);
(statearr_29366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___29536);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___29536,res,vec__29350,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29367){
var vec__29368 = p__29367;
var v = cljs.core.nth.call(null,vec__29368,(0),null);
var p = cljs.core.nth.call(null,vec__29368,(1),null);
var job = vec__29368;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25983__auto___29539 = n;
var __29540 = (0);
while(true){
if((__29540 < n__25983__auto___29539)){
var G__29371_29541 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29371_29541) {
case "compute":
var c__28978__auto___29543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29540,c__28978__auto___29543,G__29371_29541,n__25983__auto___29539,jobs,results,process,async){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (__29540,c__28978__auto___29543,G__29371_29541,n__25983__auto___29539,jobs,results,process,async){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (1))){
var state_29384__$1 = state_29384;
var statearr_29386_29544 = state_29384__$1;
(statearr_29386_29544[(2)] = null);

(statearr_29386_29544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (2))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(4),jobs);
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (4))){
var inst_29374 = (state_29384[(2)]);
var inst_29375 = process.call(null,inst_29374);
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29375)){
var statearr_29387_29545 = state_29384__$1;
(statearr_29387_29545[(1)] = (5));

} else {
var statearr_29388_29546 = state_29384__$1;
(statearr_29388_29546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (5))){
var state_29384__$1 = state_29384;
var statearr_29389_29547 = state_29384__$1;
(statearr_29389_29547[(2)] = null);

(statearr_29389_29547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var state_29384__$1 = state_29384;
var statearr_29390_29548 = state_29384__$1;
(statearr_29390_29548[(2)] = null);

(statearr_29390_29548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (7))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29391_29549 = state_29384__$1;
(statearr_29391_29549[(2)] = inst_29380);

(statearr_29391_29549[(1)] = (3));


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
});})(__29540,c__28978__auto___29543,G__29371_29541,n__25983__auto___29539,jobs,results,process,async))
;
return ((function (__29540,switch__28866__auto__,c__28978__auto___29543,G__29371_29541,n__25983__auto___29539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0 = (function (){
var statearr_29395 = [null,null,null,null,null,null,null];
(statearr_29395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__);

(statearr_29395[(1)] = (1));

return statearr_29395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1 = (function (state_29384){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29396){if((e29396 instanceof Object)){
var ex__28870__auto__ = e29396;
var statearr_29397_29550 = state_29384;
(statearr_29397_29550[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29551 = state_29384;
state_29384 = G__29551;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__;
})()
;})(__29540,switch__28866__auto__,c__28978__auto___29543,G__29371_29541,n__25983__auto___29539,jobs,results,process,async))
})();
var state__28980__auto__ = (function (){var statearr_29398 = f__28979__auto__.call(null);
(statearr_29398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___29543);

return statearr_29398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(__29540,c__28978__auto___29543,G__29371_29541,n__25983__auto___29539,jobs,results,process,async))
);


break;
case "async":
var c__28978__auto___29552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29540,c__28978__auto___29552,G__29371_29541,n__25983__auto___29539,jobs,results,process,async){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (__29540,c__28978__auto___29552,G__29371_29541,n__25983__auto___29539,jobs,results,process,async){
return (function (state_29411){
var state_val_29412 = (state_29411[(1)]);
if((state_val_29412 === (1))){
var state_29411__$1 = state_29411;
var statearr_29413_29553 = state_29411__$1;
(statearr_29413_29553[(2)] = null);

(statearr_29413_29553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (2))){
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(4),jobs);
} else {
if((state_val_29412 === (3))){
var inst_29409 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29411__$1,inst_29409);
} else {
if((state_val_29412 === (4))){
var inst_29401 = (state_29411[(2)]);
var inst_29402 = async.call(null,inst_29401);
var state_29411__$1 = state_29411;
if(cljs.core.truth_(inst_29402)){
var statearr_29414_29554 = state_29411__$1;
(statearr_29414_29554[(1)] = (5));

} else {
var statearr_29415_29555 = state_29411__$1;
(statearr_29415_29555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (5))){
var state_29411__$1 = state_29411;
var statearr_29416_29556 = state_29411__$1;
(statearr_29416_29556[(2)] = null);

(statearr_29416_29556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (6))){
var state_29411__$1 = state_29411;
var statearr_29417_29557 = state_29411__$1;
(statearr_29417_29557[(2)] = null);

(statearr_29417_29557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (7))){
var inst_29407 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29418_29558 = state_29411__$1;
(statearr_29418_29558[(2)] = inst_29407);

(statearr_29418_29558[(1)] = (3));


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
});})(__29540,c__28978__auto___29552,G__29371_29541,n__25983__auto___29539,jobs,results,process,async))
;
return ((function (__29540,switch__28866__auto__,c__28978__auto___29552,G__29371_29541,n__25983__auto___29539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0 = (function (){
var statearr_29422 = [null,null,null,null,null,null,null];
(statearr_29422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__);

(statearr_29422[(1)] = (1));

return statearr_29422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1 = (function (state_29411){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29423){if((e29423 instanceof Object)){
var ex__28870__auto__ = e29423;
var statearr_29424_29559 = state_29411;
(statearr_29424_29559[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29560 = state_29411;
state_29411 = G__29560;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = function(state_29411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1.call(this,state_29411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__;
})()
;})(__29540,switch__28866__auto__,c__28978__auto___29552,G__29371_29541,n__25983__auto___29539,jobs,results,process,async))
})();
var state__28980__auto__ = (function (){var statearr_29425 = f__28979__auto__.call(null);
(statearr_29425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___29552);

return statearr_29425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(__29540,c__28978__auto___29552,G__29371_29541,n__25983__auto___29539,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29561 = (__29540 + (1));
__29540 = G__29561;
continue;
} else {
}
break;
}

var c__28978__auto___29562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___29562,jobs,results,process,async){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___29562,jobs,results,process,async){
return (function (state_29447){
var state_val_29448 = (state_29447[(1)]);
if((state_val_29448 === (1))){
var state_29447__$1 = state_29447;
var statearr_29449_29563 = state_29447__$1;
(statearr_29449_29563[(2)] = null);

(statearr_29449_29563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (2))){
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29447__$1,(4),from);
} else {
if((state_val_29448 === (3))){
var inst_29445 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29447__$1,inst_29445);
} else {
if((state_val_29448 === (4))){
var inst_29428 = (state_29447[(7)]);
var inst_29428__$1 = (state_29447[(2)]);
var inst_29429 = (inst_29428__$1 == null);
var state_29447__$1 = (function (){var statearr_29450 = state_29447;
(statearr_29450[(7)] = inst_29428__$1);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29429)){
var statearr_29451_29564 = state_29447__$1;
(statearr_29451_29564[(1)] = (5));

} else {
var statearr_29452_29565 = state_29447__$1;
(statearr_29452_29565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (5))){
var inst_29431 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29447__$1 = state_29447;
var statearr_29453_29566 = state_29447__$1;
(statearr_29453_29566[(2)] = inst_29431);

(statearr_29453_29566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (6))){
var inst_29433 = (state_29447[(8)]);
var inst_29428 = (state_29447[(7)]);
var inst_29433__$1 = cljs.core.async.chan.call(null,(1));
var inst_29434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29435 = [inst_29428,inst_29433__$1];
var inst_29436 = (new cljs.core.PersistentVector(null,2,(5),inst_29434,inst_29435,null));
var state_29447__$1 = (function (){var statearr_29454 = state_29447;
(statearr_29454[(8)] = inst_29433__$1);

return statearr_29454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29447__$1,(8),jobs,inst_29436);
} else {
if((state_val_29448 === (7))){
var inst_29443 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
var statearr_29455_29567 = state_29447__$1;
(statearr_29455_29567[(2)] = inst_29443);

(statearr_29455_29567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (8))){
var inst_29433 = (state_29447[(8)]);
var inst_29438 = (state_29447[(2)]);
var state_29447__$1 = (function (){var statearr_29456 = state_29447;
(statearr_29456[(9)] = inst_29438);

return statearr_29456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29447__$1,(9),results,inst_29433);
} else {
if((state_val_29448 === (9))){
var inst_29440 = (state_29447[(2)]);
var state_29447__$1 = (function (){var statearr_29457 = state_29447;
(statearr_29457[(10)] = inst_29440);

return statearr_29457;
})();
var statearr_29458_29568 = state_29447__$1;
(statearr_29458_29568[(2)] = null);

(statearr_29458_29568[(1)] = (2));


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
});})(c__28978__auto___29562,jobs,results,process,async))
;
return ((function (switch__28866__auto__,c__28978__auto___29562,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0 = (function (){
var statearr_29462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__);

(statearr_29462[(1)] = (1));

return statearr_29462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1 = (function (state_29447){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29463){if((e29463 instanceof Object)){
var ex__28870__auto__ = e29463;
var statearr_29464_29569 = state_29447;
(statearr_29464_29569[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29570 = state_29447;
state_29447 = G__29570;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = function(state_29447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1.call(this,state_29447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___29562,jobs,results,process,async))
})();
var state__28980__auto__ = (function (){var statearr_29465 = f__28979__auto__.call(null);
(statearr_29465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___29562);

return statearr_29465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___29562,jobs,results,process,async))
);


var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__,jobs,results,process,async){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__,jobs,results,process,async){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (7))){
var inst_29499 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29505_29571 = state_29503__$1;
(statearr_29505_29571[(2)] = inst_29499);

(statearr_29505_29571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (20))){
var state_29503__$1 = state_29503;
var statearr_29506_29572 = state_29503__$1;
(statearr_29506_29572[(2)] = null);

(statearr_29506_29572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (1))){
var state_29503__$1 = state_29503;
var statearr_29507_29573 = state_29503__$1;
(statearr_29507_29573[(2)] = null);

(statearr_29507_29573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (4))){
var inst_29468 = (state_29503[(7)]);
var inst_29468__$1 = (state_29503[(2)]);
var inst_29469 = (inst_29468__$1 == null);
var state_29503__$1 = (function (){var statearr_29508 = state_29503;
(statearr_29508[(7)] = inst_29468__$1);

return statearr_29508;
})();
if(cljs.core.truth_(inst_29469)){
var statearr_29509_29574 = state_29503__$1;
(statearr_29509_29574[(1)] = (5));

} else {
var statearr_29510_29575 = state_29503__$1;
(statearr_29510_29575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (15))){
var inst_29481 = (state_29503[(8)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29503__$1,(18),to,inst_29481);
} else {
if((state_val_29504 === (21))){
var inst_29494 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29511_29576 = state_29503__$1;
(statearr_29511_29576[(2)] = inst_29494);

(statearr_29511_29576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (13))){
var inst_29496 = (state_29503[(2)]);
var state_29503__$1 = (function (){var statearr_29512 = state_29503;
(statearr_29512[(9)] = inst_29496);

return statearr_29512;
})();
var statearr_29513_29577 = state_29503__$1;
(statearr_29513_29577[(2)] = null);

(statearr_29513_29577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (6))){
var inst_29468 = (state_29503[(7)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(11),inst_29468);
} else {
if((state_val_29504 === (17))){
var inst_29489 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
if(cljs.core.truth_(inst_29489)){
var statearr_29514_29578 = state_29503__$1;
(statearr_29514_29578[(1)] = (19));

} else {
var statearr_29515_29579 = state_29503__$1;
(statearr_29515_29579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (3))){
var inst_29501 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (12))){
var inst_29478 = (state_29503[(10)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(14),inst_29478);
} else {
if((state_val_29504 === (2))){
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(4),results);
} else {
if((state_val_29504 === (19))){
var state_29503__$1 = state_29503;
var statearr_29516_29580 = state_29503__$1;
(statearr_29516_29580[(2)] = null);

(statearr_29516_29580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (11))){
var inst_29478 = (state_29503[(2)]);
var state_29503__$1 = (function (){var statearr_29517 = state_29503;
(statearr_29517[(10)] = inst_29478);

return statearr_29517;
})();
var statearr_29518_29581 = state_29503__$1;
(statearr_29518_29581[(2)] = null);

(statearr_29518_29581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (9))){
var state_29503__$1 = state_29503;
var statearr_29519_29582 = state_29503__$1;
(statearr_29519_29582[(2)] = null);

(statearr_29519_29582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (5))){
var state_29503__$1 = state_29503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29520_29583 = state_29503__$1;
(statearr_29520_29583[(1)] = (8));

} else {
var statearr_29521_29584 = state_29503__$1;
(statearr_29521_29584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (14))){
var inst_29483 = (state_29503[(11)]);
var inst_29481 = (state_29503[(8)]);
var inst_29481__$1 = (state_29503[(2)]);
var inst_29482 = (inst_29481__$1 == null);
var inst_29483__$1 = cljs.core.not.call(null,inst_29482);
var state_29503__$1 = (function (){var statearr_29522 = state_29503;
(statearr_29522[(11)] = inst_29483__$1);

(statearr_29522[(8)] = inst_29481__$1);

return statearr_29522;
})();
if(inst_29483__$1){
var statearr_29523_29585 = state_29503__$1;
(statearr_29523_29585[(1)] = (15));

} else {
var statearr_29524_29586 = state_29503__$1;
(statearr_29524_29586[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (16))){
var inst_29483 = (state_29503[(11)]);
var state_29503__$1 = state_29503;
var statearr_29525_29587 = state_29503__$1;
(statearr_29525_29587[(2)] = inst_29483);

(statearr_29525_29587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (10))){
var inst_29475 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29526_29588 = state_29503__$1;
(statearr_29526_29588[(2)] = inst_29475);

(statearr_29526_29588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (18))){
var inst_29486 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29527_29589 = state_29503__$1;
(statearr_29527_29589[(2)] = inst_29486);

(statearr_29527_29589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (8))){
var inst_29472 = cljs.core.async.close_BANG_.call(null,to);
var state_29503__$1 = state_29503;
var statearr_29528_29590 = state_29503__$1;
(statearr_29528_29590[(2)] = inst_29472);

(statearr_29528_29590[(1)] = (10));


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
});})(c__28978__auto__,jobs,results,process,async))
;
return ((function (switch__28866__auto__,c__28978__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0 = (function (){
var statearr_29532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__);

(statearr_29532[(1)] = (1));

return statearr_29532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1 = (function (state_29503){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29533){if((e29533 instanceof Object)){
var ex__28870__auto__ = e29533;
var statearr_29534_29591 = state_29503;
(statearr_29534_29591[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29592 = state_29503;
state_29503 = G__29592;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__,jobs,results,process,async))
})();
var state__28980__auto__ = (function (){var statearr_29535 = f__28979__auto__.call(null);
(statearr_29535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_29535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__,jobs,results,process,async))
);

return c__28978__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29593 = [];
var len__26143__auto___29596 = arguments.length;
var i__26144__auto___29597 = (0);
while(true){
if((i__26144__auto___29597 < len__26143__auto___29596)){
args29593.push((arguments[i__26144__auto___29597]));

var G__29598 = (i__26144__auto___29597 + (1));
i__26144__auto___29597 = G__29598;
continue;
} else {
}
break;
}

var G__29595 = args29593.length;
switch (G__29595) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29593.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29600 = [];
var len__26143__auto___29603 = arguments.length;
var i__26144__auto___29604 = (0);
while(true){
if((i__26144__auto___29604 < len__26143__auto___29603)){
args29600.push((arguments[i__26144__auto___29604]));

var G__29605 = (i__26144__auto___29604 + (1));
i__26144__auto___29604 = G__29605;
continue;
} else {
}
break;
}

var G__29602 = args29600.length;
switch (G__29602) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29600.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29607 = [];
var len__26143__auto___29660 = arguments.length;
var i__26144__auto___29661 = (0);
while(true){
if((i__26144__auto___29661 < len__26143__auto___29660)){
args29607.push((arguments[i__26144__auto___29661]));

var G__29662 = (i__26144__auto___29661 + (1));
i__26144__auto___29661 = G__29662;
continue;
} else {
}
break;
}

var G__29609 = args29607.length;
switch (G__29609) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29607.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28978__auto___29664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___29664,tc,fc){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___29664,tc,fc){
return (function (state_29635){
var state_val_29636 = (state_29635[(1)]);
if((state_val_29636 === (7))){
var inst_29631 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
var statearr_29637_29665 = state_29635__$1;
(statearr_29637_29665[(2)] = inst_29631);

(statearr_29637_29665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (1))){
var state_29635__$1 = state_29635;
var statearr_29638_29666 = state_29635__$1;
(statearr_29638_29666[(2)] = null);

(statearr_29638_29666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (4))){
var inst_29612 = (state_29635[(7)]);
var inst_29612__$1 = (state_29635[(2)]);
var inst_29613 = (inst_29612__$1 == null);
var state_29635__$1 = (function (){var statearr_29639 = state_29635;
(statearr_29639[(7)] = inst_29612__$1);

return statearr_29639;
})();
if(cljs.core.truth_(inst_29613)){
var statearr_29640_29667 = state_29635__$1;
(statearr_29640_29667[(1)] = (5));

} else {
var statearr_29641_29668 = state_29635__$1;
(statearr_29641_29668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (13))){
var state_29635__$1 = state_29635;
var statearr_29642_29669 = state_29635__$1;
(statearr_29642_29669[(2)] = null);

(statearr_29642_29669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (6))){
var inst_29612 = (state_29635[(7)]);
var inst_29618 = p.call(null,inst_29612);
var state_29635__$1 = state_29635;
if(cljs.core.truth_(inst_29618)){
var statearr_29643_29670 = state_29635__$1;
(statearr_29643_29670[(1)] = (9));

} else {
var statearr_29644_29671 = state_29635__$1;
(statearr_29644_29671[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (3))){
var inst_29633 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29635__$1,inst_29633);
} else {
if((state_val_29636 === (12))){
var state_29635__$1 = state_29635;
var statearr_29645_29672 = state_29635__$1;
(statearr_29645_29672[(2)] = null);

(statearr_29645_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (2))){
var state_29635__$1 = state_29635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29635__$1,(4),ch);
} else {
if((state_val_29636 === (11))){
var inst_29612 = (state_29635[(7)]);
var inst_29622 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29635__$1,(8),inst_29622,inst_29612);
} else {
if((state_val_29636 === (9))){
var state_29635__$1 = state_29635;
var statearr_29646_29673 = state_29635__$1;
(statearr_29646_29673[(2)] = tc);

(statearr_29646_29673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (5))){
var inst_29615 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29616 = cljs.core.async.close_BANG_.call(null,fc);
var state_29635__$1 = (function (){var statearr_29647 = state_29635;
(statearr_29647[(8)] = inst_29615);

return statearr_29647;
})();
var statearr_29648_29674 = state_29635__$1;
(statearr_29648_29674[(2)] = inst_29616);

(statearr_29648_29674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (14))){
var inst_29629 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
var statearr_29649_29675 = state_29635__$1;
(statearr_29649_29675[(2)] = inst_29629);

(statearr_29649_29675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (10))){
var state_29635__$1 = state_29635;
var statearr_29650_29676 = state_29635__$1;
(statearr_29650_29676[(2)] = fc);

(statearr_29650_29676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29636 === (8))){
var inst_29624 = (state_29635[(2)]);
var state_29635__$1 = state_29635;
if(cljs.core.truth_(inst_29624)){
var statearr_29651_29677 = state_29635__$1;
(statearr_29651_29677[(1)] = (12));

} else {
var statearr_29652_29678 = state_29635__$1;
(statearr_29652_29678[(1)] = (13));

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
});})(c__28978__auto___29664,tc,fc))
;
return ((function (switch__28866__auto__,c__28978__auto___29664,tc,fc){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_29656 = [null,null,null,null,null,null,null,null,null];
(statearr_29656[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_29656[(1)] = (1));

return statearr_29656;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_29635){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29657){if((e29657 instanceof Object)){
var ex__28870__auto__ = e29657;
var statearr_29658_29679 = state_29635;
(statearr_29658_29679[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29680 = state_29635;
state_29635 = G__29680;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_29635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_29635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___29664,tc,fc))
})();
var state__28980__auto__ = (function (){var statearr_29659 = f__28979__auto__.call(null);
(statearr_29659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___29664);

return statearr_29659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___29664,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__){
return (function (state_29744){
var state_val_29745 = (state_29744[(1)]);
if((state_val_29745 === (7))){
var inst_29740 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29746_29767 = state_29744__$1;
(statearr_29746_29767[(2)] = inst_29740);

(statearr_29746_29767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (1))){
var inst_29724 = init;
var state_29744__$1 = (function (){var statearr_29747 = state_29744;
(statearr_29747[(7)] = inst_29724);

return statearr_29747;
})();
var statearr_29748_29768 = state_29744__$1;
(statearr_29748_29768[(2)] = null);

(statearr_29748_29768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (4))){
var inst_29727 = (state_29744[(8)]);
var inst_29727__$1 = (state_29744[(2)]);
var inst_29728 = (inst_29727__$1 == null);
var state_29744__$1 = (function (){var statearr_29749 = state_29744;
(statearr_29749[(8)] = inst_29727__$1);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29728)){
var statearr_29750_29769 = state_29744__$1;
(statearr_29750_29769[(1)] = (5));

} else {
var statearr_29751_29770 = state_29744__$1;
(statearr_29751_29770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (6))){
var inst_29731 = (state_29744[(9)]);
var inst_29727 = (state_29744[(8)]);
var inst_29724 = (state_29744[(7)]);
var inst_29731__$1 = f.call(null,inst_29724,inst_29727);
var inst_29732 = cljs.core.reduced_QMARK_.call(null,inst_29731__$1);
var state_29744__$1 = (function (){var statearr_29752 = state_29744;
(statearr_29752[(9)] = inst_29731__$1);

return statearr_29752;
})();
if(inst_29732){
var statearr_29753_29771 = state_29744__$1;
(statearr_29753_29771[(1)] = (8));

} else {
var statearr_29754_29772 = state_29744__$1;
(statearr_29754_29772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (3))){
var inst_29742 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29744__$1,inst_29742);
} else {
if((state_val_29745 === (2))){
var state_29744__$1 = state_29744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29744__$1,(4),ch);
} else {
if((state_val_29745 === (9))){
var inst_29731 = (state_29744[(9)]);
var inst_29724 = inst_29731;
var state_29744__$1 = (function (){var statearr_29755 = state_29744;
(statearr_29755[(7)] = inst_29724);

return statearr_29755;
})();
var statearr_29756_29773 = state_29744__$1;
(statearr_29756_29773[(2)] = null);

(statearr_29756_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (5))){
var inst_29724 = (state_29744[(7)]);
var state_29744__$1 = state_29744;
var statearr_29757_29774 = state_29744__$1;
(statearr_29757_29774[(2)] = inst_29724);

(statearr_29757_29774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (10))){
var inst_29738 = (state_29744[(2)]);
var state_29744__$1 = state_29744;
var statearr_29758_29775 = state_29744__$1;
(statearr_29758_29775[(2)] = inst_29738);

(statearr_29758_29775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29745 === (8))){
var inst_29731 = (state_29744[(9)]);
var inst_29734 = cljs.core.deref.call(null,inst_29731);
var state_29744__$1 = state_29744;
var statearr_29759_29776 = state_29744__$1;
(statearr_29759_29776[(2)] = inst_29734);

(statearr_29759_29776[(1)] = (10));


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
});})(c__28978__auto__))
;
return ((function (switch__28866__auto__,c__28978__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28867__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28867__auto____0 = (function (){
var statearr_29763 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29763[(0)] = cljs$core$async$reduce_$_state_machine__28867__auto__);

(statearr_29763[(1)] = (1));

return statearr_29763;
});
var cljs$core$async$reduce_$_state_machine__28867__auto____1 = (function (state_29744){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29764){if((e29764 instanceof Object)){
var ex__28870__auto__ = e29764;
var statearr_29765_29777 = state_29744;
(statearr_29765_29777[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_29744;
state_29744 = G__29778;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28867__auto__ = function(state_29744){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28867__auto____1.call(this,state_29744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28867__auto____0;
cljs$core$async$reduce_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28867__auto____1;
return cljs$core$async$reduce_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__))
})();
var state__28980__auto__ = (function (){var statearr_29766 = f__28979__auto__.call(null);
(statearr_29766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_29766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__))
);

return c__28978__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29779 = [];
var len__26143__auto___29831 = arguments.length;
var i__26144__auto___29832 = (0);
while(true){
if((i__26144__auto___29832 < len__26143__auto___29831)){
args29779.push((arguments[i__26144__auto___29832]));

var G__29833 = (i__26144__auto___29832 + (1));
i__26144__auto___29832 = G__29833;
continue;
} else {
}
break;
}

var G__29781 = args29779.length;
switch (G__29781) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29779.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__){
return (function (state_29806){
var state_val_29807 = (state_29806[(1)]);
if((state_val_29807 === (7))){
var inst_29788 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29808_29835 = state_29806__$1;
(statearr_29808_29835[(2)] = inst_29788);

(statearr_29808_29835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (1))){
var inst_29782 = cljs.core.seq.call(null,coll);
var inst_29783 = inst_29782;
var state_29806__$1 = (function (){var statearr_29809 = state_29806;
(statearr_29809[(7)] = inst_29783);

return statearr_29809;
})();
var statearr_29810_29836 = state_29806__$1;
(statearr_29810_29836[(2)] = null);

(statearr_29810_29836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (4))){
var inst_29783 = (state_29806[(7)]);
var inst_29786 = cljs.core.first.call(null,inst_29783);
var state_29806__$1 = state_29806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29806__$1,(7),ch,inst_29786);
} else {
if((state_val_29807 === (13))){
var inst_29800 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29811_29837 = state_29806__$1;
(statearr_29811_29837[(2)] = inst_29800);

(statearr_29811_29837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (6))){
var inst_29791 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
if(cljs.core.truth_(inst_29791)){
var statearr_29812_29838 = state_29806__$1;
(statearr_29812_29838[(1)] = (8));

} else {
var statearr_29813_29839 = state_29806__$1;
(statearr_29813_29839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (3))){
var inst_29804 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29806__$1,inst_29804);
} else {
if((state_val_29807 === (12))){
var state_29806__$1 = state_29806;
var statearr_29814_29840 = state_29806__$1;
(statearr_29814_29840[(2)] = null);

(statearr_29814_29840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (2))){
var inst_29783 = (state_29806[(7)]);
var state_29806__$1 = state_29806;
if(cljs.core.truth_(inst_29783)){
var statearr_29815_29841 = state_29806__$1;
(statearr_29815_29841[(1)] = (4));

} else {
var statearr_29816_29842 = state_29806__$1;
(statearr_29816_29842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (11))){
var inst_29797 = cljs.core.async.close_BANG_.call(null,ch);
var state_29806__$1 = state_29806;
var statearr_29817_29843 = state_29806__$1;
(statearr_29817_29843[(2)] = inst_29797);

(statearr_29817_29843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (9))){
var state_29806__$1 = state_29806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29818_29844 = state_29806__$1;
(statearr_29818_29844[(1)] = (11));

} else {
var statearr_29819_29845 = state_29806__$1;
(statearr_29819_29845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (5))){
var inst_29783 = (state_29806[(7)]);
var state_29806__$1 = state_29806;
var statearr_29820_29846 = state_29806__$1;
(statearr_29820_29846[(2)] = inst_29783);

(statearr_29820_29846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (10))){
var inst_29802 = (state_29806[(2)]);
var state_29806__$1 = state_29806;
var statearr_29821_29847 = state_29806__$1;
(statearr_29821_29847[(2)] = inst_29802);

(statearr_29821_29847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29807 === (8))){
var inst_29783 = (state_29806[(7)]);
var inst_29793 = cljs.core.next.call(null,inst_29783);
var inst_29783__$1 = inst_29793;
var state_29806__$1 = (function (){var statearr_29822 = state_29806;
(statearr_29822[(7)] = inst_29783__$1);

return statearr_29822;
})();
var statearr_29823_29848 = state_29806__$1;
(statearr_29823_29848[(2)] = null);

(statearr_29823_29848[(1)] = (2));


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
});})(c__28978__auto__))
;
return ((function (switch__28866__auto__,c__28978__auto__){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_29827 = [null,null,null,null,null,null,null,null];
(statearr_29827[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_29827[(1)] = (1));

return statearr_29827;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_29806){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_29806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e29828){if((e29828 instanceof Object)){
var ex__28870__auto__ = e29828;
var statearr_29829_29849 = state_29806;
(statearr_29829_29849[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29850 = state_29806;
state_29806 = G__29850;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_29806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_29806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__))
})();
var state__28980__auto__ = (function (){var statearr_29830 = f__28979__auto__.call(null);
(statearr_29830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_29830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__))
);

return c__28978__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25731__auto__ = (((_ == null))?null:_);
var m__25732__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,_);
} else {
var m__25732__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25732__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m,ch);
} else {
var m__25732__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m);
} else {
var m__25732__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30076 = (function (mult,ch,cs,meta30077){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30077 = meta30077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30078,meta30077__$1){
var self__ = this;
var _30078__$1 = this;
return (new cljs.core.async.t_cljs$core$async30076(self__.mult,self__.ch,self__.cs,meta30077__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30078){
var self__ = this;
var _30078__$1 = this;
return self__.meta30077;
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30077","meta30077",1747739847,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30076";

cljs.core.async.t_cljs$core$async30076.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async30076");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30076 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30076(mult__$1,ch__$1,cs__$1,meta30077){
return (new cljs.core.async.t_cljs$core$async30076(mult__$1,ch__$1,cs__$1,meta30077));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30076(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28978__auto___30301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___30301,cs,m,dchan,dctr,done){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___30301,cs,m,dchan,dctr,done){
return (function (state_30213){
var state_val_30214 = (state_30213[(1)]);
if((state_val_30214 === (7))){
var inst_30209 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30215_30302 = state_30213__$1;
(statearr_30215_30302[(2)] = inst_30209);

(statearr_30215_30302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (20))){
var inst_30112 = (state_30213[(7)]);
var inst_30124 = cljs.core.first.call(null,inst_30112);
var inst_30125 = cljs.core.nth.call(null,inst_30124,(0),null);
var inst_30126 = cljs.core.nth.call(null,inst_30124,(1),null);
var state_30213__$1 = (function (){var statearr_30216 = state_30213;
(statearr_30216[(8)] = inst_30125);

return statearr_30216;
})();
if(cljs.core.truth_(inst_30126)){
var statearr_30217_30303 = state_30213__$1;
(statearr_30217_30303[(1)] = (22));

} else {
var statearr_30218_30304 = state_30213__$1;
(statearr_30218_30304[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (27))){
var inst_30156 = (state_30213[(9)]);
var inst_30154 = (state_30213[(10)]);
var inst_30081 = (state_30213[(11)]);
var inst_30161 = (state_30213[(12)]);
var inst_30161__$1 = cljs.core._nth.call(null,inst_30154,inst_30156);
var inst_30162 = cljs.core.async.put_BANG_.call(null,inst_30161__$1,inst_30081,done);
var state_30213__$1 = (function (){var statearr_30219 = state_30213;
(statearr_30219[(12)] = inst_30161__$1);

return statearr_30219;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30220_30305 = state_30213__$1;
(statearr_30220_30305[(1)] = (30));

} else {
var statearr_30221_30306 = state_30213__$1;
(statearr_30221_30306[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (1))){
var state_30213__$1 = state_30213;
var statearr_30222_30307 = state_30213__$1;
(statearr_30222_30307[(2)] = null);

(statearr_30222_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (24))){
var inst_30112 = (state_30213[(7)]);
var inst_30131 = (state_30213[(2)]);
var inst_30132 = cljs.core.next.call(null,inst_30112);
var inst_30090 = inst_30132;
var inst_30091 = null;
var inst_30092 = (0);
var inst_30093 = (0);
var state_30213__$1 = (function (){var statearr_30223 = state_30213;
(statearr_30223[(13)] = inst_30090);

(statearr_30223[(14)] = inst_30093);

(statearr_30223[(15)] = inst_30092);

(statearr_30223[(16)] = inst_30131);

(statearr_30223[(17)] = inst_30091);

return statearr_30223;
})();
var statearr_30224_30308 = state_30213__$1;
(statearr_30224_30308[(2)] = null);

(statearr_30224_30308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (39))){
var state_30213__$1 = state_30213;
var statearr_30228_30309 = state_30213__$1;
(statearr_30228_30309[(2)] = null);

(statearr_30228_30309[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (4))){
var inst_30081 = (state_30213[(11)]);
var inst_30081__$1 = (state_30213[(2)]);
var inst_30082 = (inst_30081__$1 == null);
var state_30213__$1 = (function (){var statearr_30229 = state_30213;
(statearr_30229[(11)] = inst_30081__$1);

return statearr_30229;
})();
if(cljs.core.truth_(inst_30082)){
var statearr_30230_30310 = state_30213__$1;
(statearr_30230_30310[(1)] = (5));

} else {
var statearr_30231_30311 = state_30213__$1;
(statearr_30231_30311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (15))){
var inst_30090 = (state_30213[(13)]);
var inst_30093 = (state_30213[(14)]);
var inst_30092 = (state_30213[(15)]);
var inst_30091 = (state_30213[(17)]);
var inst_30108 = (state_30213[(2)]);
var inst_30109 = (inst_30093 + (1));
var tmp30225 = inst_30090;
var tmp30226 = inst_30092;
var tmp30227 = inst_30091;
var inst_30090__$1 = tmp30225;
var inst_30091__$1 = tmp30227;
var inst_30092__$1 = tmp30226;
var inst_30093__$1 = inst_30109;
var state_30213__$1 = (function (){var statearr_30232 = state_30213;
(statearr_30232[(13)] = inst_30090__$1);

(statearr_30232[(14)] = inst_30093__$1);

(statearr_30232[(18)] = inst_30108);

(statearr_30232[(15)] = inst_30092__$1);

(statearr_30232[(17)] = inst_30091__$1);

return statearr_30232;
})();
var statearr_30233_30312 = state_30213__$1;
(statearr_30233_30312[(2)] = null);

(statearr_30233_30312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (21))){
var inst_30135 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30237_30313 = state_30213__$1;
(statearr_30237_30313[(2)] = inst_30135);

(statearr_30237_30313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (31))){
var inst_30161 = (state_30213[(12)]);
var inst_30165 = done.call(null,null);
var inst_30166 = cljs.core.async.untap_STAR_.call(null,m,inst_30161);
var state_30213__$1 = (function (){var statearr_30238 = state_30213;
(statearr_30238[(19)] = inst_30165);

return statearr_30238;
})();
var statearr_30239_30314 = state_30213__$1;
(statearr_30239_30314[(2)] = inst_30166);

(statearr_30239_30314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (32))){
var inst_30156 = (state_30213[(9)]);
var inst_30154 = (state_30213[(10)]);
var inst_30153 = (state_30213[(20)]);
var inst_30155 = (state_30213[(21)]);
var inst_30168 = (state_30213[(2)]);
var inst_30169 = (inst_30156 + (1));
var tmp30234 = inst_30154;
var tmp30235 = inst_30153;
var tmp30236 = inst_30155;
var inst_30153__$1 = tmp30235;
var inst_30154__$1 = tmp30234;
var inst_30155__$1 = tmp30236;
var inst_30156__$1 = inst_30169;
var state_30213__$1 = (function (){var statearr_30240 = state_30213;
(statearr_30240[(9)] = inst_30156__$1);

(statearr_30240[(10)] = inst_30154__$1);

(statearr_30240[(22)] = inst_30168);

(statearr_30240[(20)] = inst_30153__$1);

(statearr_30240[(21)] = inst_30155__$1);

return statearr_30240;
})();
var statearr_30241_30315 = state_30213__$1;
(statearr_30241_30315[(2)] = null);

(statearr_30241_30315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (40))){
var inst_30181 = (state_30213[(23)]);
var inst_30185 = done.call(null,null);
var inst_30186 = cljs.core.async.untap_STAR_.call(null,m,inst_30181);
var state_30213__$1 = (function (){var statearr_30242 = state_30213;
(statearr_30242[(24)] = inst_30185);

return statearr_30242;
})();
var statearr_30243_30316 = state_30213__$1;
(statearr_30243_30316[(2)] = inst_30186);

(statearr_30243_30316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (33))){
var inst_30172 = (state_30213[(25)]);
var inst_30174 = cljs.core.chunked_seq_QMARK_.call(null,inst_30172);
var state_30213__$1 = state_30213;
if(inst_30174){
var statearr_30244_30317 = state_30213__$1;
(statearr_30244_30317[(1)] = (36));

} else {
var statearr_30245_30318 = state_30213__$1;
(statearr_30245_30318[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (13))){
var inst_30102 = (state_30213[(26)]);
var inst_30105 = cljs.core.async.close_BANG_.call(null,inst_30102);
var state_30213__$1 = state_30213;
var statearr_30246_30319 = state_30213__$1;
(statearr_30246_30319[(2)] = inst_30105);

(statearr_30246_30319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (22))){
var inst_30125 = (state_30213[(8)]);
var inst_30128 = cljs.core.async.close_BANG_.call(null,inst_30125);
var state_30213__$1 = state_30213;
var statearr_30247_30320 = state_30213__$1;
(statearr_30247_30320[(2)] = inst_30128);

(statearr_30247_30320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (36))){
var inst_30172 = (state_30213[(25)]);
var inst_30176 = cljs.core.chunk_first.call(null,inst_30172);
var inst_30177 = cljs.core.chunk_rest.call(null,inst_30172);
var inst_30178 = cljs.core.count.call(null,inst_30176);
var inst_30153 = inst_30177;
var inst_30154 = inst_30176;
var inst_30155 = inst_30178;
var inst_30156 = (0);
var state_30213__$1 = (function (){var statearr_30248 = state_30213;
(statearr_30248[(9)] = inst_30156);

(statearr_30248[(10)] = inst_30154);

(statearr_30248[(20)] = inst_30153);

(statearr_30248[(21)] = inst_30155);

return statearr_30248;
})();
var statearr_30249_30321 = state_30213__$1;
(statearr_30249_30321[(2)] = null);

(statearr_30249_30321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (41))){
var inst_30172 = (state_30213[(25)]);
var inst_30188 = (state_30213[(2)]);
var inst_30189 = cljs.core.next.call(null,inst_30172);
var inst_30153 = inst_30189;
var inst_30154 = null;
var inst_30155 = (0);
var inst_30156 = (0);
var state_30213__$1 = (function (){var statearr_30250 = state_30213;
(statearr_30250[(9)] = inst_30156);

(statearr_30250[(10)] = inst_30154);

(statearr_30250[(27)] = inst_30188);

(statearr_30250[(20)] = inst_30153);

(statearr_30250[(21)] = inst_30155);

return statearr_30250;
})();
var statearr_30251_30322 = state_30213__$1;
(statearr_30251_30322[(2)] = null);

(statearr_30251_30322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (43))){
var state_30213__$1 = state_30213;
var statearr_30252_30323 = state_30213__$1;
(statearr_30252_30323[(2)] = null);

(statearr_30252_30323[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (29))){
var inst_30197 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30253_30324 = state_30213__$1;
(statearr_30253_30324[(2)] = inst_30197);

(statearr_30253_30324[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (44))){
var inst_30206 = (state_30213[(2)]);
var state_30213__$1 = (function (){var statearr_30254 = state_30213;
(statearr_30254[(28)] = inst_30206);

return statearr_30254;
})();
var statearr_30255_30325 = state_30213__$1;
(statearr_30255_30325[(2)] = null);

(statearr_30255_30325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (6))){
var inst_30145 = (state_30213[(29)]);
var inst_30144 = cljs.core.deref.call(null,cs);
var inst_30145__$1 = cljs.core.keys.call(null,inst_30144);
var inst_30146 = cljs.core.count.call(null,inst_30145__$1);
var inst_30147 = cljs.core.reset_BANG_.call(null,dctr,inst_30146);
var inst_30152 = cljs.core.seq.call(null,inst_30145__$1);
var inst_30153 = inst_30152;
var inst_30154 = null;
var inst_30155 = (0);
var inst_30156 = (0);
var state_30213__$1 = (function (){var statearr_30256 = state_30213;
(statearr_30256[(9)] = inst_30156);

(statearr_30256[(30)] = inst_30147);

(statearr_30256[(10)] = inst_30154);

(statearr_30256[(29)] = inst_30145__$1);

(statearr_30256[(20)] = inst_30153);

(statearr_30256[(21)] = inst_30155);

return statearr_30256;
})();
var statearr_30257_30326 = state_30213__$1;
(statearr_30257_30326[(2)] = null);

(statearr_30257_30326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (28))){
var inst_30172 = (state_30213[(25)]);
var inst_30153 = (state_30213[(20)]);
var inst_30172__$1 = cljs.core.seq.call(null,inst_30153);
var state_30213__$1 = (function (){var statearr_30258 = state_30213;
(statearr_30258[(25)] = inst_30172__$1);

return statearr_30258;
})();
if(inst_30172__$1){
var statearr_30259_30327 = state_30213__$1;
(statearr_30259_30327[(1)] = (33));

} else {
var statearr_30260_30328 = state_30213__$1;
(statearr_30260_30328[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (25))){
var inst_30156 = (state_30213[(9)]);
var inst_30155 = (state_30213[(21)]);
var inst_30158 = (inst_30156 < inst_30155);
var inst_30159 = inst_30158;
var state_30213__$1 = state_30213;
if(cljs.core.truth_(inst_30159)){
var statearr_30261_30329 = state_30213__$1;
(statearr_30261_30329[(1)] = (27));

} else {
var statearr_30262_30330 = state_30213__$1;
(statearr_30262_30330[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (34))){
var state_30213__$1 = state_30213;
var statearr_30263_30331 = state_30213__$1;
(statearr_30263_30331[(2)] = null);

(statearr_30263_30331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (17))){
var state_30213__$1 = state_30213;
var statearr_30264_30332 = state_30213__$1;
(statearr_30264_30332[(2)] = null);

(statearr_30264_30332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (3))){
var inst_30211 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30213__$1,inst_30211);
} else {
if((state_val_30214 === (12))){
var inst_30140 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30265_30333 = state_30213__$1;
(statearr_30265_30333[(2)] = inst_30140);

(statearr_30265_30333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (2))){
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(4),ch);
} else {
if((state_val_30214 === (23))){
var state_30213__$1 = state_30213;
var statearr_30266_30334 = state_30213__$1;
(statearr_30266_30334[(2)] = null);

(statearr_30266_30334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (35))){
var inst_30195 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30267_30335 = state_30213__$1;
(statearr_30267_30335[(2)] = inst_30195);

(statearr_30267_30335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (19))){
var inst_30112 = (state_30213[(7)]);
var inst_30116 = cljs.core.chunk_first.call(null,inst_30112);
var inst_30117 = cljs.core.chunk_rest.call(null,inst_30112);
var inst_30118 = cljs.core.count.call(null,inst_30116);
var inst_30090 = inst_30117;
var inst_30091 = inst_30116;
var inst_30092 = inst_30118;
var inst_30093 = (0);
var state_30213__$1 = (function (){var statearr_30268 = state_30213;
(statearr_30268[(13)] = inst_30090);

(statearr_30268[(14)] = inst_30093);

(statearr_30268[(15)] = inst_30092);

(statearr_30268[(17)] = inst_30091);

return statearr_30268;
})();
var statearr_30269_30336 = state_30213__$1;
(statearr_30269_30336[(2)] = null);

(statearr_30269_30336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (11))){
var inst_30090 = (state_30213[(13)]);
var inst_30112 = (state_30213[(7)]);
var inst_30112__$1 = cljs.core.seq.call(null,inst_30090);
var state_30213__$1 = (function (){var statearr_30270 = state_30213;
(statearr_30270[(7)] = inst_30112__$1);

return statearr_30270;
})();
if(inst_30112__$1){
var statearr_30271_30337 = state_30213__$1;
(statearr_30271_30337[(1)] = (16));

} else {
var statearr_30272_30338 = state_30213__$1;
(statearr_30272_30338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (9))){
var inst_30142 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30273_30339 = state_30213__$1;
(statearr_30273_30339[(2)] = inst_30142);

(statearr_30273_30339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (5))){
var inst_30088 = cljs.core.deref.call(null,cs);
var inst_30089 = cljs.core.seq.call(null,inst_30088);
var inst_30090 = inst_30089;
var inst_30091 = null;
var inst_30092 = (0);
var inst_30093 = (0);
var state_30213__$1 = (function (){var statearr_30274 = state_30213;
(statearr_30274[(13)] = inst_30090);

(statearr_30274[(14)] = inst_30093);

(statearr_30274[(15)] = inst_30092);

(statearr_30274[(17)] = inst_30091);

return statearr_30274;
})();
var statearr_30275_30340 = state_30213__$1;
(statearr_30275_30340[(2)] = null);

(statearr_30275_30340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (14))){
var state_30213__$1 = state_30213;
var statearr_30276_30341 = state_30213__$1;
(statearr_30276_30341[(2)] = null);

(statearr_30276_30341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (45))){
var inst_30203 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30277_30342 = state_30213__$1;
(statearr_30277_30342[(2)] = inst_30203);

(statearr_30277_30342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (26))){
var inst_30145 = (state_30213[(29)]);
var inst_30199 = (state_30213[(2)]);
var inst_30200 = cljs.core.seq.call(null,inst_30145);
var state_30213__$1 = (function (){var statearr_30278 = state_30213;
(statearr_30278[(31)] = inst_30199);

return statearr_30278;
})();
if(inst_30200){
var statearr_30279_30343 = state_30213__$1;
(statearr_30279_30343[(1)] = (42));

} else {
var statearr_30280_30344 = state_30213__$1;
(statearr_30280_30344[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (16))){
var inst_30112 = (state_30213[(7)]);
var inst_30114 = cljs.core.chunked_seq_QMARK_.call(null,inst_30112);
var state_30213__$1 = state_30213;
if(inst_30114){
var statearr_30281_30345 = state_30213__$1;
(statearr_30281_30345[(1)] = (19));

} else {
var statearr_30282_30346 = state_30213__$1;
(statearr_30282_30346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (38))){
var inst_30192 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30283_30347 = state_30213__$1;
(statearr_30283_30347[(2)] = inst_30192);

(statearr_30283_30347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (30))){
var state_30213__$1 = state_30213;
var statearr_30284_30348 = state_30213__$1;
(statearr_30284_30348[(2)] = null);

(statearr_30284_30348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (10))){
var inst_30093 = (state_30213[(14)]);
var inst_30091 = (state_30213[(17)]);
var inst_30101 = cljs.core._nth.call(null,inst_30091,inst_30093);
var inst_30102 = cljs.core.nth.call(null,inst_30101,(0),null);
var inst_30103 = cljs.core.nth.call(null,inst_30101,(1),null);
var state_30213__$1 = (function (){var statearr_30285 = state_30213;
(statearr_30285[(26)] = inst_30102);

return statearr_30285;
})();
if(cljs.core.truth_(inst_30103)){
var statearr_30286_30349 = state_30213__$1;
(statearr_30286_30349[(1)] = (13));

} else {
var statearr_30287_30350 = state_30213__$1;
(statearr_30287_30350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (18))){
var inst_30138 = (state_30213[(2)]);
var state_30213__$1 = state_30213;
var statearr_30288_30351 = state_30213__$1;
(statearr_30288_30351[(2)] = inst_30138);

(statearr_30288_30351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (42))){
var state_30213__$1 = state_30213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30213__$1,(45),dchan);
} else {
if((state_val_30214 === (37))){
var inst_30172 = (state_30213[(25)]);
var inst_30081 = (state_30213[(11)]);
var inst_30181 = (state_30213[(23)]);
var inst_30181__$1 = cljs.core.first.call(null,inst_30172);
var inst_30182 = cljs.core.async.put_BANG_.call(null,inst_30181__$1,inst_30081,done);
var state_30213__$1 = (function (){var statearr_30289 = state_30213;
(statearr_30289[(23)] = inst_30181__$1);

return statearr_30289;
})();
if(cljs.core.truth_(inst_30182)){
var statearr_30290_30352 = state_30213__$1;
(statearr_30290_30352[(1)] = (39));

} else {
var statearr_30291_30353 = state_30213__$1;
(statearr_30291_30353[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30214 === (8))){
var inst_30093 = (state_30213[(14)]);
var inst_30092 = (state_30213[(15)]);
var inst_30095 = (inst_30093 < inst_30092);
var inst_30096 = inst_30095;
var state_30213__$1 = state_30213;
if(cljs.core.truth_(inst_30096)){
var statearr_30292_30354 = state_30213__$1;
(statearr_30292_30354[(1)] = (10));

} else {
var statearr_30293_30355 = state_30213__$1;
(statearr_30293_30355[(1)] = (11));

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
});})(c__28978__auto___30301,cs,m,dchan,dctr,done))
;
return ((function (switch__28866__auto__,c__28978__auto___30301,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28867__auto__ = null;
var cljs$core$async$mult_$_state_machine__28867__auto____0 = (function (){
var statearr_30297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30297[(0)] = cljs$core$async$mult_$_state_machine__28867__auto__);

(statearr_30297[(1)] = (1));

return statearr_30297;
});
var cljs$core$async$mult_$_state_machine__28867__auto____1 = (function (state_30213){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_30213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e30298){if((e30298 instanceof Object)){
var ex__28870__auto__ = e30298;
var statearr_30299_30356 = state_30213;
(statearr_30299_30356[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30357 = state_30213;
state_30213 = G__30357;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28867__auto__ = function(state_30213){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28867__auto____1.call(this,state_30213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28867__auto____0;
cljs$core$async$mult_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28867__auto____1;
return cljs$core$async$mult_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___30301,cs,m,dchan,dctr,done))
})();
var state__28980__auto__ = (function (){var statearr_30300 = f__28979__auto__.call(null);
(statearr_30300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___30301);

return statearr_30300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___30301,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30358 = [];
var len__26143__auto___30361 = arguments.length;
var i__26144__auto___30362 = (0);
while(true){
if((i__26144__auto___30362 < len__26143__auto___30361)){
args30358.push((arguments[i__26144__auto___30362]));

var G__30363 = (i__26144__auto___30362 + (1));
i__26144__auto___30362 = G__30363;
continue;
} else {
}
break;
}

var G__30360 = args30358.length;
switch (G__30360) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30358.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m,ch);
} else {
var m__25732__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m,ch);
} else {
var m__25732__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m);
} else {
var m__25732__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m,state_map);
} else {
var m__25732__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25731__auto__ = (((m == null))?null:m);
var m__25732__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,m,mode);
} else {
var m__25732__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26150__auto__ = [];
var len__26143__auto___30375 = arguments.length;
var i__26144__auto___30376 = (0);
while(true){
if((i__26144__auto___30376 < len__26143__auto___30375)){
args__26150__auto__.push((arguments[i__26144__auto___30376]));

var G__30377 = (i__26144__auto___30376 + (1));
i__26144__auto___30376 = G__30377;
continue;
} else {
}
break;
}

var argseq__26151__auto__ = ((((3) < args__26150__auto__.length))?(new cljs.core.IndexedSeq(args__26150__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26151__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30369){
var map__30370 = p__30369;
var map__30370__$1 = ((((!((map__30370 == null)))?((((map__30370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30370):map__30370);
var opts = map__30370__$1;
var statearr_30372_30378 = state;
(statearr_30372_30378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30370,map__30370__$1,opts){
return (function (val){
var statearr_30373_30379 = state;
(statearr_30373_30379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30370,map__30370__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30374_30380 = state;
(statearr_30374_30380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30365){
var G__30366 = cljs.core.first.call(null,seq30365);
var seq30365__$1 = cljs.core.next.call(null,seq30365);
var G__30367 = cljs.core.first.call(null,seq30365__$1);
var seq30365__$2 = cljs.core.next.call(null,seq30365__$1);
var G__30368 = cljs.core.first.call(null,seq30365__$2);
var seq30365__$3 = cljs.core.next.call(null,seq30365__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30366,G__30367,G__30368,seq30365__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30546 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30547){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30547 = meta30547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30548,meta30547__$1){
var self__ = this;
var _30548__$1 = this;
return (new cljs.core.async.t_cljs$core$async30546(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30547__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30548){
var self__ = this;
var _30548__$1 = this;
return self__.meta30547;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30547","meta30547",578695559,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30546";

cljs.core.async.t_cljs$core$async30546.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async30546");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30546 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30547){
return (new cljs.core.async.t_cljs$core$async30546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30547));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30546(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28978__auto___30711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___30711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___30711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30648){
var state_val_30649 = (state_30648[(1)]);
if((state_val_30649 === (7))){
var inst_30564 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30650_30712 = state_30648__$1;
(statearr_30650_30712[(2)] = inst_30564);

(statearr_30650_30712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (20))){
var inst_30576 = (state_30648[(7)]);
var state_30648__$1 = state_30648;
var statearr_30651_30713 = state_30648__$1;
(statearr_30651_30713[(2)] = inst_30576);

(statearr_30651_30713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (27))){
var state_30648__$1 = state_30648;
var statearr_30652_30714 = state_30648__$1;
(statearr_30652_30714[(2)] = null);

(statearr_30652_30714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (1))){
var inst_30552 = (state_30648[(8)]);
var inst_30552__$1 = calc_state.call(null);
var inst_30554 = (inst_30552__$1 == null);
var inst_30555 = cljs.core.not.call(null,inst_30554);
var state_30648__$1 = (function (){var statearr_30653 = state_30648;
(statearr_30653[(8)] = inst_30552__$1);

return statearr_30653;
})();
if(inst_30555){
var statearr_30654_30715 = state_30648__$1;
(statearr_30654_30715[(1)] = (2));

} else {
var statearr_30655_30716 = state_30648__$1;
(statearr_30655_30716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (24))){
var inst_30599 = (state_30648[(9)]);
var inst_30622 = (state_30648[(10)]);
var inst_30608 = (state_30648[(11)]);
var inst_30622__$1 = inst_30599.call(null,inst_30608);
var state_30648__$1 = (function (){var statearr_30656 = state_30648;
(statearr_30656[(10)] = inst_30622__$1);

return statearr_30656;
})();
if(cljs.core.truth_(inst_30622__$1)){
var statearr_30657_30717 = state_30648__$1;
(statearr_30657_30717[(1)] = (29));

} else {
var statearr_30658_30718 = state_30648__$1;
(statearr_30658_30718[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (4))){
var inst_30567 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30567)){
var statearr_30659_30719 = state_30648__$1;
(statearr_30659_30719[(1)] = (8));

} else {
var statearr_30660_30720 = state_30648__$1;
(statearr_30660_30720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (15))){
var inst_30593 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30593)){
var statearr_30661_30721 = state_30648__$1;
(statearr_30661_30721[(1)] = (19));

} else {
var statearr_30662_30722 = state_30648__$1;
(statearr_30662_30722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (21))){
var inst_30598 = (state_30648[(12)]);
var inst_30598__$1 = (state_30648[(2)]);
var inst_30599 = cljs.core.get.call(null,inst_30598__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30600 = cljs.core.get.call(null,inst_30598__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30601 = cljs.core.get.call(null,inst_30598__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30648__$1 = (function (){var statearr_30663 = state_30648;
(statearr_30663[(12)] = inst_30598__$1);

(statearr_30663[(9)] = inst_30599);

(statearr_30663[(13)] = inst_30600);

return statearr_30663;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30648__$1,(22),inst_30601);
} else {
if((state_val_30649 === (31))){
var inst_30630 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30630)){
var statearr_30664_30723 = state_30648__$1;
(statearr_30664_30723[(1)] = (32));

} else {
var statearr_30665_30724 = state_30648__$1;
(statearr_30665_30724[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (32))){
var inst_30607 = (state_30648[(14)]);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30648__$1,(35),out,inst_30607);
} else {
if((state_val_30649 === (33))){
var inst_30598 = (state_30648[(12)]);
var inst_30576 = inst_30598;
var state_30648__$1 = (function (){var statearr_30666 = state_30648;
(statearr_30666[(7)] = inst_30576);

return statearr_30666;
})();
var statearr_30667_30725 = state_30648__$1;
(statearr_30667_30725[(2)] = null);

(statearr_30667_30725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (13))){
var inst_30576 = (state_30648[(7)]);
var inst_30583 = inst_30576.cljs$lang$protocol_mask$partition0$;
var inst_30584 = (inst_30583 & (64));
var inst_30585 = inst_30576.cljs$core$ISeq$;
var inst_30586 = (inst_30584) || (inst_30585);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30586)){
var statearr_30668_30726 = state_30648__$1;
(statearr_30668_30726[(1)] = (16));

} else {
var statearr_30669_30727 = state_30648__$1;
(statearr_30669_30727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (22))){
var inst_30607 = (state_30648[(14)]);
var inst_30608 = (state_30648[(11)]);
var inst_30606 = (state_30648[(2)]);
var inst_30607__$1 = cljs.core.nth.call(null,inst_30606,(0),null);
var inst_30608__$1 = cljs.core.nth.call(null,inst_30606,(1),null);
var inst_30609 = (inst_30607__$1 == null);
var inst_30610 = cljs.core._EQ_.call(null,inst_30608__$1,change);
var inst_30611 = (inst_30609) || (inst_30610);
var state_30648__$1 = (function (){var statearr_30670 = state_30648;
(statearr_30670[(14)] = inst_30607__$1);

(statearr_30670[(11)] = inst_30608__$1);

return statearr_30670;
})();
if(cljs.core.truth_(inst_30611)){
var statearr_30671_30728 = state_30648__$1;
(statearr_30671_30728[(1)] = (23));

} else {
var statearr_30672_30729 = state_30648__$1;
(statearr_30672_30729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (36))){
var inst_30598 = (state_30648[(12)]);
var inst_30576 = inst_30598;
var state_30648__$1 = (function (){var statearr_30673 = state_30648;
(statearr_30673[(7)] = inst_30576);

return statearr_30673;
})();
var statearr_30674_30730 = state_30648__$1;
(statearr_30674_30730[(2)] = null);

(statearr_30674_30730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (29))){
var inst_30622 = (state_30648[(10)]);
var state_30648__$1 = state_30648;
var statearr_30675_30731 = state_30648__$1;
(statearr_30675_30731[(2)] = inst_30622);

(statearr_30675_30731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (6))){
var state_30648__$1 = state_30648;
var statearr_30676_30732 = state_30648__$1;
(statearr_30676_30732[(2)] = false);

(statearr_30676_30732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (28))){
var inst_30618 = (state_30648[(2)]);
var inst_30619 = calc_state.call(null);
var inst_30576 = inst_30619;
var state_30648__$1 = (function (){var statearr_30677 = state_30648;
(statearr_30677[(7)] = inst_30576);

(statearr_30677[(15)] = inst_30618);

return statearr_30677;
})();
var statearr_30678_30733 = state_30648__$1;
(statearr_30678_30733[(2)] = null);

(statearr_30678_30733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (25))){
var inst_30644 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30679_30734 = state_30648__$1;
(statearr_30679_30734[(2)] = inst_30644);

(statearr_30679_30734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (34))){
var inst_30642 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30680_30735 = state_30648__$1;
(statearr_30680_30735[(2)] = inst_30642);

(statearr_30680_30735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (17))){
var state_30648__$1 = state_30648;
var statearr_30681_30736 = state_30648__$1;
(statearr_30681_30736[(2)] = false);

(statearr_30681_30736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (3))){
var state_30648__$1 = state_30648;
var statearr_30682_30737 = state_30648__$1;
(statearr_30682_30737[(2)] = false);

(statearr_30682_30737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (12))){
var inst_30646 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30648__$1,inst_30646);
} else {
if((state_val_30649 === (2))){
var inst_30552 = (state_30648[(8)]);
var inst_30557 = inst_30552.cljs$lang$protocol_mask$partition0$;
var inst_30558 = (inst_30557 & (64));
var inst_30559 = inst_30552.cljs$core$ISeq$;
var inst_30560 = (inst_30558) || (inst_30559);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30560)){
var statearr_30683_30738 = state_30648__$1;
(statearr_30683_30738[(1)] = (5));

} else {
var statearr_30684_30739 = state_30648__$1;
(statearr_30684_30739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (23))){
var inst_30607 = (state_30648[(14)]);
var inst_30613 = (inst_30607 == null);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30613)){
var statearr_30685_30740 = state_30648__$1;
(statearr_30685_30740[(1)] = (26));

} else {
var statearr_30686_30741 = state_30648__$1;
(statearr_30686_30741[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (35))){
var inst_30633 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30633)){
var statearr_30687_30742 = state_30648__$1;
(statearr_30687_30742[(1)] = (36));

} else {
var statearr_30688_30743 = state_30648__$1;
(statearr_30688_30743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (19))){
var inst_30576 = (state_30648[(7)]);
var inst_30595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30576);
var state_30648__$1 = state_30648;
var statearr_30689_30744 = state_30648__$1;
(statearr_30689_30744[(2)] = inst_30595);

(statearr_30689_30744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (11))){
var inst_30576 = (state_30648[(7)]);
var inst_30580 = (inst_30576 == null);
var inst_30581 = cljs.core.not.call(null,inst_30580);
var state_30648__$1 = state_30648;
if(inst_30581){
var statearr_30690_30745 = state_30648__$1;
(statearr_30690_30745[(1)] = (13));

} else {
var statearr_30691_30746 = state_30648__$1;
(statearr_30691_30746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (9))){
var inst_30552 = (state_30648[(8)]);
var state_30648__$1 = state_30648;
var statearr_30692_30747 = state_30648__$1;
(statearr_30692_30747[(2)] = inst_30552);

(statearr_30692_30747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (5))){
var state_30648__$1 = state_30648;
var statearr_30693_30748 = state_30648__$1;
(statearr_30693_30748[(2)] = true);

(statearr_30693_30748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (14))){
var state_30648__$1 = state_30648;
var statearr_30694_30749 = state_30648__$1;
(statearr_30694_30749[(2)] = false);

(statearr_30694_30749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (26))){
var inst_30608 = (state_30648[(11)]);
var inst_30615 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30608);
var state_30648__$1 = state_30648;
var statearr_30695_30750 = state_30648__$1;
(statearr_30695_30750[(2)] = inst_30615);

(statearr_30695_30750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (16))){
var state_30648__$1 = state_30648;
var statearr_30696_30751 = state_30648__$1;
(statearr_30696_30751[(2)] = true);

(statearr_30696_30751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (38))){
var inst_30638 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30697_30752 = state_30648__$1;
(statearr_30697_30752[(2)] = inst_30638);

(statearr_30697_30752[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (30))){
var inst_30599 = (state_30648[(9)]);
var inst_30608 = (state_30648[(11)]);
var inst_30600 = (state_30648[(13)]);
var inst_30625 = cljs.core.empty_QMARK_.call(null,inst_30599);
var inst_30626 = inst_30600.call(null,inst_30608);
var inst_30627 = cljs.core.not.call(null,inst_30626);
var inst_30628 = (inst_30625) && (inst_30627);
var state_30648__$1 = state_30648;
var statearr_30698_30753 = state_30648__$1;
(statearr_30698_30753[(2)] = inst_30628);

(statearr_30698_30753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (10))){
var inst_30552 = (state_30648[(8)]);
var inst_30572 = (state_30648[(2)]);
var inst_30573 = cljs.core.get.call(null,inst_30572,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30574 = cljs.core.get.call(null,inst_30572,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30575 = cljs.core.get.call(null,inst_30572,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30576 = inst_30552;
var state_30648__$1 = (function (){var statearr_30699 = state_30648;
(statearr_30699[(16)] = inst_30574);

(statearr_30699[(17)] = inst_30573);

(statearr_30699[(18)] = inst_30575);

(statearr_30699[(7)] = inst_30576);

return statearr_30699;
})();
var statearr_30700_30754 = state_30648__$1;
(statearr_30700_30754[(2)] = null);

(statearr_30700_30754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (18))){
var inst_30590 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30701_30755 = state_30648__$1;
(statearr_30701_30755[(2)] = inst_30590);

(statearr_30701_30755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (37))){
var state_30648__$1 = state_30648;
var statearr_30702_30756 = state_30648__$1;
(statearr_30702_30756[(2)] = null);

(statearr_30702_30756[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (8))){
var inst_30552 = (state_30648[(8)]);
var inst_30569 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30552);
var state_30648__$1 = state_30648;
var statearr_30703_30757 = state_30648__$1;
(statearr_30703_30757[(2)] = inst_30569);

(statearr_30703_30757[(1)] = (10));


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
});})(c__28978__auto___30711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28866__auto__,c__28978__auto___30711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28867__auto__ = null;
var cljs$core$async$mix_$_state_machine__28867__auto____0 = (function (){
var statearr_30707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30707[(0)] = cljs$core$async$mix_$_state_machine__28867__auto__);

(statearr_30707[(1)] = (1));

return statearr_30707;
});
var cljs$core$async$mix_$_state_machine__28867__auto____1 = (function (state_30648){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_30648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e30708){if((e30708 instanceof Object)){
var ex__28870__auto__ = e30708;
var statearr_30709_30758 = state_30648;
(statearr_30709_30758[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30759 = state_30648;
state_30648 = G__30759;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28867__auto__ = function(state_30648){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28867__auto____1.call(this,state_30648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28867__auto____0;
cljs$core$async$mix_$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28867__auto____1;
return cljs$core$async$mix_$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___30711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28980__auto__ = (function (){var statearr_30710 = f__28979__auto__.call(null);
(statearr_30710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___30711);

return statearr_30710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___30711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25731__auto__ = (((p == null))?null:p);
var m__25732__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25732__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25731__auto__ = (((p == null))?null:p);
var m__25732__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,p,v,ch);
} else {
var m__25732__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30760 = [];
var len__26143__auto___30763 = arguments.length;
var i__26144__auto___30764 = (0);
while(true){
if((i__26144__auto___30764 < len__26143__auto___30763)){
args30760.push((arguments[i__26144__auto___30764]));

var G__30765 = (i__26144__auto___30764 + (1));
i__26144__auto___30764 = G__30765;
continue;
} else {
}
break;
}

var G__30762 = args30760.length;
switch (G__30762) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30760.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25731__auto__ = (((p == null))?null:p);
var m__25732__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,p);
} else {
var m__25732__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25731__auto__ = (((p == null))?null:p);
var m__25732__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25731__auto__)]);
if(!((m__25732__auto__ == null))){
return m__25732__auto__.call(null,p,v);
} else {
var m__25732__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25732__auto____$1 == null))){
return m__25732__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30768 = [];
var len__26143__auto___30893 = arguments.length;
var i__26144__auto___30894 = (0);
while(true){
if((i__26144__auto___30894 < len__26143__auto___30893)){
args30768.push((arguments[i__26144__auto___30894]));

var G__30895 = (i__26144__auto___30894 + (1));
i__26144__auto___30894 = G__30895;
continue;
} else {
}
break;
}

var G__30770 = args30768.length;
switch (G__30770) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30768.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25068__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25068__auto__)){
return or__25068__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25068__auto__,mults){
return (function (p1__30767_SHARP_){
if(cljs.core.truth_(p1__30767_SHARP_.call(null,topic))){
return p1__30767_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25068__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30771 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30772){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30772 = meta30772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30773,meta30772__$1){
var self__ = this;
var _30773__$1 = this;
return (new cljs.core.async.t_cljs$core$async30771(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30772__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30773){
var self__ = this;
var _30773__$1 = this;
return self__.meta30772;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30772","meta30772",-1595913623,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30771";

cljs.core.async.t_cljs$core$async30771.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async30771");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30771 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30771(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30772){
return (new cljs.core.async.t_cljs$core$async30771(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30772));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30771(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28978__auto___30897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___30897,mults,ensure_mult,p){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___30897,mults,ensure_mult,p){
return (function (state_30845){
var state_val_30846 = (state_30845[(1)]);
if((state_val_30846 === (7))){
var inst_30841 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30847_30898 = state_30845__$1;
(statearr_30847_30898[(2)] = inst_30841);

(statearr_30847_30898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (20))){
var state_30845__$1 = state_30845;
var statearr_30848_30899 = state_30845__$1;
(statearr_30848_30899[(2)] = null);

(statearr_30848_30899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (1))){
var state_30845__$1 = state_30845;
var statearr_30849_30900 = state_30845__$1;
(statearr_30849_30900[(2)] = null);

(statearr_30849_30900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (24))){
var inst_30824 = (state_30845[(7)]);
var inst_30833 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30824);
var state_30845__$1 = state_30845;
var statearr_30850_30901 = state_30845__$1;
(statearr_30850_30901[(2)] = inst_30833);

(statearr_30850_30901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (4))){
var inst_30776 = (state_30845[(8)]);
var inst_30776__$1 = (state_30845[(2)]);
var inst_30777 = (inst_30776__$1 == null);
var state_30845__$1 = (function (){var statearr_30851 = state_30845;
(statearr_30851[(8)] = inst_30776__$1);

return statearr_30851;
})();
if(cljs.core.truth_(inst_30777)){
var statearr_30852_30902 = state_30845__$1;
(statearr_30852_30902[(1)] = (5));

} else {
var statearr_30853_30903 = state_30845__$1;
(statearr_30853_30903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (15))){
var inst_30818 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30854_30904 = state_30845__$1;
(statearr_30854_30904[(2)] = inst_30818);

(statearr_30854_30904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (21))){
var inst_30838 = (state_30845[(2)]);
var state_30845__$1 = (function (){var statearr_30855 = state_30845;
(statearr_30855[(9)] = inst_30838);

return statearr_30855;
})();
var statearr_30856_30905 = state_30845__$1;
(statearr_30856_30905[(2)] = null);

(statearr_30856_30905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (13))){
var inst_30800 = (state_30845[(10)]);
var inst_30802 = cljs.core.chunked_seq_QMARK_.call(null,inst_30800);
var state_30845__$1 = state_30845;
if(inst_30802){
var statearr_30857_30906 = state_30845__$1;
(statearr_30857_30906[(1)] = (16));

} else {
var statearr_30858_30907 = state_30845__$1;
(statearr_30858_30907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (22))){
var inst_30830 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
if(cljs.core.truth_(inst_30830)){
var statearr_30859_30908 = state_30845__$1;
(statearr_30859_30908[(1)] = (23));

} else {
var statearr_30860_30909 = state_30845__$1;
(statearr_30860_30909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (6))){
var inst_30826 = (state_30845[(11)]);
var inst_30824 = (state_30845[(7)]);
var inst_30776 = (state_30845[(8)]);
var inst_30824__$1 = topic_fn.call(null,inst_30776);
var inst_30825 = cljs.core.deref.call(null,mults);
var inst_30826__$1 = cljs.core.get.call(null,inst_30825,inst_30824__$1);
var state_30845__$1 = (function (){var statearr_30861 = state_30845;
(statearr_30861[(11)] = inst_30826__$1);

(statearr_30861[(7)] = inst_30824__$1);

return statearr_30861;
})();
if(cljs.core.truth_(inst_30826__$1)){
var statearr_30862_30910 = state_30845__$1;
(statearr_30862_30910[(1)] = (19));

} else {
var statearr_30863_30911 = state_30845__$1;
(statearr_30863_30911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (25))){
var inst_30835 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30864_30912 = state_30845__$1;
(statearr_30864_30912[(2)] = inst_30835);

(statearr_30864_30912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (17))){
var inst_30800 = (state_30845[(10)]);
var inst_30809 = cljs.core.first.call(null,inst_30800);
var inst_30810 = cljs.core.async.muxch_STAR_.call(null,inst_30809);
var inst_30811 = cljs.core.async.close_BANG_.call(null,inst_30810);
var inst_30812 = cljs.core.next.call(null,inst_30800);
var inst_30786 = inst_30812;
var inst_30787 = null;
var inst_30788 = (0);
var inst_30789 = (0);
var state_30845__$1 = (function (){var statearr_30865 = state_30845;
(statearr_30865[(12)] = inst_30787);

(statearr_30865[(13)] = inst_30786);

(statearr_30865[(14)] = inst_30789);

(statearr_30865[(15)] = inst_30788);

(statearr_30865[(16)] = inst_30811);

return statearr_30865;
})();
var statearr_30866_30913 = state_30845__$1;
(statearr_30866_30913[(2)] = null);

(statearr_30866_30913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (3))){
var inst_30843 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else {
if((state_val_30846 === (12))){
var inst_30820 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30867_30914 = state_30845__$1;
(statearr_30867_30914[(2)] = inst_30820);

(statearr_30867_30914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (2))){
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30845__$1,(4),ch);
} else {
if((state_val_30846 === (23))){
var state_30845__$1 = state_30845;
var statearr_30868_30915 = state_30845__$1;
(statearr_30868_30915[(2)] = null);

(statearr_30868_30915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (19))){
var inst_30826 = (state_30845[(11)]);
var inst_30776 = (state_30845[(8)]);
var inst_30828 = cljs.core.async.muxch_STAR_.call(null,inst_30826);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30845__$1,(22),inst_30828,inst_30776);
} else {
if((state_val_30846 === (11))){
var inst_30800 = (state_30845[(10)]);
var inst_30786 = (state_30845[(13)]);
var inst_30800__$1 = cljs.core.seq.call(null,inst_30786);
var state_30845__$1 = (function (){var statearr_30869 = state_30845;
(statearr_30869[(10)] = inst_30800__$1);

return statearr_30869;
})();
if(inst_30800__$1){
var statearr_30870_30916 = state_30845__$1;
(statearr_30870_30916[(1)] = (13));

} else {
var statearr_30871_30917 = state_30845__$1;
(statearr_30871_30917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (9))){
var inst_30822 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30872_30918 = state_30845__$1;
(statearr_30872_30918[(2)] = inst_30822);

(statearr_30872_30918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (5))){
var inst_30783 = cljs.core.deref.call(null,mults);
var inst_30784 = cljs.core.vals.call(null,inst_30783);
var inst_30785 = cljs.core.seq.call(null,inst_30784);
var inst_30786 = inst_30785;
var inst_30787 = null;
var inst_30788 = (0);
var inst_30789 = (0);
var state_30845__$1 = (function (){var statearr_30873 = state_30845;
(statearr_30873[(12)] = inst_30787);

(statearr_30873[(13)] = inst_30786);

(statearr_30873[(14)] = inst_30789);

(statearr_30873[(15)] = inst_30788);

return statearr_30873;
})();
var statearr_30874_30919 = state_30845__$1;
(statearr_30874_30919[(2)] = null);

(statearr_30874_30919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (14))){
var state_30845__$1 = state_30845;
var statearr_30878_30920 = state_30845__$1;
(statearr_30878_30920[(2)] = null);

(statearr_30878_30920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (16))){
var inst_30800 = (state_30845[(10)]);
var inst_30804 = cljs.core.chunk_first.call(null,inst_30800);
var inst_30805 = cljs.core.chunk_rest.call(null,inst_30800);
var inst_30806 = cljs.core.count.call(null,inst_30804);
var inst_30786 = inst_30805;
var inst_30787 = inst_30804;
var inst_30788 = inst_30806;
var inst_30789 = (0);
var state_30845__$1 = (function (){var statearr_30879 = state_30845;
(statearr_30879[(12)] = inst_30787);

(statearr_30879[(13)] = inst_30786);

(statearr_30879[(14)] = inst_30789);

(statearr_30879[(15)] = inst_30788);

return statearr_30879;
})();
var statearr_30880_30921 = state_30845__$1;
(statearr_30880_30921[(2)] = null);

(statearr_30880_30921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (10))){
var inst_30787 = (state_30845[(12)]);
var inst_30786 = (state_30845[(13)]);
var inst_30789 = (state_30845[(14)]);
var inst_30788 = (state_30845[(15)]);
var inst_30794 = cljs.core._nth.call(null,inst_30787,inst_30789);
var inst_30795 = cljs.core.async.muxch_STAR_.call(null,inst_30794);
var inst_30796 = cljs.core.async.close_BANG_.call(null,inst_30795);
var inst_30797 = (inst_30789 + (1));
var tmp30875 = inst_30787;
var tmp30876 = inst_30786;
var tmp30877 = inst_30788;
var inst_30786__$1 = tmp30876;
var inst_30787__$1 = tmp30875;
var inst_30788__$1 = tmp30877;
var inst_30789__$1 = inst_30797;
var state_30845__$1 = (function (){var statearr_30881 = state_30845;
(statearr_30881[(12)] = inst_30787__$1);

(statearr_30881[(13)] = inst_30786__$1);

(statearr_30881[(14)] = inst_30789__$1);

(statearr_30881[(15)] = inst_30788__$1);

(statearr_30881[(17)] = inst_30796);

return statearr_30881;
})();
var statearr_30882_30922 = state_30845__$1;
(statearr_30882_30922[(2)] = null);

(statearr_30882_30922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (18))){
var inst_30815 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30883_30923 = state_30845__$1;
(statearr_30883_30923[(2)] = inst_30815);

(statearr_30883_30923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (8))){
var inst_30789 = (state_30845[(14)]);
var inst_30788 = (state_30845[(15)]);
var inst_30791 = (inst_30789 < inst_30788);
var inst_30792 = inst_30791;
var state_30845__$1 = state_30845;
if(cljs.core.truth_(inst_30792)){
var statearr_30884_30924 = state_30845__$1;
(statearr_30884_30924[(1)] = (10));

} else {
var statearr_30885_30925 = state_30845__$1;
(statearr_30885_30925[(1)] = (11));

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
});})(c__28978__auto___30897,mults,ensure_mult,p))
;
return ((function (switch__28866__auto__,c__28978__auto___30897,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_30889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30889[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_30889[(1)] = (1));

return statearr_30889;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_30845){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_30845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e30890){if((e30890 instanceof Object)){
var ex__28870__auto__ = e30890;
var statearr_30891_30926 = state_30845;
(statearr_30891_30926[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30927 = state_30845;
state_30845 = G__30927;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___30897,mults,ensure_mult,p))
})();
var state__28980__auto__ = (function (){var statearr_30892 = f__28979__auto__.call(null);
(statearr_30892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___30897);

return statearr_30892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___30897,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30928 = [];
var len__26143__auto___30931 = arguments.length;
var i__26144__auto___30932 = (0);
while(true){
if((i__26144__auto___30932 < len__26143__auto___30931)){
args30928.push((arguments[i__26144__auto___30932]));

var G__30933 = (i__26144__auto___30932 + (1));
i__26144__auto___30932 = G__30933;
continue;
} else {
}
break;
}

var G__30930 = args30928.length;
switch (G__30930) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30928.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30935 = [];
var len__26143__auto___30938 = arguments.length;
var i__26144__auto___30939 = (0);
while(true){
if((i__26144__auto___30939 < len__26143__auto___30938)){
args30935.push((arguments[i__26144__auto___30939]));

var G__30940 = (i__26144__auto___30939 + (1));
i__26144__auto___30939 = G__30940;
continue;
} else {
}
break;
}

var G__30937 = args30935.length;
switch (G__30937) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30935.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30942 = [];
var len__26143__auto___31013 = arguments.length;
var i__26144__auto___31014 = (0);
while(true){
if((i__26144__auto___31014 < len__26143__auto___31013)){
args30942.push((arguments[i__26144__auto___31014]));

var G__31015 = (i__26144__auto___31014 + (1));
i__26144__auto___31014 = G__31015;
continue;
} else {
}
break;
}

var G__30944 = args30942.length;
switch (G__30944) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30942.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28978__auto___31017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30983){
var state_val_30984 = (state_30983[(1)]);
if((state_val_30984 === (7))){
var state_30983__$1 = state_30983;
var statearr_30985_31018 = state_30983__$1;
(statearr_30985_31018[(2)] = null);

(statearr_30985_31018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (1))){
var state_30983__$1 = state_30983;
var statearr_30986_31019 = state_30983__$1;
(statearr_30986_31019[(2)] = null);

(statearr_30986_31019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (4))){
var inst_30947 = (state_30983[(7)]);
var inst_30949 = (inst_30947 < cnt);
var state_30983__$1 = state_30983;
if(cljs.core.truth_(inst_30949)){
var statearr_30987_31020 = state_30983__$1;
(statearr_30987_31020[(1)] = (6));

} else {
var statearr_30988_31021 = state_30983__$1;
(statearr_30988_31021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (15))){
var inst_30979 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
var statearr_30989_31022 = state_30983__$1;
(statearr_30989_31022[(2)] = inst_30979);

(statearr_30989_31022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (13))){
var inst_30972 = cljs.core.async.close_BANG_.call(null,out);
var state_30983__$1 = state_30983;
var statearr_30990_31023 = state_30983__$1;
(statearr_30990_31023[(2)] = inst_30972);

(statearr_30990_31023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (6))){
var state_30983__$1 = state_30983;
var statearr_30991_31024 = state_30983__$1;
(statearr_30991_31024[(2)] = null);

(statearr_30991_31024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (3))){
var inst_30981 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30983__$1,inst_30981);
} else {
if((state_val_30984 === (12))){
var inst_30969 = (state_30983[(8)]);
var inst_30969__$1 = (state_30983[(2)]);
var inst_30970 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30969__$1);
var state_30983__$1 = (function (){var statearr_30992 = state_30983;
(statearr_30992[(8)] = inst_30969__$1);

return statearr_30992;
})();
if(cljs.core.truth_(inst_30970)){
var statearr_30993_31025 = state_30983__$1;
(statearr_30993_31025[(1)] = (13));

} else {
var statearr_30994_31026 = state_30983__$1;
(statearr_30994_31026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (2))){
var inst_30946 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30947 = (0);
var state_30983__$1 = (function (){var statearr_30995 = state_30983;
(statearr_30995[(7)] = inst_30947);

(statearr_30995[(9)] = inst_30946);

return statearr_30995;
})();
var statearr_30996_31027 = state_30983__$1;
(statearr_30996_31027[(2)] = null);

(statearr_30996_31027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (11))){
var inst_30947 = (state_30983[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30983,(10),Object,null,(9));
var inst_30956 = chs__$1.call(null,inst_30947);
var inst_30957 = done.call(null,inst_30947);
var inst_30958 = cljs.core.async.take_BANG_.call(null,inst_30956,inst_30957);
var state_30983__$1 = state_30983;
var statearr_30997_31028 = state_30983__$1;
(statearr_30997_31028[(2)] = inst_30958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (9))){
var inst_30947 = (state_30983[(7)]);
var inst_30960 = (state_30983[(2)]);
var inst_30961 = (inst_30947 + (1));
var inst_30947__$1 = inst_30961;
var state_30983__$1 = (function (){var statearr_30998 = state_30983;
(statearr_30998[(7)] = inst_30947__$1);

(statearr_30998[(10)] = inst_30960);

return statearr_30998;
})();
var statearr_30999_31029 = state_30983__$1;
(statearr_30999_31029[(2)] = null);

(statearr_30999_31029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (5))){
var inst_30967 = (state_30983[(2)]);
var state_30983__$1 = (function (){var statearr_31000 = state_30983;
(statearr_31000[(11)] = inst_30967);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30983__$1,(12),dchan);
} else {
if((state_val_30984 === (14))){
var inst_30969 = (state_30983[(8)]);
var inst_30974 = cljs.core.apply.call(null,f,inst_30969);
var state_30983__$1 = state_30983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30983__$1,(16),out,inst_30974);
} else {
if((state_val_30984 === (16))){
var inst_30976 = (state_30983[(2)]);
var state_30983__$1 = (function (){var statearr_31001 = state_30983;
(statearr_31001[(12)] = inst_30976);

return statearr_31001;
})();
var statearr_31002_31030 = state_30983__$1;
(statearr_31002_31030[(2)] = null);

(statearr_31002_31030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (10))){
var inst_30951 = (state_30983[(2)]);
var inst_30952 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30983__$1 = (function (){var statearr_31003 = state_30983;
(statearr_31003[(13)] = inst_30951);

return statearr_31003;
})();
var statearr_31004_31031 = state_30983__$1;
(statearr_31004_31031[(2)] = inst_30952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (8))){
var inst_30965 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
var statearr_31005_31032 = state_30983__$1;
(statearr_31005_31032[(2)] = inst_30965);

(statearr_31005_31032[(1)] = (5));


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
});})(c__28978__auto___31017,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28866__auto__,c__28978__auto___31017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31009[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31009[(1)] = (1));

return statearr_31009;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_30983){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_30983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31010){if((e31010 instanceof Object)){
var ex__28870__auto__ = e31010;
var statearr_31011_31033 = state_30983;
(statearr_31011_31033[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_30983;
state_30983 = G__31034;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_30983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_30983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31017,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28980__auto__ = (function (){var statearr_31012 = f__28979__auto__.call(null);
(statearr_31012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31017);

return statearr_31012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31017,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31036 = [];
var len__26143__auto___31094 = arguments.length;
var i__26144__auto___31095 = (0);
while(true){
if((i__26144__auto___31095 < len__26143__auto___31094)){
args31036.push((arguments[i__26144__auto___31095]));

var G__31096 = (i__26144__auto___31095 + (1));
i__26144__auto___31095 = G__31096;
continue;
} else {
}
break;
}

var G__31038 = args31036.length;
switch (G__31038) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31036.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28978__auto___31098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31098,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31098,out){
return (function (state_31070){
var state_val_31071 = (state_31070[(1)]);
if((state_val_31071 === (7))){
var inst_31050 = (state_31070[(7)]);
var inst_31049 = (state_31070[(8)]);
var inst_31049__$1 = (state_31070[(2)]);
var inst_31050__$1 = cljs.core.nth.call(null,inst_31049__$1,(0),null);
var inst_31051 = cljs.core.nth.call(null,inst_31049__$1,(1),null);
var inst_31052 = (inst_31050__$1 == null);
var state_31070__$1 = (function (){var statearr_31072 = state_31070;
(statearr_31072[(9)] = inst_31051);

(statearr_31072[(7)] = inst_31050__$1);

(statearr_31072[(8)] = inst_31049__$1);

return statearr_31072;
})();
if(cljs.core.truth_(inst_31052)){
var statearr_31073_31099 = state_31070__$1;
(statearr_31073_31099[(1)] = (8));

} else {
var statearr_31074_31100 = state_31070__$1;
(statearr_31074_31100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (1))){
var inst_31039 = cljs.core.vec.call(null,chs);
var inst_31040 = inst_31039;
var state_31070__$1 = (function (){var statearr_31075 = state_31070;
(statearr_31075[(10)] = inst_31040);

return statearr_31075;
})();
var statearr_31076_31101 = state_31070__$1;
(statearr_31076_31101[(2)] = null);

(statearr_31076_31101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (4))){
var inst_31040 = (state_31070[(10)]);
var state_31070__$1 = state_31070;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31070__$1,(7),inst_31040);
} else {
if((state_val_31071 === (6))){
var inst_31066 = (state_31070[(2)]);
var state_31070__$1 = state_31070;
var statearr_31077_31102 = state_31070__$1;
(statearr_31077_31102[(2)] = inst_31066);

(statearr_31077_31102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (3))){
var inst_31068 = (state_31070[(2)]);
var state_31070__$1 = state_31070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31070__$1,inst_31068);
} else {
if((state_val_31071 === (2))){
var inst_31040 = (state_31070[(10)]);
var inst_31042 = cljs.core.count.call(null,inst_31040);
var inst_31043 = (inst_31042 > (0));
var state_31070__$1 = state_31070;
if(cljs.core.truth_(inst_31043)){
var statearr_31079_31103 = state_31070__$1;
(statearr_31079_31103[(1)] = (4));

} else {
var statearr_31080_31104 = state_31070__$1;
(statearr_31080_31104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (11))){
var inst_31040 = (state_31070[(10)]);
var inst_31059 = (state_31070[(2)]);
var tmp31078 = inst_31040;
var inst_31040__$1 = tmp31078;
var state_31070__$1 = (function (){var statearr_31081 = state_31070;
(statearr_31081[(11)] = inst_31059);

(statearr_31081[(10)] = inst_31040__$1);

return statearr_31081;
})();
var statearr_31082_31105 = state_31070__$1;
(statearr_31082_31105[(2)] = null);

(statearr_31082_31105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (9))){
var inst_31050 = (state_31070[(7)]);
var state_31070__$1 = state_31070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31070__$1,(11),out,inst_31050);
} else {
if((state_val_31071 === (5))){
var inst_31064 = cljs.core.async.close_BANG_.call(null,out);
var state_31070__$1 = state_31070;
var statearr_31083_31106 = state_31070__$1;
(statearr_31083_31106[(2)] = inst_31064);

(statearr_31083_31106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (10))){
var inst_31062 = (state_31070[(2)]);
var state_31070__$1 = state_31070;
var statearr_31084_31107 = state_31070__$1;
(statearr_31084_31107[(2)] = inst_31062);

(statearr_31084_31107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31071 === (8))){
var inst_31051 = (state_31070[(9)]);
var inst_31050 = (state_31070[(7)]);
var inst_31040 = (state_31070[(10)]);
var inst_31049 = (state_31070[(8)]);
var inst_31054 = (function (){var cs = inst_31040;
var vec__31045 = inst_31049;
var v = inst_31050;
var c = inst_31051;
return ((function (cs,vec__31045,v,c,inst_31051,inst_31050,inst_31040,inst_31049,state_val_31071,c__28978__auto___31098,out){
return (function (p1__31035_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31035_SHARP_);
});
;})(cs,vec__31045,v,c,inst_31051,inst_31050,inst_31040,inst_31049,state_val_31071,c__28978__auto___31098,out))
})();
var inst_31055 = cljs.core.filterv.call(null,inst_31054,inst_31040);
var inst_31040__$1 = inst_31055;
var state_31070__$1 = (function (){var statearr_31085 = state_31070;
(statearr_31085[(10)] = inst_31040__$1);

return statearr_31085;
})();
var statearr_31086_31108 = state_31070__$1;
(statearr_31086_31108[(2)] = null);

(statearr_31086_31108[(1)] = (2));


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
});})(c__28978__auto___31098,out))
;
return ((function (switch__28866__auto__,c__28978__auto___31098,out){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31090 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31090[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31090[(1)] = (1));

return statearr_31090;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_31070){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31091){if((e31091 instanceof Object)){
var ex__28870__auto__ = e31091;
var statearr_31092_31109 = state_31070;
(statearr_31092_31109[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31110 = state_31070;
state_31070 = G__31110;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_31070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_31070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31098,out))
})();
var state__28980__auto__ = (function (){var statearr_31093 = f__28979__auto__.call(null);
(statearr_31093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31098);

return statearr_31093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31098,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31111 = [];
var len__26143__auto___31160 = arguments.length;
var i__26144__auto___31161 = (0);
while(true){
if((i__26144__auto___31161 < len__26143__auto___31160)){
args31111.push((arguments[i__26144__auto___31161]));

var G__31162 = (i__26144__auto___31161 + (1));
i__26144__auto___31161 = G__31162;
continue;
} else {
}
break;
}

var G__31113 = args31111.length;
switch (G__31113) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31111.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28978__auto___31164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31164,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31164,out){
return (function (state_31137){
var state_val_31138 = (state_31137[(1)]);
if((state_val_31138 === (7))){
var inst_31119 = (state_31137[(7)]);
var inst_31119__$1 = (state_31137[(2)]);
var inst_31120 = (inst_31119__$1 == null);
var inst_31121 = cljs.core.not.call(null,inst_31120);
var state_31137__$1 = (function (){var statearr_31139 = state_31137;
(statearr_31139[(7)] = inst_31119__$1);

return statearr_31139;
})();
if(inst_31121){
var statearr_31140_31165 = state_31137__$1;
(statearr_31140_31165[(1)] = (8));

} else {
var statearr_31141_31166 = state_31137__$1;
(statearr_31141_31166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (1))){
var inst_31114 = (0);
var state_31137__$1 = (function (){var statearr_31142 = state_31137;
(statearr_31142[(8)] = inst_31114);

return statearr_31142;
})();
var statearr_31143_31167 = state_31137__$1;
(statearr_31143_31167[(2)] = null);

(statearr_31143_31167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (4))){
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31137__$1,(7),ch);
} else {
if((state_val_31138 === (6))){
var inst_31132 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31144_31168 = state_31137__$1;
(statearr_31144_31168[(2)] = inst_31132);

(statearr_31144_31168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (3))){
var inst_31134 = (state_31137[(2)]);
var inst_31135 = cljs.core.async.close_BANG_.call(null,out);
var state_31137__$1 = (function (){var statearr_31145 = state_31137;
(statearr_31145[(9)] = inst_31134);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31137__$1,inst_31135);
} else {
if((state_val_31138 === (2))){
var inst_31114 = (state_31137[(8)]);
var inst_31116 = (inst_31114 < n);
var state_31137__$1 = state_31137;
if(cljs.core.truth_(inst_31116)){
var statearr_31146_31169 = state_31137__$1;
(statearr_31146_31169[(1)] = (4));

} else {
var statearr_31147_31170 = state_31137__$1;
(statearr_31147_31170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (11))){
var inst_31114 = (state_31137[(8)]);
var inst_31124 = (state_31137[(2)]);
var inst_31125 = (inst_31114 + (1));
var inst_31114__$1 = inst_31125;
var state_31137__$1 = (function (){var statearr_31148 = state_31137;
(statearr_31148[(10)] = inst_31124);

(statearr_31148[(8)] = inst_31114__$1);

return statearr_31148;
})();
var statearr_31149_31171 = state_31137__$1;
(statearr_31149_31171[(2)] = null);

(statearr_31149_31171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (9))){
var state_31137__$1 = state_31137;
var statearr_31150_31172 = state_31137__$1;
(statearr_31150_31172[(2)] = null);

(statearr_31150_31172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (5))){
var state_31137__$1 = state_31137;
var statearr_31151_31173 = state_31137__$1;
(statearr_31151_31173[(2)] = null);

(statearr_31151_31173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (10))){
var inst_31129 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31152_31174 = state_31137__$1;
(statearr_31152_31174[(2)] = inst_31129);

(statearr_31152_31174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31138 === (8))){
var inst_31119 = (state_31137[(7)]);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31137__$1,(11),out,inst_31119);
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
});})(c__28978__auto___31164,out))
;
return ((function (switch__28866__auto__,c__28978__auto___31164,out){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31156[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31156[(1)] = (1));

return statearr_31156;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_31137){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31157){if((e31157 instanceof Object)){
var ex__28870__auto__ = e31157;
var statearr_31158_31175 = state_31137;
(statearr_31158_31175[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31176 = state_31137;
state_31137 = G__31176;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_31137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_31137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31164,out))
})();
var state__28980__auto__ = (function (){var statearr_31159 = f__28979__auto__.call(null);
(statearr_31159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31164);

return statearr_31159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31164,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31184 = (function (map_LT_,f,ch,meta31185){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31185 = meta31185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31186,meta31185__$1){
var self__ = this;
var _31186__$1 = this;
return (new cljs.core.async.t_cljs$core$async31184(self__.map_LT_,self__.f,self__.ch,meta31185__$1));
});

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31186){
var self__ = this;
var _31186__$1 = this;
return self__.meta31185;
});

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31187 = (function (map_LT_,f,ch,meta31185,_,fn1,meta31188){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31185 = meta31185;
this._ = _;
this.fn1 = fn1;
this.meta31188 = meta31188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31189,meta31188__$1){
var self__ = this;
var _31189__$1 = this;
return (new cljs.core.async.t_cljs$core$async31187(self__.map_LT_,self__.f,self__.ch,self__.meta31185,self__._,self__.fn1,meta31188__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31189){
var self__ = this;
var _31189__$1 = this;
return self__.meta31188;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31177_SHARP_){
return f1.call(null,(((p1__31177_SHARP_ == null))?null:self__.f.call(null,p1__31177_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31187.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31185","meta31185",-1115900231,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31184","cljs.core.async/t_cljs$core$async31184",235200508,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31188","meta31188",982109624,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31187";

cljs.core.async.t_cljs$core$async31187.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async31187");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31187 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31187(map_LT___$1,f__$1,ch__$1,meta31185__$1,___$2,fn1__$1,meta31188){
return (new cljs.core.async.t_cljs$core$async31187(map_LT___$1,f__$1,ch__$1,meta31185__$1,___$2,fn1__$1,meta31188));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31187(self__.map_LT_,self__.f,self__.ch,self__.meta31185,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25056__auto__ = ret;
if(cljs.core.truth_(and__25056__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25056__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31185","meta31185",-1115900231,null)], null);
});

cljs.core.async.t_cljs$core$async31184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31184";

cljs.core.async.t_cljs$core$async31184.cljs$lang$ctorPrWriter = (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async31184");
});

cljs.core.async.__GT_t_cljs$core$async31184 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31184(map_LT___$1,f__$1,ch__$1,meta31185){
return (new cljs.core.async.t_cljs$core$async31184(map_LT___$1,f__$1,ch__$1,meta31185));
});

}

return (new cljs.core.async.t_cljs$core$async31184(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31193 = (function (map_GT_,f,ch,meta31194){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31194 = meta31194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31195,meta31194__$1){
var self__ = this;
var _31195__$1 = this;
return (new cljs.core.async.t_cljs$core$async31193(self__.map_GT_,self__.f,self__.ch,meta31194__$1));
});

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31195){
var self__ = this;
var _31195__$1 = this;
return self__.meta31194;
});

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31194","meta31194",-363302556,null)], null);
});

cljs.core.async.t_cljs$core$async31193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31193";

cljs.core.async.t_cljs$core$async31193.cljs$lang$ctorPrWriter = (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async31193");
});

cljs.core.async.__GT_t_cljs$core$async31193 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31193(map_GT___$1,f__$1,ch__$1,meta31194){
return (new cljs.core.async.t_cljs$core$async31193(map_GT___$1,f__$1,ch__$1,meta31194));
});

}

return (new cljs.core.async.t_cljs$core$async31193(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31199 = (function (filter_GT_,p,ch,meta31200){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31200 = meta31200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31201,meta31200__$1){
var self__ = this;
var _31201__$1 = this;
return (new cljs.core.async.t_cljs$core$async31199(self__.filter_GT_,self__.p,self__.ch,meta31200__$1));
});

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31201){
var self__ = this;
var _31201__$1 = this;
return self__.meta31200;
});

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31200","meta31200",1602442726,null)], null);
});

cljs.core.async.t_cljs$core$async31199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31199";

cljs.core.async.t_cljs$core$async31199.cljs$lang$ctorPrWriter = (function (this__25674__auto__,writer__25675__auto__,opt__25676__auto__){
return cljs.core._write.call(null,writer__25675__auto__,"cljs.core.async/t_cljs$core$async31199");
});

cljs.core.async.__GT_t_cljs$core$async31199 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31199(filter_GT___$1,p__$1,ch__$1,meta31200){
return (new cljs.core.async.t_cljs$core$async31199(filter_GT___$1,p__$1,ch__$1,meta31200));
});

}

return (new cljs.core.async.t_cljs$core$async31199(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31202 = [];
var len__26143__auto___31246 = arguments.length;
var i__26144__auto___31247 = (0);
while(true){
if((i__26144__auto___31247 < len__26143__auto___31246)){
args31202.push((arguments[i__26144__auto___31247]));

var G__31248 = (i__26144__auto___31247 + (1));
i__26144__auto___31247 = G__31248;
continue;
} else {
}
break;
}

var G__31204 = args31202.length;
switch (G__31204) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31202.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28978__auto___31250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31250,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31250,out){
return (function (state_31225){
var state_val_31226 = (state_31225[(1)]);
if((state_val_31226 === (7))){
var inst_31221 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31227_31251 = state_31225__$1;
(statearr_31227_31251[(2)] = inst_31221);

(statearr_31227_31251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (1))){
var state_31225__$1 = state_31225;
var statearr_31228_31252 = state_31225__$1;
(statearr_31228_31252[(2)] = null);

(statearr_31228_31252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (4))){
var inst_31207 = (state_31225[(7)]);
var inst_31207__$1 = (state_31225[(2)]);
var inst_31208 = (inst_31207__$1 == null);
var state_31225__$1 = (function (){var statearr_31229 = state_31225;
(statearr_31229[(7)] = inst_31207__$1);

return statearr_31229;
})();
if(cljs.core.truth_(inst_31208)){
var statearr_31230_31253 = state_31225__$1;
(statearr_31230_31253[(1)] = (5));

} else {
var statearr_31231_31254 = state_31225__$1;
(statearr_31231_31254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (6))){
var inst_31207 = (state_31225[(7)]);
var inst_31212 = p.call(null,inst_31207);
var state_31225__$1 = state_31225;
if(cljs.core.truth_(inst_31212)){
var statearr_31232_31255 = state_31225__$1;
(statearr_31232_31255[(1)] = (8));

} else {
var statearr_31233_31256 = state_31225__$1;
(statearr_31233_31256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (3))){
var inst_31223 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31225__$1,inst_31223);
} else {
if((state_val_31226 === (2))){
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31225__$1,(4),ch);
} else {
if((state_val_31226 === (11))){
var inst_31215 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31234_31257 = state_31225__$1;
(statearr_31234_31257[(2)] = inst_31215);

(statearr_31234_31257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (9))){
var state_31225__$1 = state_31225;
var statearr_31235_31258 = state_31225__$1;
(statearr_31235_31258[(2)] = null);

(statearr_31235_31258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (5))){
var inst_31210 = cljs.core.async.close_BANG_.call(null,out);
var state_31225__$1 = state_31225;
var statearr_31236_31259 = state_31225__$1;
(statearr_31236_31259[(2)] = inst_31210);

(statearr_31236_31259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (10))){
var inst_31218 = (state_31225[(2)]);
var state_31225__$1 = (function (){var statearr_31237 = state_31225;
(statearr_31237[(8)] = inst_31218);

return statearr_31237;
})();
var statearr_31238_31260 = state_31225__$1;
(statearr_31238_31260[(2)] = null);

(statearr_31238_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (8))){
var inst_31207 = (state_31225[(7)]);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31225__$1,(11),out,inst_31207);
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
});})(c__28978__auto___31250,out))
;
return ((function (switch__28866__auto__,c__28978__auto___31250,out){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31242 = [null,null,null,null,null,null,null,null,null];
(statearr_31242[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31242[(1)] = (1));

return statearr_31242;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_31225){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31243){if((e31243 instanceof Object)){
var ex__28870__auto__ = e31243;
var statearr_31244_31261 = state_31225;
(statearr_31244_31261[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31262 = state_31225;
state_31225 = G__31262;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_31225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_31225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31250,out))
})();
var state__28980__auto__ = (function (){var statearr_31245 = f__28979__auto__.call(null);
(statearr_31245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31250);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31250,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31263 = [];
var len__26143__auto___31266 = arguments.length;
var i__26144__auto___31267 = (0);
while(true){
if((i__26144__auto___31267 < len__26143__auto___31266)){
args31263.push((arguments[i__26144__auto___31267]));

var G__31268 = (i__26144__auto___31267 + (1));
i__26144__auto___31267 = G__31268;
continue;
} else {
}
break;
}

var G__31265 = args31263.length;
switch (G__31265) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31263.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto__){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto__){
return (function (state_31435){
var state_val_31436 = (state_31435[(1)]);
if((state_val_31436 === (7))){
var inst_31431 = (state_31435[(2)]);
var state_31435__$1 = state_31435;
var statearr_31437_31478 = state_31435__$1;
(statearr_31437_31478[(2)] = inst_31431);

(statearr_31437_31478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (20))){
var inst_31401 = (state_31435[(7)]);
var inst_31412 = (state_31435[(2)]);
var inst_31413 = cljs.core.next.call(null,inst_31401);
var inst_31387 = inst_31413;
var inst_31388 = null;
var inst_31389 = (0);
var inst_31390 = (0);
var state_31435__$1 = (function (){var statearr_31438 = state_31435;
(statearr_31438[(8)] = inst_31387);

(statearr_31438[(9)] = inst_31390);

(statearr_31438[(10)] = inst_31388);

(statearr_31438[(11)] = inst_31389);

(statearr_31438[(12)] = inst_31412);

return statearr_31438;
})();
var statearr_31439_31479 = state_31435__$1;
(statearr_31439_31479[(2)] = null);

(statearr_31439_31479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (1))){
var state_31435__$1 = state_31435;
var statearr_31440_31480 = state_31435__$1;
(statearr_31440_31480[(2)] = null);

(statearr_31440_31480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (4))){
var inst_31376 = (state_31435[(13)]);
var inst_31376__$1 = (state_31435[(2)]);
var inst_31377 = (inst_31376__$1 == null);
var state_31435__$1 = (function (){var statearr_31441 = state_31435;
(statearr_31441[(13)] = inst_31376__$1);

return statearr_31441;
})();
if(cljs.core.truth_(inst_31377)){
var statearr_31442_31481 = state_31435__$1;
(statearr_31442_31481[(1)] = (5));

} else {
var statearr_31443_31482 = state_31435__$1;
(statearr_31443_31482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (15))){
var state_31435__$1 = state_31435;
var statearr_31447_31483 = state_31435__$1;
(statearr_31447_31483[(2)] = null);

(statearr_31447_31483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (21))){
var state_31435__$1 = state_31435;
var statearr_31448_31484 = state_31435__$1;
(statearr_31448_31484[(2)] = null);

(statearr_31448_31484[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (13))){
var inst_31387 = (state_31435[(8)]);
var inst_31390 = (state_31435[(9)]);
var inst_31388 = (state_31435[(10)]);
var inst_31389 = (state_31435[(11)]);
var inst_31397 = (state_31435[(2)]);
var inst_31398 = (inst_31390 + (1));
var tmp31444 = inst_31387;
var tmp31445 = inst_31388;
var tmp31446 = inst_31389;
var inst_31387__$1 = tmp31444;
var inst_31388__$1 = tmp31445;
var inst_31389__$1 = tmp31446;
var inst_31390__$1 = inst_31398;
var state_31435__$1 = (function (){var statearr_31449 = state_31435;
(statearr_31449[(8)] = inst_31387__$1);

(statearr_31449[(9)] = inst_31390__$1);

(statearr_31449[(14)] = inst_31397);

(statearr_31449[(10)] = inst_31388__$1);

(statearr_31449[(11)] = inst_31389__$1);

return statearr_31449;
})();
var statearr_31450_31485 = state_31435__$1;
(statearr_31450_31485[(2)] = null);

(statearr_31450_31485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (22))){
var state_31435__$1 = state_31435;
var statearr_31451_31486 = state_31435__$1;
(statearr_31451_31486[(2)] = null);

(statearr_31451_31486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (6))){
var inst_31376 = (state_31435[(13)]);
var inst_31385 = f.call(null,inst_31376);
var inst_31386 = cljs.core.seq.call(null,inst_31385);
var inst_31387 = inst_31386;
var inst_31388 = null;
var inst_31389 = (0);
var inst_31390 = (0);
var state_31435__$1 = (function (){var statearr_31452 = state_31435;
(statearr_31452[(8)] = inst_31387);

(statearr_31452[(9)] = inst_31390);

(statearr_31452[(10)] = inst_31388);

(statearr_31452[(11)] = inst_31389);

return statearr_31452;
})();
var statearr_31453_31487 = state_31435__$1;
(statearr_31453_31487[(2)] = null);

(statearr_31453_31487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (17))){
var inst_31401 = (state_31435[(7)]);
var inst_31405 = cljs.core.chunk_first.call(null,inst_31401);
var inst_31406 = cljs.core.chunk_rest.call(null,inst_31401);
var inst_31407 = cljs.core.count.call(null,inst_31405);
var inst_31387 = inst_31406;
var inst_31388 = inst_31405;
var inst_31389 = inst_31407;
var inst_31390 = (0);
var state_31435__$1 = (function (){var statearr_31454 = state_31435;
(statearr_31454[(8)] = inst_31387);

(statearr_31454[(9)] = inst_31390);

(statearr_31454[(10)] = inst_31388);

(statearr_31454[(11)] = inst_31389);

return statearr_31454;
})();
var statearr_31455_31488 = state_31435__$1;
(statearr_31455_31488[(2)] = null);

(statearr_31455_31488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (3))){
var inst_31433 = (state_31435[(2)]);
var state_31435__$1 = state_31435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31435__$1,inst_31433);
} else {
if((state_val_31436 === (12))){
var inst_31421 = (state_31435[(2)]);
var state_31435__$1 = state_31435;
var statearr_31456_31489 = state_31435__$1;
(statearr_31456_31489[(2)] = inst_31421);

(statearr_31456_31489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (2))){
var state_31435__$1 = state_31435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31435__$1,(4),in$);
} else {
if((state_val_31436 === (23))){
var inst_31429 = (state_31435[(2)]);
var state_31435__$1 = state_31435;
var statearr_31457_31490 = state_31435__$1;
(statearr_31457_31490[(2)] = inst_31429);

(statearr_31457_31490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (19))){
var inst_31416 = (state_31435[(2)]);
var state_31435__$1 = state_31435;
var statearr_31458_31491 = state_31435__$1;
(statearr_31458_31491[(2)] = inst_31416);

(statearr_31458_31491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (11))){
var inst_31387 = (state_31435[(8)]);
var inst_31401 = (state_31435[(7)]);
var inst_31401__$1 = cljs.core.seq.call(null,inst_31387);
var state_31435__$1 = (function (){var statearr_31459 = state_31435;
(statearr_31459[(7)] = inst_31401__$1);

return statearr_31459;
})();
if(inst_31401__$1){
var statearr_31460_31492 = state_31435__$1;
(statearr_31460_31492[(1)] = (14));

} else {
var statearr_31461_31493 = state_31435__$1;
(statearr_31461_31493[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (9))){
var inst_31423 = (state_31435[(2)]);
var inst_31424 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31435__$1 = (function (){var statearr_31462 = state_31435;
(statearr_31462[(15)] = inst_31423);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31463_31494 = state_31435__$1;
(statearr_31463_31494[(1)] = (21));

} else {
var statearr_31464_31495 = state_31435__$1;
(statearr_31464_31495[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (5))){
var inst_31379 = cljs.core.async.close_BANG_.call(null,out);
var state_31435__$1 = state_31435;
var statearr_31465_31496 = state_31435__$1;
(statearr_31465_31496[(2)] = inst_31379);

(statearr_31465_31496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (14))){
var inst_31401 = (state_31435[(7)]);
var inst_31403 = cljs.core.chunked_seq_QMARK_.call(null,inst_31401);
var state_31435__$1 = state_31435;
if(inst_31403){
var statearr_31466_31497 = state_31435__$1;
(statearr_31466_31497[(1)] = (17));

} else {
var statearr_31467_31498 = state_31435__$1;
(statearr_31467_31498[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (16))){
var inst_31419 = (state_31435[(2)]);
var state_31435__$1 = state_31435;
var statearr_31468_31499 = state_31435__$1;
(statearr_31468_31499[(2)] = inst_31419);

(statearr_31468_31499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31436 === (10))){
var inst_31390 = (state_31435[(9)]);
var inst_31388 = (state_31435[(10)]);
var inst_31395 = cljs.core._nth.call(null,inst_31388,inst_31390);
var state_31435__$1 = state_31435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31435__$1,(13),out,inst_31395);
} else {
if((state_val_31436 === (18))){
var inst_31401 = (state_31435[(7)]);
var inst_31410 = cljs.core.first.call(null,inst_31401);
var state_31435__$1 = state_31435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31435__$1,(20),out,inst_31410);
} else {
if((state_val_31436 === (8))){
var inst_31390 = (state_31435[(9)]);
var inst_31389 = (state_31435[(11)]);
var inst_31392 = (inst_31390 < inst_31389);
var inst_31393 = inst_31392;
var state_31435__$1 = state_31435;
if(cljs.core.truth_(inst_31393)){
var statearr_31469_31500 = state_31435__$1;
(statearr_31469_31500[(1)] = (10));

} else {
var statearr_31470_31501 = state_31435__$1;
(statearr_31470_31501[(1)] = (11));

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
});})(c__28978__auto__))
;
return ((function (switch__28866__auto__,c__28978__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28867__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28867__auto____0 = (function (){
var statearr_31474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31474[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28867__auto__);

(statearr_31474[(1)] = (1));

return statearr_31474;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28867__auto____1 = (function (state_31435){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31475){if((e31475 instanceof Object)){
var ex__28870__auto__ = e31475;
var statearr_31476_31502 = state_31435;
(statearr_31476_31502[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31503 = state_31435;
state_31435 = G__31503;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28867__auto__ = function(state_31435){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28867__auto____1.call(this,state_31435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28867__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28867__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto__))
})();
var state__28980__auto__ = (function (){var statearr_31477 = f__28979__auto__.call(null);
(statearr_31477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto__);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto__))
);

return c__28978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31504 = [];
var len__26143__auto___31507 = arguments.length;
var i__26144__auto___31508 = (0);
while(true){
if((i__26144__auto___31508 < len__26143__auto___31507)){
args31504.push((arguments[i__26144__auto___31508]));

var G__31509 = (i__26144__auto___31508 + (1));
i__26144__auto___31508 = G__31509;
continue;
} else {
}
break;
}

var G__31506 = args31504.length;
switch (G__31506) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31504.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31511 = [];
var len__26143__auto___31514 = arguments.length;
var i__26144__auto___31515 = (0);
while(true){
if((i__26144__auto___31515 < len__26143__auto___31514)){
args31511.push((arguments[i__26144__auto___31515]));

var G__31516 = (i__26144__auto___31515 + (1));
i__26144__auto___31515 = G__31516;
continue;
} else {
}
break;
}

var G__31513 = args31511.length;
switch (G__31513) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31511.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31518 = [];
var len__26143__auto___31569 = arguments.length;
var i__26144__auto___31570 = (0);
while(true){
if((i__26144__auto___31570 < len__26143__auto___31569)){
args31518.push((arguments[i__26144__auto___31570]));

var G__31571 = (i__26144__auto___31570 + (1));
i__26144__auto___31570 = G__31571;
continue;
} else {
}
break;
}

var G__31520 = args31518.length;
switch (G__31520) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31518.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28978__auto___31573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31573,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31573,out){
return (function (state_31544){
var state_val_31545 = (state_31544[(1)]);
if((state_val_31545 === (7))){
var inst_31539 = (state_31544[(2)]);
var state_31544__$1 = state_31544;
var statearr_31546_31574 = state_31544__$1;
(statearr_31546_31574[(2)] = inst_31539);

(statearr_31546_31574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (1))){
var inst_31521 = null;
var state_31544__$1 = (function (){var statearr_31547 = state_31544;
(statearr_31547[(7)] = inst_31521);

return statearr_31547;
})();
var statearr_31548_31575 = state_31544__$1;
(statearr_31548_31575[(2)] = null);

(statearr_31548_31575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (4))){
var inst_31524 = (state_31544[(8)]);
var inst_31524__$1 = (state_31544[(2)]);
var inst_31525 = (inst_31524__$1 == null);
var inst_31526 = cljs.core.not.call(null,inst_31525);
var state_31544__$1 = (function (){var statearr_31549 = state_31544;
(statearr_31549[(8)] = inst_31524__$1);

return statearr_31549;
})();
if(inst_31526){
var statearr_31550_31576 = state_31544__$1;
(statearr_31550_31576[(1)] = (5));

} else {
var statearr_31551_31577 = state_31544__$1;
(statearr_31551_31577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (6))){
var state_31544__$1 = state_31544;
var statearr_31552_31578 = state_31544__$1;
(statearr_31552_31578[(2)] = null);

(statearr_31552_31578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (3))){
var inst_31541 = (state_31544[(2)]);
var inst_31542 = cljs.core.async.close_BANG_.call(null,out);
var state_31544__$1 = (function (){var statearr_31553 = state_31544;
(statearr_31553[(9)] = inst_31541);

return statearr_31553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31544__$1,inst_31542);
} else {
if((state_val_31545 === (2))){
var state_31544__$1 = state_31544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31544__$1,(4),ch);
} else {
if((state_val_31545 === (11))){
var inst_31524 = (state_31544[(8)]);
var inst_31533 = (state_31544[(2)]);
var inst_31521 = inst_31524;
var state_31544__$1 = (function (){var statearr_31554 = state_31544;
(statearr_31554[(10)] = inst_31533);

(statearr_31554[(7)] = inst_31521);

return statearr_31554;
})();
var statearr_31555_31579 = state_31544__$1;
(statearr_31555_31579[(2)] = null);

(statearr_31555_31579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (9))){
var inst_31524 = (state_31544[(8)]);
var state_31544__$1 = state_31544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31544__$1,(11),out,inst_31524);
} else {
if((state_val_31545 === (5))){
var inst_31524 = (state_31544[(8)]);
var inst_31521 = (state_31544[(7)]);
var inst_31528 = cljs.core._EQ_.call(null,inst_31524,inst_31521);
var state_31544__$1 = state_31544;
if(inst_31528){
var statearr_31557_31580 = state_31544__$1;
(statearr_31557_31580[(1)] = (8));

} else {
var statearr_31558_31581 = state_31544__$1;
(statearr_31558_31581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (10))){
var inst_31536 = (state_31544[(2)]);
var state_31544__$1 = state_31544;
var statearr_31559_31582 = state_31544__$1;
(statearr_31559_31582[(2)] = inst_31536);

(statearr_31559_31582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31545 === (8))){
var inst_31521 = (state_31544[(7)]);
var tmp31556 = inst_31521;
var inst_31521__$1 = tmp31556;
var state_31544__$1 = (function (){var statearr_31560 = state_31544;
(statearr_31560[(7)] = inst_31521__$1);

return statearr_31560;
})();
var statearr_31561_31583 = state_31544__$1;
(statearr_31561_31583[(2)] = null);

(statearr_31561_31583[(1)] = (2));


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
});})(c__28978__auto___31573,out))
;
return ((function (switch__28866__auto__,c__28978__auto___31573,out){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31565[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31565[(1)] = (1));

return statearr_31565;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_31544){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31566){if((e31566 instanceof Object)){
var ex__28870__auto__ = e31566;
var statearr_31567_31584 = state_31544;
(statearr_31567_31584[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31585 = state_31544;
state_31544 = G__31585;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_31544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_31544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31573,out))
})();
var state__28980__auto__ = (function (){var statearr_31568 = f__28979__auto__.call(null);
(statearr_31568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31573);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31573,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31586 = [];
var len__26143__auto___31656 = arguments.length;
var i__26144__auto___31657 = (0);
while(true){
if((i__26144__auto___31657 < len__26143__auto___31656)){
args31586.push((arguments[i__26144__auto___31657]));

var G__31658 = (i__26144__auto___31657 + (1));
i__26144__auto___31657 = G__31658;
continue;
} else {
}
break;
}

var G__31588 = args31586.length;
switch (G__31588) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31586.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28978__auto___31660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31660,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31660,out){
return (function (state_31626){
var state_val_31627 = (state_31626[(1)]);
if((state_val_31627 === (7))){
var inst_31622 = (state_31626[(2)]);
var state_31626__$1 = state_31626;
var statearr_31628_31661 = state_31626__$1;
(statearr_31628_31661[(2)] = inst_31622);

(statearr_31628_31661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (1))){
var inst_31589 = (new Array(n));
var inst_31590 = inst_31589;
var inst_31591 = (0);
var state_31626__$1 = (function (){var statearr_31629 = state_31626;
(statearr_31629[(7)] = inst_31590);

(statearr_31629[(8)] = inst_31591);

return statearr_31629;
})();
var statearr_31630_31662 = state_31626__$1;
(statearr_31630_31662[(2)] = null);

(statearr_31630_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (4))){
var inst_31594 = (state_31626[(9)]);
var inst_31594__$1 = (state_31626[(2)]);
var inst_31595 = (inst_31594__$1 == null);
var inst_31596 = cljs.core.not.call(null,inst_31595);
var state_31626__$1 = (function (){var statearr_31631 = state_31626;
(statearr_31631[(9)] = inst_31594__$1);

return statearr_31631;
})();
if(inst_31596){
var statearr_31632_31663 = state_31626__$1;
(statearr_31632_31663[(1)] = (5));

} else {
var statearr_31633_31664 = state_31626__$1;
(statearr_31633_31664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (15))){
var inst_31616 = (state_31626[(2)]);
var state_31626__$1 = state_31626;
var statearr_31634_31665 = state_31626__$1;
(statearr_31634_31665[(2)] = inst_31616);

(statearr_31634_31665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (13))){
var state_31626__$1 = state_31626;
var statearr_31635_31666 = state_31626__$1;
(statearr_31635_31666[(2)] = null);

(statearr_31635_31666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (6))){
var inst_31591 = (state_31626[(8)]);
var inst_31612 = (inst_31591 > (0));
var state_31626__$1 = state_31626;
if(cljs.core.truth_(inst_31612)){
var statearr_31636_31667 = state_31626__$1;
(statearr_31636_31667[(1)] = (12));

} else {
var statearr_31637_31668 = state_31626__$1;
(statearr_31637_31668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (3))){
var inst_31624 = (state_31626[(2)]);
var state_31626__$1 = state_31626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31626__$1,inst_31624);
} else {
if((state_val_31627 === (12))){
var inst_31590 = (state_31626[(7)]);
var inst_31614 = cljs.core.vec.call(null,inst_31590);
var state_31626__$1 = state_31626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31626__$1,(15),out,inst_31614);
} else {
if((state_val_31627 === (2))){
var state_31626__$1 = state_31626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31626__$1,(4),ch);
} else {
if((state_val_31627 === (11))){
var inst_31606 = (state_31626[(2)]);
var inst_31607 = (new Array(n));
var inst_31590 = inst_31607;
var inst_31591 = (0);
var state_31626__$1 = (function (){var statearr_31638 = state_31626;
(statearr_31638[(10)] = inst_31606);

(statearr_31638[(7)] = inst_31590);

(statearr_31638[(8)] = inst_31591);

return statearr_31638;
})();
var statearr_31639_31669 = state_31626__$1;
(statearr_31639_31669[(2)] = null);

(statearr_31639_31669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (9))){
var inst_31590 = (state_31626[(7)]);
var inst_31604 = cljs.core.vec.call(null,inst_31590);
var state_31626__$1 = state_31626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31626__$1,(11),out,inst_31604);
} else {
if((state_val_31627 === (5))){
var inst_31599 = (state_31626[(11)]);
var inst_31590 = (state_31626[(7)]);
var inst_31591 = (state_31626[(8)]);
var inst_31594 = (state_31626[(9)]);
var inst_31598 = (inst_31590[inst_31591] = inst_31594);
var inst_31599__$1 = (inst_31591 + (1));
var inst_31600 = (inst_31599__$1 < n);
var state_31626__$1 = (function (){var statearr_31640 = state_31626;
(statearr_31640[(11)] = inst_31599__$1);

(statearr_31640[(12)] = inst_31598);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31600)){
var statearr_31641_31670 = state_31626__$1;
(statearr_31641_31670[(1)] = (8));

} else {
var statearr_31642_31671 = state_31626__$1;
(statearr_31642_31671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (14))){
var inst_31619 = (state_31626[(2)]);
var inst_31620 = cljs.core.async.close_BANG_.call(null,out);
var state_31626__$1 = (function (){var statearr_31644 = state_31626;
(statearr_31644[(13)] = inst_31619);

return statearr_31644;
})();
var statearr_31645_31672 = state_31626__$1;
(statearr_31645_31672[(2)] = inst_31620);

(statearr_31645_31672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (10))){
var inst_31610 = (state_31626[(2)]);
var state_31626__$1 = state_31626;
var statearr_31646_31673 = state_31626__$1;
(statearr_31646_31673[(2)] = inst_31610);

(statearr_31646_31673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31627 === (8))){
var inst_31599 = (state_31626[(11)]);
var inst_31590 = (state_31626[(7)]);
var tmp31643 = inst_31590;
var inst_31590__$1 = tmp31643;
var inst_31591 = inst_31599;
var state_31626__$1 = (function (){var statearr_31647 = state_31626;
(statearr_31647[(7)] = inst_31590__$1);

(statearr_31647[(8)] = inst_31591);

return statearr_31647;
})();
var statearr_31648_31674 = state_31626__$1;
(statearr_31648_31674[(2)] = null);

(statearr_31648_31674[(1)] = (2));


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
});})(c__28978__auto___31660,out))
;
return ((function (switch__28866__auto__,c__28978__auto___31660,out){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31652[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31652[(1)] = (1));

return statearr_31652;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_31626){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31653){if((e31653 instanceof Object)){
var ex__28870__auto__ = e31653;
var statearr_31654_31675 = state_31626;
(statearr_31654_31675[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31676 = state_31626;
state_31626 = G__31676;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_31626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_31626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31660,out))
})();
var state__28980__auto__ = (function (){var statearr_31655 = f__28979__auto__.call(null);
(statearr_31655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31660);

return statearr_31655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31660,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31677 = [];
var len__26143__auto___31751 = arguments.length;
var i__26144__auto___31752 = (0);
while(true){
if((i__26144__auto___31752 < len__26143__auto___31751)){
args31677.push((arguments[i__26144__auto___31752]));

var G__31753 = (i__26144__auto___31752 + (1));
i__26144__auto___31752 = G__31753;
continue;
} else {
}
break;
}

var G__31679 = args31677.length;
switch (G__31679) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31677.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28978__auto___31755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28978__auto___31755,out){
return (function (){
var f__28979__auto__ = (function (){var switch__28866__auto__ = ((function (c__28978__auto___31755,out){
return (function (state_31721){
var state_val_31722 = (state_31721[(1)]);
if((state_val_31722 === (7))){
var inst_31717 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31723_31756 = state_31721__$1;
(statearr_31723_31756[(2)] = inst_31717);

(statearr_31723_31756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (1))){
var inst_31680 = [];
var inst_31681 = inst_31680;
var inst_31682 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31721__$1 = (function (){var statearr_31724 = state_31721;
(statearr_31724[(7)] = inst_31682);

(statearr_31724[(8)] = inst_31681);

return statearr_31724;
})();
var statearr_31725_31757 = state_31721__$1;
(statearr_31725_31757[(2)] = null);

(statearr_31725_31757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (4))){
var inst_31685 = (state_31721[(9)]);
var inst_31685__$1 = (state_31721[(2)]);
var inst_31686 = (inst_31685__$1 == null);
var inst_31687 = cljs.core.not.call(null,inst_31686);
var state_31721__$1 = (function (){var statearr_31726 = state_31721;
(statearr_31726[(9)] = inst_31685__$1);

return statearr_31726;
})();
if(inst_31687){
var statearr_31727_31758 = state_31721__$1;
(statearr_31727_31758[(1)] = (5));

} else {
var statearr_31728_31759 = state_31721__$1;
(statearr_31728_31759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (15))){
var inst_31711 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31729_31760 = state_31721__$1;
(statearr_31729_31760[(2)] = inst_31711);

(statearr_31729_31760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (13))){
var state_31721__$1 = state_31721;
var statearr_31730_31761 = state_31721__$1;
(statearr_31730_31761[(2)] = null);

(statearr_31730_31761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (6))){
var inst_31681 = (state_31721[(8)]);
var inst_31706 = inst_31681.length;
var inst_31707 = (inst_31706 > (0));
var state_31721__$1 = state_31721;
if(cljs.core.truth_(inst_31707)){
var statearr_31731_31762 = state_31721__$1;
(statearr_31731_31762[(1)] = (12));

} else {
var statearr_31732_31763 = state_31721__$1;
(statearr_31732_31763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (3))){
var inst_31719 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31721__$1,inst_31719);
} else {
if((state_val_31722 === (12))){
var inst_31681 = (state_31721[(8)]);
var inst_31709 = cljs.core.vec.call(null,inst_31681);
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31721__$1,(15),out,inst_31709);
} else {
if((state_val_31722 === (2))){
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31721__$1,(4),ch);
} else {
if((state_val_31722 === (11))){
var inst_31689 = (state_31721[(10)]);
var inst_31685 = (state_31721[(9)]);
var inst_31699 = (state_31721[(2)]);
var inst_31700 = [];
var inst_31701 = inst_31700.push(inst_31685);
var inst_31681 = inst_31700;
var inst_31682 = inst_31689;
var state_31721__$1 = (function (){var statearr_31733 = state_31721;
(statearr_31733[(11)] = inst_31699);

(statearr_31733[(7)] = inst_31682);

(statearr_31733[(8)] = inst_31681);

(statearr_31733[(12)] = inst_31701);

return statearr_31733;
})();
var statearr_31734_31764 = state_31721__$1;
(statearr_31734_31764[(2)] = null);

(statearr_31734_31764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (9))){
var inst_31681 = (state_31721[(8)]);
var inst_31697 = cljs.core.vec.call(null,inst_31681);
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31721__$1,(11),out,inst_31697);
} else {
if((state_val_31722 === (5))){
var inst_31682 = (state_31721[(7)]);
var inst_31689 = (state_31721[(10)]);
var inst_31685 = (state_31721[(9)]);
var inst_31689__$1 = f.call(null,inst_31685);
var inst_31690 = cljs.core._EQ_.call(null,inst_31689__$1,inst_31682);
var inst_31691 = cljs.core.keyword_identical_QMARK_.call(null,inst_31682,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31692 = (inst_31690) || (inst_31691);
var state_31721__$1 = (function (){var statearr_31735 = state_31721;
(statearr_31735[(10)] = inst_31689__$1);

return statearr_31735;
})();
if(cljs.core.truth_(inst_31692)){
var statearr_31736_31765 = state_31721__$1;
(statearr_31736_31765[(1)] = (8));

} else {
var statearr_31737_31766 = state_31721__$1;
(statearr_31737_31766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (14))){
var inst_31714 = (state_31721[(2)]);
var inst_31715 = cljs.core.async.close_BANG_.call(null,out);
var state_31721__$1 = (function (){var statearr_31739 = state_31721;
(statearr_31739[(13)] = inst_31714);

return statearr_31739;
})();
var statearr_31740_31767 = state_31721__$1;
(statearr_31740_31767[(2)] = inst_31715);

(statearr_31740_31767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (10))){
var inst_31704 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31741_31768 = state_31721__$1;
(statearr_31741_31768[(2)] = inst_31704);

(statearr_31741_31768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (8))){
var inst_31689 = (state_31721[(10)]);
var inst_31681 = (state_31721[(8)]);
var inst_31685 = (state_31721[(9)]);
var inst_31694 = inst_31681.push(inst_31685);
var tmp31738 = inst_31681;
var inst_31681__$1 = tmp31738;
var inst_31682 = inst_31689;
var state_31721__$1 = (function (){var statearr_31742 = state_31721;
(statearr_31742[(7)] = inst_31682);

(statearr_31742[(8)] = inst_31681__$1);

(statearr_31742[(14)] = inst_31694);

return statearr_31742;
})();
var statearr_31743_31769 = state_31721__$1;
(statearr_31743_31769[(2)] = null);

(statearr_31743_31769[(1)] = (2));


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
});})(c__28978__auto___31755,out))
;
return ((function (switch__28866__auto__,c__28978__auto___31755,out){
return (function() {
var cljs$core$async$state_machine__28867__auto__ = null;
var cljs$core$async$state_machine__28867__auto____0 = (function (){
var statearr_31747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31747[(0)] = cljs$core$async$state_machine__28867__auto__);

(statearr_31747[(1)] = (1));

return statearr_31747;
});
var cljs$core$async$state_machine__28867__auto____1 = (function (state_31721){
while(true){
var ret_value__28868__auto__ = (function (){try{while(true){
var result__28869__auto__ = switch__28866__auto__.call(null,state_31721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28869__auto__;
}
break;
}
}catch (e31748){if((e31748 instanceof Object)){
var ex__28870__auto__ = e31748;
var statearr_31749_31770 = state_31721;
(statearr_31749_31770[(5)] = ex__28870__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31771 = state_31721;
state_31721 = G__31771;
continue;
} else {
return ret_value__28868__auto__;
}
break;
}
});
cljs$core$async$state_machine__28867__auto__ = function(state_31721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28867__auto____1.call(this,state_31721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28867__auto____0;
cljs$core$async$state_machine__28867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28867__auto____1;
return cljs$core$async$state_machine__28867__auto__;
})()
;})(switch__28866__auto__,c__28978__auto___31755,out))
})();
var state__28980__auto__ = (function (){var statearr_31750 = f__28979__auto__.call(null);
(statearr_31750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28978__auto___31755);

return statearr_31750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28980__auto__);
});})(c__28978__auto___31755,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1488653201770
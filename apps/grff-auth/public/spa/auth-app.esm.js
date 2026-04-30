function ih(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var mf = { exports: {} }, Au = {};
var Tr;
function ch() {
  if (Tr) return Au;
  Tr = 1;
  var g = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.fragment");
  function R(r, q, L) {
    var tl = null;
    if (L !== void 0 && (tl = "" + L), q.key !== void 0 && (tl = "" + q.key), "key" in q) {
      L = {};
      for (var K in q)
        K !== "key" && (L[K] = q[K]);
    } else L = q;
    return q = L.ref, {
      $$typeof: g,
      type: r,
      key: tl,
      ref: q !== void 0 ? q : null,
      props: L
    };
  }
  return Au.Fragment = N, Au.jsx = R, Au.jsxs = R, Au;
}
var xr;
function fh() {
  return xr || (xr = 1, mf.exports = ch()), mf.exports;
}
var h = fh(), yf = { exports: {} }, G = {};
var Ar;
function sh() {
  if (Ar) return G;
  Ar = 1;
  var g = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), tl = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), I = Symbol.iterator;
  function vl(o) {
    return o === null || typeof o != "object" ? null : (o = I && o[I] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var zl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ul = Object.assign, lt = {};
  function ql(o, x, O) {
    this.props = o, this.context = x, this.refs = lt, this.updater = O || zl;
  }
  ql.prototype.isReactComponent = {}, ql.prototype.setState = function(o, x) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, x, "setState");
  }, ql.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function cl() {
  }
  cl.prototype = ql.prototype;
  function P(o, x, O) {
    this.props = o, this.context = x, this.refs = lt, this.updater = O || zl;
  }
  var V = P.prototype = new cl();
  V.constructor = P, Ul(V, ql.prototype), V.isPureReactComponent = !0;
  var fl = Array.isArray;
  function dl() {
  }
  var $ = { H: null, A: null, T: null, S: null }, Kl = Object.prototype.hasOwnProperty;
  function At(o, x, O) {
    var D = O.ref;
    return {
      $$typeof: g,
      type: o,
      key: x,
      ref: D !== void 0 ? D : null,
      props: O
    };
  }
  function Je(o, x) {
    return At(o.type, x, o.props);
  }
  function Ot(o) {
    return typeof o == "object" && o !== null && o.$$typeof === g;
  }
  function Jl(o) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(O) {
      return x[O];
    });
  }
  var xe = /\/+/g;
  function Ut(o, x) {
    return typeof o == "object" && o !== null && o.key != null ? Jl("" + o.key) : x.toString(36);
  }
  function zt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(dl, dl) : (o.status = "pending", o.then(
          function(x) {
            o.status === "pending" && (o.status = "fulfilled", o.value = x);
          },
          function(x) {
            o.status === "pending" && (o.status = "rejected", o.reason = x);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function z(o, x, O, D, X) {
    var J = typeof o;
    (J === "undefined" || J === "boolean") && (o = null);
    var il = !1;
    if (o === null) il = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          il = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case g:
            case N:
              il = !0;
              break;
            case B:
              return il = o._init, z(
                il(o._payload),
                x,
                O,
                D,
                X
              );
          }
      }
    if (il)
      return X = X(o), il = D === "" ? "." + Ut(o, 0) : D, fl(X) ? (O = "", il != null && (O = il.replace(xe, "$&/") + "/"), z(X, x, O, "", function(Ua) {
        return Ua;
      })) : X != null && (Ot(X) && (X = Je(
        X,
        O + (X.key == null || o && o.key === X.key ? "" : ("" + X.key).replace(
          xe,
          "$&/"
        ) + "/") + il
      )), x.push(X)), 1;
    il = 0;
    var Ll = D === "" ? "." : D + ":";
    if (fl(o))
      for (var Al = 0; Al < o.length; Al++)
        D = o[Al], J = Ll + Ut(D, Al), il += z(
          D,
          x,
          O,
          J,
          X
        );
    else if (Al = vl(o), typeof Al == "function")
      for (o = Al.call(o), Al = 0; !(D = o.next()).done; )
        D = D.value, J = Ll + Ut(D, Al++), il += z(
          D,
          x,
          O,
          J,
          X
        );
    else if (J === "object") {
      if (typeof o.then == "function")
        return z(
          zt(o),
          x,
          O,
          D,
          X
        );
      throw x = String(o), Error(
        "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return il;
  }
  function A(o, x, O) {
    if (o == null) return o;
    var D = [], X = 0;
    return z(o, D, "", "", function(J) {
      return x.call(O, J, X++);
    }), D;
  }
  function Y(o) {
    if (o._status === -1) {
      var x = o._result;
      x = x(), x.then(
        function(O) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = O);
        },
        function(O) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = O);
        }
      ), o._status === -1 && (o._status = 0, o._result = x);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var rl = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var x = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(x)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, gl = {
    map: A,
    forEach: function(o, x, O) {
      A(
        o,
        function() {
          x.apply(this, arguments);
        },
        O
      );
    },
    count: function(o) {
      var x = 0;
      return A(o, function() {
        x++;
      }), x;
    },
    toArray: function(o) {
      return A(o, function(x) {
        return x;
      }) || [];
    },
    only: function(o) {
      if (!Ot(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return G.Activity = U, G.Children = gl, G.Component = ql, G.Fragment = R, G.Profiler = q, G.PureComponent = P, G.StrictMode = r, G.Suspense = _, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, G.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return $.H.useMemoCache(o);
    }
  }, G.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, G.cacheSignal = function() {
    return null;
  }, G.cloneElement = function(o, x, O) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var D = Ul({}, o.props), X = o.key;
    if (x != null)
      for (J in x.key !== void 0 && (X = "" + x.key), x)
        !Kl.call(x, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && x.ref === void 0 || (D[J] = x[J]);
    var J = arguments.length - 2;
    if (J === 1) D.children = O;
    else if (1 < J) {
      for (var il = Array(J), Ll = 0; Ll < J; Ll++)
        il[Ll] = arguments[Ll + 2];
      D.children = il;
    }
    return At(o.type, X, D);
  }, G.createContext = function(o) {
    return o = {
      $$typeof: tl,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: L,
      _context: o
    }, o;
  }, G.createElement = function(o, x, O) {
    var D, X = {}, J = null;
    if (x != null)
      for (D in x.key !== void 0 && (J = "" + x.key), x)
        Kl.call(x, D) && D !== "key" && D !== "__self" && D !== "__source" && (X[D] = x[D]);
    var il = arguments.length - 2;
    if (il === 1) X.children = O;
    else if (1 < il) {
      for (var Ll = Array(il), Al = 0; Al < il; Al++)
        Ll[Al] = arguments[Al + 2];
      X.children = Ll;
    }
    if (o && o.defaultProps)
      for (D in il = o.defaultProps, il)
        X[D] === void 0 && (X[D] = il[D]);
    return At(o, J, X);
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(o) {
    return { $$typeof: K, render: o };
  }, G.isValidElement = Ot, G.lazy = function(o) {
    return {
      $$typeof: B,
      _payload: { _status: -1, _result: o },
      _init: Y
    };
  }, G.memo = function(o, x) {
    return {
      $$typeof: p,
      type: o,
      compare: x === void 0 ? null : x
    };
  }, G.startTransition = function(o) {
    var x = $.T, O = {};
    $.T = O;
    try {
      var D = o(), X = $.S;
      X !== null && X(O, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(dl, rl);
    } catch (J) {
      rl(J);
    } finally {
      x !== null && O.types !== null && (x.types = O.types), $.T = x;
    }
  }, G.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, G.use = function(o) {
    return $.H.use(o);
  }, G.useActionState = function(o, x, O) {
    return $.H.useActionState(o, x, O);
  }, G.useCallback = function(o, x) {
    return $.H.useCallback(o, x);
  }, G.useContext = function(o) {
    return $.H.useContext(o);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(o, x) {
    return $.H.useDeferredValue(o, x);
  }, G.useEffect = function(o, x) {
    return $.H.useEffect(o, x);
  }, G.useEffectEvent = function(o) {
    return $.H.useEffectEvent(o);
  }, G.useId = function() {
    return $.H.useId();
  }, G.useImperativeHandle = function(o, x, O) {
    return $.H.useImperativeHandle(o, x, O);
  }, G.useInsertionEffect = function(o, x) {
    return $.H.useInsertionEffect(o, x);
  }, G.useLayoutEffect = function(o, x) {
    return $.H.useLayoutEffect(o, x);
  }, G.useMemo = function(o, x) {
    return $.H.useMemo(o, x);
  }, G.useOptimistic = function(o, x) {
    return $.H.useOptimistic(o, x);
  }, G.useReducer = function(o, x, O) {
    return $.H.useReducer(o, x, O);
  }, G.useRef = function(o) {
    return $.H.useRef(o);
  }, G.useState = function(o) {
    return $.H.useState(o);
  }, G.useSyncExternalStore = function(o, x, O) {
    return $.H.useSyncExternalStore(
      o,
      x,
      O
    );
  }, G.useTransition = function() {
    return $.H.useTransition();
  }, G.version = "19.2.4", G;
}
var Or;
function Sf() {
  return Or || (Or = 1, yf.exports = sh()), yf.exports;
}
var el = Sf();
const oh = /* @__PURE__ */ ih(el);
var hf = { exports: {} }, Ou = {}, vf = { exports: {} }, gf = {};
var _r;
function dh() {
  return _r || (_r = 1, (function(g) {
    function N(z, A) {
      var Y = z.length;
      z.push(A);
      l: for (; 0 < Y; ) {
        var rl = Y - 1 >>> 1, gl = z[rl];
        if (0 < q(gl, A))
          z[rl] = A, z[Y] = gl, Y = rl;
        else break l;
      }
    }
    function R(z) {
      return z.length === 0 ? null : z[0];
    }
    function r(z) {
      if (z.length === 0) return null;
      var A = z[0], Y = z.pop();
      if (Y !== A) {
        z[0] = Y;
        l: for (var rl = 0, gl = z.length, o = gl >>> 1; rl < o; ) {
          var x = 2 * (rl + 1) - 1, O = z[x], D = x + 1, X = z[D];
          if (0 > q(O, Y))
            D < gl && 0 > q(X, O) ? (z[rl] = X, z[D] = Y, rl = D) : (z[rl] = O, z[x] = Y, rl = x);
          else if (D < gl && 0 > q(X, Y))
            z[rl] = X, z[D] = Y, rl = D;
          else break l;
        }
      }
      return A;
    }
    function q(z, A) {
      var Y = z.sortIndex - A.sortIndex;
      return Y !== 0 ? Y : z.id - A.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var L = performance;
      g.unstable_now = function() {
        return L.now();
      };
    } else {
      var tl = Date, K = tl.now();
      g.unstable_now = function() {
        return tl.now() - K;
      };
    }
    var _ = [], p = [], B = 1, U = null, I = 3, vl = !1, zl = !1, Ul = !1, lt = !1, ql = typeof setTimeout == "function" ? setTimeout : null, cl = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function V(z) {
      for (var A = R(p); A !== null; ) {
        if (A.callback === null) r(p);
        else if (A.startTime <= z)
          r(p), A.sortIndex = A.expirationTime, N(_, A);
        else break;
        A = R(p);
      }
    }
    function fl(z) {
      if (Ul = !1, V(z), !zl)
        if (R(_) !== null)
          zl = !0, dl || (dl = !0, Jl());
        else {
          var A = R(p);
          A !== null && zt(fl, A.startTime - z);
        }
    }
    var dl = !1, $ = -1, Kl = 5, At = -1;
    function Je() {
      return lt ? !0 : !(g.unstable_now() - At < Kl);
    }
    function Ot() {
      if (lt = !1, dl) {
        var z = g.unstable_now();
        At = z;
        var A = !0;
        try {
          l: {
            zl = !1, Ul && (Ul = !1, cl($), $ = -1), vl = !0;
            var Y = I;
            try {
              t: {
                for (V(z), U = R(_); U !== null && !(U.expirationTime > z && Je()); ) {
                  var rl = U.callback;
                  if (typeof rl == "function") {
                    U.callback = null, I = U.priorityLevel;
                    var gl = rl(
                      U.expirationTime <= z
                    );
                    if (z = g.unstable_now(), typeof gl == "function") {
                      U.callback = gl, V(z), A = !0;
                      break t;
                    }
                    U === R(_) && r(_), V(z);
                  } else r(_);
                  U = R(_);
                }
                if (U !== null) A = !0;
                else {
                  var o = R(p);
                  o !== null && zt(
                    fl,
                    o.startTime - z
                  ), A = !1;
                }
              }
              break l;
            } finally {
              U = null, I = Y, vl = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Jl() : dl = !1;
        }
      }
    }
    var Jl;
    if (typeof P == "function")
      Jl = function() {
        P(Ot);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), Ut = xe.port2;
      xe.port1.onmessage = Ot, Jl = function() {
        Ut.postMessage(null);
      };
    } else
      Jl = function() {
        ql(Ot, 0);
      };
    function zt(z, A) {
      $ = ql(function() {
        z(g.unstable_now());
      }, A);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, g.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Kl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, g.unstable_next = function(z) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = I;
      }
      var Y = I;
      I = A;
      try {
        return z();
      } finally {
        I = Y;
      }
    }, g.unstable_requestPaint = function() {
      lt = !0;
    }, g.unstable_runWithPriority = function(z, A) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var Y = I;
      I = z;
      try {
        return A();
      } finally {
        I = Y;
      }
    }, g.unstable_scheduleCallback = function(z, A, Y) {
      var rl = g.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? rl + Y : rl) : Y = rl, z) {
        case 1:
          var gl = -1;
          break;
        case 2:
          gl = 250;
          break;
        case 5:
          gl = 1073741823;
          break;
        case 4:
          gl = 1e4;
          break;
        default:
          gl = 5e3;
      }
      return gl = Y + gl, z = {
        id: B++,
        callback: A,
        priorityLevel: z,
        startTime: Y,
        expirationTime: gl,
        sortIndex: -1
      }, Y > rl ? (z.sortIndex = Y, N(p, z), R(_) === null && z === R(p) && (Ul ? (cl($), $ = -1) : Ul = !0, zt(fl, Y - rl))) : (z.sortIndex = gl, N(_, z), zl || vl || (zl = !0, dl || (dl = !0, Jl()))), z;
    }, g.unstable_shouldYield = Je, g.unstable_wrapCallback = function(z) {
      var A = I;
      return function() {
        var Y = I;
        I = A;
        try {
          return z.apply(this, arguments);
        } finally {
          I = Y;
        }
      };
    };
  })(gf)), gf;
}
var Nr;
function rh() {
  return Nr || (Nr = 1, vf.exports = dh()), vf.exports;
}
var bf = { exports: {} }, Zl = {};
var Mr;
function mh() {
  if (Mr) return Zl;
  Mr = 1;
  var g = Sf();
  function N(_) {
    var p = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        p += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + _ + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function R() {
  }
  var r = {
    d: {
      f: R,
      r: function() {
        throw Error(N(522));
      },
      D: R,
      C: R,
      L: R,
      m: R,
      X: R,
      S: R,
      M: R
    },
    p: 0,
    findDOMNode: null
  }, q = /* @__PURE__ */ Symbol.for("react.portal");
  function L(_, p, B) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: U == null ? null : "" + U,
      children: _,
      containerInfo: p,
      implementation: B
    };
  }
  var tl = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function K(_, p) {
    if (_ === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Zl.createPortal = function(_, p) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(N(299));
    return L(_, p, null, B);
  }, Zl.flushSync = function(_) {
    var p = tl.T, B = r.p;
    try {
      if (tl.T = null, r.p = 2, _) return _();
    } finally {
      tl.T = p, r.p = B, r.d.f();
    }
  }, Zl.preconnect = function(_, p) {
    typeof _ == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(_, p));
  }, Zl.prefetchDNS = function(_) {
    typeof _ == "string" && r.d.D(_);
  }, Zl.preinit = function(_, p) {
    if (typeof _ == "string" && p && typeof p.as == "string") {
      var B = p.as, U = K(B, p.crossOrigin), I = typeof p.integrity == "string" ? p.integrity : void 0, vl = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      B === "style" ? r.d.S(
        _,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: U,
          integrity: I,
          fetchPriority: vl
        }
      ) : B === "script" && r.d.X(_, {
        crossOrigin: U,
        integrity: I,
        fetchPriority: vl,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Zl.preinitModule = function(_, p) {
    if (typeof _ == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var B = K(
            p.as,
            p.crossOrigin
          );
          r.d.M(_, {
            crossOrigin: B,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && r.d.M(_);
  }, Zl.preload = function(_, p) {
    if (typeof _ == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var B = p.as, U = K(B, p.crossOrigin);
      r.d.L(_, B, {
        crossOrigin: U,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Zl.preloadModule = function(_, p) {
    if (typeof _ == "string")
      if (p) {
        var B = K(p.as, p.crossOrigin);
        r.d.m(_, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: B,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else r.d.m(_);
  }, Zl.requestFormReset = function(_) {
    r.d.r(_);
  }, Zl.unstable_batchedUpdates = function(_, p) {
    return _(p);
  }, Zl.useFormState = function(_, p, B) {
    return tl.H.useFormState(_, p, B);
  }, Zl.useFormStatus = function() {
    return tl.H.useHostTransitionStatus();
  }, Zl.version = "19.2.4", Zl;
}
var Dr;
function yh() {
  if (Dr) return bf.exports;
  Dr = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (N) {
        console.error(N);
      }
  }
  return g(), bf.exports = mh(), bf.exports;
}
var jr;
function hh() {
  if (jr) return Ou;
  jr = 1;
  var g = rh(), N = Sf(), R = yh();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function q(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function L(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function tl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function K(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _(l) {
    if (L(l) !== l)
      throw Error(r(188));
  }
  function p(l) {
    var t = l.alternate;
    if (!t) {
      if (t = L(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return _(u), l;
          if (n === a) return _(u), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== a) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? l : t;
  }
  function B(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = B(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign, I = /* @__PURE__ */ Symbol.for("react.element"), vl = /* @__PURE__ */ Symbol.for("react.transitional.element"), zl = /* @__PURE__ */ Symbol.for("react.portal"), Ul = /* @__PURE__ */ Symbol.for("react.fragment"), lt = /* @__PURE__ */ Symbol.for("react.strict_mode"), ql = /* @__PURE__ */ Symbol.for("react.profiler"), cl = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), fl = /* @__PURE__ */ Symbol.for("react.suspense"), dl = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Kl = /* @__PURE__ */ Symbol.for("react.lazy"), At = /* @__PURE__ */ Symbol.for("react.activity"), Je = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ot = Symbol.iterator;
  function Jl(l) {
    return l === null || typeof l != "object" ? null : (l = Ot && l[Ot] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var xe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === xe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ul:
        return "Fragment";
      case ql:
        return "Profiler";
      case lt:
        return "StrictMode";
      case fl:
        return "Suspense";
      case dl:
        return "SuspenseList";
      case At:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case zl:
          return "Portal";
        case P:
          return l.displayName || "Context";
        case cl:
          return (l._context.displayName || "Context") + ".Consumer";
        case V:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case $:
          return t = l.displayName || null, t !== null ? t : Ut(l.type) || "Memo";
        case Kl:
          t = l._payload, l = l._init;
          try {
            return Ut(l(t));
          } catch {
          }
      }
    return null;
  }
  var zt = Array.isArray, z = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rl = [], gl = -1;
  function o(l) {
    return { current: l };
  }
  function x(l) {
    0 > gl || (l.current = rl[gl], rl[gl] = null, gl--);
  }
  function O(l, t) {
    gl++, rl[gl] = l.current, l.current = t;
  }
  var D = o(null), X = o(null), J = o(null), il = o(null);
  function Ll(l, t) {
    switch (O(J, t), O(X, l), O(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Jd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Jd(t), l = wd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    x(D), O(D, l);
  }
  function Al() {
    x(D), x(X), x(J);
  }
  function Ua(l) {
    l.memoizedState !== null && O(il, l);
    var t = D.current, e = wd(t, l.type);
    t !== e && (O(X, l), O(D, e));
  }
  function _u(l) {
    X.current === l && (x(D), x(X)), il.current === l && (x(il), zu._currentValue = Y);
  }
  var Wn, zf;
  function Ae(l) {
    if (Wn === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Wn = t && t[1] || "", zf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wn + l + zf;
  }
  var $n = !1;
  function Fn(l, t) {
    if (!l || $n) return "";
    $n = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (b) {
                  var v = b;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (b) {
                  v = b;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                v = b;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (b) {
            if (b && v && typeof b.stack == "string")
              return [b.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), y = c.split(`
`);
        for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < y.length && !y[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === f.length || u === y.length)
          for (a = f.length - 1, u = y.length - 1; 1 <= a && 0 <= u && f[a] !== y[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== y[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || f[a] !== y[u]) {
                  var S = `
` + f[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      $n = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Ae(e) : "";
  }
  function Br(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(l.type);
      case 16:
        return Ae("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ae("Suspense Fallback") : Ae("Suspense");
      case 19:
        return Ae("SuspenseList");
      case 0:
      case 15:
        return Fn(l.type, !1);
      case 11:
        return Fn(l.type.render, !1);
      case 1:
        return Fn(l.type, !0);
      case 31:
        return Ae("Activity");
      default:
        return "";
    }
  }
  function Ef(l) {
    try {
      var t = "", e = null;
      do
        t += Br(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var kn = Object.prototype.hasOwnProperty, In = g.unstable_scheduleCallback, Pn = g.unstable_cancelCallback, Yr = g.unstable_shouldYield, Gr = g.unstable_requestPaint, tt = g.unstable_now, Xr = g.unstable_getCurrentPriorityLevel, Tf = g.unstable_ImmediatePriority, xf = g.unstable_UserBlockingPriority, Nu = g.unstable_NormalPriority, Qr = g.unstable_LowPriority, Af = g.unstable_IdlePriority, Zr = g.log, Lr = g.unstable_setDisableYieldValue, Ra = null, et = null;
  function It(l) {
    if (typeof Zr == "function" && Lr(l), et && typeof et.setStrictMode == "function")
      try {
        et.setStrictMode(Ra, l);
      } catch {
      }
  }
  var at = Math.clz32 ? Math.clz32 : Jr, Vr = Math.log, Kr = Math.LN2;
  function Jr(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Vr(l) / Kr | 0) | 0;
  }
  var Mu = 256, Du = 262144, ju = 4194304;
  function Oe(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Uu(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? u = Oe(a) : (i &= c, i !== 0 ? u = Oe(i) : e || (e = c & ~l, e !== 0 && (u = Oe(e))))) : (c = a & ~n, c !== 0 ? u = Oe(c) : i !== 0 ? u = Oe(i) : e || (e = a & ~l, e !== 0 && (u = Oe(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function Ha(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function wr(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Of() {
    var l = ju;
    return ju <<= 1, (ju & 62914560) === 0 && (ju = 4194304), l;
  }
  function li(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ca(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Wr(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - at(e), T = 1 << S;
      c[S] = 0, f[S] = -1;
      var v = y[S];
      if (v !== null)
        for (y[S] = null, S = 0; S < v.length; S++) {
          var b = v[S];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~T;
    }
    a !== 0 && _f(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function _f(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - at(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Nf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - at(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Mf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : ti(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function ti(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ei(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Df() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : vr(l.type));
  }
  function jf(l, t) {
    var e = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = e;
    }
  }
  var Pt = Math.random().toString(36).slice(2), Bl = "__reactFiber$" + Pt, wl = "__reactProps$" + Pt, we = "__reactContainer$" + Pt, ai = "__reactEvents$" + Pt, $r = "__reactListeners$" + Pt, Fr = "__reactHandles$" + Pt, Uf = "__reactResources$" + Pt, qa = "__reactMarker$" + Pt;
  function ui(l) {
    delete l[Bl], delete l[wl], delete l[ai], delete l[$r], delete l[Fr];
  }
  function We(l) {
    var t = l[Bl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[we] || e[Bl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = lr(l); l !== null; ) {
            if (e = l[Bl]) return e;
            l = lr(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function $e(l) {
    if (l = l[Bl] || l[we]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ba(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Fe(l) {
    var t = l[Uf];
    return t || (t = l[Uf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Hl(l) {
    l[qa] = !0;
  }
  var Rf = /* @__PURE__ */ new Set(), Hf = {};
  function _e(l, t) {
    ke(l, t), ke(l + "Capture", t);
  }
  function ke(l, t) {
    for (Hf[l] = t, l = 0; l < t.length; l++)
      Rf.add(t[l]);
  }
  var kr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cf = {}, qf = {};
  function Ir(l) {
    return kn.call(qf, l) ? !0 : kn.call(Cf, l) ? !1 : kr.test(l) ? qf[l] = !0 : (Cf[l] = !0, !1);
  }
  function Ru(l, t, e) {
    if (Ir(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Hu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Rt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Bf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Pr(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function ni(l) {
    if (!l._valueTracker) {
      var t = Bf(l) ? "checked" : "value";
      l._valueTracker = Pr(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Yf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Bf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Cu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var lm = /[\n"\\]/g;
  function rt(l) {
    return l.replace(
      lm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ii(l, t, e, a, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + dt(t)) : l.value !== "" + dt(t) && (l.value = "" + dt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ci(l, i, dt(t)) : e != null ? ci(l, i, dt(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + dt(c) : l.removeAttribute("name");
  }
  function Gf(l, t, e, a, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        ni(l);
        return;
      }
      e = e != null ? "" + dt(e) : "", t = t != null ? "" + dt(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ni(l);
  }
  function ci(l, t, e) {
    t === "number" && Cu(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function Ie(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++)
        t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + dt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = !0, a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xf(l, t, e) {
    if (t != null && (t = "" + dt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + dt(e) : "";
  }
  function Qf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(r(92));
        if (zt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = dt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), ni(l);
  }
  function Pe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var tm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Zf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || tm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Lf(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && Zf(l, u, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Zf(l, n, t[n]);
  }
  function fi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var em = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), am = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qu(l) {
    return am.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var si = null;
  function oi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var la = null, ta = null;
  function Vf(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[wl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ii(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[wl] || null;
                if (!u) throw Error(r(90));
                ii(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && Yf(a);
          }
          break l;
        case "textarea":
          Xf(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Ie(l, !!e.multiple, t, !1);
      }
    }
  }
  var di = !1;
  function Kf(l, t, e) {
    if (di) return l(t, e);
    di = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (di = !1, (la !== null || ta !== null) && (xn(), la && (t = la, l = ta, ta = la = null, Vf(t), l)))
        for (t = 0; t < l.length; t++) Vf(l[t]);
    }
  }
  function Ya(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[wl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, t, typeof e)
      );
    return e;
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ri = !1;
  if (Ct)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function() {
          ri = !0;
        }
      }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
    } catch {
      ri = !1;
    }
  var le = null, mi = null, Bu = null;
  function Jf() {
    if (Bu) return Bu;
    var l, t = mi, e = t.length, a, u = "value" in le ? le.value : le.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++) ;
    return Bu = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Yu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Gu() {
    return !0;
  }
  function wf() {
    return !1;
  }
  function Wl(l) {
    function t(e, a, u, n, i) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Gu : wf, this.isPropagationStopped = wf, this;
    }
    return U(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Gu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Gu);
      },
      persist: function() {
      },
      isPersistent: Gu
    }), t;
  }
  var Ne = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Xu = Wl(Ne), Xa = U({}, Ne, { view: 0, detail: 0 }), um = Wl(Xa), yi, hi, Qa, Qu = U({}, Xa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Qa && (Qa && l.type === "mousemove" ? (yi = l.screenX - Qa.screenX, hi = l.screenY - Qa.screenY) : hi = yi = 0, Qa = l), yi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : hi;
    }
  }), Wf = Wl(Qu), nm = U({}, Qu, { dataTransfer: 0 }), im = Wl(nm), cm = U({}, Xa, { relatedTarget: 0 }), vi = Wl(cm), fm = U({}, Ne, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = Wl(fm), om = U({}, Ne, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), dm = Wl(om), rm = U({}, Ne, { data: 0 }), $f = Wl(rm), mm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ym = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, hm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function vm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = hm[l]) ? !!t[l] : !1;
  }
  function gi() {
    return vm;
  }
  var gm = U({}, Xa, {
    key: function(l) {
      if (l.key) {
        var t = mm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Yu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ym[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gi,
    charCode: function(l) {
      return l.type === "keypress" ? Yu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Yu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), bm = Wl(gm), Sm = U({}, Qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ff = Wl(Sm), pm = U({}, Xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gi
  }), zm = Wl(pm), Em = U({}, Ne, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Tm = Wl(Em), xm = U({}, Qu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Am = Wl(xm), Om = U({}, Ne, {
    newState: 0,
    oldState: 0
  }), _m = Wl(Om), Nm = [9, 13, 27, 32], bi = Ct && "CompositionEvent" in window, Za = null;
  Ct && "documentMode" in document && (Za = document.documentMode);
  var Mm = Ct && "TextEvent" in window && !Za, kf = Ct && (!bi || Za && 8 < Za && 11 >= Za), If = " ", Pf = !1;
  function ls(l, t) {
    switch (l) {
      case "keyup":
        return Nm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ts(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ea = !1;
  function Dm(l, t) {
    switch (l) {
      case "compositionend":
        return ts(t);
      case "keypress":
        return t.which !== 32 ? null : (Pf = !0, If);
      case "textInput":
        return l = t.data, l === If && Pf ? null : l;
      default:
        return null;
    }
  }
  function jm(l, t) {
    if (ea)
      return l === "compositionend" || !bi && ls(l, t) ? (l = Jf(), Bu = mi = le = null, ea = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return kf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Um = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function es(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Um[l.type] : t === "textarea";
  }
  function as(l, t, e, a) {
    la ? ta ? ta.push(a) : ta = [a] : la = a, t = jn(t, "onChange"), 0 < t.length && (e = new Xu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var La = null, Va = null;
  function Rm(l) {
    Xd(l, 0);
  }
  function Zu(l) {
    var t = Ba(l);
    if (Yf(t)) return l;
  }
  function us(l, t) {
    if (l === "change") return t;
  }
  var ns = !1;
  if (Ct) {
    var Si;
    if (Ct) {
      var pi = "oninput" in document;
      if (!pi) {
        var is = document.createElement("div");
        is.setAttribute("oninput", "return;"), pi = typeof is.oninput == "function";
      }
      Si = pi;
    } else Si = !1;
    ns = Si && (!document.documentMode || 9 < document.documentMode);
  }
  function cs() {
    La && (La.detachEvent("onpropertychange", fs), Va = La = null);
  }
  function fs(l) {
    if (l.propertyName === "value" && Zu(Va)) {
      var t = [];
      as(
        t,
        Va,
        l,
        oi(l)
      ), Kf(Rm, t);
    }
  }
  function Hm(l, t, e) {
    l === "focusin" ? (cs(), La = t, Va = e, La.attachEvent("onpropertychange", fs)) : l === "focusout" && cs();
  }
  function Cm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Zu(Va);
  }
  function qm(l, t) {
    if (l === "click") return Zu(t);
  }
  function Bm(l, t) {
    if (l === "input" || l === "change")
      return Zu(t);
  }
  function Ym(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : Ym;
  function Ka(l, t) {
    if (ut(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!kn.call(t, u) || !ut(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function ss(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function os(l, t) {
    var e = ss(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ss(e);
    }
  }
  function ds(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ds(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function rs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Cu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Cu(l.document);
    }
    return t;
  }
  function zi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Gm = Ct && "documentMode" in document && 11 >= document.documentMode, aa = null, Ei = null, Ja = null, Ti = !1;
  function ms(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ti || aa == null || aa !== Cu(a) || (a = aa, "selectionStart" in a && zi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ja && Ka(Ja, a) || (Ja = a, a = jn(Ei, "onSelect"), 0 < a.length && (t = new Xu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = aa)));
  }
  function Me(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ua = {
    animationend: Me("Animation", "AnimationEnd"),
    animationiteration: Me("Animation", "AnimationIteration"),
    animationstart: Me("Animation", "AnimationStart"),
    transitionrun: Me("Transition", "TransitionRun"),
    transitionstart: Me("Transition", "TransitionStart"),
    transitioncancel: Me("Transition", "TransitionCancel"),
    transitionend: Me("Transition", "TransitionEnd")
  }, xi = {}, ys = {};
  Ct && (ys = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
  function De(l) {
    if (xi[l]) return xi[l];
    if (!ua[l]) return l;
    var t = ua[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in ys)
        return xi[l] = t[e];
    return l;
  }
  var hs = De("animationend"), vs = De("animationiteration"), gs = De("animationstart"), Xm = De("transitionrun"), Qm = De("transitionstart"), Zm = De("transitioncancel"), bs = De("transitionend"), Ss = /* @__PURE__ */ new Map(), Ai = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ai.push("scrollEnd");
  function Et(l, t) {
    Ss.set(l, t), _e(t, [l]);
  }
  var Lu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, mt = [], na = 0, Oi = 0;
  function Vu() {
    for (var l = na, t = Oi = na = 0; t < l; ) {
      var e = mt[t];
      mt[t++] = null;
      var a = mt[t];
      mt[t++] = null;
      var u = mt[t];
      mt[t++] = null;
      var n = mt[t];
      if (mt[t++] = null, a !== null && u !== null) {
        var i = a.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u;
      }
      n !== 0 && ps(e, u, n);
    }
  }
  function Ku(l, t, e, a) {
    mt[na++] = l, mt[na++] = t, mt[na++] = e, mt[na++] = a, Oi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function _i(l, t, e, a) {
    return Ku(l, t, e, a), Ju(l);
  }
  function je(l, t) {
    return Ku(l, null, null, t), Ju(l);
  }
  function ps(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - at(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Ju(l) {
    if (50 < yu)
      throw yu = 0, qc = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ia = {};
  function Lm(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nt(l, t, e, a) {
    return new Lm(l, t, e, a);
  }
  function Ni(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var e = l.alternate;
    return e === null ? (e = nt(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function zs(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function wu(l, t, e, a, u, n) {
    var i = 0;
    if (a = l, typeof l == "function") Ni(l) && (i = 1);
    else if (typeof l == "string")
      i = Wy(
        l,
        e,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case At:
          return l = nt(31, e, t, u), l.elementType = At, l.lanes = n, l;
        case Ul:
          return Ue(e.children, u, n, t);
        case lt:
          i = 8, u |= 24;
          break;
        case ql:
          return l = nt(12, e, t, u | 2), l.elementType = ql, l.lanes = n, l;
        case fl:
          return l = nt(13, e, t, u), l.elementType = fl, l.lanes = n, l;
        case dl:
          return l = nt(19, e, t, u), l.elementType = dl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case P:
                i = 10;
                break l;
              case cl:
                i = 9;
                break l;
              case V:
                i = 11;
                break l;
              case $:
                i = 14;
                break l;
              case Kl:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = nt(i, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Ue(l, t, e, a) {
    return l = nt(7, l, a, t), l.lanes = e, l;
  }
  function Mi(l, t, e) {
    return l = nt(6, l, null, t), l.lanes = e, l;
  }
  function Es(l) {
    var t = nt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Di(l, t, e) {
    return t = nt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Ts = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Ts.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Ef(t)
      }, Ts.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Ef(t)
    };
  }
  var ca = [], fa = 0, Wu = null, wa = 0, ht = [], vt = 0, te = null, _t = 1, Nt = "";
  function Bt(l, t) {
    ca[fa++] = wa, ca[fa++] = Wu, Wu = l, wa = t;
  }
  function xs(l, t, e) {
    ht[vt++] = _t, ht[vt++] = Nt, ht[vt++] = te, te = l;
    var a = _t;
    l = Nt;
    var u = 32 - at(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - at(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, _t = 1 << 32 - at(t) + u | e << u | a, Nt = n + l;
    } else
      _t = 1 << n | e << u | a, Nt = l;
  }
  function ji(l) {
    l.return !== null && (Bt(l, 1), xs(l, 1, 0));
  }
  function Ui(l) {
    for (; l === Wu; )
      Wu = ca[--fa], ca[fa] = null, wa = ca[--fa], ca[fa] = null;
    for (; l === te; )
      te = ht[--vt], ht[vt] = null, Nt = ht[--vt], ht[vt] = null, _t = ht[--vt], ht[vt] = null;
  }
  function As(l, t) {
    ht[vt++] = _t, ht[vt++] = Nt, ht[vt++] = te, _t = t.id, Nt = t.overflow, te = l;
  }
  var Yl = null, Sl = null, ll = !1, ee = null, gt = !1, Ri = Error(r(519));
  function ae(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wa(yt(t, l)), Ri;
  }
  function Os(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Bl] = l, t[wl] = a, e) {
      case "dialog":
        W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < vu.length; e++)
          W(vu[e], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        W("invalid", t), Gf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        W("invalid", t), Qf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Vd(t.textContent, e) ? (a.popover != null && (W("beforetoggle", t), W("toggle", t)), a.onScroll != null && W("scroll", t), a.onScrollEnd != null && W("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || ae(l, !0);
  }
  function _s(l) {
    for (Yl = l.return; Yl; )
      switch (Yl.tag) {
        case 5:
        case 31:
        case 13:
          gt = !1;
          return;
        case 27:
        case 3:
          gt = !0;
          return;
        default:
          Yl = Yl.return;
      }
  }
  function sa(l) {
    if (l !== Yl) return !1;
    if (!ll) return _s(l), ll = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || kc(l.type, l.memoizedProps)), e = !e), e && Sl && ae(l), _s(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Sl = Pd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      Sl = Pd(l);
    } else
      t === 27 ? (t = Sl, ge(l.type) ? (l = ef, ef = null, Sl = l) : Sl = t) : Sl = Yl ? St(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Re() {
    Sl = Yl = null, ll = !1;
  }
  function Hi() {
    var l = ee;
    return l !== null && (Il === null ? Il = l : Il.push.apply(
      Il,
      l
    ), ee = null), l;
  }
  function Wa(l) {
    ee === null ? ee = [l] : ee.push(l);
  }
  var Ci = o(null), He = null, Yt = null;
  function ue(l, t, e) {
    O(Ci, t._currentValue), t._currentValue = e;
  }
  function Gt(l) {
    l._currentValue = Ci.current, x(Ci);
  }
  function qi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Bi(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), qi(
                n.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(r(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), qi(i, e, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function oa(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          ut(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === il.current) {
        if (i = u.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(zu) : l = [zu]);
      }
      u = u.return;
    }
    l !== null && Bi(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function $u(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ut(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ce(l) {
    He = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Gl(l) {
    return Ns(He, l);
  }
  function Fu(l, t) {
    return He === null && Ce(l), Ns(l, t);
  }
  function Ns(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Yt === null) {
      if (l === null) throw Error(r(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return e;
  }
  var Vm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, Km = g.unstable_scheduleCallback, Jm = g.unstable_NormalPriority, Nl = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yi() {
    return {
      controller: new Vm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $a(l) {
    l.refCount--, l.refCount === 0 && Km(Jm, function() {
      l.controller.abort();
    });
  }
  var Fa = null, Gi = 0, da = 0, ra = null;
  function wm(l, t) {
    if (Fa === null) {
      var e = Fa = [];
      Gi = 0, da = Zc(), ra = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Gi++, t.then(Ms, Ms), t;
  }
  function Ms() {
    if (--Gi === 0 && Fa !== null) {
      ra !== null && (ra.status = "fulfilled");
      var l = Fa;
      Fa = null, da = 0, ra = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Wm(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var u = 0; u < e.length; u++) (0, e[u])(t);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var Ds = z.S;
  z.S = function(l, t) {
    yd = tt(), typeof t == "object" && t !== null && typeof t.then == "function" && wm(l, t), Ds !== null && Ds(l, t);
  };
  var qe = o(null);
  function Xi() {
    var l = qe.current;
    return l !== null ? l : bl.pooledCache;
  }
  function ku(l, t) {
    t === null ? O(qe, qe.current) : O(qe, t.pool);
  }
  function js() {
    var l = Xi();
    return l === null ? null : { parent: Nl._currentValue, pool: l };
  }
  var ma = Error(r(460)), Qi = Error(r(474)), Iu = Error(r(542)), Pu = { then: function() {
  } };
  function Us(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Rs(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ht, Ht), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Cs(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = bl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Cs(l), l;
        }
        throw Ye = t, ma;
    }
  }
  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ye = e, ma) : e;
    }
  }
  var Ye = null;
  function Hs() {
    if (Ye === null) throw Error(r(459));
    var l = Ye;
    return Ye = null, l;
  }
  function Cs(l) {
    if (l === ma || l === Iu)
      throw Error(r(483));
  }
  var ya = null, ka = 0;
  function ln(l) {
    var t = ka;
    return ka += 1, ya === null && (ya = []), Rs(ya, l, t);
  }
  function Ia(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function tn(l, t) {
    throw t.$$typeof === I ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function qs(l) {
    function t(d, s) {
      if (l) {
        var m = d.deletions;
        m === null ? (d.deletions = [s], d.flags |= 16) : m.push(s);
      }
    }
    function e(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function a(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function u(d, s) {
      return d = qt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, m) {
      return d.index = m, l ? (m = d.alternate, m !== null ? (m = m.index, m < s ? (d.flags |= 67108866, s) : m) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function i(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, m, E) {
      return s === null || s.tag !== 6 ? (s = Mi(m, d.mode, E), s.return = d, s) : (s = u(s, m), s.return = d, s);
    }
    function f(d, s, m, E) {
      var H = m.type;
      return H === Ul ? S(
        d,
        s,
        m.props.children,
        E,
        m.key
      ) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Kl && Be(H) === s.type) ? (s = u(s, m.props), Ia(s, m), s.return = d, s) : (s = wu(
        m.type,
        m.key,
        m.props,
        null,
        d.mode,
        E
      ), Ia(s, m), s.return = d, s);
    }
    function y(d, s, m, E) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = Di(m, d.mode, E), s.return = d, s) : (s = u(s, m.children || []), s.return = d, s);
    }
    function S(d, s, m, E, H) {
      return s === null || s.tag !== 7 ? (s = Ue(
        m,
        d.mode,
        E,
        H
      ), s.return = d, s) : (s = u(s, m), s.return = d, s);
    }
    function T(d, s, m) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Mi(
          "" + s,
          d.mode,
          m
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case vl:
            return m = wu(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              m
            ), Ia(m, s), m.return = d, m;
          case zl:
            return s = Di(
              s,
              d.mode,
              m
            ), s.return = d, s;
          case Kl:
            return s = Be(s), T(d, s, m);
        }
        if (zt(s) || Jl(s))
          return s = Ue(
            s,
            d.mode,
            m,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return T(d, ln(s), m);
        if (s.$$typeof === P)
          return T(
            d,
            Fu(d, s),
            m
          );
        tn(d, s);
      }
      return null;
    }
    function v(d, s, m, E) {
      var H = s !== null ? s.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return H !== null ? null : c(d, s, "" + m, E);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vl:
            return m.key === H ? f(d, s, m, E) : null;
          case zl:
            return m.key === H ? y(d, s, m, E) : null;
          case Kl:
            return m = Be(m), v(d, s, m, E);
        }
        if (zt(m) || Jl(m))
          return H !== null ? null : S(d, s, m, E, null);
        if (typeof m.then == "function")
          return v(
            d,
            s,
            ln(m),
            E
          );
        if (m.$$typeof === P)
          return v(
            d,
            s,
            Fu(d, m),
            E
          );
        tn(d, m);
      }
      return null;
    }
    function b(d, s, m, E, H) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return d = d.get(m) || null, c(s, d, "" + E, H);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case vl:
            return d = d.get(
              E.key === null ? m : E.key
            ) || null, f(s, d, E, H);
          case zl:
            return d = d.get(
              E.key === null ? m : E.key
            ) || null, y(s, d, E, H);
          case Kl:
            return E = Be(E), b(
              d,
              s,
              m,
              E,
              H
            );
        }
        if (zt(E) || Jl(E))
          return d = d.get(m) || null, S(s, d, E, H, null);
        if (typeof E.then == "function")
          return b(
            d,
            s,
            m,
            ln(E),
            H
          );
        if (E.$$typeof === P)
          return b(
            d,
            s,
            m,
            Fu(s, E),
            H
          );
        tn(s, E);
      }
      return null;
    }
    function M(d, s, m, E) {
      for (var H = null, al = null, j = s, Z = s = 0, k = null; j !== null && Z < m.length; Z++) {
        j.index > Z ? (k = j, j = null) : k = j.sibling;
        var ul = v(
          d,
          j,
          m[Z],
          E
        );
        if (ul === null) {
          j === null && (j = k);
          break;
        }
        l && j && ul.alternate === null && t(d, j), s = n(ul, s, Z), al === null ? H = ul : al.sibling = ul, al = ul, j = k;
      }
      if (Z === m.length)
        return e(d, j), ll && Bt(d, Z), H;
      if (j === null) {
        for (; Z < m.length; Z++)
          j = T(d, m[Z], E), j !== null && (s = n(
            j,
            s,
            Z
          ), al === null ? H = j : al.sibling = j, al = j);
        return ll && Bt(d, Z), H;
      }
      for (j = a(j); Z < m.length; Z++)
        k = b(
          j,
          d,
          Z,
          m[Z],
          E
        ), k !== null && (l && k.alternate !== null && j.delete(
          k.key === null ? Z : k.key
        ), s = n(
          k,
          s,
          Z
        ), al === null ? H = k : al.sibling = k, al = k);
      return l && j.forEach(function(Ee) {
        return t(d, Ee);
      }), ll && Bt(d, Z), H;
    }
    function C(d, s, m, E) {
      if (m == null) throw Error(r(151));
      for (var H = null, al = null, j = s, Z = s = 0, k = null, ul = m.next(); j !== null && !ul.done; Z++, ul = m.next()) {
        j.index > Z ? (k = j, j = null) : k = j.sibling;
        var Ee = v(d, j, ul.value, E);
        if (Ee === null) {
          j === null && (j = k);
          break;
        }
        l && j && Ee.alternate === null && t(d, j), s = n(Ee, s, Z), al === null ? H = Ee : al.sibling = Ee, al = Ee, j = k;
      }
      if (ul.done)
        return e(d, j), ll && Bt(d, Z), H;
      if (j === null) {
        for (; !ul.done; Z++, ul = m.next())
          ul = T(d, ul.value, E), ul !== null && (s = n(ul, s, Z), al === null ? H = ul : al.sibling = ul, al = ul);
        return ll && Bt(d, Z), H;
      }
      for (j = a(j); !ul.done; Z++, ul = m.next())
        ul = b(j, d, Z, ul.value, E), ul !== null && (l && ul.alternate !== null && j.delete(ul.key === null ? Z : ul.key), s = n(ul, s, Z), al === null ? H = ul : al.sibling = ul, al = ul);
      return l && j.forEach(function(nh) {
        return t(d, nh);
      }), ll && Bt(d, Z), H;
    }
    function hl(d, s, m, E) {
      if (typeof m == "object" && m !== null && m.type === Ul && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case vl:
            l: {
              for (var H = m.key; s !== null; ) {
                if (s.key === H) {
                  if (H = m.type, H === Ul) {
                    if (s.tag === 7) {
                      e(
                        d,
                        s.sibling
                      ), E = u(
                        s,
                        m.props.children
                      ), E.return = d, d = E;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Kl && Be(H) === s.type) {
                    e(
                      d,
                      s.sibling
                    ), E = u(s, m.props), Ia(E, m), E.return = d, d = E;
                    break l;
                  }
                  e(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              m.type === Ul ? (E = Ue(
                m.props.children,
                d.mode,
                E,
                m.key
              ), E.return = d, d = E) : (E = wu(
                m.type,
                m.key,
                m.props,
                null,
                d.mode,
                E
              ), Ia(E, m), E.return = d, d = E);
            }
            return i(d);
          case zl:
            l: {
              for (H = m.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                    e(
                      d,
                      s.sibling
                    ), E = u(s, m.children || []), E.return = d, d = E;
                    break l;
                  } else {
                    e(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              E = Di(m, d.mode, E), E.return = d, d = E;
            }
            return i(d);
          case Kl:
            return m = Be(m), hl(
              d,
              s,
              m,
              E
            );
        }
        if (zt(m))
          return M(
            d,
            s,
            m,
            E
          );
        if (Jl(m)) {
          if (H = Jl(m), typeof H != "function") throw Error(r(150));
          return m = H.call(m), C(
            d,
            s,
            m,
            E
          );
        }
        if (typeof m.then == "function")
          return hl(
            d,
            s,
            ln(m),
            E
          );
        if (m.$$typeof === P)
          return hl(
            d,
            s,
            Fu(d, m),
            E
          );
        tn(d, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, s !== null && s.tag === 6 ? (e(d, s.sibling), E = u(s, m), E.return = d, d = E) : (e(d, s), E = Mi(m, d.mode, E), E.return = d, d = E), i(d)) : e(d, s);
    }
    return function(d, s, m, E) {
      try {
        ka = 0;
        var H = hl(
          d,
          s,
          m,
          E
        );
        return ya = null, H;
      } catch (j) {
        if (j === ma || j === Iu) throw j;
        var al = nt(29, j, null, d.mode);
        return al.lanes = E, al.return = d, al;
      }
    };
  }
  var Ge = qs(!0), Bs = qs(!1), ne = !1;
  function Zi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Li(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ie(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ce(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (nl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Ju(l), ps(l, null, e), t;
    }
    return Ku(l, a, t, e), Ju(l);
  }
  function Pa(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Nf(l, e);
    }
  }
  function Vi(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var Ki = !1;
  function lu() {
    if (Ki) {
      var l = ra;
      if (l !== null) throw l;
    }
  }
  function tu(l, t, e, a) {
    Ki = !1;
    var u = l.updateQueue;
    ne = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, y = f.next;
      f.next = null, i === null ? n = y : i.next = y, i = f;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = y : c.next = y, S.lastBaseUpdate = f));
    }
    if (n !== null) {
      var T = u.baseState;
      i = 0, S = y = f = null, c = n;
      do {
        var v = c.lane & -536870913, b = v !== c.lane;
        if (b ? (F & v) === v : (a & v) === v) {
          v !== 0 && v === da && (Ki = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, C = c;
            v = t;
            var hl = e;
            switch (C.tag) {
              case 1:
                if (M = C.payload, typeof M == "function") {
                  T = M.call(hl, T, v);
                  break l;
                }
                T = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = C.payload, v = typeof M == "function" ? M.call(hl, T, v) : M, v == null) break l;
                T = U({}, T, v);
                break l;
              case 2:
                ne = !0;
            }
          }
          v = c.callback, v !== null && (l.flags |= 64, b && (l.flags |= 8192), b = u.callbacks, b === null ? u.callbacks = [v] : b.push(v));
        } else
          b = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (y = S = b, f = T) : S = S.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null;
        }
      } while (!0);
      S === null && (f = T), u.baseState = f, u.firstBaseUpdate = y, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), re |= i, l.lanes = i, l.memoizedState = T;
    }
  }
  function Ys(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function Gs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Ys(e[l], t);
  }
  var ha = o(null), en = o(0);
  function Xs(l, t) {
    l = Wt, O(en, l), O(ha, t), Wt = l | t.baseLanes;
  }
  function Ji() {
    O(en, Wt), O(ha, ha.current);
  }
  function wi() {
    Wt = en.current, x(ha), x(en);
  }
  var it = o(null), bt = null;
  function fe(l) {
    var t = l.alternate;
    O(Ol, Ol.current & 1), O(it, l), bt === null && (t === null || ha.current !== null || t.memoizedState !== null) && (bt = l);
  }
  function Wi(l) {
    O(Ol, Ol.current), O(it, l), bt === null && (bt = l);
  }
  function Qs(l) {
    l.tag === 22 ? (O(Ol, Ol.current), O(it, l), bt === null && (bt = l)) : se();
  }
  function se() {
    O(Ol, Ol.current), O(it, it.current);
  }
  function ct(l) {
    x(it), bt === l && (bt = null), x(Ol);
  }
  var Ol = o(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || lf(e) || tf(e)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Xt = 0, Q = null, ml = null, Ml = null, un = !1, va = !1, Xe = !1, nn = 0, eu = 0, ga = null, $m = 0;
  function Tl() {
    throw Error(r(321));
  }
  function $i(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ut(l[e], t[e])) return !1;
    return !0;
  }
  function Fi(l, t, e, a, u, n) {
    return Xt = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? Ao : dc, Xe = !1, n = e(a, u), Xe = !1, va && (n = Ls(
      t,
      e,
      a,
      u
    )), Zs(l), n;
  }
  function Zs(l) {
    z.H = nu;
    var t = ml !== null && ml.next !== null;
    if (Xt = 0, Ml = ml = Q = null, un = !1, eu = 0, ga = null, t) throw Error(r(300));
    l === null || Dl || (l = l.dependencies, l !== null && $u(l) && (Dl = !0));
  }
  function Ls(l, t, e, a) {
    Q = l;
    var u = 0;
    do {
      if (va && (ga = null), eu = 0, va = !1, 25 <= u) throw Error(r(301));
      if (u += 1, Ml = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = Oo, n = t(e, a);
    } while (va);
    return n;
  }
  function Fm() {
    var l = z.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? au(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function ki() {
    var l = nn !== 0;
    return nn = 0, l;
  }
  function Ii(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function Pi(l) {
    if (un) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      un = !1;
    }
    Xt = 0, Ml = ml = Q = null, va = !1, eu = nn = 0, ga = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? Q.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function _l() {
    if (ml === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Ml === null ? Q.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, ml = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(r(467)) : Error(r(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Ml === null ? Q.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function cn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function au(l) {
    var t = eu;
    return eu += 1, ga === null && (ga = []), l = Rs(ga, l, t), t = Q, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Ao : dc), l;
  }
  function fn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return au(l);
      if (l.$$typeof === P) return Gl(l);
    }
    throw Error(r(438, String(l)));
  }
  function lc(l) {
    var t = null, e = Q.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = cn(), Q.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = Je;
    return t.index++, e;
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function sn(l) {
    var t = _l();
    return tc(t, ml, l);
  }
  function tc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, f = null, y = t, S = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (F & T) === T : (Xt & T) === T) {
          var v = y.revertLane;
          if (v === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), T === da && (S = !0);
          else if ((Xt & v) === v) {
            y = y.next, v === da && (S = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, f === null ? (c = f = T, i = n) : f = f.next = T, Q.lanes |= v, re |= v;
          T = y.action, Xe && e(n, T), n = y.hasEagerState ? y.eagerState : e(n, T);
        } else
          v = {
            lane: T,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, f === null ? (c = f = v, i = n) : f = f.next = v, Q.lanes |= T, re |= T;
        y = y.next;
      } while (y !== null && y !== t);
      if (f === null ? i = n : f.next = c, !ut(n, l.memoizedState) && (Dl = !0, S && (e = ra, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function ec(l) {
    var t = _l(), e = t.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      ut(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Vs(l, t, e) {
    var a = Q, u = _l(), n = ll;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = t();
    var i = !ut(
      (ml || u).memoizedState,
      e
    );
    if (i && (u.memoizedState = e, Dl = !0), u = u.queue, nc(ws.bind(null, a, u, l), [
      l
    ]), u.getSnapshot !== t || i || Ml !== null && Ml.memoizedState.tag & 1) {
      if (a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        Js.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), bl === null) throw Error(r(349));
      n || (Xt & 127) !== 0 || Ks(a, t, e);
    }
    return e;
  }
  function Ks(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = Q.updateQueue, t === null ? (t = cn(), Q.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Js(l, t, e, a) {
    t.value = e, t.getSnapshot = a, Ws(t) && $s(l);
  }
  function ws(l, t, e) {
    return e(function() {
      Ws(t) && $s(l);
    });
  }
  function Ws(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ut(l, e);
    } catch {
      return !0;
    }
  }
  function $s(l) {
    var t = je(l, 2);
    t !== null && Pl(t, l, 2);
  }
  function ac(l) {
    var t = Vl();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Xe) {
        It(!0);
        try {
          e();
        } finally {
          It(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: l
    }, t;
  }
  function Fs(l, t, e, a) {
    return l.baseState = e, tc(
      l,
      ml,
      typeof a == "function" ? a : Qt
    );
  }
  function km(l, t, e, a, u) {
    if (rn(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      z.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, ks(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function ks(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = z.T, i = {};
      z.T = i;
      try {
        var c = e(u, a), f = z.S;
        f !== null && f(i, c), Is(l, t, c);
      } catch (y) {
        uc(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), z.T = n;
      }
    } else
      try {
        n = e(u, a), Is(l, t, n);
      } catch (y) {
        uc(l, t, y);
      }
  }
  function Is(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        Ps(l, t, a);
      },
      function(a) {
        return uc(l, t, a);
      }
    ) : Ps(l, t, e);
  }
  function Ps(l, t, e) {
    t.status = "fulfilled", t.value = e, lo(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ks(l, e)));
  }
  function uc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, lo(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function lo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function to(l, t) {
    return t;
  }
  function eo(l, t) {
    if (ll) {
      var e = bl.formState;
      if (e !== null) {
        l: {
          var a = Q;
          if (ll) {
            if (Sl) {
              t: {
                for (var u = Sl, n = gt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = St(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                Sl = St(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            ae(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = Vl(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: to,
      lastRenderedState: t
    }, e.queue = a, e = Eo.bind(
      null,
      Q,
      a
    ), a.dispatch = e, a = ac(!1), n = oc.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = Vl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = km.bind(
      null,
      Q,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function ao(l) {
    var t = _l();
    return uo(t, ml, l);
  }
  function uo(l, t, e) {
    if (t = tc(
      l,
      t,
      to
    )[0], l = sn(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = au(t);
      } catch (i) {
        throw i === ma ? Iu : i;
      }
    else a = t;
    t = _l();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (Q.flags |= 2048, ba(
      9,
      { destroy: void 0 },
      Im.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function Im(l, t) {
    l.action = t;
  }
  function no(l) {
    var t = _l(), e = ml;
    if (e !== null)
      return uo(t, e, l);
    _l(), t = t.memoizedState, e = _l();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function ba(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = cn(), Q.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function io() {
    return _l().memoizedState;
  }
  function on(l, t, e, a) {
    var u = Vl();
    Q.flags |= l, u.memoizedState = ba(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function dn(l, t, e, a) {
    var u = _l();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ml !== null && a !== null && $i(a, ml.memoizedState.deps) ? u.memoizedState = ba(t, n, e, a) : (Q.flags |= l, u.memoizedState = ba(
      1 | t,
      n,
      e,
      a
    ));
  }
  function co(l, t) {
    on(8390656, 8, l, t);
  }
  function nc(l, t) {
    dn(2048, 8, l, t);
  }
  function Pm(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null)
      t = cn(), Q.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function fo(l) {
    var t = _l().memoizedState;
    return Pm({ ref: t, nextImpl: l }), function() {
      if ((nl & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function so(l, t) {
    return dn(4, 2, l, t);
  }
  function oo(l, t) {
    return dn(4, 4, l, t);
  }
  function ro(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function mo(l, t, e) {
    e = e != null ? e.concat([l]) : null, dn(4, 4, ro.bind(null, t, l), e);
  }
  function ic() {
  }
  function yo(l, t) {
    var e = _l();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && $i(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function ho(l, t) {
    var e = _l();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && $i(t, a[1]))
      return a[0];
    if (a = l(), Xe) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function cc(l, t, e) {
    return e === void 0 || (Xt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = vd(), Q.lanes |= l, re |= l, e);
  }
  function vo(l, t, e, a) {
    return ut(e, t) ? e : ha.current !== null ? (l = cc(l, e, a), ut(l, t) || (Dl = !0), l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (F & 261930) === 0 ? (Dl = !0, l.memoizedState = e) : (l = vd(), Q.lanes |= l, re |= l, t);
  }
  function go(l, t, e, a, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = z.T, c = {};
    z.T = c, oc(l, !1, t, e);
    try {
      var f = u(), y = z.S;
      if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var S = Wm(
          f,
          a
        );
        uu(
          l,
          t,
          S,
          ot(l)
        );
      } else
        uu(
          l,
          t,
          a,
          ot(l)
        );
    } catch (T) {
      uu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        ot()
      );
    } finally {
      A.p = n, i !== null && c.types !== null && (i.types = c.types), z.T = i;
    }
  }
  function ly() {
  }
  function fc(l, t, e, a) {
    if (l.tag !== 5) throw Error(r(476));
    var u = bo(l).queue;
    go(
      l,
      u,
      t,
      Y,
      e === null ? ly : function() {
        return So(l), e(a);
      }
    );
  }
  function bo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: Y
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function So(l) {
    var t = bo(l);
    t.next === null && (t = l.alternate.memoizedState), uu(
      l,
      t.next.queue,
      {},
      ot()
    );
  }
  function sc() {
    return Gl(zu);
  }
  function po() {
    return _l().memoizedState;
  }
  function zo() {
    return _l().memoizedState;
  }
  function ty(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = ot();
          l = ie(e);
          var a = ce(t, l, e);
          a !== null && (Pl(a, t, e), Pa(a, t, e)), t = { cache: Yi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ey(l, t, e) {
    var a = ot();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, rn(l) ? To(t, e) : (e = _i(l, t, e, a), e !== null && (Pl(e, l, a), xo(e, t, a)));
  }
  function Eo(l, t, e) {
    var a = ot();
    uu(l, t, e, a);
  }
  function uu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (rn(l)) To(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, e);
          if (u.hasEagerState = !0, u.eagerState = c, ut(c, i))
            return Ku(l, t, u, 0), bl === null && Vu(), !1;
        } catch {
        }
      if (e = _i(l, t, u, a), e !== null)
        return Pl(e, l, a), xo(e, t, a), !0;
    }
    return !1;
  }
  function oc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Zc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, rn(l)) {
      if (t) throw Error(r(479));
    } else
      t = _i(
        l,
        e,
        a,
        2
      ), t !== null && Pl(t, l, 2);
  }
  function rn(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function To(l, t) {
    va = un = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function xo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Nf(l, e);
    }
  }
  var nu = {
    readContext: Gl,
    use: fn,
    useCallback: Tl,
    useContext: Tl,
    useEffect: Tl,
    useImperativeHandle: Tl,
    useLayoutEffect: Tl,
    useInsertionEffect: Tl,
    useMemo: Tl,
    useReducer: Tl,
    useRef: Tl,
    useState: Tl,
    useDebugValue: Tl,
    useDeferredValue: Tl,
    useTransition: Tl,
    useSyncExternalStore: Tl,
    useId: Tl,
    useHostTransitionStatus: Tl,
    useFormState: Tl,
    useActionState: Tl,
    useOptimistic: Tl,
    useMemoCache: Tl,
    useCacheRefresh: Tl
  };
  nu.useEffectEvent = Tl;
  var Ao = {
    readContext: Gl,
    use: fn,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Gl,
    useEffect: co,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, on(
        4194308,
        4,
        ro.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return on(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      on(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = Vl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Xe) {
        It(!0);
        try {
          l();
        } finally {
          It(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = Vl();
      if (e !== void 0) {
        var u = e(t);
        if (Xe) {
          It(!0);
          try {
            e(t);
          } finally {
            It(!1);
          }
        }
      } else u = t;
      return a.memoizedState = a.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, a.queue = l, l = l.dispatch = ey.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = ac(l);
      var t = l.queue, e = Eo.bind(null, Q, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: ic,
    useDeferredValue: function(l, t) {
      var e = Vl();
      return cc(e, l, t);
    },
    useTransition: function() {
      var l = ac(!1);
      return l = go.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = Q, u = Vl();
      if (ll) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = t(), bl === null)
          throw Error(r(349));
        (F & 127) !== 0 || Ks(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, co(ws.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ba(
        9,
        { destroy: void 0 },
        Js.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = Vl(), t = bl.identifierPrefix;
      if (ll) {
        var e = Nt, a = _t;
        e = (a & ~(1 << 32 - at(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = nn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = $m++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: sc,
    useFormState: eo,
    useActionState: eo,
    useOptimistic: function(l) {
      var t = Vl();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = oc.bind(
        null,
        Q,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: lc,
    useCacheRefresh: function() {
      return Vl().memoizedState = ty.bind(
        null,
        Q
      );
    },
    useEffectEvent: function(l) {
      var t = Vl(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((nl & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, dc = {
    readContext: Gl,
    use: fn,
    useCallback: yo,
    useContext: Gl,
    useEffect: nc,
    useImperativeHandle: mo,
    useInsertionEffect: so,
    useLayoutEffect: oo,
    useMemo: ho,
    useReducer: sn,
    useRef: io,
    useState: function() {
      return sn(Qt);
    },
    useDebugValue: ic,
    useDeferredValue: function(l, t) {
      var e = _l();
      return vo(
        e,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = sn(Qt)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : au(l),
        t
      ];
    },
    useSyncExternalStore: Vs,
    useId: po,
    useHostTransitionStatus: sc,
    useFormState: ao,
    useActionState: ao,
    useOptimistic: function(l, t) {
      var e = _l();
      return Fs(e, ml, l, t);
    },
    useMemoCache: lc,
    useCacheRefresh: zo
  };
  dc.useEffectEvent = fo;
  var Oo = {
    readContext: Gl,
    use: fn,
    useCallback: yo,
    useContext: Gl,
    useEffect: nc,
    useImperativeHandle: mo,
    useInsertionEffect: so,
    useLayoutEffect: oo,
    useMemo: ho,
    useReducer: ec,
    useRef: io,
    useState: function() {
      return ec(Qt);
    },
    useDebugValue: ic,
    useDeferredValue: function(l, t) {
      var e = _l();
      return ml === null ? cc(e, l, t) : vo(
        e,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ec(Qt)[0], t = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : au(l),
        t
      ];
    },
    useSyncExternalStore: Vs,
    useId: po,
    useHostTransitionStatus: sc,
    useFormState: no,
    useActionState: no,
    useOptimistic: function(l, t) {
      var e = _l();
      return ml !== null ? Fs(e, ml, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: lc,
    useCacheRefresh: zo
  };
  Oo.useEffectEvent = fo;
  function rc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : U({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var mc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = ot(), u = ie(a);
      u.payload = t, e != null && (u.callback = e), t = ce(l, u, a), t !== null && (Pl(t, l, a), Pa(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = ot(), u = ie(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = ce(l, u, a), t !== null && (Pl(t, l, a), Pa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = ot(), a = ie(e);
      a.tag = 2, t != null && (a.callback = t), t = ce(l, a, e), t !== null && (Pl(t, l, e), Pa(t, l, e));
    }
  };
  function _o(l, t, e, a, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(u, n) : !0;
  }
  function No(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && mc.enqueueReplaceState(t, t.state, null);
  }
  function Qe(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = U({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Mo(l) {
    Lu(l);
  }
  function Do(l) {
    console.error(l);
  }
  function jo(l) {
    Lu(l);
  }
  function mn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Uo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function yc(l, t, e) {
    return e = ie(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      mn(l, t);
    }, e;
  }
  function Ro(l) {
    return l = ie(l), l.tag = 3, l;
  }
  function Ho(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Uo(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Uo(t, e, a), typeof u != "function" && (me === null ? me = /* @__PURE__ */ new Set([this]) : me.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function ay(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && oa(
        t,
        e,
        u,
        !0
      ), e = it.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return bt === null ? An() : e.alternate === null && xl === 0 && (xl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Pu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Gc(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === Pu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Gc(l, a, u)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return Gc(l, a, u), An(), !1;
    }
    if (ll)
      return t = it.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Ri && (l = Error(r(422), { cause: a }), Wa(yt(l, e)))) : (a !== Ri && (t = Error(r(423), {
        cause: a
      }), Wa(
        yt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = yt(a, e), u = yc(
        l.stateNode,
        a,
        u
      ), Vi(l, u), xl !== 4 && (xl = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = yt(n, e), mu === null ? mu = [n] : mu.push(n), xl !== 4 && (xl = 2), t === null) return !0;
    a = yt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = yc(e.stateNode, a, l), Vi(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (me === null || !me.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Ro(u), Ho(
              u,
              l,
              e,
              a
            ), Vi(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var hc = Error(r(461)), Dl = !1;
  function Xl(l, t, e, a) {
    t.child = l === null ? Bs(t, null, e, a) : Ge(
      t,
      l.child,
      e,
      a
    );
  }
  function Co(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Ce(t), a = Fi(
      l,
      t,
      e,
      i,
      n,
      u
    ), c = ki(), l !== null && !Dl ? (Ii(l, t, u), Zt(l, t, u)) : (ll && c && ji(t), t.flags |= 1, Xl(l, t, a, u), t.child);
  }
  function qo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Ni(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Bo(
        l,
        t,
        n,
        a,
        u
      )) : (l = wu(
        e.type,
        null,
        a,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Tc(l, u)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ka, e(i, a) && l.ref === t.ref)
        return Zt(l, t, u);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Bo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ka(n, a) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = a = n, Tc(l, u))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, Zt(l, t, u);
    }
    return vc(
      l,
      t,
      e,
      a,
      u
    );
  }
  function Yo(l, t, e, a) {
    var u = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, t.child = null;
        return Go(
          l,
          t,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ku(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Xs(t, n) : Ji(), Qs(t);
      else
        return a = t.lanes = 536870912, Go(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (ku(t, n.cachePool), Xs(t, n), se(), t.memoizedState = null) : (l !== null && ku(t, null), Ji(), se());
    return Xl(l, t, u, e), t.child;
  }
  function iu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Go(l, t, e, a, u) {
    var n = Xi();
    return n = n === null ? null : { parent: Nl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && ku(t, null), Ji(), Qs(t), l !== null && oa(l, t, a, !0), t.childLanes = u, null;
  }
  function yn(l, t) {
    return t = vn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Xo(l, t, e) {
    return Ge(t, l.child, null, e), l = yn(t, t.pendingProps), l.flags |= 2, ct(t), t.memoizedState = null, l;
  }
  function uy(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ll) {
        if (a.mode === "hidden")
          return l = yn(t, a), t.lanes = 536870912, iu(null, l);
        if (Wi(t), (l = Sl) ? (l = Id(
          l,
          gt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: te !== null ? { id: _t, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Es(l), e.return = t, t.child = e, Yl = t, Sl = null)) : l = null, l === null) throw ae(t);
        return t.lanes = 536870912, null;
      }
      return yn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Wi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Xo(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Dl || oa(l, t, e, !1), u = (e & l.childLanes) !== 0, Dl || u) {
        if (a = bl, a !== null && (i = Mf(a, e), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, je(l, i), Pl(a, l, i), hc;
        An(), t = Xo(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, Sl = St(i.nextSibling), Yl = t, ll = !0, ee = null, gt = !1, l !== null && As(t, l), t = yn(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function hn(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function vc(l, t, e, a, u) {
    return Ce(t), e = Fi(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = ki(), l !== null && !Dl ? (Ii(l, t, u), Zt(l, t, u)) : (ll && a && ji(t), t.flags |= 1, Xl(l, t, e, u), t.child);
  }
  function Qo(l, t, e, a, u, n) {
    return Ce(t), t.updateQueue = null, e = Ls(
      t,
      a,
      e,
      u
    ), Zs(l), a = ki(), l !== null && !Dl ? (Ii(l, t, n), Zt(l, t, n)) : (ll && a && ji(t), t.flags |= 1, Xl(l, t, e, n), t.child);
  }
  function Zo(l, t, e, a, u) {
    if (Ce(t), t.stateNode === null) {
      var n = ia, i = e.contextType;
      typeof i == "object" && i !== null && (n = Gl(i)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = mc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Zi(t), i = e.contextType, n.context = typeof i == "object" && i !== null ? Gl(i) : ia, n.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (rc(
        t,
        e,
        i,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && mc.enqueueReplaceState(n, n.state, null), tu(t, a, n, u), lu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = Qe(e, c);
      n.props = f;
      var y = n.context, S = e.contextType;
      i = ia, typeof S == "object" && S !== null && (i = Gl(S));
      var T = e.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && No(
        t,
        n,
        a,
        i
      ), ne = !1;
      var v = t.memoizedState;
      n.state = v, tu(t, a, n, u), lu(), y = t.memoizedState, c || v !== y || ne ? (typeof T == "function" && (rc(
        t,
        e,
        T,
        a
      ), y = t.memoizedState), (f = ne || _o(
        t,
        e,
        f,
        a,
        v,
        y,
        i
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), n.props = a, n.state = y, n.context = i, a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Li(l, t), i = t.memoizedProps, S = Qe(e, i), n.props = S, T = t.pendingProps, v = n.context, y = e.contextType, f = ia, typeof y == "object" && y !== null && (f = Gl(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== T || v !== f) && No(
        t,
        n,
        a,
        f
      ), ne = !1, v = t.memoizedState, n.state = v, tu(t, a, n, u), lu();
      var b = t.memoizedState;
      i !== T || v !== b || ne || l !== null && l.dependencies !== null && $u(l.dependencies) ? (typeof c == "function" && (rc(
        t,
        e,
        c,
        a
      ), b = t.memoizedState), (S = ne || _o(
        t,
        e,
        S,
        a,
        v,
        b,
        f
      ) || l !== null && l.dependencies !== null && $u(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        b,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), n.props = a, n.state = b, n.context = f, a = S) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, hn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Ge(
      t,
      l.child,
      null,
      u
    ), t.child = Ge(
      t,
      null,
      e,
      u
    )) : Xl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Zt(
      l,
      t,
      u
    ), l;
  }
  function Lo(l, t, e, a) {
    return Re(), t.flags |= 256, Xl(l, t, e, a), t.child;
  }
  var gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(l) {
    return { baseLanes: l, cachePool: js() };
  }
  function Sc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= st), l;
  }
  function Vo(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ll) {
        if (u ? fe(t) : se(), (l = Sl) ? (l = Id(
          l,
          gt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: te !== null ? { id: _t, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Es(l), e.return = t, t.child = e, Yl = t, Sl = null)) : l = null, l === null) throw ae(t);
        return tf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, u ? (se(), u = t.mode, c = vn(
        { mode: "hidden", children: c },
        u
      ), a = Ue(
        a,
        u,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = bc(e), a.childLanes = Sc(
        l,
        i,
        e
      ), t.memoizedState = gc, iu(null, a)) : (fe(t), pc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (fe(t), t.flags &= -257, t = zc(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (se(), t.child = l.child, t.flags |= 128, t = null) : (se(), c = a.fallback, u = t.mode, a = vn(
          { mode: "visible", children: a.children },
          u
        ), c = Ue(
          c,
          u,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Ge(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = bc(e), a.childLanes = Sc(
          l,
          i,
          e
        ), t.memoizedState = gc, t = iu(null, a));
      else if (fe(t), tf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(r(419)), a.stack = "", a.digest = i, Wa({ value: a, source: null, stack: null }), t = zc(
          l,
          t,
          e
        );
      } else if (Dl || oa(l, t, e, !1), i = (e & l.childLanes) !== 0, Dl || i) {
        if (i = bl, i !== null && (a = Mf(i, e), a !== 0 && a !== f.retryLane))
          throw f.retryLane = a, je(l, a), Pl(i, l, a), hc;
        lf(c) || An(), t = zc(
          l,
          t,
          e
        );
      } else
        lf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, Sl = St(
          c.nextSibling
        ), Yl = t, ll = !0, ee = null, gt = !1, l !== null && As(t, l), t = pc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (se(), c = a.fallback, u = t.mode, f = l.child, y = f.sibling, a = qt(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? c = qt(
      y,
      c
    ) : (c = Ue(
      c,
      u,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, iu(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = bc(e) : (u = c.cachePool, u !== null ? (f = Nl._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = js(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: u
    }), a.memoizedState = c, a.childLanes = Sc(
      l,
      i,
      e
    ), t.memoizedState = gc, iu(l.child, a)) : (fe(t), e = l.child, l = e.sibling, e = qt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function pc(l, t) {
    return t = vn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function vn(l, t) {
    return l = nt(22, l, null, t), l.lanes = 0, l;
  }
  function zc(l, t, e) {
    return Ge(t, l.child, null, e), l = pc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Ko(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qi(l.return, t, e);
  }
  function Ec(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = u, i.treeForkCount = n);
  }
  function Jo(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var i = Ol.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(Ol, i), Xl(l, t, a, e), a = ll ? wa : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Ko(l, e, t);
        else if (l.tag === 19)
          Ko(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          l = e.alternate, l !== null && an(l) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), Ec(
          t,
          !1,
          u,
          e,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && an(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        Ec(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        Ec(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Zt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), re |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (oa(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, e = qt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = qt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Tc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && $u(l)));
  }
  function ny(l, t, e) {
    switch (t.tag) {
      case 3:
        Ll(t, t.stateNode.containerInfo), ue(t, Nl, l.memoizedState.cache), Re();
        break;
      case 27:
      case 5:
        Ua(t);
        break;
      case 4:
        Ll(t, t.stateNode.containerInfo);
        break;
      case 10:
        ue(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Wi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fe(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Vo(l, t, e) : (fe(t), l = Zt(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        fe(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (oa(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), u) {
          if (a)
            return Jo(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(Ol, Ol.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Yo(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        ue(t, Nl, l.memoizedState.cache);
    }
    return Zt(l, t, e);
  }
  function wo(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!Tc(l, e) && (t.flags & 128) === 0)
          return Dl = !1, ny(
            l,
            t,
            e
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, ll && (t.flags & 1048576) !== 0 && xs(t, wa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Be(t.elementType), t.type = l, typeof l == "function")
            Ni(l) ? (a = Qe(l, a), t.tag = 1, t = Zo(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = vc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === V) {
                t.tag = 11, t = Co(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === $) {
                t.tag = 14, t = qo(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = Ut(l) || l, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return vc(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, u = Qe(
          a,
          t.pendingProps
        ), Zo(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (Ll(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Li(l, t), tu(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ue(t, Nl, a), a !== n.cache && Bi(
            t,
            [Nl],
            e,
            !0
          ), lu(), a = i.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Lo(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== u) {
              u = yt(
                Error(r(424)),
                t
              ), Wa(u), t = Lo(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Sl = St(l.firstChild), Yl = t, ll = !0, ee = null, gt = !0, e = Bs(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Re(), a === u) {
              t = Zt(
                l,
                t,
                e
              );
              break l;
            }
            Xl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return hn(l, t), l === null ? (e = ur(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : ll || (e = t.type, l = t.pendingProps, a = Un(
          J.current
        ).createElement(e), a[Bl] = t, a[wl] = l, Ql(a, e, l), Hl(a), t.stateNode = a) : t.memoizedState = ur(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ua(t), l === null && ll && (a = t.stateNode = tr(
          t.type,
          t.pendingProps,
          J.current
        ), Yl = t, gt = !0, u = Sl, ge(t.type) ? (ef = u, Sl = St(a.firstChild)) : Sl = u), Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), hn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ll && ((u = a = Sl) && (a = Cy(
          a,
          t.type,
          t.pendingProps,
          gt
        ), a !== null ? (t.stateNode = a, Yl = t, Sl = St(a.firstChild), gt = !1, u = !0) : u = !1), u || ae(t)), Ua(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = n.children, kc(u, n) ? a = null : i !== null && kc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Fi(
          l,
          t,
          Fm,
          null,
          null,
          e
        ), zu._currentValue = u), hn(l, t), Xl(l, t, a, e), t.child;
      case 6:
        return l === null && ll && ((l = e = Sl) && (e = qy(
          e,
          t.pendingProps,
          gt
        ), e !== null ? (t.stateNode = e, Yl = t, Sl = null, l = !0) : l = !1), l || ae(t)), null;
      case 13:
        return Vo(l, t, e);
      case 4:
        return Ll(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Ge(
          t,
          null,
          a,
          e
        ) : Xl(l, t, a, e), t.child;
      case 11:
        return Co(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Xl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, ue(t, t.type, a.value), Xl(l, t, a.children, e), t.child;
      case 9:
        return u = t.type._context, a = t.pendingProps.children, Ce(t), u = Gl(u), a = a(u), t.flags |= 1, Xl(l, t, a, e), t.child;
      case 14:
        return qo(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Bo(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return Jo(l, t, e);
      case 31:
        return uy(l, t, e);
      case 22:
        return Yo(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return Ce(t), a = Gl(Nl), l === null ? (u = Xi(), u === null && (u = bl, n = Yi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, Zi(t), ue(t, Nl, u)) : ((l.lanes & e) !== 0 && (Li(l, t), tu(t, null, null, e), lu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ue(t, Nl, a)) : (a = n.cache, ue(t, Nl, a), a !== u.cache && Bi(
          t,
          [Nl],
          e,
          !0
        ))), Xl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function xc(l, t, e, a, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (pd()) l.flags |= 8192;
        else
          throw Ye = Pu, Qi;
    } else l.flags &= -16777217;
  }
  function Wo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !sr(t))
      if (pd()) l.flags |= 8192;
      else
        throw Ye = Pu, Qi;
  }
  function gn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Of() : 536870912, l.lanes |= t, Ea |= t);
  }
  function cu(l, t) {
    if (!ll)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function pl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function iy(l, t, e) {
    var a = t.pendingProps;
    switch (Ui(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pl(t), null;
      case 1:
        return pl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Gt(Nl), Al(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (sa(t) ? Lt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Hi())), pl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Lt(t), n !== null ? (pl(t), Wo(t, n)) : (pl(t), xc(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (Lt(t), pl(t), Wo(t, n)) : (pl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Lt(t), pl(t), xc(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (_u(t), e = J.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Lt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return pl(t), null;
          }
          l = D.current, sa(t) ? Os(t) : (l = tr(u, a, e), t.stateNode = l, Lt(t));
        }
        return pl(t), null;
      case 5:
        if (_u(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Lt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return pl(t), null;
          }
          if (n = D.current, sa(t))
            Os(t);
          else {
            var i = Un(
              J.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? i.createElement(u, { is: a.is }) : i.createElement(u);
                }
            }
            n[Bl] = t, n[wl] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Ql(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Lt(t);
          }
        }
        return pl(t), xc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Lt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = J.current, sa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Yl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[Bl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Vd(l.nodeValue, e)), l || ae(t, !0);
          } else
            l = Un(l).createTextNode(
              a
            ), l[Bl] = t, t.stateNode = l;
        }
        return pl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = sa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(r(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(557));
              l[Bl] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            pl(t), l = !1;
          } else
            e = Hi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (ct(t), t) : (ct(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return pl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = sa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
              u[Bl] = t;
            } else
              Re(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            pl(t), u = !1;
          } else
            u = Hi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (ct(t), t) : (ct(t), null);
        }
        return ct(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), gn(t, t.updateQueue), pl(t), null);
      case 4:
        return Al(), l === null && Jc(t.stateNode.containerInfo), pl(t), null;
      case 10:
        return Gt(t.type), pl(t), null;
      case 19:
        if (x(Ol), a = t.memoizedState, a === null) return pl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) cu(a, !1);
          else {
            if (xl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, cu(a, !1), l = n.updateQueue, t.updateQueue = l, gn(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    zs(e, l), e = e.sibling;
                  return O(
                    Ol,
                    Ol.current & 1 | 2
                  ), ll && Bt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && tt() > En && (t.flags |= 128, u = !0, cu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, gn(t, l), cu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !ll)
                return pl(t), null;
            } else
              2 * tt() - a.renderingStartTime > En && e !== 536870912 && (t.flags |= 128, u = !0, cu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = tt(), l.sibling = null, e = Ol.current, O(
          Ol,
          u ? e & 1 | 2 : e & 1
        ), ll && Bt(t, a.treeForkCount), l) : (pl(t), null);
      case 22:
      case 23:
        return ct(t), wi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (pl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pl(t), e = t.updateQueue, e !== null && gn(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && x(qe), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Gt(Nl), pl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function cy(l, t) {
    switch (Ui(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Gt(Nl), Al(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return _u(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ct(t), t.alternate === null)
            throw Error(r(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ct(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Re();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return x(Ol), null;
      case 4:
        return Al(), null;
      case 10:
        return Gt(t.type), null;
      case 22:
      case 23:
        return ct(t), wi(), l !== null && x(qe), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Gt(Nl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $o(l, t) {
    switch (Ui(t), t.tag) {
      case 3:
        Gt(Nl), Al();
        break;
      case 26:
      case 27:
      case 5:
        _u(t);
        break;
      case 4:
        Al();
        break;
      case 31:
        t.memoizedState !== null && ct(t);
        break;
      case 13:
        ct(t);
        break;
      case 19:
        x(Ol);
        break;
      case 10:
        Gt(t.type);
        break;
      case 22:
      case 23:
        ct(t), wi(), l !== null && x(qe);
        break;
      case 24:
        Gt(Nl);
    }
  }
  function fu(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create, i = e.inst;
            a = n(), i.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      ol(t, t.return, c);
    }
  }
  function oe(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var f = e, y = c;
              try {
                y();
              } catch (S) {
                ol(
                  u,
                  f,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      ol(t, t.return, S);
    }
  }
  function Fo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Gs(t, e);
      } catch (a) {
        ol(l, l.return, a);
      }
    }
  }
  function ko(l, t, e) {
    e.props = Qe(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      ol(l, t, a);
    }
  }
  function su(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      ol(l, t, u);
    }
  }
  function Mt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          ol(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          ol(l, t, u);
        }
      else e.current = null;
  }
  function Io(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      ol(l, l.return, u);
    }
  }
  function Ac(l, t, e) {
    try {
      var a = l.stateNode;
      My(a, l.type, e, t), a[wl] = t;
    } catch (u) {
      ol(l, l.return, u);
    }
  }
  function Po(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ge(l.type) || l.tag === 4;
  }
  function Oc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Po(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ge(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function _c(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Ht));
    else if (a !== 4 && (a === 27 && ge(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (_c(l, t, e), l = l.sibling; l !== null; )
        _c(l, t, e), l = l.sibling;
  }
  function bn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && ge(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (bn(l, t, e), l = l.sibling; l !== null; )
        bn(l, t, e), l = l.sibling;
  }
  function ld(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ql(t, a, e), t[Bl] = l, t[wl] = e;
    } catch (n) {
      ol(l, l.return, n);
    }
  }
  var Vt = !1, jl = !1, Nc = !1, td = typeof WeakSet == "function" ? WeakSet : Set, Cl = null;
  function fy(l, t) {
    if (l = l.containerInfo, $c = Gn, l = rs(l), zi(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, c = -1, f = -1, y = 0, S = 0, T = l, v = null;
            t: for (; ; ) {
              for (var b; T !== e || u !== 0 && T.nodeType !== 3 || (c = i + u), T !== n || a !== 0 && T.nodeType !== 3 || (f = i + a), T.nodeType === 3 && (i += T.nodeValue.length), (b = T.firstChild) !== null; )
                v = T, T = b;
              for (; ; ) {
                if (T === l) break t;
                if (v === e && ++y === u && (c = i), v === n && ++S === a && (f = i), (b = T.nextSibling) !== null) break;
                T = v, v = T.parentNode;
              }
              T = b;
            }
            e = c === -1 || f === -1 ? null : { start: c, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Fc = { focusedElem: l, selectionRange: e }, Gn = !1, Cl = t; Cl !== null; )
      if (t = Cl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Cl = l;
      else
        for (; Cl !== null; ) {
          switch (t = Cl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++)
                  u = l[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var M = Qe(
                    e.type,
                    u
                  );
                  l = a.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (C) {
                  ol(
                    e,
                    e.return,
                    C
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  Pc(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Cl = l;
            break;
          }
          Cl = t.return;
        }
  }
  function ed(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Jt(l, e), a & 4 && fu(5, e);
        break;
      case 1:
        if (Jt(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              ol(e, e.return, i);
            }
          else {
            var u = Qe(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              ol(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && Fo(e), a & 512 && su(e, e.return);
        break;
      case 3:
        if (Jt(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Gs(l, t);
          } catch (i) {
            ol(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ld(e);
      case 26:
      case 5:
        Jt(l, e), t === null && a & 4 && Io(e), a & 512 && su(e, e.return);
        break;
      case 12:
        Jt(l, e);
        break;
      case 31:
        Jt(l, e), a & 4 && nd(l, e);
        break;
      case 13:
        Jt(l, e), a & 4 && id(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = gy.bind(
          null,
          e
        ), By(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Vt, !a) {
          t = t !== null && t.memoizedState !== null || jl, u = Vt;
          var n = jl;
          Vt = a, (jl = t) && !n ? wt(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : Jt(l, e), Vt = u, jl = n;
        }
        break;
      case 30:
        break;
      default:
        Jt(l, e);
    }
  }
  function ad(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, ad(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ui(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var El = null, $l = !1;
  function Kt(l, t, e) {
    for (e = e.child; e !== null; )
      ud(l, t, e), e = e.sibling;
  }
  function ud(l, t, e) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Ra, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        jl || Mt(e, t), Kt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        jl || Mt(e, t);
        var a = El, u = $l;
        ge(e.type) && (El = e.stateNode, $l = !1), Kt(
          l,
          t,
          e
        ), bu(e.stateNode), El = a, $l = u;
        break;
      case 5:
        jl || Mt(e, t);
      case 6:
        if (a = El, u = $l, El = null, Kt(
          l,
          t,
          e
        ), El = a, $l = u, El !== null)
          if ($l)
            try {
              (El.nodeType === 9 ? El.body : El.nodeName === "HTML" ? El.ownerDocument.body : El).removeChild(e.stateNode);
            } catch (n) {
              ol(
                e,
                t,
                n
              );
            }
          else
            try {
              El.removeChild(e.stateNode);
            } catch (n) {
              ol(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        El !== null && ($l ? (l = El, Fd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Da(l)) : Fd(El, e.stateNode));
        break;
      case 4:
        a = El, u = $l, El = e.stateNode.containerInfo, $l = !0, Kt(
          l,
          t,
          e
        ), El = a, $l = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        oe(2, e, t), jl || oe(4, e, t), Kt(
          l,
          t,
          e
        );
        break;
      case 1:
        jl || (Mt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && ko(
          e,
          t,
          a
        )), Kt(
          l,
          t,
          e
        );
        break;
      case 21:
        Kt(
          l,
          t,
          e
        );
        break;
      case 22:
        jl = (a = jl) || e.memoizedState !== null, Kt(
          l,
          t,
          e
        ), jl = a;
        break;
      default:
        Kt(
          l,
          t,
          e
        );
    }
  }
  function nd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Da(l);
      } catch (e) {
        ol(t, t.return, e);
      }
    }
  }
  function id(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Da(l);
      } catch (e) {
        ol(t, t.return, e);
      }
  }
  function sy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new td()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new td()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function Sn(l, t) {
    var e = sy(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = by.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function Fl(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ge(c.type)) {
                El = c.stateNode, $l = !1;
                break l;
              }
              break;
            case 5:
              El = c.stateNode, $l = !1;
              break l;
            case 3:
            case 4:
              El = c.stateNode.containerInfo, $l = !0;
              break l;
          }
          c = c.return;
        }
        if (El === null) throw Error(r(160));
        ud(n, i, u), El = null, $l = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        cd(t, l), t = t.sibling;
  }
  var Tt = null;
  function cd(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l), kl(l), a & 4 && (oe(3, l, l.return), fu(3, l), oe(5, l, l.return));
        break;
      case 1:
        Fl(t, l), kl(l), a & 512 && (jl || e === null || Mt(e, e.return)), a & 64 && Vt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Tt;
        if (Fl(t, l), kl(l), a & 512 && (jl || e === null || Mt(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[qa] || n[Bl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Ql(n, a, e), n[Bl] = l, Hl(n), a = n;
                      break l;
                    case "link":
                      var i = cr(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), Ql(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = cr(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(a), Ql(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[Bl] = l, Hl(n), a = n;
                }
                l.stateNode = a;
              } else
                fr(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ir(
                u,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? fr(
              u,
              l.type,
              l.stateNode
            ) : ir(
              u,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Ac(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        Fl(t, l), kl(l), a & 512 && (jl || e === null || Mt(e, e.return)), e !== null && a & 4 && Ac(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (Fl(t, l), kl(l), a & 512 && (jl || e === null || Mt(e, e.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Pe(u, "");
          } catch (M) {
            ol(l, l.return, M);
          }
        }
        a & 4 && l.stateNode != null && (u = l.memoizedProps, Ac(
          l,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Nc = !0);
        break;
      case 6:
        if (Fl(t, l), kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (M) {
            ol(l, l.return, M);
          }
        }
        break;
      case 3:
        if (Cn = null, u = Tt, Tt = Rn(t.containerInfo), Fl(t, l), Tt = u, kl(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Da(t.containerInfo);
          } catch (M) {
            ol(l, l.return, M);
          }
        Nc && (Nc = !1, fd(l));
        break;
      case 4:
        a = Tt, Tt = Rn(
          l.stateNode.containerInfo
        ), Fl(t, l), kl(l), Tt = a;
        break;
      case 12:
        Fl(t, l), kl(l);
        break;
      case 31:
        Fl(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
        break;
      case 13:
        Fl(t, l), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (zn = tt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = e !== null && e.memoizedState !== null, y = Vt, S = jl;
        if (Vt = y || u, jl = S || f, Fl(t, l), jl = S, Vt = y, kl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || Vt || jl || Ze(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                f = e = t;
                try {
                  if (n = f.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var T = f.memoizedProps.style, v = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (M) {
                  ol(f, f.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (M) {
                  ol(f, f.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                f = t;
                try {
                  var b = f.stateNode;
                  u ? kd(b, !0) : kd(f.stateNode, !1);
                } catch (M) {
                  ol(f, f.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Sn(l, e))));
        break;
      case 19:
        Fl(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Sn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (Po(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Oc(l);
            bn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Pe(i, ""), e.flags &= -33);
            var c = Oc(l);
            bn(l, c, i);
            break;
          case 3:
          case 4:
            var f = e.stateNode.containerInfo, y = Oc(l);
            _c(
              l,
              y,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        ol(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function fd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        fd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Jt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ed(l, t.alternate, t), t = t.sibling;
  }
  function Ze(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oe(4, t, t.return), Ze(t);
          break;
        case 1:
          Mt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && ko(
            t,
            t.return,
            e
          ), Ze(t);
          break;
        case 27:
          bu(t.stateNode);
        case 26:
        case 5:
          Mt(t, t.return), Ze(t);
          break;
        case 22:
          t.memoizedState === null && Ze(t);
          break;
        case 30:
          Ze(t);
          break;
        default:
          Ze(t);
      }
      l = l.sibling;
    }
  }
  function wt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wt(
            u,
            n,
            e
          ), fu(4, n);
          break;
        case 1:
          if (wt(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (y) {
              ol(a, a.return, y);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var c = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Ys(f[u], c);
            } catch (y) {
              ol(a, a.return, y);
            }
          }
          e && i & 64 && Fo(n), su(n, n.return);
          break;
        case 27:
          ld(n);
        case 26:
        case 5:
          wt(
            u,
            n,
            e
          ), e && a === null && i & 4 && Io(n), su(n, n.return);
          break;
        case 12:
          wt(
            u,
            n,
            e
          );
          break;
        case 31:
          wt(
            u,
            n,
            e
          ), e && i & 4 && nd(u, n);
          break;
        case 13:
          wt(
            u,
            n,
            e
          ), e && i & 4 && id(u, n);
          break;
        case 22:
          n.memoizedState === null && wt(
            u,
            n,
            e
          ), su(n, n.return);
          break;
        case 30:
          break;
        default:
          wt(
            u,
            n,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Mc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && $a(e));
  }
  function Dc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l));
  }
  function xt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        sd(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function sd(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xt(
          l,
          t,
          e,
          a
        ), u & 2048 && fu(9, t);
        break;
      case 1:
        xt(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        xt(
          l,
          t,
          e,
          a
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && $a(l)));
        break;
      case 12:
        if (u & 2048) {
          xt(
            l,
            t,
            e,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            ol(t, t.return, f);
          }
        } else
          xt(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        xt(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        xt(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? xt(
          l,
          t,
          e,
          a
        ) : ou(l, t) : n._visibility & 2 ? xt(
          l,
          t,
          e,
          a
        ) : (n._visibility |= 2, Sa(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Mc(i, t);
        break;
      case 24:
        xt(
          l,
          t,
          e,
          a
        ), u & 2048 && Dc(t.alternate, t);
        break;
      default:
        xt(
          l,
          t,
          e,
          a
        );
    }
  }
  function Sa(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = e, f = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Sa(
            n,
            i,
            c,
            f,
            u
          ), fu(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? Sa(
            n,
            i,
            c,
            f,
            u
          ) : ou(
            n,
            i
          ) : (S._visibility |= 2, Sa(
            n,
            i,
            c,
            f,
            u
          )), u && y & 2048 && Mc(
            i.alternate,
            i
          );
          break;
        case 24:
          Sa(
            n,
            i,
            c,
            f,
            u
          ), u && y & 2048 && Dc(i.alternate, i);
          break;
        default:
          Sa(
            n,
            i,
            c,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function ou(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            ou(e, a), u & 2048 && Mc(
              a.alternate,
              a
            );
            break;
          case 24:
            ou(e, a), u & 2048 && Dc(a.alternate, a);
            break;
          default:
            ou(e, a);
        }
        t = t.sibling;
      }
  }
  var du = 8192;
  function pa(l, t, e) {
    if (l.subtreeFlags & du)
      for (l = l.child; l !== null; )
        od(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function od(l, t, e) {
    switch (l.tag) {
      case 26:
        pa(
          l,
          t,
          e
        ), l.flags & du && l.memoizedState !== null && $y(
          e,
          Tt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        pa(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Tt;
        Tt = Rn(l.stateNode.containerInfo), pa(
          l,
          t,
          e
        ), Tt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = du, du = 16777216, pa(
          l,
          t,
          e
        ), du = a) : pa(
          l,
          t,
          e
        ));
        break;
      default:
        pa(
          l,
          t,
          e
        );
    }
  }
  function dd(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ru(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Cl = a, md(
            a,
            l
          );
        }
      dd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        rd(l), l = l.sibling;
  }
  function rd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ru(l), l.flags & 2048 && oe(9, l, l.return);
        break;
      case 3:
        ru(l);
        break;
      case 12:
        ru(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, pn(l)) : ru(l);
        break;
      default:
        ru(l);
    }
  }
  function pn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Cl = a, md(
            a,
            l
          );
        }
      dd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, t, t.return), pn(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, pn(t));
          break;
        default:
          pn(t);
      }
      l = l.sibling;
    }
  }
  function md(l, t) {
    for (; Cl !== null; ) {
      var e = Cl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $a(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Cl = a;
      else
        l: for (e = l; Cl !== null; ) {
          a = Cl;
          var u = a.sibling, n = a.return;
          if (ad(a), a === e) {
            Cl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Cl = u;
            break l;
          }
          Cl = n;
        }
    }
  }
  var oy = {
    getCacheForType: function(l) {
      var t = Gl(Nl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Gl(Nl).controller.signal;
    }
  }, dy = typeof WeakMap == "function" ? WeakMap : Map, nl = 0, bl = null, w = null, F = 0, sl = 0, ft = null, de = !1, za = !1, jc = !1, Wt = 0, xl = 0, re = 0, Le = 0, Uc = 0, st = 0, Ea = 0, mu = null, Il = null, Rc = !1, zn = 0, yd = 0, En = 1 / 0, Tn = null, me = null, Rl = 0, ye = null, Ta = null, $t = 0, Hc = 0, Cc = null, hd = null, yu = 0, qc = null;
  function ot() {
    return (nl & 2) !== 0 && F !== 0 ? F & -F : z.T !== null ? Zc() : Df();
  }
  function vd() {
    if (st === 0)
      if ((F & 536870912) === 0 || ll) {
        var l = Du;
        Du <<= 1, (Du & 3932160) === 0 && (Du = 262144), st = l;
      } else st = 536870912;
    return l = it.current, l !== null && (l.flags |= 32), st;
  }
  function Pl(l, t, e) {
    (l === bl && (sl === 2 || sl === 9) || l.cancelPendingCommit !== null) && (xa(l, 0), he(
      l,
      F,
      st,
      !1
    )), Ca(l, e), ((nl & 2) === 0 || l !== bl) && (l === bl && ((nl & 2) === 0 && (Le |= e), xl === 4 && he(
      l,
      F,
      st,
      !1
    )), Dt(l));
  }
  function gd(l, t, e) {
    if ((nl & 6) !== 0) throw Error(r(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ha(l, t), u = a ? yy(l, t) : Yc(l, t, !0), n = a;
    do {
      if (u === 0) {
        za && !a && he(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !ry(e)) {
          u = Yc(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = mu;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (xa(c, i).flags |= 256), i = Yc(
                c,
                i,
                !1
              ), i !== 2) {
                if (jc && !f) {
                  c.errorRecoveryDisabledLanes |= n, Le |= n, u = 4;
                  break l;
                }
                n = Il, Il = u, n !== null && (Il === null ? Il = n : Il.push.apply(
                  Il,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          xa(l, 0), he(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              he(
                a,
                t,
                st,
                !de
              );
              break l;
            case 2:
              Il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (u = zn + 300 - tt(), 10 < u)) {
            if (he(
              a,
              t,
              st,
              !de
            ), Uu(a, 0, !0) !== 0) break l;
            $t = t, a.timeoutHandle = Wd(
              bd.bind(
                null,
                a,
                e,
                Il,
                Tn,
                Rc,
                t,
                st,
                Le,
                Ea,
                de,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          bd(
            a,
            e,
            Il,
            Tn,
            Rc,
            t,
            st,
            Le,
            Ea,
            de,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function bd(l, t, e, a, u, n, i, c, f, y, S, T, v, b) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, od(
        t,
        n,
        T
      );
      var M = (n & 62914560) === n ? zn - tt() : (n & 4194048) === n ? yd - tt() : 0;
      if (M = Fy(
        T,
        M
      ), M !== null) {
        $t = n, l.cancelPendingCommit = M(
          Od.bind(
            null,
            l,
            t,
            n,
            e,
            a,
            u,
            i,
            c,
            f,
            S,
            T,
            null,
            v,
            b
          )
        ), he(l, n, i, !y);
        return;
      }
    }
    Od(
      l,
      t,
      n,
      e,
      a,
      u,
      i,
      c,
      f
    );
  }
  function ry(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!ut(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function he(l, t, e, a) {
    t &= ~Uc, t &= ~Le, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - at(u), i = 1 << n;
      a[n] = -1, u &= ~i;
    }
    e !== 0 && _f(l, e, t);
  }
  function xn() {
    return (nl & 6) === 0 ? (hu(0), !1) : !0;
  }
  function Bc() {
    if (w !== null) {
      if (sl === 0)
        var l = w.return;
      else
        l = w, Yt = He = null, Pi(l), ya = null, ka = 0, l = w;
      for (; l !== null; )
        $o(l.alternate, l), l = l.return;
      w = null;
    }
  }
  function xa(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Uy(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), $t = 0, Bc(), bl = l, w = e = qt(l.current, null), F = t, sl = 0, ft = null, de = !1, za = Ha(l, t), jc = !1, Ea = st = Uc = Le = re = xl = 0, Il = mu = null, Rc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - at(a), n = 1 << u;
        t |= l[u], a &= ~n;
      }
    return Wt = t, Vu(), e;
  }
  function Sd(l, t) {
    Q = null, z.H = nu, t === ma || t === Iu ? (t = Hs(), sl = 3) : t === Qi ? (t = Hs(), sl = 4) : sl = t === hc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, w === null && (xl = 1, mn(
      l,
      yt(t, l.current)
    ));
  }
  function pd() {
    var l = it.current;
    return l === null ? !0 : (F & 4194048) === F ? bt === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === bt : !1;
  }
  function zd() {
    var l = z.H;
    return z.H = nu, l === null ? nu : l;
  }
  function Ed() {
    var l = z.A;
    return z.A = oy, l;
  }
  function An() {
    xl = 4, de || (F & 4194048) !== F && it.current !== null || (za = !0), (re & 134217727) === 0 && (Le & 134217727) === 0 || bl === null || he(
      bl,
      F,
      st,
      !1
    );
  }
  function Yc(l, t, e) {
    var a = nl;
    nl |= 2;
    var u = zd(), n = Ed();
    (bl !== l || F !== t) && (Tn = null, xa(l, t)), t = !1;
    var i = xl;
    l: do
      try {
        if (sl !== 0 && w !== null) {
          var c = w, f = ft;
          switch (sl) {
            case 8:
              Bc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = !0);
              var y = sl;
              if (sl = 0, ft = null, Aa(l, c, f, y), e && za) {
                i = 0;
                break l;
              }
              break;
            default:
              y = sl, sl = 0, ft = null, Aa(l, c, f, y);
          }
        }
        my(), i = xl;
        break;
      } catch (S) {
        Sd(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = He = null, nl = a, z.H = u, z.A = n, w === null && (bl = null, F = 0, Vu()), i;
  }
  function my() {
    for (; w !== null; ) Td(w);
  }
  function yy(l, t) {
    var e = nl;
    nl |= 2;
    var a = zd(), u = Ed();
    bl !== l || F !== t ? (Tn = null, En = tt() + 500, xa(l, t)) : za = Ha(
      l,
      t
    );
    l: do
      try {
        if (sl !== 0 && w !== null) {
          t = w;
          var n = ft;
          t: switch (sl) {
            case 1:
              sl = 0, ft = null, Aa(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Us(n)) {
                sl = 0, ft = null, xd(t);
                break;
              }
              t = function() {
                sl !== 2 && sl !== 9 || bl !== l || (sl = 7), Dt(l);
              }, n.then(t, t);
              break l;
            case 3:
              sl = 7;
              break l;
            case 4:
              sl = 5;
              break l;
            case 7:
              Us(n) ? (sl = 0, ft = null, xd(t)) : (sl = 0, ft = null, Aa(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (w.tag) {
                case 26:
                  i = w.memoizedState;
                case 5:
                case 27:
                  var c = w;
                  if (i ? sr(i) : c.stateNode.complete) {
                    sl = 0, ft = null;
                    var f = c.sibling;
                    if (f !== null) w = f;
                    else {
                      var y = c.return;
                      y !== null ? (w = y, On(y)) : w = null;
                    }
                    break t;
                  }
              }
              sl = 0, ft = null, Aa(l, t, n, 5);
              break;
            case 6:
              sl = 0, ft = null, Aa(l, t, n, 6);
              break;
            case 8:
              Bc(), xl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        hy();
        break;
      } catch (S) {
        Sd(l, S);
      }
    while (!0);
    return Yt = He = null, z.H = a, z.A = u, nl = e, w !== null ? 0 : (bl = null, F = 0, Vu(), xl);
  }
  function hy() {
    for (; w !== null && !Yr(); )
      Td(w);
  }
  function Td(l) {
    var t = wo(l.alternate, l, Wt);
    l.memoizedProps = l.pendingProps, t === null ? On(l) : w = t;
  }
  function xd(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qo(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          F
        );
        break;
      case 11:
        t = Qo(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          F
        );
        break;
      case 5:
        Pi(t);
      default:
        $o(e, t), t = w = zs(t, Wt), t = wo(e, t, Wt);
    }
    l.memoizedProps = l.pendingProps, t === null ? On(l) : w = t;
  }
  function Aa(l, t, e, a) {
    Yt = He = null, Pi(t), ya = null, ka = 0;
    var u = t.return;
    try {
      if (ay(
        l,
        u,
        t,
        e,
        F
      )) {
        xl = 1, mn(
          l,
          yt(e, l.current)
        ), w = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw w = u, n;
      xl = 1, mn(
        l,
        yt(e, l.current)
      ), w = null;
      return;
    }
    t.flags & 32768 ? (ll || a === 1 ? l = !0 : za || (F & 536870912) !== 0 ? l = !1 : (de = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = it.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ad(t, l)) : On(t);
  }
  function On(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ad(
          t,
          de
        );
        return;
      }
      l = t.return;
      var e = iy(
        t.alternate,
        t,
        Wt
      );
      if (e !== null) {
        w = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    xl === 0 && (xl = 5);
  }
  function Ad(l, t) {
    do {
      var e = cy(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, w = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        w = l;
        return;
      }
      w = l = e;
    } while (l !== null);
    xl = 6, w = null;
  }
  function Od(l, t, e, a, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      _n();
    while (Rl !== 0);
    if ((nl & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= Oi, Wr(
        l,
        e,
        n,
        i,
        c,
        f
      ), l === bl && (w = bl = null, F = 0), Ta = t, ye = l, $t = e, Hc = n, Cc = u, hd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Sy(Nu, function() {
        return jd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, u = A.p, A.p = 2, i = nl, nl |= 4;
        try {
          fy(l, t, e);
        } finally {
          nl = i, A.p = u, z.T = a;
        }
      }
      Rl = 1, _d(), Nd(), Md();
    }
  }
  function _d() {
    if (Rl === 1) {
      Rl = 0;
      var l = ye, t = Ta, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null;
        var a = A.p;
        A.p = 2;
        var u = nl;
        nl |= 4;
        try {
          cd(t, l);
          var n = Fc, i = rs(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && ds(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && zi(c)) {
              var y = f.start, S = f.end;
              if (S === void 0 && (S = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, v = T && T.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), M = c.textContent.length, C = Math.min(f.start, M), hl = f.end === void 0 ? C : Math.min(f.end, M);
                  !b.extend && C > hl && (i = hl, hl = C, C = i);
                  var d = os(
                    c,
                    C
                  ), s = os(
                    c,
                    hl
                  );
                  if (d && s && (b.rangeCount !== 1 || b.anchorNode !== d.node || b.anchorOffset !== d.offset || b.focusNode !== s.node || b.focusOffset !== s.offset)) {
                    var m = T.createRange();
                    m.setStart(d.node, d.offset), b.removeAllRanges(), C > hl ? (b.addRange(m), b.extend(s.node, s.offset)) : (m.setEnd(s.node, s.offset), b.addRange(m));
                  }
                }
              }
            }
            for (T = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && T.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var E = T[c];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          Gn = !!$c, Fc = $c = null;
        } finally {
          nl = u, A.p = a, z.T = e;
        }
      }
      l.current = t, Rl = 2;
    }
  }
  function Nd() {
    if (Rl === 2) {
      Rl = 0;
      var l = ye, t = Ta, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = z.T, z.T = null;
        var a = A.p;
        A.p = 2;
        var u = nl;
        nl |= 4;
        try {
          ed(l, t.alternate, t);
        } finally {
          nl = u, A.p = a, z.T = e;
        }
      }
      Rl = 3;
    }
  }
  function Md() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, Gr();
      var l = ye, t = Ta, e = $t, a = hd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, Ta = ye = null, Dd(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (me = null), ei(e), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function")
        try {
          et.onCommitFiberRoot(
            Ra,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = z.T, u = A.p, A.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          z.T = t, A.p = u;
        }
      }
      ($t & 3) !== 0 && _n(), Dt(l), u = l.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? l === qc ? yu++ : (yu = 0, qc = l) : yu = 0, hu(0);
    }
  }
  function Dd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, $a(t)));
  }
  function _n() {
    return _d(), Nd(), Md(), jd();
  }
  function jd() {
    if (Rl !== 5) return !1;
    var l = ye, t = Hc;
    Hc = 0;
    var e = ei($t), a = z.T, u = A.p;
    try {
      A.p = 32 > e ? 32 : e, z.T = null, e = Cc, Cc = null;
      var n = ye, i = $t;
      if (Rl = 0, Ta = ye = null, $t = 0, (nl & 6) !== 0) throw Error(r(331));
      var c = nl;
      if (nl |= 4, rd(n.current), sd(
        n,
        n.current,
        i,
        e
      ), nl = c, hu(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(Ra, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = u, z.T = a, Dd(l, t);
    }
  }
  function Ud(l, t, e) {
    t = yt(e, t), t = yc(l.stateNode, t, 2), l = ce(l, t, 2), l !== null && (Ca(l, 2), Dt(l));
  }
  function ol(l, t, e) {
    if (l.tag === 3)
      Ud(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ud(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (me === null || !me.has(a))) {
            l = yt(e, l), e = Ro(2), a = ce(t, e, 2), a !== null && (Ho(
              e,
              a,
              t,
              l
            ), Ca(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new dy();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (jc = !0, u.add(e), l = vy.bind(null, l, t, e), t.then(l, l));
  }
  function vy(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, bl === l && (F & e) === e && (xl === 4 || xl === 3 && (F & 62914560) === F && 300 > tt() - zn ? (nl & 2) === 0 && xa(l, 0) : Uc |= e, Ea === F && (Ea = 0)), Dt(l);
  }
  function Rd(l, t) {
    t === 0 && (t = Of()), l = je(l, t), l !== null && (Ca(l, t), Dt(l));
  }
  function gy(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Rd(l, e);
  }
  function by(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), Rd(l, e);
  }
  function Sy(l, t) {
    return In(l, t);
  }
  var Nn = null, Oa = null, Xc = !1, Mn = !1, Qc = !1, ve = 0;
  function Dt(l) {
    l !== Oa && l.next === null && (Oa === null ? Nn = Oa = l : Oa = Oa.next = l), Mn = !0, Xc || (Xc = !0, zy());
  }
  function hu(l, t) {
    if (!Qc && Mn) {
      Qc = !0;
      do
        for (var e = !1, a = Nn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - at(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Bd(a, n));
          } else
            n = F, n = Uu(
              a,
              a === bl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ha(a, n) || (e = !0, Bd(a, n));
          a = a.next;
        }
      while (e);
      Qc = !1;
    }
  }
  function py() {
    Hd();
  }
  function Hd() {
    Mn = Xc = !1;
    var l = 0;
    ve !== 0 && jy() && (l = ve);
    for (var t = tt(), e = null, a = Nn; a !== null; ) {
      var u = a.next, n = Cd(a, t);
      n === 0 ? (a.next = null, e === null ? Nn = u : e.next = u, u === null && (Oa = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Mn = !0)), a = u;
    }
    Rl !== 0 && Rl !== 5 || hu(l), ve !== 0 && (ve = 0);
  }
  function Cd(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - at(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = wr(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = bl, e = F, e = Uu(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (sl === 2 || sl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Pn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Ha(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && Pn(a), ei(e)) {
        case 2:
        case 8:
          e = xf;
          break;
        case 32:
          e = Nu;
          break;
        case 268435456:
          e = Af;
          break;
        default:
          e = Nu;
      }
      return a = qd.bind(null, l), e = In(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && Pn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function qd(l, t) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (_n() && l.callbackNode !== e)
      return null;
    var a = F;
    return a = Uu(
      l,
      l === bl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (gd(l, a, t), Cd(l, tt()), l.callbackNode != null && l.callbackNode === e ? qd.bind(null, l) : null);
  }
  function Bd(l, t) {
    if (_n()) return null;
    gd(l, t, !0);
  }
  function zy() {
    Ry(function() {
      (nl & 6) !== 0 ? In(
        Tf,
        py
      ) : Hd();
    });
  }
  function Zc() {
    if (ve === 0) {
      var l = da;
      l === 0 && (l = Mu, Mu <<= 1, (Mu & 261888) === 0 && (Mu = 256)), ve = l;
    }
    return ve;
  }
  function Yd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : qu("" + l);
  }
  function Gd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Ey(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Yd(
        (u[wl] || null).action
      ), i = a.submitter;
      i && (t = (t = i[wl] || null) ? Yd(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Xu(
        "action",
        "action",
        null,
        a,
        u
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ve !== 0) {
                  var f = i ? Gd(u, i) : new FormData(u);
                  fc(
                    e,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = i ? Gd(u, i) : new FormData(u), fc(
                  e,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Lc = 0; Lc < Ai.length; Lc++) {
    var Vc = Ai[Lc], Ty = Vc.toLowerCase(), xy = Vc[0].toUpperCase() + Vc.slice(1);
    Et(
      Ty,
      "on" + xy
    );
  }
  Et(hs, "onAnimationEnd"), Et(vs, "onAnimationIteration"), Et(gs, "onAnimationStart"), Et("dblclick", "onDoubleClick"), Et("focusin", "onFocus"), Et("focusout", "onBlur"), Et(Xm, "onTransitionRun"), Et(Qm, "onTransitionStart"), Et(Zm, "onTransitionCancel"), Et(bs, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), _e(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _e(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _e("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _e(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _e(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _e(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ay = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu)
  );
  function Xd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], f = c.instance, y = c.currentTarget;
            if (c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (S) {
              Lu(S);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (S) {
              Lu(S);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function W(l, t) {
    var e = t[ai];
    e === void 0 && (e = t[ai] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (Qd(t, l, 2, !1), e.add(a));
  }
  function Kc(l, t, e) {
    var a = 0;
    t && (a |= 4), Qd(
      e,
      l,
      a,
      t
    );
  }
  var Dn = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(l) {
    if (!l[Dn]) {
      l[Dn] = !0, Rf.forEach(function(e) {
        e !== "selectionchange" && (Ay.has(e) || Kc(e, !1, l), Kc(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Dn] || (t[Dn] = !0, Kc("selectionchange", !1, t));
    }
  }
  function Qd(l, t, e, a) {
    switch (vr(t)) {
      case 2:
        var u = Py;
        break;
      case 8:
        u = lh;
        break;
      default:
        u = ff;
    }
    e = u.bind(
      null,
      t,
      e,
      l
    ), u = void 0, !ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1);
  }
  function wc(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = We(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Kf(function() {
      var y = n, S = oi(e), T = [];
      l: {
        var v = Ss.get(l);
        if (v !== void 0) {
          var b = Xu, M = l;
          switch (l) {
            case "keypress":
              if (Yu(e) === 0) break l;
            case "keydown":
            case "keyup":
              b = bm;
              break;
            case "focusin":
              M = "focus", b = vi;
              break;
            case "focusout":
              M = "blur", b = vi;
              break;
            case "beforeblur":
            case "afterblur":
              b = vi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = im;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = zm;
              break;
            case hs:
            case vs:
            case gs:
              b = sm;
              break;
            case bs:
              b = Tm;
              break;
            case "scroll":
            case "scrollend":
              b = um;
              break;
            case "wheel":
              b = Am;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = dm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Ff;
              break;
            case "toggle":
            case "beforetoggle":
              b = _m;
          }
          var C = (t & 4) !== 0, hl = !C && (l === "scroll" || l === "scrollend"), d = C ? v !== null ? v + "Capture" : null : v;
          C = [];
          for (var s = y, m; s !== null; ) {
            var E = s;
            if (m = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || m === null || d === null || (E = Ya(s, d), E != null && C.push(
              gu(s, E, m)
            )), hl) break;
            s = s.return;
          }
          0 < C.length && (v = new b(
            v,
            M,
            null,
            e,
            S
          ), T.push({ event: v, listeners: C }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", v && e !== si && (M = e.relatedTarget || e.fromElement) && (We(M) || M[we]))
            break l;
          if ((b || v) && (v = S.window === S ? S : (v = S.ownerDocument) ? v.defaultView || v.parentWindow : window, b ? (M = e.relatedTarget || e.toElement, b = y, M = M ? We(M) : null, M !== null && (hl = L(M), C = M.tag, M !== hl || C !== 5 && C !== 27 && C !== 6) && (M = null)) : (b = null, M = y), b !== M)) {
            if (C = Wf, E = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (C = Ff, E = "onPointerLeave", d = "onPointerEnter", s = "pointer"), hl = b == null ? v : Ba(b), m = M == null ? v : Ba(M), v = new C(
              E,
              s + "leave",
              b,
              e,
              S
            ), v.target = hl, v.relatedTarget = m, E = null, We(S) === y && (C = new C(
              d,
              s + "enter",
              M,
              e,
              S
            ), C.target = m, C.relatedTarget = hl, E = C), hl = E, b && M)
              t: {
                for (C = Oy, d = b, s = M, m = 0, E = d; E; E = C(E))
                  m++;
                E = 0;
                for (var H = s; H; H = C(H))
                  E++;
                for (; 0 < m - E; )
                  d = C(d), m--;
                for (; 0 < E - m; )
                  s = C(s), E--;
                for (; m--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    C = d;
                    break t;
                  }
                  d = C(d), s = C(s);
                }
                C = null;
              }
            else C = null;
            b !== null && Zd(
              T,
              v,
              b,
              C,
              !1
            ), M !== null && hl !== null && Zd(
              T,
              hl,
              M,
              C,
              !0
            );
          }
        }
        l: {
          if (v = y ? Ba(y) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var al = us;
          else if (es(v))
            if (ns)
              al = Bm;
            else {
              al = Cm;
              var j = Hm;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && fi(y.elementType) && (al = us) : al = qm;
          if (al && (al = al(l, y))) {
            as(
              T,
              al,
              e,
              S
            );
            break l;
          }
          j && j(l, v, y), l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && ci(v, "number", v.value);
        }
        switch (j = y ? Ba(y) : window, l) {
          case "focusin":
            (es(j) || j.contentEditable === "true") && (aa = j, Ei = y, Ja = null);
            break;
          case "focusout":
            Ja = Ei = aa = null;
            break;
          case "mousedown":
            Ti = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ti = !1, ms(T, e, S);
            break;
          case "selectionchange":
            if (Gm) break;
          case "keydown":
          case "keyup":
            ms(T, e, S);
        }
        var Z;
        if (bi)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          ea ? ls(l, e) && (k = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (k = "onCompositionStart");
        k && (kf && e.locale !== "ko" && (ea || k !== "onCompositionStart" ? k === "onCompositionEnd" && ea && (Z = Jf()) : (le = S, mi = "value" in le ? le.value : le.textContent, ea = !0)), j = jn(y, k), 0 < j.length && (k = new $f(
          k,
          l,
          null,
          e,
          S
        ), T.push({ event: k, listeners: j }), Z ? k.data = Z : (Z = ts(e), Z !== null && (k.data = Z)))), (Z = Mm ? Dm(l, e) : jm(l, e)) && (k = jn(y, "onBeforeInput"), 0 < k.length && (j = new $f(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), T.push({
          event: j,
          listeners: k
        }), j.data = Z)), Ey(
          T,
          l,
          y,
          e,
          S
        );
      }
      Xd(T, t);
    });
  }
  function gu(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function jn(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ya(l, e), u != null && a.unshift(
        gu(l, u, n)
      ), u = Ya(l, t), u != null && a.push(
        gu(l, u, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Oy(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Zd(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, f = c.alternate, y = c.stateNode;
      if (c = c.tag, f !== null && f === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, u ? (y = Ya(e, n), y != null && i.unshift(
        gu(e, y, f)
      )) : u || (y = Ya(e, n), y != null && i.push(
        gu(e, y, f)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var _y = /\r\n?/g, Ny = /\u0000|\uFFFD/g;
  function Ld(l) {
    return (typeof l == "string" ? l : "" + l).replace(_y, `
`).replace(Ny, "");
  }
  function Vd(l, t) {
    return t = Ld(t), Ld(l) === t;
  }
  function yl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pe(l, "" + a);
        break;
      case "className":
        Hu(l, "class", a);
        break;
      case "tabIndex":
        Hu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hu(l, e, a);
        break;
      case "style":
        Lf(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Hu(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = qu("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (t !== "input" && yl(l, t, "name", u.name, u, null), yl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), yl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), yl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (yl(l, t, "encType", u.encType, u, null), yl(l, t, "method", u.method, u, null), yl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = qu("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "onScroll":
        a != null && W("scroll", l);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = qu("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        W("beforetoggle", l), W("toggle", l), Ru(l, "popover", a);
        break;
      case "xlinkActuate":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ru(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = em.get(e) || e, Ru(l, e, a));
    }
  }
  function Wc(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Lf(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Pe(l, a) : (typeof a == "number" || typeof a == "bigint") && Pe(l, "" + a);
        break;
      case "onScroll":
        a != null && W("scroll", l);
        break;
      case "onScrollEnd":
        a != null && W("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[wl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Ru(l, e, a);
          }
    }
  }
  function Ql(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        W("error", l), W("load", l);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  yl(l, t, n, i, e, null);
              }
          }
        u && yl(l, t, "srcSet", e.srcSet, e, null), a && yl(l, t, "src", e.src, e, null);
        return;
      case "input":
        W("invalid", l);
        var c = n = i = u = null, f = null, y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null)
              switch (a) {
                case "name":
                  u = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, t));
                  break;
                default:
                  yl(l, t, a, S, e, null);
              }
          }
        Gf(
          l,
          n,
          c,
          f,
          y,
          i,
          u,
          !1
        );
        return;
      case "select":
        W("invalid", l), a = i = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (c = e[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                yl(l, t, u, c, e, null);
            }
        t = n, e = i, l.multiple = !!a, t != null ? Ie(l, !!a, t, !1) : e != null && Ie(l, !!a, e, !0);
        return;
      case "textarea":
        W("invalid", l), n = u = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                yl(l, t, i, c, e, null);
            }
        Qf(l, a, u, n);
        return;
      case "option":
        for (f in e)
          e.hasOwnProperty(f) && (a = e[f], a != null) && (f === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : yl(l, t, f, a, e, null));
        return;
      case "dialog":
        W("beforetoggle", l), W("toggle", l), W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vu.length; a++)
          W(vu[a], l);
        break;
      case "image":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", l), W("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && (a = e[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                yl(l, t, y, a, e, null);
            }
        return;
      default:
        if (fi(t)) {
          for (S in e)
            e.hasOwnProperty(S) && (a = e[S], a !== void 0 && Wc(
              l,
              t,
              S,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && yl(l, t, c, a, e, null));
  }
  function My(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, f = null, y = null, S = null;
        for (b in e) {
          var T = e[b];
          if (e.hasOwnProperty(b) && T != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                a.hasOwnProperty(b) || yl(l, t, b, null, a, T);
            }
        }
        for (var v in a) {
          var b = a[v];
          if (T = e[v], a.hasOwnProperty(v) && (b != null || T != null))
            switch (v) {
              case "type":
                n = b;
                break;
              case "name":
                u = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                S = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(r(137, t));
                break;
              default:
                b !== T && yl(
                  l,
                  t,
                  v,
                  b,
                  a,
                  T
                );
            }
        }
        ii(
          l,
          i,
          c,
          f,
          y,
          S,
          n,
          u
        );
        return;
      case "select":
        b = i = c = v = null;
        for (n in e)
          if (f = e[n], e.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                b = f;
              default:
                a.hasOwnProperty(n) || yl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  f
                );
            }
        for (u in a)
          if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && yl(
                  l,
                  t,
                  u,
                  n,
                  a,
                  f
                );
            }
        t = c, e = i, a = b, v != null ? Ie(l, !!e, v, !1) : !!a != !!e && (t != null ? Ie(l, !!e, t, !0) : Ie(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (c in e)
          if (u = e[c], e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                yl(l, t, c, null, a, u);
            }
        for (i in a)
          if (u = a[i], n = e[i], a.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                b = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && yl(l, t, i, u, a, n);
            }
        Xf(l, v, b);
        return;
      case "option":
        for (var M in e)
          v = e[M], e.hasOwnProperty(M) && v != null && !a.hasOwnProperty(M) && (M === "selected" ? l.selected = !1 : yl(
            l,
            t,
            M,
            null,
            a,
            v
          ));
        for (f in a)
          v = a[f], b = e[f], a.hasOwnProperty(f) && v !== b && (v != null || b != null) && (f === "selected" ? l.selected = v && typeof v != "function" && typeof v != "symbol" : yl(
            l,
            t,
            f,
            v,
            a,
            b
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var C in e)
          v = e[C], e.hasOwnProperty(C) && v != null && !a.hasOwnProperty(C) && yl(l, t, C, null, a, v);
        for (y in a)
          if (v = a[y], b = e[y], a.hasOwnProperty(y) && v !== b && (v != null || b != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(r(137, t));
                break;
              default:
                yl(
                  l,
                  t,
                  y,
                  v,
                  a,
                  b
                );
            }
        return;
      default:
        if (fi(t)) {
          for (var hl in e)
            v = e[hl], e.hasOwnProperty(hl) && v !== void 0 && !a.hasOwnProperty(hl) && Wc(
              l,
              t,
              hl,
              void 0,
              a,
              v
            );
          for (S in a)
            v = a[S], b = e[S], !a.hasOwnProperty(S) || v === b || v === void 0 && b === void 0 || Wc(
              l,
              t,
              S,
              v,
              a,
              b
            );
          return;
        }
    }
    for (var d in e)
      v = e[d], e.hasOwnProperty(d) && v != null && !a.hasOwnProperty(d) && yl(l, t, d, null, a, v);
    for (T in a)
      v = a[T], b = e[T], !a.hasOwnProperty(T) || v === b || v == null && b == null || yl(l, t, T, v, a, b);
  }
  function Kd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Dy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Kd(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a], y = f.startTime;
            if (y > c) break;
            var S = f.transferSize, T = f.initiatorType;
            S && Kd(T) && (f = f.responseEnd, i += S * (f < c ? 1 : (c - y) / (f - y)));
          }
          if (--a, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var $c = null, Fc = null;
  function Un(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Jd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ic = null;
  function jy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ic ? !1 : (Ic = l, !0) : (Ic = null, !1);
  }
  var Wd = typeof setTimeout == "function" ? setTimeout : void 0, Uy = typeof clearTimeout == "function" ? clearTimeout : void 0, $d = typeof Promise == "function" ? Promise : void 0, Ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof $d < "u" ? function(l) {
    return $d.resolve(null).then(l).catch(Hy);
  } : Wd;
  function Hy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ge(l) {
    return l === "head";
  }
  function Fd(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), Da(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          bu(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, bu(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[qa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && bu(l.ownerDocument.body);
      e = u;
    } while (e);
    Da(t);
  }
  function kd(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function Pc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pc(e), ui(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Cy(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[qa])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = St(l.nextSibling), l === null) break;
    }
    return null;
  }
  function qy(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function Id(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function lf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function tf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function By(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function St(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ef = null;
  function Pd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return St(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function lr(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function tr(l, t, e) {
    switch (t = Un(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function bu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ui(l);
  }
  var pt = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Set();
  function Rn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ft = A.d;
  A.d = {
    f: Yy,
    r: Gy,
    D: Xy,
    C: Qy,
    L: Zy,
    m: Ly,
    X: Ky,
    S: Vy,
    M: Jy
  };
  function Yy() {
    var l = Ft.f(), t = xn();
    return l || t;
  }
  function Gy(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? So(t) : Ft.r(l);
  }
  var _a = typeof document > "u" ? null : document;
  function ar(l, t, e) {
    var a = _a;
    if (a && typeof t == "string" && t) {
      var u = rt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), er.has(u) || (er.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Ql(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Xy(l) {
    Ft.D(l), ar("dns-prefetch", l, null);
  }
  function Qy(l, t) {
    Ft.C(l, t), ar("preconnect", l, t);
  }
  function Zy(l, t, e) {
    Ft.L(l, t, e);
    var a = _a;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + rt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + rt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + rt(
        e.imageSizes
      ) + '"]')) : u += '[href="' + rt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Na(l);
          break;
        case "script":
          n = Ma(l);
      }
      pt.has(n) || (l = U(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), pt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Su(n)) || t === "script" && a.querySelector(pu(n)) || (t = a.createElement("link"), Ql(t, "link", l), Hl(t), a.head.appendChild(t)));
    }
  }
  function Ly(l, t) {
    Ft.m(l, t);
    var e = _a;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + rt(a) + '"][href="' + rt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ma(l);
      }
      if (!pt.has(n) && (l = U({ rel: "modulepreload", href: l }, t), pt.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(pu(n)))
              return;
        }
        a = e.createElement("link"), Ql(a, "link", l), Hl(a), e.head.appendChild(a);
      }
    }
  }
  function Vy(l, t, e) {
    Ft.S(l, t, e);
    var a = _a;
    if (a && l) {
      var u = Fe(a).hoistableStyles, n = Na(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          Su(n)
        ))
          c.loading = 5;
        else {
          l = U(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = pt.get(n)) && af(l, e);
          var f = i = a.createElement("link");
          Hl(f), Ql(f, "link", l), f._p = new Promise(function(y, S) {
            f.onload = y, f.onerror = S;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Hn(i, t, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function Ky(l, t) {
    Ft.X(l, t);
    var e = _a;
    if (e && l) {
      var a = Fe(e).hoistableScripts, u = Ma(l), n = a.get(u);
      n || (n = e.querySelector(pu(u)), n || (l = U({ src: l, async: !0 }, t), (t = pt.get(u)) && uf(l, t), n = e.createElement("script"), Hl(n), Ql(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Jy(l, t) {
    Ft.M(l, t);
    var e = _a;
    if (e && l) {
      var a = Fe(e).hoistableScripts, u = Ma(l), n = a.get(u);
      n || (n = e.querySelector(pu(u)), n || (l = U({ src: l, async: !0, type: "module" }, t), (t = pt.get(u)) && uf(l, t), n = e.createElement("script"), Hl(n), Ql(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function ur(l, t, e, a) {
    var u = (u = J.current) ? Rn(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Na(e.href), e = Fe(
          u
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Na(e.href);
          var n = Fe(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            Su(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), pt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, pt.set(l, e), n || wy(
            u,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ma(e), e = Fe(
          u
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function Na(l) {
    return 'href="' + rt(l) + '"';
  }
  function Su(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function nr(l) {
    return U({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function wy(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Ql(t, "link", e), Hl(t), l.head.appendChild(t));
  }
  function Ma(l) {
    return '[src="' + rt(l) + '"]';
  }
  function pu(l) {
    return "script[async]" + l;
  }
  function ir(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + rt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Hl(a), a;
          var u = U({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(a), Ql(a, "style", u), Hn(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = Na(e.href);
          var n = l.querySelector(
            Su(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Hl(n), n;
          a = nr(e), (u = pt.get(u)) && af(a, u), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Ql(n, "link", a), t.state.loading |= 4, Hn(n, e.precedence, l), t.instance = n;
        case "script":
          return n = Ma(e.src), (u = l.querySelector(
            pu(n)
          )) ? (t.instance = u, Hl(u), u) : (a = e, (u = pt.get(n)) && (a = U({}, e), uf(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Hl(u), Ql(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Hn(a, e.precedence, l));
    return t.instance;
  }
  function Hn(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function af(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function uf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Cn = null;
  function cr(l, t, e) {
    if (Cn === null) {
      var a = /* @__PURE__ */ new Map(), u = Cn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Cn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[qa] || n[Bl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function fr(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Wy(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function sr(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function $y(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = Na(a.href), n = t.querySelector(
          Su(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = qn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Hl(n);
          return;
        }
        n = t.ownerDocument || t, a = nr(a), (u = pt.get(u)) && af(a, u), n = n.createElement("link"), Hl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Ql(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = qn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var nf = 0;
  function Fy(l, t) {
    return l.stylesheets && l.count === 0 && Yn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Yn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && nf === 0 && (nf = 62500 * Dy());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Yn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > nf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function qn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Yn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Bn = null;
  function Yn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Bn = /* @__PURE__ */ new Map(), t.forEach(ky, l), Bn = null, qn.call(l));
  }
  function ky(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Bn.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Bn.set(l, e);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = e.get(i) || a, n === a && e.set(null, u), e.set(i, u), this.count++, a = qn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var zu = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function Iy(l, t, e, a, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = li(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.hiddenUpdates = li(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function or(l, t, e, a, u, n, i, c, f, y, S, T) {
    return l = new Iy(
      l,
      t,
      e,
      i,
      f,
      y,
      S,
      T,
      c
    ), t = 1, n === !0 && (t |= 24), n = nt(3, null, null, t), l.current = n, n.stateNode = l, t = Yi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Zi(n), l;
  }
  function dr(l) {
    return l ? (l = ia, l) : ia;
  }
  function rr(l, t, e, a, u, n) {
    u = dr(u), a.context === null ? a.context = u : a.pendingContext = u, a = ie(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ce(l, a, t), e !== null && (Pl(e, l, t), Pa(e, l, t));
  }
  function mr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function cf(l, t) {
    mr(l, t), (l = l.alternate) && mr(l, t);
  }
  function yr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = je(l, 67108864);
      t !== null && Pl(t, l, 67108864), cf(l, 67108864);
    }
  }
  function hr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ot();
      t = ti(t);
      var e = je(l, t);
      e !== null && Pl(e, l, t), cf(l, t);
    }
  }
  var Gn = !0;
  function Py(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = A.p;
    try {
      A.p = 2, ff(l, t, e, a);
    } finally {
      A.p = n, z.T = u;
    }
  }
  function lh(l, t, e, a) {
    var u = z.T;
    z.T = null;
    var n = A.p;
    try {
      A.p = 8, ff(l, t, e, a);
    } finally {
      A.p = n, z.T = u;
    }
  }
  function ff(l, t, e, a) {
    if (Gn) {
      var u = sf(a);
      if (u === null)
        wc(
          l,
          t,
          a,
          Xn,
          e
        ), gr(l, a);
      else if (eh(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (gr(l, a), t & 4 && -1 < th.indexOf(l)) {
        for (; u !== null; ) {
          var n = $e(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = Oe(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - at(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Dt(n), (nl & 6) === 0 && (En = tt() + 500, hu(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = je(n, 2), c !== null && Pl(c, n, 2), xn(), cf(n, 2);
            }
          if (n = sf(a), n === null && wc(
            l,
            t,
            a,
            Xn,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        wc(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function sf(l) {
    return l = oi(l), of(l);
  }
  var Xn = null;
  function of(l) {
    if (Xn = null, l = We(l), l !== null) {
      var t = L(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = tl(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = K(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Xn = l, null;
  }
  function vr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Xr()) {
          case Tf:
            return 2;
          case xf:
            return 8;
          case Nu:
          case Qr:
            return 32;
          case Af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1, be = null, Se = null, pe = null, Eu = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), ze = [], th = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function gr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        be = null;
        break;
      case "dragenter":
      case "dragleave":
        Se = null;
        break;
      case "mouseover":
      case "mouseout":
        pe = null;
        break;
      case "pointerover":
      case "pointerout":
        Eu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(t.pointerId);
    }
  }
  function xu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = $e(t), t !== null && yr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function eh(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return be = xu(
          be,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Se = xu(
          Se,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return pe = xu(
          pe,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Eu.set(
          n,
          xu(
            Eu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Tu.set(
          n,
          xu(
            Tu.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function br(l) {
    var t = We(l.target);
    if (t !== null) {
      var e = L(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = tl(e), t !== null) {
            l.blockedOn = t, jf(l.priority, function() {
              hr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = K(e), t !== null) {
            l.blockedOn = t, jf(l.priority, function() {
              hr(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = sf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        si = a, e.target.dispatchEvent(a), si = null;
      } else
        return t = $e(e), t !== null && yr(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function Sr(l, t, e) {
    Qn(l) && e.delete(t);
  }
  function ah() {
    df = !1, be !== null && Qn(be) && (be = null), Se !== null && Qn(Se) && (Se = null), pe !== null && Qn(pe) && (pe = null), Eu.forEach(Sr), Tu.forEach(Sr);
  }
  function Zn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, df || (df = !0, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      ah
    )));
  }
  var Ln = null;
  function pr(l) {
    Ln !== l && (Ln = l, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      function() {
        Ln === l && (Ln = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (of(a || e) === null)
              continue;
            break;
          }
          var n = $e(e);
          n !== null && (l.splice(t, 3), t -= 3, fc(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Da(l) {
    function t(f) {
      return Zn(f, l);
    }
    be !== null && Zn(be, l), Se !== null && Zn(Se, l), pe !== null && Zn(pe, l), Eu.forEach(t), Tu.forEach(t);
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ze.length && (e = ze[0], e.blockedOn === null); )
      br(e), e.blockedOn === null && ze.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], i = u[wl] || null;
        if (typeof n == "function")
          i || pr(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[wl] || null)
              c = i.formAction;
            else if (of(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), pr(e);
        }
      }
  }
  function zr() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function rf(l) {
    this._internalRoot = l;
  }
  Vn.prototype.render = rf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var e = t.current, a = ot();
    rr(e, a, l, t, null, null);
  }, Vn.prototype.unmount = rf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      rr(l.current, 2, null, l, null, null), xn(), t[we] = null;
    }
  };
  function Vn(l) {
    this._internalRoot = l;
  }
  Vn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Df();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++) ;
      ze.splice(e, 0, l), e === 0 && br(l);
    }
  };
  var Er = N.version;
  if (Er !== "19.2.4")
    throw Error(
      r(
        527,
        Er,
        "19.2.4"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = p(t), l = l !== null ? B(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var uh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kn.isDisabled && Kn.supportsFiber)
      try {
        Ra = Kn.inject(
          uh
        ), et = Kn;
      } catch {
      }
  }
  return Ou.createRoot = function(l, t) {
    if (!q(l)) throw Error(r(299));
    var e = !1, a = "", u = Mo, n = Do, i = jo;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = or(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      i,
      zr
    ), l[we] = t.current, Jc(l), new rf(t);
  }, Ou.hydrateRoot = function(l, t, e) {
    if (!q(l)) throw Error(r(299));
    var a = !1, u = "", n = Mo, i = Do, c = jo, f = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), t = or(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      u,
      f,
      n,
      i,
      c,
      zr
    ), t.context = dr(null), e = t.current, a = ot(), a = ti(a), u = ie(a), u.callback = null, ce(e, u, a), e = a, t.current.lanes = e, Ca(t, e), Dt(t), l[we] = t.current, Jc(l), new Vn(t);
  }, Ou.version = "19.2.4", Ou;
}
var Ur;
function vh() {
  if (Ur) return hf.exports;
  Ur = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (N) {
        console.error(N);
      }
  }
  return g(), hf.exports = hh(), hf.exports;
}
var gh = vh();
const Cr = "http://localhost:5001/api", bh = Cr;
async function jt(g, N = {}) {
  const R = `${bh}${g}`, r = {
    "Content-Type": "application/json",
    ...N.headers
  }, q = await fetch(R, { ...N, headers: r, credentials: "include" }), L = await q.json();
  if (!q.ok)
    throw { success: !1, message: L.message || "Something went wrong", status: q.status };
  return L;
}
const Ve = {
  signup: (g) => jt("/auth/signup", { method: "POST", body: JSON.stringify(g) }),
  verifyEmail: (g) => jt("/auth/verify-email", { method: "POST", body: JSON.stringify(g) }),
  resendOtp: (g) => jt("/auth/resend-otp", { method: "POST", body: JSON.stringify(g) }),
  login: (g) => jt("/auth/login", { method: "POST", body: JSON.stringify(g) }),
  forgotPassword: (g) => jt("/auth/forgot-password", { method: "POST", body: JSON.stringify(g) }),
  resetPassword: (g) => jt("/auth/reset-password", { method: "POST", body: JSON.stringify(g) }),
  logout: () => jt("/auth/logout", { method: "POST" })
}, Rr = {
  getProfile: () => jt("/user/profile"),
  updateProfile: (g) => jt("/user/profile", { method: "PUT", body: JSON.stringify(g) }),
  changePassword: (g) => jt("/user/change-password", { method: "PUT", body: JSON.stringify(g) })
};
function Ke() {
  return {
    push: (g) => window.location.assign(g),
    replace: (g) => window.location.replace(g),
    prefetch: async () => {
    },
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    refresh: () => window.location.reload()
  };
}
function pf() {
  return new URLSearchParams(window.location.search);
}
const qr = el.createContext(void 0);
function Sh({ children: g }) {
  const [N, R] = el.useState(null), [r, q] = el.useState(!0);
  el.useEffect(() => {
    let p = !0;
    return Rr.getProfile().then((B) => {
      p && R(B.data?.user ?? null);
    }).catch(() => {
      p && R(null);
    }).finally(() => {
      p && q(!1);
    }), () => {
      p = !1;
    };
  }, []);
  const L = Ke();
  el.useEffect(() => {
    typeof window < "u" && window.localStorage.setItem("GRFF_API_URL", Cr);
  }, []);
  const tl = async () => {
    try {
      const p = await Rr.getProfile();
      R(p.data?.user ?? null);
    } catch {
      R(null);
    }
  }, K = async (p, B) => {
    if (B) {
      R(B);
      return;
    }
    await tl();
  }, _ = async () => {
    await Ve.logout(), R(null), L.push("/login");
  };
  return /* @__PURE__ */ h.jsx(qr.Provider, { value: { user: N, loading: r, login: K, logout: _, refreshUser: tl }, children: g });
}
function wn() {
  const g = el.useContext(qr);
  if (!g) throw new Error("useAuth must be used within AuthProvider");
  return g;
}
function ph({ children: g }) {
  return /* @__PURE__ */ h.jsx(Sh, { children: g });
}
function Te({ href: g, children: N, className: R }) {
  const r = typeof g == "string" ? g : g.pathname ?? "/";
  return /* @__PURE__ */ h.jsx("a", { href: r, className: R, children: N });
}
function ja({ children: g, title: N, subtitle: R }) {
  return /* @__PURE__ */ h.jsx("div", { className: "min-h-screen bg-background grid-pattern flex items-center justify-center px-4 py-12", children: /* @__PURE__ */ h.jsxs("div", { className: "w-full max-w-md space-y-8", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ h.jsx(Te, { href: "/", children: /* @__PURE__ */ h.jsx("h1", { className: "text-3xl font-bold font-heading gradient-text inline-block", children: "GRFF" }) }),
      /* @__PURE__ */ h.jsx("h2", { className: "mt-4 text-2xl font-heading font-semibold text-foreground", children: N }),
      R && /* @__PURE__ */ h.jsx("p", { className: "mt-2 text-muted-foreground text-sm", children: R })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "glass rounded-2xl p-8", children: g })
  ] }) });
}
function zh() {
  const g = Ke(), R = pf().get("reset") === "success", { login: r } = wn(), [q, L] = el.useState({ email: "", password: "" }), [tl, K] = el.useState(""), [_, p] = el.useState(!1), B = (I) => {
    L({ ...q, [I.target.name]: I.target.value });
  }, U = async (I) => {
    I.preventDefault(), K(""), p(!0);
    try {
      const vl = await Ve.login({ email: q.email, password: q.password });
      vl.data && (r(vl.data.token, vl.data.user), g.push("/dashboard"));
    } catch (vl) {
      const zl = vl;
      if (zl.status === 403) {
        g.push(`/verify-email?email=${encodeURIComponent(q.email)}`);
        return;
      }
      K(zl.message || "Login failed. Please try again.");
    } finally {
      p(!1);
    }
  };
  return /* @__PURE__ */ h.jsx(ja, { title: "Welcome Back", subtitle: "Log in to your GRFF account", children: /* @__PURE__ */ h.jsxs("form", { onSubmit: U, className: "space-y-5", children: [
    R && /* @__PURE__ */ h.jsx("div", { className: "bg-primary/10 border border-primary/30 text-primary rounded-lg px-4 py-3 text-sm", children: "Password reset successfully. You can now log in." }),
    tl && /* @__PURE__ */ h.jsx("div", { className: "bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm", children: tl }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground mb-1.5", children: "Email Address" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "email",
          name: "email",
          type: "email",
          required: !0,
          value: q.email,
          onChange: B,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "you@example.com"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
        /* @__PURE__ */ h.jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-foreground", children: "Password" }),
        /* @__PURE__ */ h.jsx(Te, { href: "/forgot-password", className: "text-xs text-accent hover:underline", children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "password",
          name: "password",
          type: "password",
          required: !0,
          value: q.password,
          onChange: B,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Enter your password"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "submit",
        disabled: _,
        className: "w-full gradient-primary text-primary-foreground font-medium py-2.5 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: _ ? "Logging in..." : "Log In"
      }
    ),
    /* @__PURE__ */ h.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ h.jsx(Te, { href: "/signup", className: "text-accent hover:underline font-medium", children: "Sign up" })
    ] })
  ] }) });
}
function Hr() {
  return /* @__PURE__ */ h.jsx(
    el.Suspense,
    {
      fallback: /* @__PURE__ */ h.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground", children: "Loading..." }) }),
      children: /* @__PURE__ */ h.jsx(zh, {})
    }
  );
}
function Eh() {
  const g = Ke(), [N, R] = el.useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  }), [r, q] = el.useState(""), [L, tl] = el.useState(!1), K = (p) => {
    R({ ...N, [p.target.name]: p.target.value });
  }, _ = async (p) => {
    if (p.preventDefault(), q(""), N.password !== N.confirmPassword) {
      q("Passwords do not match");
      return;
    }
    if (N.password.length < 6) {
      q("Password must be at least 6 characters");
      return;
    }
    tl(!0);
    try {
      await Ve.signup({
        name: N.name,
        email: N.email,
        password: N.password,
        mobile: N.mobile || void 0
      }), g.push(`/verify-email?email=${encodeURIComponent(N.email)}`);
    } catch (B) {
      q(B.message || "Signup failed. Please try again.");
    } finally {
      tl(!1);
    }
  };
  return /* @__PURE__ */ h.jsx(ja, { title: "Create Account", subtitle: "Sign up to get started with GRFF", children: /* @__PURE__ */ h.jsxs("form", { onSubmit: _, className: "space-y-5", children: [
    r && /* @__PURE__ */ h.jsx("div", { className: "bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm", children: r }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-foreground mb-1.5", children: "Full Name" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "name",
          name: "name",
          type: "text",
          required: !0,
          value: N.name,
          onChange: K,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Enter your full name"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground mb-1.5", children: "Email Address" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "email",
          name: "email",
          type: "email",
          required: !0,
          value: N.email,
          onChange: K,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "you@example.com"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "mobile", className: "block text-sm font-medium text-foreground mb-1.5", children: "Mobile Number" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "mobile",
          name: "mobile",
          type: "tel",
          value: N.mobile,
          onChange: K,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Enter your mobile number"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-foreground mb-1.5", children: "Password" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "password",
          name: "password",
          type: "password",
          required: !0,
          minLength: 6,
          value: N.password,
          onChange: K,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Min 6 characters"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-foreground mb-1.5", children: "Confirm Password" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "confirmPassword",
          name: "confirmPassword",
          type: "password",
          required: !0,
          minLength: 6,
          value: N.confirmPassword,
          onChange: K,
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Re-enter your password"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "submit",
        disabled: L,
        className: "w-full gradient-primary text-primary-foreground font-medium py-2.5 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: L ? "Creating Account..." : "Sign Up"
      }
    ),
    /* @__PURE__ */ h.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ h.jsx(Te, { href: "/login", className: "text-accent hover:underline font-medium", children: "Log in" })
    ] })
  ] }) });
}
function Th() {
  const g = Ke(), N = pf(), { login: R } = wn(), r = N.get("email") || "", [q, L] = el.useState(["", "", "", "", "", ""]), [tl, K] = el.useState(""), [_, p] = el.useState(""), [B, U] = el.useState(!1), [I, vl] = el.useState(!1), zl = el.useRef([]);
  el.useEffect(() => {
    r || g.push("/signup");
  }, [r, g]);
  const Ul = (V, fl) => {
    if (!/^\d*$/.test(fl)) return;
    const dl = [...q];
    dl[V] = fl.slice(-1), L(dl), fl && V < 5 && zl.current[V + 1]?.focus();
  }, lt = (V, fl) => {
    fl.key === "Backspace" && !q[V] && V > 0 && zl.current[V - 1]?.focus();
  }, ql = (V) => {
    V.preventDefault();
    const fl = V.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    fl.length === 6 && (L(fl.split("")), zl.current[5]?.focus());
  }, cl = async (V) => {
    V.preventDefault(), K("");
    const fl = q.join("");
    if (fl.length !== 6) {
      K("Please enter the complete 6-digit OTP");
      return;
    }
    U(!0);
    try {
      const dl = await Ve.verifyEmail({ email: r, otp: fl });
      dl.data?.token && (R(dl.data.token), g.push("/dashboard"));
    } catch (dl) {
      K(dl.message || "Verification failed. Please try again.");
    } finally {
      U(!1);
    }
  }, P = async () => {
    vl(!0), K(""), p("");
    try {
      await Ve.resendOtp({ email: r }), p("OTP resent successfully. Check your email.");
    } catch (V) {
      K(V.message || "Failed to resend OTP.");
    } finally {
      vl(!1);
    }
  };
  return r ? /* @__PURE__ */ h.jsx(ja, { title: "Verify Email", subtitle: `Enter the 6-digit OTP sent to ${r}`, children: /* @__PURE__ */ h.jsxs("form", { onSubmit: cl, className: "space-y-6", children: [
    tl && /* @__PURE__ */ h.jsx("div", { className: "bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm", children: tl }),
    _ && /* @__PURE__ */ h.jsx("div", { className: "bg-primary/10 border border-primary/30 text-primary rounded-lg px-4 py-3 text-sm", children: _ }),
    /* @__PURE__ */ h.jsx("div", { className: "flex justify-center gap-3", onPaste: ql, children: q.map((V, fl) => /* @__PURE__ */ h.jsx(
      "input",
      {
        ref: (dl) => {
          zl.current[fl] = dl;
        },
        type: "text",
        inputMode: "numeric",
        maxLength: 1,
        value: V,
        onChange: (dl) => Ul(fl, dl.target.value),
        onKeyDown: (dl) => lt(fl, dl),
        className: "w-12 h-14 shrink-0 text-center text-xl font-mono font-bold rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
      },
      fl
    )) }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "submit",
        disabled: B,
        className: "w-full gradient-primary text-primary-foreground font-medium py-2.5 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: B ? "Verifying..." : "Verify Email"
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: "text-center", children: /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "button",
        onClick: P,
        disabled: I,
        className: "text-sm text-accent hover:underline font-medium disabled:opacity-50",
        children: I ? "Resending..." : "Didn't receive the OTP? Resend"
      }
    ) }),
    /* @__PURE__ */ h.jsx("p", { className: "text-center text-sm text-muted-foreground", children: /* @__PURE__ */ h.jsx(Te, { href: "/signup", className: "text-accent hover:underline font-medium", children: "Back to Sign Up" }) })
  ] }) }) : null;
}
function xh() {
  return /* @__PURE__ */ h.jsx(
    el.Suspense,
    {
      fallback: /* @__PURE__ */ h.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground", children: "Loading..." }) }),
      children: /* @__PURE__ */ h.jsx(Th, {})
    }
  );
}
function Ah() {
  const g = Ke(), [N, R] = el.useState(""), [r, q] = el.useState(""), [L, tl] = el.useState(!1), K = async (_) => {
    _.preventDefault(), q(""), tl(!0);
    try {
      await Ve.forgotPassword({ email: N }), g.push(`/reset-password?email=${encodeURIComponent(N)}`);
    } catch (p) {
      q(p.message || "Failed to send OTP. Please try again.");
    } finally {
      tl(!1);
    }
  };
  return /* @__PURE__ */ h.jsx(ja, { title: "Forgot Password", subtitle: "Enter your email to receive a password reset OTP", children: /* @__PURE__ */ h.jsxs("form", { onSubmit: K, className: "space-y-5", children: [
    r && /* @__PURE__ */ h.jsx("div", { className: "bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm", children: r }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground mb-1.5", children: "Email Address" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "email",
          name: "email",
          type: "email",
          required: !0,
          value: N,
          onChange: (_) => R(_.target.value),
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "you@example.com"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "submit",
        disabled: L,
        className: "w-full gradient-primary text-primary-foreground font-medium py-2.5 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: L ? "Sending OTP..." : "Send Reset OTP"
      }
    ),
    /* @__PURE__ */ h.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Remember your password?",
      " ",
      /* @__PURE__ */ h.jsx(Te, { href: "/login", className: "text-accent hover:underline font-medium", children: "Log in" })
    ] })
  ] }) });
}
function Oh() {
  const g = Ke(), R = pf().get("email") || "", [r, q] = el.useState(["", "", "", "", "", ""]), [L, tl] = el.useState(""), [K, _] = el.useState(""), [p, B] = el.useState(""), [U, I] = el.useState(!1), vl = el.useRef([]), zl = (cl, P) => {
    if (!/^\d*$/.test(P)) return;
    const V = [...r];
    V[cl] = P.slice(-1), q(V), P && cl < 5 && vl.current[cl + 1]?.focus();
  }, Ul = (cl, P) => {
    P.key === "Backspace" && !r[cl] && cl > 0 && vl.current[cl - 1]?.focus();
  }, lt = (cl) => {
    cl.preventDefault();
    const P = cl.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    P.length === 6 && (q(P.split("")), vl.current[5]?.focus());
  }, ql = async (cl) => {
    cl.preventDefault(), B("");
    const P = r.join("");
    if (P.length !== 6) {
      B("Please enter the complete 6-digit OTP");
      return;
    }
    if (L.length < 6) {
      B("Password must be at least 6 characters");
      return;
    }
    if (L !== K) {
      B("Passwords do not match");
      return;
    }
    I(!0);
    try {
      await Ve.resetPassword({ email: R, otp: P, newPassword: L }), g.push("/login?reset=success");
    } catch (V) {
      B(V.message || "Reset failed. Please try again.");
    } finally {
      I(!1);
    }
  };
  return R ? /* @__PURE__ */ h.jsx(ja, { title: "Reset Password", subtitle: `Enter the OTP sent to ${R} and your new password`, children: /* @__PURE__ */ h.jsxs("form", { onSubmit: ql, className: "space-y-5", children: [
    p && /* @__PURE__ */ h.jsx("div", { className: "bg-destructive/10 border border-destructive/30 text-destructive rounded-lg px-4 py-3 text-sm", children: p }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "OTP Code" }),
      /* @__PURE__ */ h.jsx("div", { className: "flex justify-center gap-3", onPaste: lt, children: r.map((cl, P) => /* @__PURE__ */ h.jsx(
        "input",
        {
          ref: (V) => {
            vl.current[P] = V;
          },
          type: "text",
          inputMode: "numeric",
          maxLength: 1,
          value: cl,
          onChange: (V) => zl(P, V.target.value),
          onKeyDown: (V) => Ul(P, V),
          className: "w-12 h-14 text-center text-xl font-mono font-bold rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
        },
        P
      )) })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "newPassword", className: "block text-sm font-medium text-foreground mb-1.5", children: "New Password" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "newPassword",
          type: "password",
          required: !0,
          minLength: 6,
          value: L,
          onChange: (cl) => tl(cl.target.value),
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Min 6 characters"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-foreground mb-1.5", children: "Confirm New Password" }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          id: "confirmPassword",
          type: "password",
          required: !0,
          minLength: 6,
          value: K,
          onChange: (cl) => _(cl.target.value),
          className: "w-full rounded-lg bg-input border border-border px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors",
          placeholder: "Re-enter new password"
        }
      )
    ] }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        type: "submit",
        disabled: U,
        className: "w-full gradient-primary text-primary-foreground font-medium py-2.5 rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: U ? "Resetting..." : "Reset Password"
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "text-center text-sm text-muted-foreground", children: /* @__PURE__ */ h.jsx(Te, { href: "/login", className: "text-accent hover:underline font-medium", children: "Back to Login" }) })
  ] }) }) : /* @__PURE__ */ h.jsx(ja, { title: "Reset Password", subtitle: "", children: /* @__PURE__ */ h.jsxs("div", { className: "text-center space-y-4", children: [
    /* @__PURE__ */ h.jsx("p", { className: "text-muted-foreground text-sm", children: "No email provided." }),
    /* @__PURE__ */ h.jsx(Te, { href: "/forgot-password", className: "text-accent hover:underline font-medium text-sm", children: "Go to Forgot Password" })
  ] }) });
}
function _h() {
  return /* @__PURE__ */ h.jsx(
    el.Suspense,
    {
      fallback: /* @__PURE__ */ h.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground", children: "Loading..." }) }),
      children: /* @__PURE__ */ h.jsx(Oh, {})
    }
  );
}
function Nh({ children: g }) {
  const { user: N, loading: R } = wn(), r = Ke();
  return el.useEffect(() => {
    !R && !N && r.push("/login");
  }, [N, R, r]), R ? /* @__PURE__ */ h.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ h.jsx("div", { className: "text-muted-foreground font-heading text-lg", children: "Loading..." }) }) : N ? /* @__PURE__ */ h.jsx(h.Fragment, { children: g }) : null;
}
function Mh() {
  return /* @__PURE__ */ h.jsx(Nh, { children: /* @__PURE__ */ h.jsx(Dh, {}) });
}
function Dh() {
  const { user: g, logout: N } = wn();
  return /* @__PURE__ */ h.jsxs("div", { className: "min-h-screen bg-background grid-pattern", children: [
    /* @__PURE__ */ h.jsx("header", { className: "border-b border-border bg-card/80 backdrop-blur-sm", children: /* @__PURE__ */ h.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ h.jsx("h1", { className: "text-xl font-bold font-heading gradient-text", children: /* @__PURE__ */ h.jsx("a", { href: "/", children: "GRFF" }) }),
      /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ h.jsx("span", { className: "text-sm text-muted-foreground hidden sm:block", children: g?.email }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            onClick: N,
            className: "bg-muted text-muted-foreground font-medium px-4 py-2 rounded-lg hover:bg-surface-hover transition-colors text-sm",
            children: "Logout"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsx("main", { className: "max-w-5xl mx-auto px-4 py-10", children: /* @__PURE__ */ h.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsxs("h2", { className: "text-3xl font-heading font-bold text-foreground", children: [
          "Welcome, ",
          g?.name,
          "!"
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "text-muted-foreground mt-1", children: "Here's your account overview." })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "glass rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-heading font-semibold text-foreground", children: "Profile" }),
          /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ h.jsx(kt, { label: "Name", value: g?.name }),
            /* @__PURE__ */ h.jsx(kt, { label: "Email", value: g?.email }),
            /* @__PURE__ */ h.jsx(kt, { label: "Mobile", value: g?.mobile }),
            /* @__PURE__ */ h.jsx(kt, { label: "Gender", value: g?.gender })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "glass rounded-2xl p-6 space-y-4", children: [
          /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-heading font-semibold text-foreground", children: "Address" }),
          /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ h.jsx(kt, { label: "Address", value: g?.address }),
            /* @__PURE__ */ h.jsx(kt, { label: "City", value: g?.city }),
            /* @__PURE__ */ h.jsx(kt, { label: "State", value: g?.state }),
            /* @__PURE__ */ h.jsx(kt, { label: "Pincode", value: g?.pincode }),
            /* @__PURE__ */ h.jsx(kt, { label: "Country", value: g?.country })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "bg-card rounded-2xl p-6 border border-border glow-primary", children: [
        /* @__PURE__ */ h.jsx("h3", { className: "text-lg font-heading font-semibold text-foreground mb-3", children: "Account Status" }),
        /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ h.jsx(
            "span",
            {
              className: `inline-block w-2.5 h-2.5 rounded-full ${g?.isVerified ? "bg-green-500" : "bg-destructive"}`
            }
          ),
          /* @__PURE__ */ h.jsx("span", { className: "text-sm text-foreground", children: g?.isVerified ? "Email Verified" : "Email Not Verified" })
        ] }),
        g?.createdAt && /* @__PURE__ */ h.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
          "Member since ",
          new Date(g.createdAt).toLocaleDateString()
        ] })
      ] })
    ] }) })
  ] });
}
function kt({ label: g, value: N }) {
  return /* @__PURE__ */ h.jsxs("div", { className: "flex items-start justify-between text-sm", children: [
    /* @__PURE__ */ h.jsx("span", { className: "text-muted-foreground", children: g }),
    /* @__PURE__ */ h.jsx("span", { className: "text-foreground font-medium text-right", children: N || "—" })
  ] });
}
let Jn = null;
function jh() {
  const g = window.location.pathname;
  let N;
  return g === "/login" ? N = /* @__PURE__ */ h.jsx(Hr, {}) : g === "/signup" ? N = /* @__PURE__ */ h.jsx(Eh, {}) : g === "/verify-email" ? N = /* @__PURE__ */ h.jsx(xh, {}) : g === "/forgot-password" ? N = /* @__PURE__ */ h.jsx(Ah, {}) : g === "/reset-password" ? N = /* @__PURE__ */ h.jsx(_h, {}) : g === "/dashboard" ? N = /* @__PURE__ */ h.jsx(Mh, {}) : N = /* @__PURE__ */ h.jsx(Hr, {}), /* @__PURE__ */ h.jsx(ph, { children: N });
}
async function Uh() {
}
async function Rh() {
  const g = document.getElementById("mf-root");
  if (!g)
    throw new Error("mf-root not found");
  Jn = gh.createRoot(g), Jn.render(
    /* @__PURE__ */ h.jsx(oh.StrictMode, { children: /* @__PURE__ */ h.jsx(jh, {}) })
  );
}
async function Hh() {
  Jn?.unmount(), Jn = null;
}
export {
  Uh as bootstrap,
  Rh as mount,
  Hh as unmount
};

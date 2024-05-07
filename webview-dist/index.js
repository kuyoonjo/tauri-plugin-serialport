var P = function(o, e) {
  return (P = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  })(o, e);
};
function W(o, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function t() {
    this.constructor = o;
  }
  P(o, e), o.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var h = function() {
  return (h = Object.assign || function(o) {
    for (var e, t = 1, n = arguments.length; t < n; t++)
      for (var i in e = arguments[t])
        Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
    return o;
  }).apply(this, arguments);
};
function r(o, e, t, n) {
  return new (t || (t = Promise))(function(i, u) {
    function c(p) {
      try {
        y(n.next(p));
      } catch (l) {
        u(l);
      }
    }
    function d(p) {
      try {
        y(n.throw(p));
      } catch (l) {
        u(l);
      }
    }
    function y(p) {
      var l;
      p.done ? i(p.value) : (l = p.value, l instanceof t ? l : new t(function(m) {
        m(l);
      })).then(c, d);
    }
    y((n = n.apply(o, e || [])).next());
  });
}
function a(o, e) {
  var t, n, i, u, c = { label: 0, sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  }, trys: [], ops: [] };
  return u = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function d(y) {
    return function(p) {
      return function(l) {
        if (t)
          throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (t = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done)
              return i;
            switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
              case 0:
              case 1:
                i = l;
                break;
              case 4:
                return c.label++, { value: l[1], done: !1 };
              case 5:
                c.label++, n = l[1], l = [0];
                continue;
              case 7:
                l = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (i = c.trys, !((i = i.length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) {
                  c = 0;
                  continue;
                }
                if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
                  c.label = l[1];
                  break;
                }
                if (l[0] === 6 && c.label < i[1]) {
                  c.label = i[1], i = l;
                  break;
                }
                if (i && c.label < i[2]) {
                  c.label = i[2], c.ops.push(l);
                  break;
                }
                i[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            l = e.call(o, c);
          } catch (m) {
            l = [6, m], n = 0;
          } finally {
            t = i = 0;
          }
        if (5 & l[0])
          throw l[1];
        return { value: l[0] ? l[1] : void 0, done: !0 };
      }([y, p]);
    };
  }
}
function v(o, e) {
  e === void 0 && (e = !1);
  var t = window.crypto.getRandomValues(new Uint32Array(1))[0], n = "_".concat(t);
  return Object.defineProperty(window, n, { value: function(i) {
    return e && Reflect.deleteProperty(window, n), o == null ? void 0 : o(i);
  }, writable: !1, configurable: !0 }), t;
}
function f(o, e) {
  return e === void 0 && (e = {}), r(this, void 0, void 0, function() {
    return a(this, function(t) {
      return [2, new Promise(function(n, i) {
        var u = v(function(d) {
          n(d), Reflect.deleteProperty(window, "_".concat(c));
        }, !0), c = v(function(d) {
          i(d), Reflect.deleteProperty(window, "_".concat(u));
        }, !0);
        window.__TAURI_IPC__(h({ cmd: o, callback: u, error: c }, e));
      })];
    });
  });
}
function s(o) {
  return r(this, void 0, void 0, function() {
    return a(this, function(e) {
      return [2, f("tauri", o)];
    });
  });
}
function A(o, e) {
  return r(this, void 0, void 0, function() {
    return a(this, function(t) {
      return [2, s({ __tauriModule: "Event", message: { cmd: "unlisten", event: o, eventId: e } })];
    });
  });
}
function L(o, e, t) {
  return r(this, void 0, void 0, function() {
    return a(this, function(n) {
      switch (n.label) {
        case 0:
          return [4, s({ __tauriModule: "Event", message: { cmd: "emit", event: o, windowLabel: e, payload: typeof t == "string" ? t : JSON.stringify(t) } })];
        case 1:
          return n.sent(), [2];
      }
    });
  });
}
function x(o, e, t) {
  return r(this, void 0, void 0, function() {
    var n = this;
    return a(this, function(i) {
      return [2, s({ __tauriModule: "Event", message: { cmd: "listen", event: o, windowLabel: e, handler: v(t) } }).then(function(u) {
        return function() {
          return r(n, void 0, void 0, function() {
            return a(this, function(c) {
              return [2, A(o, u)];
            });
          });
        };
      })];
    });
  });
}
function R(o, e, t) {
  return r(this, void 0, void 0, function() {
    return a(this, function(n) {
      return [2, x(o, e, function(i) {
        t(i), A(o, i.id).catch(function() {
        });
      })];
    });
  });
}
var w, C = function(o, e) {
  this.type = "Logical", this.width = o, this.height = e;
}, _ = function() {
  function o(e, t) {
    this.type = "Physical", this.width = e, this.height = t;
  }
  return o.prototype.toLogical = function(e) {
    return new C(this.width / e, this.height / e);
  }, o;
}(), E = function(o, e) {
  this.type = "Logical", this.x = o, this.y = e;
}, M = function() {
  function o(e, t) {
    this.type = "Physical", this.x = e, this.y = t;
  }
  return o.prototype.toLogical = function(e) {
    return new E(this.x / e, this.y / e);
  }, o;
}();
function O() {
  return window.__TAURI_METADATA__.__windows.map(function(o) {
    return new b(o.label, { skip: !0 });
  });
}
(function(o) {
  o[o.Critical = 1] = "Critical", o[o.Informational = 2] = "Informational";
})(w || (w = {}));
var g, z = ["tauri://created", "tauri://error"], S = function() {
  function o(e) {
    this.label = e, this.listeners = /* @__PURE__ */ Object.create(null);
  }
  return o.prototype.listen = function(e, t) {
    return r(this, void 0, void 0, function() {
      var n = this;
      return a(this, function(i) {
        return this._handleTauriEvent(e, t) ? [2, Promise.resolve(function() {
          var u = n.listeners[e];
          u.splice(u.indexOf(t), 1);
        })] : [2, x(e, this.label, t)];
      });
    });
  }, o.prototype.once = function(e, t) {
    return r(this, void 0, void 0, function() {
      var n = this;
      return a(this, function(i) {
        return this._handleTauriEvent(e, t) ? [2, Promise.resolve(function() {
          var u = n.listeners[e];
          u.splice(u.indexOf(t), 1);
        })] : [2, R(e, this.label, t)];
      });
    });
  }, o.prototype.emit = function(e, t) {
    return r(this, void 0, void 0, function() {
      var n, i;
      return a(this, function(u) {
        if (z.includes(e)) {
          for (n = 0, i = this.listeners[e] || []; n < i.length; n++)
            (0, i[n])({ event: e, id: -1, windowLabel: this.label, payload: t });
          return [2, Promise.resolve()];
        }
        return [2, L(e, this.label, t)];
      });
    });
  }, o.prototype._handleTauriEvent = function(e, t) {
    return !!z.includes(e) && (e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t], !0);
  }, o;
}(), D = function(o) {
  function e() {
    return o !== null && o.apply(this, arguments) || this;
  }
  return W(e, o), e.prototype.scaleFactor = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "scaleFactor" } } } })];
      });
    });
  }, e.prototype.innerPosition = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "innerPosition" } } } }).then(function(n) {
          var i = n.x, u = n.y;
          return new M(i, u);
        })];
      });
    });
  }, e.prototype.outerPosition = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "outerPosition" } } } }).then(function(n) {
          var i = n.x, u = n.y;
          return new M(i, u);
        })];
      });
    });
  }, e.prototype.innerSize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "innerSize" } } } }).then(function(n) {
          var i = n.width, u = n.height;
          return new _(i, u);
        })];
      });
    });
  }, e.prototype.outerSize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "outerSize" } } } }).then(function(n) {
          var i = n.width, u = n.height;
          return new _(i, u);
        })];
      });
    });
  }, e.prototype.isFullscreen = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isFullscreen" } } } })];
      });
    });
  }, e.prototype.isMaximized = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isMaximized" } } } })];
      });
    });
  }, e.prototype.isDecorated = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isDecorated" } } } })];
      });
    });
  }, e.prototype.isResizable = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isResizable" } } } })];
      });
    });
  }, e.prototype.isVisible = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isVisible" } } } })];
      });
    });
  }, e.prototype.theme = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "theme" } } } })];
      });
    });
  }, e.prototype.center = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "center" } } } })];
      });
    });
  }, e.prototype.requestUserAttention = function(t) {
    return r(this, void 0, void 0, function() {
      var n;
      return a(this, function(i) {
        return n = null, t && (n = t === w.Critical ? { type: "Critical" } : { type: "Informational" }), [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "requestUserAttention", payload: n } } } })];
      });
    });
  }, e.prototype.setResizable = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setResizable", payload: t } } } })];
      });
    });
  }, e.prototype.setTitle = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setTitle", payload: t } } } })];
      });
    });
  }, e.prototype.maximize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "maximize" } } } })];
      });
    });
  }, e.prototype.unmaximize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "unmaximize" } } } })];
      });
    });
  }, e.prototype.toggleMaximize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "toggleMaximize" } } } })];
      });
    });
  }, e.prototype.minimize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "minimize" } } } })];
      });
    });
  }, e.prototype.unminimize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "unminimize" } } } })];
      });
    });
  }, e.prototype.show = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "show" } } } })];
      });
    });
  }, e.prototype.hide = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "hide" } } } })];
      });
    });
  }, e.prototype.close = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "close" } } } })];
      });
    });
  }, e.prototype.setDecorations = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setDecorations", payload: t } } } })];
      });
    });
  }, e.prototype.setAlwaysOnTop = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setAlwaysOnTop", payload: t } } } })];
      });
    });
  }, e.prototype.setSize = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setSize", payload: { type: t.type, data: { width: t.width, height: t.height } } } } } })];
      });
    });
  }, e.prototype.setMinSize = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        if (t && t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setMinSize", payload: t ? { type: t.type, data: { width: t.width, height: t.height } } : null } } } })];
      });
    });
  }, e.prototype.setMaxSize = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        if (t && t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setMaxSize", payload: t ? { type: t.type, data: { width: t.width, height: t.height } } : null } } } })];
      });
    });
  }, e.prototype.setPosition = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setPosition", payload: { type: t.type, data: { x: t.x, y: t.y } } } } } })];
      });
    });
  }, e.prototype.setFullscreen = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setFullscreen", payload: t } } } })];
      });
    });
  }, e.prototype.setFocus = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setFocus" } } } })];
      });
    });
  }, e.prototype.setIcon = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setIcon", payload: { icon: typeof t == "string" ? t : Array.from(t) } } } } })];
      });
    });
  }, e.prototype.setSkipTaskbar = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setSkipTaskbar", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorGrab = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorGrab", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorVisible = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorVisible", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorIcon = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorIcon", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorPosition = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorPosition", payload: { type: t.type, data: { x: t.x, y: t.y } } } } } })];
      });
    });
  }, e.prototype.startDragging = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, s({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "startDragging" } } } })];
      });
    });
  }, e.prototype.onResized = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, this.listen("tauri://resize", t)];
      });
    });
  }, e.prototype.onMoved = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, this.listen("tauri://move", t)];
      });
    });
  }, e.prototype.onCloseRequested = function(t) {
    return r(this, void 0, void 0, function() {
      var n = this;
      return a(this, function(i) {
        return [2, this.listen("tauri://close-requested", function(u) {
          var c = new k(u);
          Promise.resolve(t(c)).then(function() {
            if (!c.isPreventDefault())
              return n.close();
          });
        })];
      });
    });
  }, e.prototype.onFocusChanged = function(t) {
    return r(this, void 0, void 0, function() {
      var n, i;
      return a(this, function(u) {
        switch (u.label) {
          case 0:
            return [4, this.listen("tauri://focus", function(c) {
              t(h(h({}, c), { payload: !0 }));
            })];
          case 1:
            return n = u.sent(), [4, this.listen("tauri://blur", function(c) {
              t(h(h({}, c), { payload: !1 }));
            })];
          case 2:
            return i = u.sent(), [2, function() {
              n(), i();
            }];
        }
      });
    });
  }, e.prototype.onScaleChanged = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, this.listen("tauri://scale-change", t)];
      });
    });
  }, e.prototype.onMenuClicked = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, this.listen("tauri://menu", t)];
      });
    });
  }, e.prototype.onFileDropEvent = function(t) {
    return r(this, void 0, void 0, function() {
      var n, i, u;
      return a(this, function(c) {
        switch (c.label) {
          case 0:
            return [4, this.listen("tauri://file-drop", function(d) {
              t(h(h({}, d), { payload: { type: "drop", paths: d.payload } }));
            })];
          case 1:
            return n = c.sent(), [4, this.listen("tauri://file-drop-hover", function(d) {
              t(h(h({}, d), { payload: { type: "hover", paths: d.payload } }));
            })];
          case 2:
            return i = c.sent(), [4, this.listen("tauri://file-drop-cancelled", function(d) {
              t(h(h({}, d), { payload: { type: "cancel" } }));
            })];
          case 3:
            return u = c.sent(), [2, function() {
              n(), i(), u();
            }];
        }
      });
    });
  }, e.prototype.onThemeChanged = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(n) {
        return [2, this.listen("tauri://theme-changed", t)];
      });
    });
  }, e;
}(S), k = function() {
  function o(e) {
    this._preventDefault = !1, this.event = e.event, this.windowLabel = e.windowLabel, this.id = e.id;
  }
  return o.prototype.preventDefault = function() {
    this._preventDefault = !0;
  }, o.prototype.isPreventDefault = function() {
    return this._preventDefault;
  }, o;
}(), b = function(o) {
  function e(t, n) {
    n === void 0 && (n = {});
    var i = o.call(this, t) || this;
    return n != null && n.skip || s({ __tauriModule: "Window", message: { cmd: "createWebview", data: { options: h({ label: t }, n) } } }).then(function() {
      return r(i, void 0, void 0, function() {
        return a(this, function(u) {
          return [2, this.emit("tauri://created")];
        });
      });
    }).catch(function(u) {
      return r(i, void 0, void 0, function() {
        return a(this, function(c) {
          return [2, this.emit("tauri://error", u)];
        });
      });
    }), i;
  }
  return W(e, o), e.getByLabel = function(t) {
    return O().some(function(n) {
      return n.label === t;
    }) ? new e(t, { skip: !0 }) : null;
  }, e;
}(D);
"__TAURI_METADATA__" in window ? g = new b(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 }) : (console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`), g = new b("main", { skip: !0 }));
class T {
  constructor(e) {
    const {
      encoding: t = "utf-8",
      path: n,
      baudRate: i,
      dataBits: u = 8,
      flowControl: c,
      parity: d,
      stopBits: y = 2,
      timeout: p = 200,
      size: l = 1024
    } = e;
    this.isOpen = !1, this.encoding = t, this.options = {
      path: n,
      baudRate: i,
      dataBits: u,
      flowControl: c || null,
      parity: d || null,
      stopBits: y,
      timeout: p
    }, this.size = l;
  }
  /**
   * @description: 获取串口列表
   * @return
   */
  static async available_ports() {
    return await f("plugin:serialport|available_ports");
  }
  /**
   * @description: 强制关闭
   * @param {string} path
   * @return
   */
  static async forceClose(e) {
    return await f("plugin:serialport|force_close", {
      path: e
    });
  }
  /**
   * @description: 关闭所有串口
   * @return
   */
  static async closeAll() {
    return await f("plugin:serialport|close_all");
  }
  /**
   * @description: 取消串口监听
   * @return
   */
  async cancelListen() {
    this.unListen && (this.unListen(), this.unListen = void 0);
  }
  /**
   * @description: 取消读取数据
   * @return
   */
  async cancelRead() {
    return await f("plugin:serialport|cancel_read", {
      path: this.options.path
    });
  }
  async change(e, t = 3, n = 500) {
    let i = !1;
    if (this.isOpen && (i = !0, await this.close()), e.path && (this.options.path = e.path), e.baudRate && (this.options.baudRate = e.baudRate), i) {
      let u = t;
      for (; u; )
        try {
          await this.open();
          return;
        } catch (c) {
          if (u--, !u)
            throw c;
          await new Promise((d) => setTimeout(d, n));
        }
    }
  }
  setBaudRate(e, t = 3, n = 500) {
    return this.change({ baudRate: e }, t, n);
  }
  setPath(e, t = 3, n = 500) {
    return this.change({ path: e }, t, n);
  }
  /**
   * @description: 关闭串口
   * @return
   */
  async close() {
    await this.cancelRead(), await this.cancelListen(), await T.forceClose(this.options.path), this.isOpen = !1;
  }
  async listen(e, t = !0) {
    await this.cancelListen();
    const n = "plugin-serialport-read-" + this.options.path.replace(/\./g, "__dot__");
    this.unListen = await g.listen(
      n,
      ({ payload: i }) => {
        try {
          if (t) {
            const c = new TextDecoder(this.encoding).decode(new Uint8Array(i.data));
            e(c);
          } else
            e(new Uint8Array(i.data));
        } catch (u) {
          console.error(u);
        }
      }
    );
  }
  /**
   * @description: 打开串口
   * @return
   */
  async open() {
    if (!this.options.path)
      throw new Error("path is required!");
    if (!this.options.baudRate)
      throw new Error("baudRate is required!");
    if (this.isOpen)
      throw new Error(`${this.options.path} is already opened!`);
    const e = await f("plugin:serialport|open", {
      path: this.options.path,
      baudRate: this.options.baudRate,
      dataBits: this.options.dataBits,
      flowControl: this.options.flowControl,
      parity: this.options.parity,
      stopBits: this.options.stopBits,
      timeout: this.options.timeout
    });
    return this.isOpen = !0, e;
  }
  /**
   * @description: 读取串口信息
   * @param {ReadOptions} options 读取选项 { timeout, size }
   * @return
   */
  async read(e) {
    return await f("plugin:serialport|read", {
      path: this.options.path,
      timeout: (e == null ? void 0 : e.timeout) || this.options.timeout,
      size: (e == null ? void 0 : e.size) || this.size
    });
  }
  /**
   * @description: 串口写入数据
   * @param {string} value
   * @return
   */
  async write(e) {
    if (!this.isOpen)
      throw new Error(`${this.options.path} is not opened!`);
    return await f("plugin:serialport|write", {
      value: e,
      path: this.options.path
    });
  }
  /**
   * @description: 写入二进制数据到串口
   * @param {Uint8Array} value
   * @return
   */
  async writeBinary(e) {
    if (!this.isOpen)
      throw new Error(`${this.options.path} is not opened!`);
    if (!(e instanceof Uint8Array || e instanceof Array))
      throw new Error("value 参数类型错误! 期望类型: Uint8Array, number[]");
    return await f("plugin:serialport|write_binary", {
      value: Array.from(e),
      path: this.options.path
    });
  }
}
export {
  T as Serialport
};

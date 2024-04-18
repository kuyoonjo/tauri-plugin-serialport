var W = function(o, e) {
  return (W = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
  })(o, e);
};
function P(o, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function t() {
    this.constructor = o;
  }
  W(o, e), o.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var h = function() {
  return (h = Object.assign || function(o) {
    for (var e, t = 1, i = arguments.length; t < i; t++)
      for (var n in e = arguments[t])
        Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
    return o;
  }).apply(this, arguments);
};
function r(o, e, t, i) {
  return new (t || (t = Promise))(function(n, s) {
    function c(p) {
      try {
        y(i.next(p));
      } catch (l) {
        s(l);
      }
    }
    function d(p) {
      try {
        y(i.throw(p));
      } catch (l) {
        s(l);
      }
    }
    function y(p) {
      var l;
      p.done ? n(p.value) : (l = p.value, l instanceof t ? l : new t(function(m) {
        m(l);
      })).then(c, d);
    }
    y((i = i.apply(o, e || [])).next());
  });
}
function a(o, e) {
  var t, i, n, s, c = { label: 0, sent: function() {
    if (1 & n[0])
      throw n[1];
    return n[1];
  }, trys: [], ops: [] };
  return s = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function d(y) {
    return function(p) {
      return function(l) {
        if (t)
          throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (t = 1, i && (n = 2 & l[0] ? i.return : l[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, l[1])).done)
              return n;
            switch (i = 0, n && (l = [2 & l[0], n.value]), l[0]) {
              case 0:
              case 1:
                n = l;
                break;
              case 4:
                return c.label++, { value: l[1], done: !1 };
              case 5:
                c.label++, i = l[1], l = [0];
                continue;
              case 7:
                l = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (n = c.trys, !((n = n.length > 0 && n[n.length - 1]) || l[0] !== 6 && l[0] !== 2)) {
                  c = 0;
                  continue;
                }
                if (l[0] === 3 && (!n || l[1] > n[0] && l[1] < n[3])) {
                  c.label = l[1];
                  break;
                }
                if (l[0] === 6 && c.label < n[1]) {
                  c.label = n[1], n = l;
                  break;
                }
                if (n && c.label < n[2]) {
                  c.label = n[2], c.ops.push(l);
                  break;
                }
                n[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            l = e.call(o, c);
          } catch (m) {
            l = [6, m], i = 0;
          } finally {
            t = n = 0;
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
  var t = window.crypto.getRandomValues(new Uint32Array(1))[0], i = "_".concat(t);
  return Object.defineProperty(window, i, { value: function(n) {
    return e && Reflect.deleteProperty(window, i), o == null ? void 0 : o(n);
  }, writable: !1, configurable: !0 }), t;
}
function f(o, e) {
  return e === void 0 && (e = {}), r(this, void 0, void 0, function() {
    return a(this, function(t) {
      return [2, new Promise(function(i, n) {
        var s = v(function(d) {
          i(d), Reflect.deleteProperty(window, "_".concat(c));
        }, !0), c = v(function(d) {
          n(d), Reflect.deleteProperty(window, "_".concat(s));
        }, !0);
        window.__TAURI_IPC__(h({ cmd: o, callback: s, error: c }, e));
      })];
    });
  });
}
function u(o) {
  return r(this, void 0, void 0, function() {
    return a(this, function(e) {
      return [2, f("tauri", o)];
    });
  });
}
function A(o, e) {
  return r(this, void 0, void 0, function() {
    return a(this, function(t) {
      return [2, u({ __tauriModule: "Event", message: { cmd: "unlisten", event: o, eventId: e } })];
    });
  });
}
function O(o, e, t) {
  return r(this, void 0, void 0, function() {
    return a(this, function(i) {
      switch (i.label) {
        case 0:
          return [4, u({ __tauriModule: "Event", message: { cmd: "emit", event: o, windowLabel: e, payload: typeof t == "string" ? t : JSON.stringify(t) } })];
        case 1:
          return i.sent(), [2];
      }
    });
  });
}
function x(o, e, t) {
  return r(this, void 0, void 0, function() {
    var i = this;
    return a(this, function(n) {
      return [2, u({ __tauriModule: "Event", message: { cmd: "listen", event: o, windowLabel: e, handler: v(t) } }).then(function(s) {
        return function() {
          return r(i, void 0, void 0, function() {
            return a(this, function(c) {
              return [2, A(o, s)];
            });
          });
        };
      })];
    });
  });
}
function T(o, e, t) {
  return r(this, void 0, void 0, function() {
    return a(this, function(i) {
      return [2, x(o, e, function(n) {
        t(n), A(o, n.id).catch(function() {
        });
      })];
    });
  });
}
var w, L = function(o, e) {
  this.type = "Logical", this.width = o, this.height = e;
}, _ = function() {
  function o(e, t) {
    this.type = "Physical", this.width = e, this.height = t;
  }
  return o.prototype.toLogical = function(e) {
    return new L(this.width / e, this.height / e);
  }, o;
}(), R = function(o, e) {
  this.type = "Logical", this.x = o, this.y = e;
}, M = function() {
  function o(e, t) {
    this.type = "Physical", this.x = e, this.y = t;
  }
  return o.prototype.toLogical = function(e) {
    return new R(this.x / e, this.y / e);
  }, o;
}();
function E() {
  return window.__TAURI_METADATA__.__windows.map(function(o) {
    return new b(o.label, { skip: !0 });
  });
}
(function(o) {
  o[o.Critical = 1] = "Critical", o[o.Informational = 2] = "Informational";
})(w || (w = {}));
var g, z = ["tauri://created", "tauri://error"], C = function() {
  function o(e) {
    this.label = e, this.listeners = /* @__PURE__ */ Object.create(null);
  }
  return o.prototype.listen = function(e, t) {
    return r(this, void 0, void 0, function() {
      var i = this;
      return a(this, function(n) {
        return this._handleTauriEvent(e, t) ? [2, Promise.resolve(function() {
          var s = i.listeners[e];
          s.splice(s.indexOf(t), 1);
        })] : [2, x(e, this.label, t)];
      });
    });
  }, o.prototype.once = function(e, t) {
    return r(this, void 0, void 0, function() {
      var i = this;
      return a(this, function(n) {
        return this._handleTauriEvent(e, t) ? [2, Promise.resolve(function() {
          var s = i.listeners[e];
          s.splice(s.indexOf(t), 1);
        })] : [2, T(e, this.label, t)];
      });
    });
  }, o.prototype.emit = function(e, t) {
    return r(this, void 0, void 0, function() {
      var i, n;
      return a(this, function(s) {
        if (z.includes(e)) {
          for (i = 0, n = this.listeners[e] || []; i < n.length; i++)
            (0, n[i])({ event: e, id: -1, windowLabel: this.label, payload: t });
          return [2, Promise.resolve()];
        }
        return [2, O(e, this.label, t)];
      });
    });
  }, o.prototype._handleTauriEvent = function(e, t) {
    return !!z.includes(e) && (e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t], !0);
  }, o;
}(), S = function(o) {
  function e() {
    return o !== null && o.apply(this, arguments) || this;
  }
  return P(e, o), e.prototype.scaleFactor = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "scaleFactor" } } } })];
      });
    });
  }, e.prototype.innerPosition = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "innerPosition" } } } }).then(function(i) {
          var n = i.x, s = i.y;
          return new M(n, s);
        })];
      });
    });
  }, e.prototype.outerPosition = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "outerPosition" } } } }).then(function(i) {
          var n = i.x, s = i.y;
          return new M(n, s);
        })];
      });
    });
  }, e.prototype.innerSize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "innerSize" } } } }).then(function(i) {
          var n = i.width, s = i.height;
          return new _(n, s);
        })];
      });
    });
  }, e.prototype.outerSize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "outerSize" } } } }).then(function(i) {
          var n = i.width, s = i.height;
          return new _(n, s);
        })];
      });
    });
  }, e.prototype.isFullscreen = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isFullscreen" } } } })];
      });
    });
  }, e.prototype.isMaximized = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isMaximized" } } } })];
      });
    });
  }, e.prototype.isDecorated = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isDecorated" } } } })];
      });
    });
  }, e.prototype.isResizable = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isResizable" } } } })];
      });
    });
  }, e.prototype.isVisible = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isVisible" } } } })];
      });
    });
  }, e.prototype.theme = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "theme" } } } })];
      });
    });
  }, e.prototype.center = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "center" } } } })];
      });
    });
  }, e.prototype.requestUserAttention = function(t) {
    return r(this, void 0, void 0, function() {
      var i;
      return a(this, function(n) {
        return i = null, t && (i = t === w.Critical ? { type: "Critical" } : { type: "Informational" }), [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "requestUserAttention", payload: i } } } })];
      });
    });
  }, e.prototype.setResizable = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setResizable", payload: t } } } })];
      });
    });
  }, e.prototype.setTitle = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setTitle", payload: t } } } })];
      });
    });
  }, e.prototype.maximize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "maximize" } } } })];
      });
    });
  }, e.prototype.unmaximize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "unmaximize" } } } })];
      });
    });
  }, e.prototype.toggleMaximize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "toggleMaximize" } } } })];
      });
    });
  }, e.prototype.minimize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "minimize" } } } })];
      });
    });
  }, e.prototype.unminimize = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "unminimize" } } } })];
      });
    });
  }, e.prototype.show = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "show" } } } })];
      });
    });
  }, e.prototype.hide = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "hide" } } } })];
      });
    });
  }, e.prototype.close = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "close" } } } })];
      });
    });
  }, e.prototype.setDecorations = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setDecorations", payload: t } } } })];
      });
    });
  }, e.prototype.setAlwaysOnTop = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setAlwaysOnTop", payload: t } } } })];
      });
    });
  }, e.prototype.setSize = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setSize", payload: { type: t.type, data: { width: t.width, height: t.height } } } } } })];
      });
    });
  }, e.prototype.setMinSize = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        if (t && t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setMinSize", payload: t ? { type: t.type, data: { width: t.width, height: t.height } } : null } } } })];
      });
    });
  }, e.prototype.setMaxSize = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        if (t && t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setMaxSize", payload: t ? { type: t.type, data: { width: t.width, height: t.height } } : null } } } })];
      });
    });
  }, e.prototype.setPosition = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setPosition", payload: { type: t.type, data: { x: t.x, y: t.y } } } } } })];
      });
    });
  }, e.prototype.setFullscreen = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setFullscreen", payload: t } } } })];
      });
    });
  }, e.prototype.setFocus = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setFocus" } } } })];
      });
    });
  }, e.prototype.setIcon = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setIcon", payload: { icon: typeof t == "string" ? t : Array.from(t) } } } } })];
      });
    });
  }, e.prototype.setSkipTaskbar = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setSkipTaskbar", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorGrab = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorGrab", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorVisible = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorVisible", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorIcon = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorIcon", payload: t } } } })];
      });
    });
  }, e.prototype.setCursorPosition = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
          throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setCursorPosition", payload: { type: t.type, data: { x: t.x, y: t.y } } } } } })];
      });
    });
  }, e.prototype.startDragging = function() {
    return r(this, void 0, void 0, function() {
      return a(this, function(t) {
        return [2, u({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "startDragging" } } } })];
      });
    });
  }, e.prototype.onResized = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, this.listen("tauri://resize", t)];
      });
    });
  }, e.prototype.onMoved = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, this.listen("tauri://move", t)];
      });
    });
  }, e.prototype.onCloseRequested = function(t) {
    return r(this, void 0, void 0, function() {
      var i = this;
      return a(this, function(n) {
        return [2, this.listen("tauri://close-requested", function(s) {
          var c = new D(s);
          Promise.resolve(t(c)).then(function() {
            if (!c.isPreventDefault())
              return i.close();
          });
        })];
      });
    });
  }, e.prototype.onFocusChanged = function(t) {
    return r(this, void 0, void 0, function() {
      var i, n;
      return a(this, function(s) {
        switch (s.label) {
          case 0:
            return [4, this.listen("tauri://focus", function(c) {
              t(h(h({}, c), { payload: !0 }));
            })];
          case 1:
            return i = s.sent(), [4, this.listen("tauri://blur", function(c) {
              t(h(h({}, c), { payload: !1 }));
            })];
          case 2:
            return n = s.sent(), [2, function() {
              i(), n();
            }];
        }
      });
    });
  }, e.prototype.onScaleChanged = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, this.listen("tauri://scale-change", t)];
      });
    });
  }, e.prototype.onMenuClicked = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, this.listen("tauri://menu", t)];
      });
    });
  }, e.prototype.onFileDropEvent = function(t) {
    return r(this, void 0, void 0, function() {
      var i, n, s;
      return a(this, function(c) {
        switch (c.label) {
          case 0:
            return [4, this.listen("tauri://file-drop", function(d) {
              t(h(h({}, d), { payload: { type: "drop", paths: d.payload } }));
            })];
          case 1:
            return i = c.sent(), [4, this.listen("tauri://file-drop-hover", function(d) {
              t(h(h({}, d), { payload: { type: "hover", paths: d.payload } }));
            })];
          case 2:
            return n = c.sent(), [4, this.listen("tauri://file-drop-cancelled", function(d) {
              t(h(h({}, d), { payload: { type: "cancel" } }));
            })];
          case 3:
            return s = c.sent(), [2, function() {
              i(), n(), s();
            }];
        }
      });
    });
  }, e.prototype.onThemeChanged = function(t) {
    return r(this, void 0, void 0, function() {
      return a(this, function(i) {
        return [2, this.listen("tauri://theme-changed", t)];
      });
    });
  }, e;
}(C), D = function() {
  function o(e) {
    this._preventDefault = !1, this.event = e.event, this.windowLabel = e.windowLabel, this.id = e.id;
  }
  return o.prototype.preventDefault = function() {
    this._preventDefault = !0;
  }, o.prototype.isPreventDefault = function() {
    return this._preventDefault;
  }, o;
}(), b = function(o) {
  function e(t, i) {
    i === void 0 && (i = {});
    var n = o.call(this, t) || this;
    return i != null && i.skip || u({ __tauriModule: "Window", message: { cmd: "createWebview", data: { options: h({ label: t }, i) } } }).then(function() {
      return r(n, void 0, void 0, function() {
        return a(this, function(s) {
          return [2, this.emit("tauri://created")];
        });
      });
    }).catch(function(s) {
      return r(n, void 0, void 0, function() {
        return a(this, function(c) {
          return [2, this.emit("tauri://error", s)];
        });
      });
    }), n;
  }
  return P(e, o), e.getByLabel = function(t) {
    return E().some(function(i) {
      return i.label === t;
    }) ? new e(t, { skip: !0 }) : null;
  }, e;
}(S);
"__TAURI_METADATA__" in window ? g = new b(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 }) : (console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`), g = new b("main", { skip: !0 }));
class k {
  constructor(e) {
    const {
      encoding: t = "utf-8",
      path: i,
      baudRate: n,
      dataBits: s = 8,
      flowControl: c,
      parity: d,
      stopBits: y = 2,
      timeout: p = 200,
      size: l = 1024
    } = e;
    this.isOpen = !1, this.encoding = t, this.options = {
      path: i,
      baudRate: n,
      dataBits: s,
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
  /**
   * @description:
   * @param {object} options
   * @return
   */
  async change(e) {
    let t = !1;
    this.isOpen && (t = !0, await this.close()), e.path && (this.options.path = e.path), e.baudRate && (this.options.baudRate = e.baudRate), t && await this.open();
  }
  /**
   * @description: 关闭串口
   * @return
   */
  async close() {
    if (!this.isOpen)
      throw new Error(`${this.options.path} is not opened!`);
    await this.cancelRead();
    const e = await f("plugin:serialport|close", {
      path: this.options.path
    });
    return await this.cancelListen(), this.isOpen = !1, e;
  }
  async listen(e, t = !0) {
    await this.cancelListen();
    const i = "plugin-serialport-read-" + this.options.path.replace(/\./g, "__dot__");
    this.unListen = await g.listen(
      i,
      ({ payload: n }) => {
        try {
          if (t) {
            const c = new TextDecoder(this.encoding).decode(new Uint8Array(n.data));
            e(c);
          } else
            e(new Uint8Array(n.data));
        } catch (s) {
          console.error(s);
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
   * @description: 设置串口 波特率
   * @param {number} value
   * @return
   */
  async setBaudRate(e) {
    let t = !1;
    this.isOpen && (t = !0, await this.close()), this.options.baudRate = e, t && await this.open();
  }
  /**
   * @description: 设置串口 path
   * @param {string} value
   * @return
   */
  async setPath(e) {
    let t = !1;
    this.isOpen && (t = !0, await this.close()), this.options.path = e, t && await this.open();
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
  k as Serialport
};

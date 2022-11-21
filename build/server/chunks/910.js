"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 3168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ FilterSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(910);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5019);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const FilterSearch = ({
  id = 'nextgen',
  options = [],
  filterPlaceholder,
  placeholder,
  colorMap,
  onChange = values => null,
  suggestions = [],
  badgePosition = 'start',
  getSelectedFilterIdx = idx => null
}) => {
  const {
    0: filterIdx,
    1: setFilterIdx
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: searchValues,
    1: setSearchValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // to store internal filter (dynamic)

  const {
    0: badges,
    1: setBadges
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // to store badge info (static)

  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: existedValues,
    1: setExistedValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_hooks_click_outside__WEBPACK_IMPORTED_MODULE_3__/* .useOnClickOutside */ .t)(dropdownRef, () => setExpanded(false));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const response = {};
    searchValues.map(v => {
      const key = Object.keys(v)[0] ?? '';

      if (Object.keys(response).includes(key)) {
        response[key]?.push(v[key] ?? '');
      } else if (v && v[key]) {
        response[key] = [v[key] ?? ''];
      }
    });
    setExistedValues(response);
    onChange(response); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValues]);

  const onClickSearch = () => {
    setExpanded(false);
    if (options.length <= 0 || !search) return;
    const currentValues = searchValues;
    const key = options[filterIdx]?.value ?? '';
    if (!key || !currentValues) return;
    const dupValue = currentValues.length > 0 && currentValues.map(v => !!v[key] && v[key] === search).reduce((prev, curr) => prev || curr);

    if (!dupValue) {
      currentValues.push({
        [key]: search
      });
      setSearchValues([...currentValues]); // add new badges

      const currentBadges = badges;
      currentBadges.push([key, (options[filterIdx]?.extra ?? '') + search]);
      setBadges([...currentBadges]);
    }

    setSearch("");
  };

  const handleOnBadgeClose = idx => {
    const currentValue = searchValues;
    currentValue.splice(idx, 1);
    setSearchValues([...currentValue]);
    const currentBadges = badges;
    currentBadges.splice(idx, 1);
    setBadges([...currentBadges]);
  };

  const handleOnBackSpace = () => {
    if (badges && badges.length > 0 && search === '') {
      const badgeValue = options[badges?.[badges.length - 1]?.[0] ?? 0]?.extra ? badges[badges.length - 1]?.[1]?.slice(1, badges[badges.length - 1]?.[1]?.length) ?? '' : badges[badges.length - 1]?.[1] ?? '';
      setSearch(badgeValue);
      handleOnBadgeClose(badges.length - 1);
    }
  };

  const onSelectSuggestion = value => {
    setSearch(value ?? '');
    const input = document.getElementById(id);
    input?.focus();
  };

  const suggestionsList = (search ? suggestions.filter(v => {
    const isContainedMatch = v.toLowerCase().includes(search.toLowerCase());
    const isNotExactSame = search.toLowerCase() !== v.toLowerCase();
    return isContainedMatch && isNotExactSame;
  }) : suggestions // Filter the existing one out from the suggestions
  ).filter(v => !existedValues[options[filterIdx]?.value ?? '']?.map(exv => exv.toLowerCase()).includes(v.toLowerCase()) ?? false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "flex relative shadow-sm border-gray-300 border rounded-md",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Dropdown */ .Lt, {
        options: options,
        placeholder: filterPlaceholder,
        onSelect: idx => {
          setFilterIdx(idx);
          getSelectedFilterIdx(idx);
        },
        selectedIndex: filterIdx,
        embedded: "left",
        size: "lg"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      ref: dropdownRef,
      className: "relative w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex relative w-full bg-transparent",
        children: [badges.length > 0 && badgePosition === 'start' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "pl-2 pt-1 flex gap-1 pointer-events-none",
          children: badges.map((v, idx) => {
            const key = v[0] ?? '';
            const value = v[1];
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "pointer-events-auto",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Badge */ .Ct, {
                color: colorMap ? colorMap[key] : "green",
                onClose: () => handleOnBadgeClose(idx),
                children: value
              })
            }, `b-${key}-${value}`);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          type: "text",
          id: id,
          className: "w-full py-1 px-2 focus:outline-none focus:ring-0 appearance-none",
          value: search,
          onChange: e => setSearch(e.target.value),
          placeholder: placeholder,
          onKeyDown: e => {
            if (e.key === 'Enter') {
              onClickSearch();
            }

            ;

            if (e.key === 'Backspace') {
              handleOnBackSpace();
            }

            ;
          },
          autoComplete: "off",
          onFocus: () => setExpanded(true)
        })]
      }), badgePosition === 'end' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "absolute w-full right-2 top-0 translate-y-[10%] flex flex-auto justify-end gap-1 pointer-events-none",
        onBlur: () => setExpanded(false),
        children: badges.map((v, idx) => {
          const key = v[0] ?? '';
          const value = v[1];
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "pointer-events-auto",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Badge */ .Ct, {
              color: colorMap ? colorMap[key] : "green",
              onClose: () => handleOnBadgeClose(idx),
              children: value
            })
          }, `b-${key}-${value}`);
        })
      }), expanded && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "absolute max-h-[250px] overflow-y-scroll bottom-0 translate-y-[101%] z-20 w-full origin-top-right bg-white border border-gray-100 rounded-b-md shadow-lg",
        role: "menu",
        children: suggestionsList.map((v, idx) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
            href: "#",
            onClick: () => onSelectSuggestion(v),
            className: "flex px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "flex",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "",
                children: v
              })
            })
          }, `dropdown-${v}-${idx}`);
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
      className: "self-center",
      variation: "ghost",
      onClick: onClickSearch,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaSearch, {
        className: "w-4 h-4"
      })
    })]
  });
};

/***/ }),

/***/ 910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ct": () => (/* reexport */ Badge),
  "zx": () => (/* reexport */ Button),
  "Lt": () => (/* reexport */ Dropdown),
  "Kb": () => (/* reexport */ filter_search/* FilterSearch */.K),
  "A6": () => (/* reexport */ FloatingInput),
  "x7": () => (/* reexport */ TechnologyCard)
});

// UNUSED EXPORTS: TagInput

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/badge.tsx




const Badge = ({
  children,
  color = 'blue',
  onClose,
  onClick = () => null
}) => {
  let colorClass = "";

  switch (color) {
    case 'green':
      colorClass = "bg-green-100";
      break;

    case 'orange':
      colorClass = "bg-orange-100";
      break;

    case 'yellow':
      colorClass = "bg-yellow-100";
      break;

    case 'red':
      colorClass = "bg-red-100";
      break;

    case 'blue':
      colorClass = "bg-blue-100";
      break;

    default:
      colorClass = "bg-gray-100 dark:bg-gray-100";
      break;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: `inline-flex whitespace-nowrap text-gray-800 text-xs font-semibold rounded dark:text-gray-500 px-2.5 py-0.5 ${colorClass}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: onClick,
        children: children
      }), onClose && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cursor-pointer",
        onClick: onClose,
        children: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaTimes, {
          className: "w-4 h-4"
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/button.tsx


const Button = ({
  className = '',
  children,
  disabled = false,
  onClick = () => null,
  fullWidth = false,
  variation = 'normal'
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    disabled: disabled,
    className: `px-3 py-1 text-base ${variation === 'normal' ? 'border border-gray-400 rounded-md bg-gray-100' : ''} ${fullWidth ? 'w-full' : ''}`,
    onClick: onClick,
    children: children
  });
};
// EXTERNAL MODULE: ./src/hooks/click-outside.tsx
var click_outside = __webpack_require__(5019);
;// CONCATENATED MODULE: ./src/components/dropdown.tsx






const Dropdown = ({
  id = 'dropdown',
  selectedIndex,
  options,
  placeholder,
  onSelect = idx => null,
  embedded,
  size = 'md'
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(false);
  const dropdownRef = (0,external_react_.useRef)(null);
  (0,click_outside/* useOnClickOutside */.t)(dropdownRef, () => setExpanded(false));
  const borderClass = !embedded ? 'border rounded-md' : embedded === 'right' ? 'border-l-2 rounded-r-md' : 'border-r-2 rounded-l-md';
  const widthClass = size === 'sm' ? 'w-[120px]' : size === 'md' ? 'w-[150px]' : 'w-[180px]';
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: id,
    className: `relative inline-flex items-stretch bg-white h-full border-gray-300 ${borderClass} ${widthClass}`,
    ref: dropdownRef,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative flex flex-auto cursor-pointer w-full h-full",
      onClick: () => setExpanded(!expanded),
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative inline-flex pl-4 py-1 text-sm text-gray-600 self-center",
        children: selectedIndex != undefined ? options[selectedIndex]?.name : !selectedIndex && placeholder ? placeholder.name : ''
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grow"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative inline-flex items-center justify-center h-full px-2 text-gray-600",
        children: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaCaretDown, {
          className: "w-4 h-4"
        })
      }), expanded && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute bottom-0 translate-y-[103%] z-20 w-56 origin-top-right bg-white border border-gray-100 rounded-b-md shadow-lg",
        role: "menu",
        children: options.map((option, idx) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            onClick: () => onSelect(idx),
            className: "flex px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700",
            children: [option.iconPrefix && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mr-2 self-center",
              children: /*#__PURE__*/jsx_runtime_.jsx(option.iconPrefix, {
                className: "w-4 h-4"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "",
                children: option.name
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "grow"
            }), option.iconSuffix && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "justify-end",
                children: /*#__PURE__*/jsx_runtime_.jsx(option.iconSuffix, {
                  className: "w-4 h-4"
                })
              })
            })]
          }, `dropdown-${option.value}-${idx}`);
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/components/filter-search.tsx
var filter_search = __webpack_require__(3168);
;// CONCATENATED MODULE: ./src/components/floating.tsx



const FloatingInput = ({
  id = "float-input",
  lable = "",
  value,
  onChange = value => null,
  disabled = false,
  onPressEnter = e => null,
  onBlur = e => null,
  floated = false
}) => {
  const labelClass = floated ? '' : 'peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      disabled: disabled,
      type: "text",
      id: id,
      className: "block px-2 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer",
      placeholder: " ",
      value: value,
      onChange: ev => onChange(ev.target.value),
      onKeyDown: e => {
        if (e.key === 'Enter') onPressEnter(e);
      },
      onBlur: e => onBlur(e)
    }), /*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "floating_outlined",
      className: `absolute cursor-text pointer-events-none text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-1 ${labelClass}`,
      children: lable
    })]
  });
};
// EXTERNAL MODULE: ./src/components/tag-input.tsx
var tag_input = __webpack_require__(4095);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/technology-card.tsx



const TechnologyCard = ({
  name,
  description,
  documentation
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-lg text-gray-700",
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-sm text-gray-600",
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: documentation ?? '',
      as: `${"/Apsim.Variables"}${documentation}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2" // href={documentation}
        // target="_blank"
        ,
        rel: "noreferrer",
        children: "Documentation"
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/index.tsx








/***/ }),

/***/ 4095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ TagInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(910);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const TagInput = ({
  id = 'tag-input',
  label,
  badgeColor,
  disabled = false,
  initValues = [],
  onChange = value => null
}) => {
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: filterValues,
    1: setFilterValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  if (filterValues.length < 1 && initValues.length > 0) {
    setFilterValues(initValues);
  }

  const handleOnPressEnter = () => {
    if (!search) return;
    const currentValues = filterValues;
    const dupValue = currentValues.length > 0 && currentValues.includes(search);

    if (!dupValue) {
      currentValues.push(search);
      setFilterValues([...currentValues]);
      onChange(currentValues);
    }

    setSearch("");
  };

  const handleOnBadgeClose = idx => {
    const currentValue = filterValues;
    currentValue.splice(idx, 1);
    setFilterValues([...currentValue]);
    document.getElementById(id)?.focus();
  };

  const handleBadgeOnClick = idx => {
    setSearch(filterValues[idx] ?? '');
    handleOnBadgeClose(idx);
    document.getElementById(id)?.focus();
  };

  const labelClass = filterValues.length > 0 ? '' : 'peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex relative w-full bg-transparent rounded-lg border border-gray-300 focus:border-gray-600",
    children: [filterValues.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "pl-2 pt-1 flex gap-1 pointer-events-none",
      children: filterValues.map((v, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "pointer-events-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__/* .Badge */ .Ct, {
          color: badgeColor,
          onClose: () => handleOnBadgeClose(idx),
          onClick: () => handleBadgeOnClick(idx),
          children: ["#", v]
        })
      }, `tag-${idx}`))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      disabled: disabled,
      type: "text",
      id: id,
      className: "block px-2 pb-2 pt-2 w-full text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-0 appearance-none peer",
      placeholder: " ",
      value: search,
      onChange: e => setSearch(e.target.value),
      onKeyDown: e => {
        if (e.key === 'Enter') handleOnPressEnter();
      },
      onBlur: () => handleOnPressEnter()
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
      htmlFor: "floating_outlined",
      className: `absolute cursor-text pointer-events-none text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-1 ${labelClass}`,
      children: label
    })]
  });
};

/***/ }),

/***/ 5019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useOnClickOutside)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnClickOutside(ref, handler) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!handler) return;

    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
}

/***/ })

};
;
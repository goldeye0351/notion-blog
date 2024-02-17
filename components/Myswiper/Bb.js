import styles from './Bb.module.css'
function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defaultOptions = {
  size: 70,
  minsize: 35,
  gutter: 3,
  provideProps: true,
  numCols: 6,
  fringeWidth: 10,
  yRadius: 120,
  xRadius: 120,
  cornerRadius: 150,
  showGuides: false,
  compact: true,
  gravitation: 5
};
export default function BubbleUI(props) {
  if (!props.children) {
    return null;
  }

  var options = {};
  Object.assign(options, defaultOptions);
  Object.assign(options, props.options);
  options.numCols = Math.min(options.numCols, props.children.length);
  var minProportion = options.minsize / options.size;
  var verticalPadding = "calc(50% - " + (options.yRadius + options.size / 2 - options.cornerRadius * (1.414 - 1) / 1.414) + "px)";
  var horizontalPadding = "calc(50% - " + (options.xRadius + options.size / 2 - options.cornerRadius * (1.414 - 1) / 1.414) + "px)";
  var scrollable = React.useRef(null);
  var rows = [];
  var colsRemaining = 0;
  var evenRow = true;

  for (var i = 0; i < props.children.length; i++) {
    if (colsRemaining == 0) {
      colsRemaining = evenRow ? options.numCols - 1 : options.numCols;
      evenRow = !evenRow;
      rows.push([]);
    }

    rows[rows.length - 1].push(props.children[i]);
    colsRemaining--;
  }

  if (rows.length > 1) {
    if (rows[rows.length - 1].length % 2 == rows[rows.length - 2].length % 2) {
      rows[rows.length - 1].push( /*#__PURE__*/React__default.createElement("div", null));
    }
  }

  var _useState = React.useState(0),
      scrollTop = _useState[0],
      setScrollTop = _useState[1];

  var _useState2 = React.useState(0),
      scrollLeft = _useState2[0],
      setScrollLeft = _useState2[1];

  var handleScroll = function handleScroll(e) {
    if (e.target.className) {
      setScrollTop(e.target.scrollTop);
      setScrollLeft(e.target.scrollLeft);
    }
  };

  React.useLayoutEffect(function () {
    window.addEventListener("scroll", handleScroll);
    scrollable.current.scrollTo((scrollable.current.scrollWidth - scrollable.current.clientWidth) / 2, (scrollable.current.scrollHeight - scrollable.current.clientHeight) / 2);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var interpolate = function interpolate(actualMin, actualMax, val, targetMin, targetMax) {
    return (val - actualMin) / (actualMax - actualMin) * (targetMax - targetMin) + targetMin;
  };

  var getbubblesize = function getbubblesize(row, col) {
    var yOffset = (options.size + options.gutter) * 0.866 * row - options.size + options.cornerRadius * (1.414 - 1) / 1.414 - (options.yRadius - options.size);
    var xOffset = (options.size + options.gutter) * col + (options.numCols - rows[row].length) * (options.size + options.gutter) / 2 - options.size + options.cornerRadius * (1.414 - 1) / 1.414 - (options.xRadius - options.size);
    var dy = yOffset - scrollTop;
    var dx = xOffset - scrollLeft;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var out = {
      bubblesize: 1,
      translateX: 0,
      translateY: 0,
      distance: distance
    };
    var distanceFromEdge = 0;
    var isInCornerRegion = false;

    if (Math.abs(dx) <= options.xRadius && Math.abs(dy) <= options.yRadius) {
      if (Math.abs(dy) > options.yRadius - options.cornerRadius && Math.abs(dx) > options.xRadius - options.cornerRadius) {
        var distToInnerCorner = Math.sqrt(Math.pow(Math.abs(dy) - options.yRadius + options.cornerRadius, 2) + Math.pow(Math.abs(dx) - options.xRadius + options.cornerRadius, 2));

        if (distToInnerCorner > options.cornerRadius) {
          distanceFromEdge = distToInnerCorner - options.cornerRadius;
          isInCornerRegion = true;
        }
      }
    } else if (Math.abs(dx) <= options.xRadius + options.fringeWidth && Math.abs(dy) <= options.yRadius + options.fringeWidth) {
      if (Math.abs(dy) > options.yRadius - options.cornerRadius && Math.abs(dx) > options.xRadius - options.cornerRadius) {
        isInCornerRegion = true;

        var _distToInnerCorner = Math.sqrt(Math.pow(Math.abs(dy) - options.yRadius + options.cornerRadius, 2) + Math.pow(Math.abs(dx) - options.xRadius + options.cornerRadius, 2));

        distanceFromEdge = _distToInnerCorner - options.cornerRadius;
      } else {
        distanceFromEdge = Math.max(Math.abs(dx) - options.xRadius, Math.abs(dy) - options.yRadius);
      }
    } else {
      isInCornerRegion = Math.abs(dy) > options.yRadius - options.cornerRadius && Math.abs(dx) > options.xRadius - options.cornerRadius;

      if (isInCornerRegion) {
        var _distToInnerCorner2 = Math.sqrt(Math.pow(Math.abs(dy) - options.yRadius + options.cornerRadius, 2) + Math.pow(Math.abs(dx) - options.xRadius + options.cornerRadius, 2));

        distanceFromEdge = _distToInnerCorner2 - options.cornerRadius;
      } else {
        distanceFromEdge = Math.max(Math.abs(dx) - options.xRadius, Math.abs(dy) - options.yRadius);
      }
    }

    out.bubblesize = interpolate(0, options.fringeWidth, Math.min(distanceFromEdge, options.fringeWidth), 1, minProportion);
    var translationMag = options.compact ? (options.size - options.minsize) / 2 : 0;
    var interpolatedTranslationMag = interpolate(0, options.fringeWidth, distanceFromEdge, 0, translationMag);

    if (distanceFromEdge > 0 && distanceFromEdge <= options.fringeWidth) {
      out.translateX = interpolatedTranslationMag;
      out.translateY = interpolatedTranslationMag;
    } else if (distanceFromEdge - options.fringeWidth > 0) {
      var extra = Math.max(0, distanceFromEdge - options.fringeWidth - options.size / 2) * options.gravitation / 10;
      out.translateX = translationMag + extra;
      out.translateY = translationMag + extra;
    }

    if (isInCornerRegion) {
      var cornerDx = Math.abs(dx) - options.xRadius + options.cornerRadius;
      var cornerDy = Math.abs(dy) - options.yRadius + options.cornerRadius;
      var theta = Math.atan(-cornerDy / cornerDx);

      if (dx > 0) {
        if (dy > 0) {
          theta *= -1;
        }
      } else {
        if (dy > 0) {
          theta += Math.PI;
        } else {
          theta += Math.PI - 2 * theta;
        }
      }

      out.translateX *= -Math.cos(theta);
      out.translateY *= -Math.sin(theta);
    } else if (Math.abs(dx) > options.xRadius || Math.abs(dy) > options.yRadius) {
      if (Math.abs(dx) > options.xRadius) {
        out.translateX *= -Math.sign(dx);
        out.translateY = 0;
      } else {
        out.translateY *= -Math.sign(dy);
        out.translateX = 0;
      }
    }

    return out;
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: props.className,
    style: _extends({
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }, props.style)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.scrollable,
    ref: scrollable,
    onScroll: handleScroll
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.horizontalSpacer,
    style: {
      height: verticalPadding
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles.rowContainer,
    style: {
      width: options.size * options.numCols + options.gutter * (options.numCols - 1),
      paddingLeft: horizontalPadding,
      paddingRight: horizontalPadding
    }
  }, rows.map(function (row, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles.row,
      key: i,
      style: {
        marginTop: i > 0 ? options.size * -0.134 + options.gutter * 0.866 : 0
      }
    }, row.map(function (comp, j) {
      var _getbubblesize = getbubblesize(i, j),
          bubblesize = _getbubblesize.bubblesize,
          translateX = _getbubblesize.translateX,
          translateY = _getbubblesize.translateY,
          distance = _getbubblesize.distance;

      return /*#__PURE__*/React__default.createElement("div", {
        key: j,
        className: styles.bubbleContainer,
        style: {
          width: options.size,
          height: options.size,
          marginRight: options.gutter / 2,
          marginLeft: options.gutter / 2,
          transform: "translateX(" + translateX + "px) translateY(" + translateY + "px) scale(" + bubblesize + ")"
        }
      }, options.provideProps ? React__default.cloneElement(comp, {
        bubblesize: bubblesize * options.size,
        distancetocenter: distance,
        maxsize: options.size,
        minsize: options.minsize
      }) : comp);
    }));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles.horizontalSpacer,
    style: {
      height: verticalPadding
    }
  })), options.showGuides ? /*#__PURE__*/React__default.createElement("div", {
    className: styles.guideContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.guide,
    style: {
      height: options.yRadius * 2,
      width: options.xRadius * 2,
      borderRadius: options.shape == "ellipse" ? "50%" : options.cornerRadius
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles.guide,
    style: {
      height: (options.yRadius + options.fringeWidth) * 2,
      width: (options.xRadius + options.fringeWidth) * 2,
      borderRadius: options.shape == "ellipse" ? "50%" : options.cornerRadius + options.fringeWidth
    }
  })) : null));
}


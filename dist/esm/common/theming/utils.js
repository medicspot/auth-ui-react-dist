import { PREPENDED_CLASS_NAMES, CLASS_NAMES } from '../../src/constants.js';

function generateClassNames(
/**
 * name of css class name variable
 */
classNameKey,
/**
 * stiches CSS output
 */
defaultStyles,
/**
 * appearance variables
 */
appearance) {
  var _a, _b;

  const classNames = [];
  const className = CLASS_NAMES[classNameKey];
  classNames.push((appearance === null || appearance === void 0 ? void 0 : appearance.prependedClassName) ? (appearance === null || appearance === void 0 ? void 0 : appearance.prependedClassName) + '_' + className : PREPENDED_CLASS_NAMES + '_' + className);

  if ((_a = appearance === null || appearance === void 0 ? void 0 : appearance.className) === null || _a === void 0 ? void 0 : _a[classNameKey]) {
    classNames.push((_b = appearance === null || appearance === void 0 ? void 0 : appearance.className) === null || _b === void 0 ? void 0 : _b[classNameKey]);
  } // if (
  //   appearance?.extendAppearance === undefined ||
  //   appearance?.extendAppearance === true
  // ) {


  classNames.push(defaultStyles); // }

  return classNames;
}

export { generateClassNames };

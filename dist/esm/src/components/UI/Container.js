import { __rest } from '../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { css } from '@stitches/core';
import { generateClassNames } from '../../../common/theming/utils.js';

const containerDefaultStyles = css({
  display: 'flex',
  gap: '4px',
  variants: {
    direction: {
      horizontal: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(48px, 1fr))'
      },
      vertical: {
        flexDirection: 'column',
        margin: '8px 0'
      }
    },
    gap: {
      small: {
        gap: '4px'
      },
      medium: {
        gap: '8px'
      },
      large: {
        gap: '16px'
      }
    }
  }
});

const Container = _a => {
  var _b;

  var {
    children,
    appearance
  } = _a,
      props = __rest(_a, ["children", "appearance"]);

  const classNames = generateClassNames('container', containerDefaultStyles({
    direction: props.direction,
    gap: props.gap
  }), appearance);
  return jsx("div", Object.assign({}, props, {
    style: (_b = appearance === null || appearance === void 0 ? void 0 : appearance.style) === null || _b === void 0 ? void 0 : _b.container,
    className: classNames.join(' ')
  }, {
    children: children
  }));
};

export { Container };

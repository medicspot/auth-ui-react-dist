'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const VIEWS = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password'
};
const PREPENDED_CLASS_NAMES = 'supabase-ui-auth';
/**
 * CSS class names
 * used for generating prepended classes
 */

const CLASS_NAMES = {
  // interfaces
  ROOT: 'root',
  SIGN_IN: VIEWS.SIGN_IN,
  SIGN_UP: VIEWS.SIGN_UP,
  FORGOTTEN_PASSWORD: VIEWS.FORGOTTEN_PASSWORD,
  MAGIC_LINK: VIEWS.MAGIC_LINK,
  UPDATE_PASSWORD: VIEWS.UPDATE_PASSWORD,
  // ui
  anchor: 'ui-anchor',
  button: 'ui-button',
  container: 'ui-container',
  divider: 'ui-divider',
  input: 'ui-input',
  label: 'ui-label',
  loader: 'ui-loader',
  message: 'ui-message'
};

exports.CLASS_NAMES = CLASS_NAMES;
exports.PREPENDED_CLASS_NAMES = PREPENDED_CLASS_NAMES;
exports.VIEWS = VIEWS;
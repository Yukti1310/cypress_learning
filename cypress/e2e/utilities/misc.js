export const OK_STATUS_CODE = 200;
export const CREATED = 201;
export const ACCEPTED = 202;
export const NO_CONTENT = 204;

export const UNAUTHORIZED_STATUS_CODE = 401;
export const FORBIDDEN_STATUS_CODE = 403;
export const NOT_FOUND_STATUS_CODE = 404;
export const ERROR_STATUS_CODE = 500;
export const ERROR_STATUS_CODE_LIST = [UNAUTHORIZED_STATUS_CODE, FORBIDDEN_STATUS_CODE, NOT_FOUND_STATUS_CODE, ERROR_STATUS_CODE];

export const ELEMENT_STATE = {
    VISIBLE: 'be.visible',
    ENABLED: 'be.enabled',
    DISABLED: 'be.disabled',
    EXISTS: 'exist',
    NOT_VISIBLE: 'not.be.visible',
    NOT_ENABLED: 'not.be.enabled',
    NOT_EXISTS: 'not.exist',
    HAVE_TEXT: 'have.text',
    HAVE_VALUE: 'have.value',
    HAVE_LENGTH: 'have.length',
    CONTAINS: 'contain.text',
}   
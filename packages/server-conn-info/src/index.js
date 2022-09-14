export const localhost = `localhost`;
// default protocol used in local development env
export const protocol = `http`;
// API PORT
export const getApiPort = () => {
    const portEnv = Number(process.env.PORT || '5430');
    // eslint-disable-next-line no-console
    console.log(portEnv);
    if (isNaN(portEnv))
        throw new Error('PORT environment variable present, but not a number');
    return portEnv;
};
// API
const getApiUrlEnvVar = () => { var _a; return (_a = process.env.API_URL) !== null && _a !== void 0 ? _a : process.env.REACT_APP_API_URL; };
export const defaultApiUrl = `api.labfaz.com.br/`;
export const getApiUrl = () => {
    var _a;
    return process.env.NODE_ENV === 'production'
        ? (_a = getApiUrlEnvVar()) !== null && _a !== void 0 ? _a : defaultApiUrl
        : `${protocol}://${localhost}:${getApiPort()}`;
};
// STRAPI
const getStrapiUrlEnvVar = () => { var _a; return (_a = process.env.STRAPI_URL) !== null && _a !== void 0 ? _a : process.env.REACT_APP_STRAPI_URL; };
export const getStrapiPort = () => 1337;
export const defaultStrapiHost = `backoffice.labfaz.com.br/`;
export const getStrapiHost = () => process.env.NODE_ENV === 'production'
    ? defaultStrapiHost
    : `${localhost}:${getStrapiPort()}`;
export const getStrapiUrl = () => {
    var _a;
    return process.env.NODE_ENV === 'production'
        ? (_a = getStrapiUrlEnvVar()) !== null && _a !== void 0 ? _a : getStrapiHost()
        : `${protocol}://${getStrapiHost()}`;
};
// CLIENT
export const getClientPort = () => {
    const portEnv = Number(process.env.PORT || '3000');
    if (isNaN(portEnv))
        throw new Error('PORT environment variable present, but not a number');
    return portEnv;
};
const getClientUrlEnvVar = () => { var _a; return (_a = process.env.CLIENT_URL) !== null && _a !== void 0 ? _a : process.env.REACT_APP_CLIENT_URL; };
export const defaultClientUrl = `www.labfaz.com.br`;
export const getClientUrl = () => {
    var _a;
    return process.env.NODE_ENV === 'production'
        ? (_a = getClientUrlEnvVar()) !== null && _a !== void 0 ? _a : defaultClientUrl
        : `${protocol}://${localhost}:${getClientPort()}`;
};

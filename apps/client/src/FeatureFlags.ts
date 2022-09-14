const useEnvVar = (varName: string, defaultValue: boolean) => {
  if (process.env[varName] === 'true') {
    return true;
  } else if (process.env[varName] === 'false') {
    return false;
  } else {
    return defaultValue;
  }
};

export const ShowRoutes = (): boolean =>
  useEnvVar('REACT_APP_SHOW_ROUTES', true);

export const ShowHome = (): boolean => useEnvVar('REACT_APP_SHOW_HOME', true);

export const ShowBlog = (): boolean => useEnvVar('REACT_APP_SHOW_BLOG', true);
export const ShowObservatorio = (): boolean =>
  useEnvVar('REACT_APP_SHOW_OBSERVATORIO', true);
export const ShowAboutUs = (): boolean =>
  useEnvVar('REACT_APP_SHOW_ABOUT_US', true);
export const ShowCourses = (): boolean =>
  useEnvVar('REACT_APP_SHOW_COURSES', true);

export const ShowProfileMine = (): boolean =>
  useEnvVar('REACT_APP_SHOW_PROFILE_ME', true);
export const ShowProfileOther = (): boolean =>
  useEnvVar('REACT_APP_SHOW_PROFILE_OTHER', true);
export const ShowUserSearch = (): boolean =>
  useEnvVar('REACT_APP_SHOW_USER_SEARCH', true);
export const ShowForgotPassword = (): boolean =>
  useEnvVar('REACT_APP_SHOW_FORGOT_PASSWORD', true);
export const ShowEditProfile = (): boolean =>
  useEnvVar('REACT_APP_SHOW_EDIT_PROFILE', true);

export const ShowReactQueryDevtools = (): boolean =>
  useEnvVar('REACT_APP_SHOW_R_QUERY_DEVTOOLS', true);

// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  return process.env.REACT_APP_DATOCMS_API_TOKEN || '';
};

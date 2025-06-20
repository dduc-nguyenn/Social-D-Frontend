export const KEY_TOKEN = "accessToken";

export const setToken = (token: string, expiryTime: string) => {
  window.cookieStore.set({
    name: KEY_TOKEN,
    value: token,
    path: "/",
    expires: Date.parse(expiryTime),
  });
};

export const getToken = () => {
  return window.cookieStore.get(KEY_TOKEN).then((token: {value: string}) => token.value);
};

export const removeToken = () => {
  return window.cookieStore.delete(KEY_TOKEN);
};
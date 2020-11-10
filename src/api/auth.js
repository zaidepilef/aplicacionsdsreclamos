import { ACCESS_TOKEN } from "constants/constants";
import jwtDecode from "jwt-decode";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken || accessToken === "null") {
    return null;
  }

  return willExpireToken(accessToken) ? null : accessToken;
};

const willExpireToken = token => {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;

  return now > exp;
};

// export const tokenConfig = getState => {
//   const token = getState().auth.token;

//   console.log(token);

//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   if (token) {
//     config.headers["Authorization"] = `JWT ${token}`;
//   }

//   return config;
// };

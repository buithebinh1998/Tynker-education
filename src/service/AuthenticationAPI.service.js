import API from "./API.service";

import Config from "../configs/API/API";

export const OAuthAPI = API(Config.authenticationAPI);

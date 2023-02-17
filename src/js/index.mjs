import { signout } from "./api/auth/logout.mjs"
import * as listeners from "./handlers/index.mjs"


listeners.setRegisterFormListener()
listeners.setLoginFormListener()


signout();
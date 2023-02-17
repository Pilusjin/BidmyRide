import * as storage from "../../storage/index.mjs";

export function signout(){
    const signout = document.querySelectorAll(".sign-out");
    signout.forEach((linkElemnt) => {
        const logout = linkElemnt;
        logout.addEventListener("click", (event) => {
            event.preventDefault;
            storage.clear();
        });
    });
}
import { load } from "../storage/index.mjs";

export function fillProfileData() {

    const profile = load("profile")

    const profileNameContainer = document.querySelector("#userName");
    if (profileNameContainer) {
        const name = profile.name
        profileNameContainer.append(name)
    }

    const profileCreditContainer = document.querySelector("#userCredit");
    if (profileCreditContainer) {
        const credit = profile.credits
        profileCreditContainer.append(credit)
    }

    const profileAvatarImageElement = document.querySelector("#userAvatar");
    if (profileAvatarImageElement) {
        const avatarUrl = profile.avatar
        console.log("avatar url", avatarUrl)
        profileAvatarImageElement.setAttribute("src", avatarUrl)
    }

}
import { BASE_URL } from "../../api/constants.mjs"; 
import { authFetch } from "../../api/authFetch.mjs";
import { save } from "../../storage/index.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    
    const updateProfileURL = `${BASE_URL}${action}/${profileData.name}/media`;
    
    const response = await authFetch (updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

    const updatedProfile = await response.json(); 
    save("profile", updatedProfile)
    alert("You have successfully updated your avatar!")
    window.location.replace("../../../../profile")
    return updatedProfile;
}



// When updating profile, it does not update in localstorage before logging out and logging in againa
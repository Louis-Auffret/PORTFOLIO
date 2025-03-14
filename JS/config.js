export const IMAGE_PATH_GITHUB = "/PORTFOLIO/assets/img/";
export const IMAGE_PATH_LOCAL = "./assets/img/";

export const getImagePath = () => {
    const isGitHubPages = window.location.hostname.includes("github.io");
    return isGitHubPages ? IMAGE_PATH_GITHUB : IMAGE_PATH_LOCAL;
};

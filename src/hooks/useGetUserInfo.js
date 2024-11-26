export const useGetUserInfo = () => {
  const { name, userID, profilePhoto, isAuth } =
    JSON.parse(localStorage.getItem("auth")) || {};
  return { name, userID, profilePhoto, isAuth };
};

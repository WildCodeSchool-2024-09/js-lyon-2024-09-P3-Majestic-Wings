import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";
import Profile from "../components/Profile/Profile";

const newProfile = {
  id: 0,
  firstname: "",
  lastname: "",
  age: 0,
  mail: "",
  phone_number: "",
  password: "",
};

function ProfilePage() {
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  if (auth === null) {
    navigate("/");
  }

  return (
    <Profile
      defaultValue={newProfile}
      onSubmit={(ProfileData) => {
        try {
          fetch(`${import.meta.env.VITE_API_URL}/api/profile`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth !== null ? auth?.token : ""}`,
            },
            body: JSON.stringify(ProfileData),
          }).then((response) => {
            if (response.status === 204) {
              toast.info(
                `Compte modifié ${ProfileData.firstname} ${ProfileData.lastname}`,
              );
              navigate("/");
            }
          });
        } catch (err) {
          console.error(err);
        }
      }}
    >
      Modifier
    </Profile>
  );
}

export default ProfilePage;

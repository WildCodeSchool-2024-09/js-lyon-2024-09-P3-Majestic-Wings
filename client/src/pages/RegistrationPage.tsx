import { useNavigate } from "react-router-dom";

import Registration from "./../components/Registration/Registration";

import { toast } from "react-toastify";

function RegistrationPage() {
  const navigate = useNavigate();

  const newRegistration = {
    id: 0,
    firstname: "",
    lastname: "",
    age: 0,
    mail: "",
    phone_number: "",
    password: "",
  };

  return (
    <Registration
      defaultValue={newRegistration}
      onSubmit={async (registrationData) => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/user`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(registrationData),
            },
          );
          if (response.status === 201) {
            toast.success(
              `Compte créé ${registrationData.firstname} ${registrationData.lastname}`,
            );

            navigate("/login");
          } else {
            toast.error("Il semblerait qu'il y ait eu une erreur ! ");
          }
        } catch (err) {
          // Log des erreurs possibles
          console.error(err);
        }
      }}
    >
      Ajouter
    </Registration>
  );
}

export default RegistrationPage;

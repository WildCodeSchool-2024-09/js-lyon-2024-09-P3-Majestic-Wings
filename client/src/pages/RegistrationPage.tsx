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

  const checkEmailExists = async (email: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/check-email?email=${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.status === 200;
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email:", error);
      return false;
    }
  };

  return (
    <Registration
      defaultValue={newRegistration}
      onSubmit={async (registrationData) => {
        try {
          // Vérifier si l'email existe déjà
          const emailExists = await checkEmailExists(registrationData.mail);

          if (emailExists) {
            toast.error("Cette adresse email est déjà utilisée!");
            return;
          }

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
            toast.error("Il semblerait qu'il y ait eu une erreur!");
          }
        } catch (err) {
          console.error(err);
          toast.error("Une erreur est survenue lors de l'inscription");
        }
      }}
    >
      Ajouter
    </Registration>
  );
}

export default RegistrationPage;

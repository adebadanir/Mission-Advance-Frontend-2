import useIsLoginStore from "@/stores/loginStore";

interface User {
  id?: number;
  email: string;
  password: string;
}

const authService = async ({ email, password }: User): Promise<string> => {
  const { setIsLogin, setUserId } = useIsLoginStore.getState();
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: User[] = await response.json();
    const user = data.find((user) => user.email === email);

    if (!user) {
      return "Email tidak ditemukan";
    }

    if (user.password !== password) {
      return "Password salah";
    }

    setIsLogin(true);
    setUserId(user.id ? user.id.toString() : "");
    return "Login berhasil";
  } catch (error) {
    console.error("Error:", error);
    return "Terjadi kesalahan saat login";
  }
};

export default authService;

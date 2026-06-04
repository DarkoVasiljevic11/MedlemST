import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("Unesite lozinku.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        setError(
          data.message ||
            "Pogrešna lozinka."
        );
        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/admin/reviews");
    } catch (error) {
      console.error(error);

      setError(
        "Greška pri povezivanju sa serverom."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        min-h-screen
        bg-cream
        flex
        items-center
        justify-center
        px-4
      "
    >
      <form
        onSubmit={handleLogin}
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-xl
          p-8
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-brown
            text-center
            mb-2
          "
        >
          Admin Prijava
        </h1>

        <p
          className="
            text-center
            text-brown/60
            mb-8
          "
        >
          Pristup administraciji sajta
        </p>

        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => {
            setPassword(
              e.target.value
            );
            setError("");
          }}
          className="
            w-full
            border
            border-honey/30
            rounded-xl
            p-4
            outline-none
            focus:border-honey
            mb-4
          "
        />

        {error && (
          <div
            className="
              bg-red-50
              border
              border-red-200
              text-red-600
              rounded-xl
              p-3
              mb-4
            "
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-honey
            text-brown
            py-4
            rounded-xl
            font-bold
            cursor-pointer
            transition
            hover:scale-[1.02]
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {loading
            ? "Prijavljivanje..."
            : "Prijavi se"}
        </button>
      </form>
    </main>
  );
}
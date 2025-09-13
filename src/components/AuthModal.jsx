import { RiCloseLine } from "react-icons/ri";
import supabase from "../../lib/supabaseClient";

export default function AuthModal({ isOpen, setModalOpen }) {
  if (!isOpen) return null;
  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={() => setModalOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setModalOpen(false)}>
          <RiCloseLine />
        </button>
        <div className="modal-header">
          <h2>Join culutra or Login</h2>
          <p>Use one of providers below to join cultura or to come back!</p>
        </div>

        <button
          onClick={async () => {
            const { error } = await supabase.auth.signInWithOAuth({
              provider: "google",
              options: {
                redirectTo: import.meta.env.VITE_DOMAIN,
              },
            });

            if (error) {
              console.error("OAuth error:", error.message);
            }
          }}
          className="auth-provider"
        >
          <img src="./google.svg" height={"20"}></img>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

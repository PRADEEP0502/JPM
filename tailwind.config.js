/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        navy: "#0F172A",
        bluebrand: "#2563EB",
        ink: "#111827",
        mist: "#F8FAFC",
        line: "#E5E7EB",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 42, 0.10)",
        soft: "0 16px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

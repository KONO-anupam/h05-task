import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./app/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./app/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: "normal",
});

export const integralCF = localFont({
  src: [
    {
      path: "./app/fonts/Integral-CF/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./app/fonts/Integral-CF/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-integral",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  style: "normal",
});
     

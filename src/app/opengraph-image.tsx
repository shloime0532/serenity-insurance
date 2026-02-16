import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Serenity Insurance Brokerage — Property & Casualty Insurance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/logo.jpg")
  );
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <img
          src={logoBase64}
          width={140}
          height={140}
          style={{ borderRadius: "16px", marginBottom: "32px" }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "12px",
          }}
        >
          Serenity Insurance Brokerage
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#C41E3A",
            textAlign: "center",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Property & Casualty Insurance
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Reliable coverage tailored to your industry. Comprehensive insurance
          solutions for businesses of all sizes.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#C41E3A",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

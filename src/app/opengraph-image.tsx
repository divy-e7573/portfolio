import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Divye Maingi — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #08090c 0%, #0f1219 60%, #141824 100%)",
          color: "#e6e8ee",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#818cf8",
            letterSpacing: "0.1em",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              border: "1px solid rgba(129,140,248,0.5)",
              fontWeight: 700,
              color: "#818cf8",
            }}
          >
            DM
          </div>
          divye.dev
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Divye Maingi
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 40,
            color: "#22d3ee",
            fontWeight: 600,
          }}
        >
          Full Stack Web Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "rgba(230,232,238,0.6)",
            maxWidth: 900,
          }}
        >
          Building modern full-stack and AI-powered web applications.
        </div>
      </div>
    ),
    { ...size }
  );
}

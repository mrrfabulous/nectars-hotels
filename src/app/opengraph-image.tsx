import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nectar Hotels & Suites";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #08172f 0%, #0b1d39 58%, #123d66 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(29,174,236,0.26), transparent 36%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 26,
            }}
          >
            <div
              style={{
                width: 126,
                height: 126,
                borderRadius: 999,
                border: "6px solid rgba(29,174,236,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(29,174,236,0.18)",
                fontSize: 72,
                fontWeight: 800,
              }}
            >
              N
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 58,
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                }}
              >
                NECTAR HOTELS
              </div>
              <div
                style={{
                  fontSize: 34,
                  color: "#1DAEEC",
                  letterSpacing: "0.18em",
                }}
              >
                AND SUITES
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 880,
            }}
          >
            <div
              style={{
                fontSize: 28,
                textTransform: "uppercase",
                letterSpacing: "0.35em",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Bauchi, Nigeria
            </div>
            <div
              style={{
                fontSize: 62,
                lineHeight: 1.06,
                fontWeight: 800,
              }}
            >
              Comfortable stays with direct booking, real room options, and a
              welcoming hotel experience.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

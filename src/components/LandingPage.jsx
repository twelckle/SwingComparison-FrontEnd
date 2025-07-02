import React, { useEffect, useState } from "react";
import "./LandingPage.css"; // Optional, if you want custom styles

function LandingPage({ onTryNowClick }) {
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex(prev => (prev + 1) % 60);
        }, 100); // Change every 100ms
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const images = [];
        for (let i = 0; i < 60; i++) {
            const img = new Image();
            img.src = `/assets/proswing/pro_frame_${i}.png`;
            images.push(img);
        }
    }, []);

    return (
        <div
            className="landing-container"
            style={{
                paddingTop: "0",
                paddingBottom: "0",
                height: "calc(100vh - 25vw)",
                width: "100vw",
                overflow: "hidden",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div style={{
                position: "absolute",
                top: "55.5vh",
                transform: "translateY(-50%)",
                width: "100%"
            }}>
                <main className="landing-main" style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "stretch",
                    gap: "10rem",
                    flexWrap: "wrap",
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}>
                    <div className="landing-content" style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2rem",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1rem"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%"
                            }}>
                                <div style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
                                    <div className="landing-text" style={{ fontSize: "1.5rem" }}>
                                        <p>
                                            Upload a short video, and our tool will break down your swing using AI-powered pose detection.
                                            You'll see a side-by-side, frame-by-frame comparison with a professional golfer, along with visual feedback
                                            and similarity scores. It’s a fun way to notice how your swing compares — and maybe even spot something new in your form.
                                        </p>
                                    </div>
                                </div>
                                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                                    <p style={{ marginBottom: "0.5rem", fontSize: "1.3rem" }}>
                                        Upload a ~30sec <strong>slow motion</strong> video of your iron swing <br /> in portrait mode for best results
                                    </p>
                                </div>
                            </div>
                            <div className="try-now-section" style={{ display: "flex", justifyContent: "center", paddingBottom: "0" }}>
                                <button onClick={onTryNowClick} className="try-now-button">
                                    Try Now
                                </button>
                            </div>
                        </div>
                        <div
                            className="landing-video"
                            style={{
                                width: "auto",
                                height: "550px",
                                backgroundColor: "#000",
                                borderRadius: "2rem",
                                padding: "1rem",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <img
                                src={`/proswing/pro_frame_${frameIndex}.png`}
                                alt={`Pro swing frame ${frameIndex}`}
                                style={{
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "1.5rem",
                                }}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default LandingPage;
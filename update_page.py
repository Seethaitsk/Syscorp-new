import sys

file_path = "/home/nasir/Downloads/Syscorp/NewSyscorp-theme/src/app/aiservice/page.tsx"

with open(file_path, "r") as f:
    lines = f.readlines()

# 1. Replace the Digital Experiences content (lines 90-148)
start_idx_content = 90
end_idx_content = 148

new_content = """                                <span className="eyebrow-pill shadow-sm"><i className="bi bi-bar-chart-fill text-primary me-1"></i> MARKET TRENDS 2026</span>
                                <h2 className="display-5 fw-bold mt-3 mb-4" style={{ color: "var(--ink)", letterSpacing: "-1px" }}>
                                    AI has moved from experiment to <span className="text-primary">core infrastructure</span>
                                </h2>
                                <p style={{ color: "var(--muted)", fontSize: "15.5px", lineHeight: "1.7" }}>
                                    Eight shifts defining how organizations deploy AI at scale — sourced from Stanford HAI and DataForest.
                                </p>
                            </div>

                            <div className="experience-cards-grid mt-4">
                                {/* Card 1 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-diagram-3"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">Agentic AI</h4>
                                        <p className="exp-card-desc">AI agents complete full workflows, not just answers — checking CRMs, updating records, closing the loop.</p>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-magic"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">Generative AI</h4>
                                        <p className="exp-card-desc">From marketing copy to software development, generative AI is now a default business capability.</p>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-gear-wide-connected"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">AI-powered automation</h4>
                                        <p className="exp-card-desc">Invoices, onboarding, procurement — repetitive processes are increasingly run end-to-end by AI.</p>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-graph-up-arrow"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">AI + BI</h4>
                                        <p className="exp-card-desc">Dashboards evolve into advisors — organizations ask AI "what should we do next?" not just "what happened?"</p>
                                    </div>
                                </div>
                                {/* Card 5 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-camera-reels"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">Multimodal AI</h4>
                                        <p className="exp-card-desc">Systems reason across text, image, audio, and video together — one damaged-product photo can trigger a full claim.</p>
                                    </div>
                                </div>
                                {/* Card 6 */}
                                <div className="exp-card shadow-sm">
                                    <div className="exp-icon-wrap"><i className="bi bi-search"></i></div>
                                    <div className="exp-card-content">
                                        <h4 className="exp-card-title">AI search</h4>
                                        <p className="exp-card-desc">Employees ask questions in plain language and get sourced answers from approved company knowledge.</p>
                                    </div>
                                </div>
"""

# Find the start of the Trends section to delete
start_idx_trends = None
end_idx_trends = None
for i, line in enumerate(lines):
    if "{/* TRENDS */}" in line:
        start_idx_trends = i
    if start_idx_trends is not None and i > start_idx_trends and "</section>" in line:
        end_idx_trends = i
        break

# Process replacements (delete trends from bottom first so indices above don't shift)
if start_idx_trends is not None and end_idx_trends is not None:
    del lines[start_idx_trends:end_idx_trends+2] # +2 to remove the empty line after it too

# Replace the content
lines[start_idx_content:end_idx_content] = [new_content]

with open(file_path, "w") as f:
    f.writelines(lines)

print("Done")

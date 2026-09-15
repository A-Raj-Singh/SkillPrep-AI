from fastapi import FastAPI

app = FastAPI(
    title="SkillPrep AI",
    description="AI-powered interview training and career preparation platform",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "message": "SkillPrep AI backend is running",
        "status": "ok",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
    }
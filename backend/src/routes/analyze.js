import express from "express";

const router = express.Router();

router.post("/analyze-claim", (req, res) => {
    const { claim } = req.body;

    if(!claim){
        return res.status(400).json({
            error: "Claim text is required"
        });
    }

    // Temporary mocked response
    res.status(200).json({
        status: "ok"
    });
});

export default router;
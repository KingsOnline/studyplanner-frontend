import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userid } = req.query;

  if (!userid || typeof userid !== "string" || userid.trim() === "") {
    return res.status(400).json({ success: false, error: "Missing or invalid email query param" });
  }

  const moodleBaseUrl = "http://137.73.137.40";
  const token = "33ded1631bf8abec86217776367035c6";

  if (!moodleBaseUrl || !token) {
    return res.status(500).json({
      success: false,
      error: "Server not configured: missing MOODLE_BASE_URL or MOODLE_TOKEN",
    });
  }

  const url = `${moodleBaseUrl}/webservice/rest/server.php` +
    `?wstoken=${token}` +
    `&wsfunction=core_course_get_courses` +
    `&moodlewsrestformat=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!Array.isArray(data)) {
      return res.status(500).json({
        success: false,
        error: `Moodle API error: ${JSON.stringify(data)}`,
      });
    }

    return res.status(200).json({ success: true, users: data });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: `Fetch failed: ${err.message || err}`,
    });
    
  }
}




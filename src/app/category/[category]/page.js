import { pg } from "pg";
import { cors } from "cors";
import { db } from "@/utils/db";

export default async function CategoryVoices() {
  try {
    const result = await db.query(`SELECT * FROM categories`);
    const categories = result.rows;
    console.log("DB Responsive");
    const response = await db.query(`SELECT * FROM voices`);
    const voices = result.rows;
    console.log("DB Responsive");

    [categories];
  } catch (error) {
    console.error("Database Query Error:", error);
    return (
      <div>
        <h2>Error loading reviews</h2>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition max-h-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Category</h2>
      <h1>Voices in Category:</h1>
      {voices.map((voices) => {
        return (
          <ul
            className="space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200"
            style={{ maxHeight: "16rem" }}
          >
            {voices.map((voice) => (
              <li
                key={voice.voice_id}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition "
              >
                <div>
                  <p>{voice.username} voiced:</p>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {voice.content}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Category: {voice.category}
                  </p>
                  <p className="text-sm text-gray-400 mb-4">
                    Location: {voice.location}
                  </p>
                </div>

                {/* Comments for the Voice */}
                <details className="group">
                  <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900">
                    Comments
                  </summary>
                  <ul className="mt-2 pl-4 border-l-2 border-gray-200 space-y-2">
                    {comments
                      .filter((comment) => comment.voice_id === voice.voice_id) // Match comments to the voice
                      .map((comment) => (
                        <li
                          key={comment.comment_id}
                          className="text-sm text-gray-600"
                        >
                          <p>
                            <strong className="font-medium text-gray-800">
                              {comment.username}
                            </strong>
                            : {comment.content}
                          </p>
                        </li>
                      ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

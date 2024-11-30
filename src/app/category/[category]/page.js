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
    <div>
      <h1>Voices in Category:</h1>
      {voices.map((voices) => {
        return (
          <ul key={voices.voices_id}>
            <li>
              <h3>{voices.content}</h3>
              <p>Location: {voices.location}</p>
              <p>Amplifiers: {voices.amplifiers_count}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

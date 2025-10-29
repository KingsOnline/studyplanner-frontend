"use client"; // if using App Router (optional but safe)
import { useEffect, useState } from "react";

type MoodleApiResponse = {
  success: boolean;
  error?: string;
  users?: any[];
  courses?: any[];
};

export default function Page() {
  const [apiResponse, setApiResponse] = useState<MoodleApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userid = 2;
        const res = await fetch(`/api?userid=${userid}`); 
        const data = await res.json();
        console.log(data)        
        setApiResponse(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p style={{ color: "red" }}>⚠️ {error}</p>;
  if (!apiResponse) return <p>No data received.</p>;
  
  return (
    <div
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        maxWidth: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0.5rem",
      }}
    >
      {!apiResponse.success ? (
        <p style={{ color: "red" }}>⚠️ {apiResponse.error}</p>
      ) : (
        <>
          {apiResponse.users && apiResponse.users.length > 0 && (
            <>
              <h2>Courses</h2>
              <table border={4} cellPadding={9} cellSpacing={20}>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>categoryid</th>
                    <th>categorysortorder</th>
                    <th>fullname</th>
                    <th>displayname</th>
                    <th>idnumber</th>
                    <th>summary</th>
                    <th>summaryformat</th>
                    <th>format</th>
                    <th>showgrades</th>
                    <th>newsitems</th>
                    <th>startdate</th>
                    <th>enddate</th>
                    <th>numsections</th>
                    <th>maxbytes</th>
                    <th>showreports</th>
                    <th>visible</th>
                    <th>groupmode</th>
                    <th>groupmodeforce</th>
                    <th>defaultgroupingid</th>
                    <th>timecreated</th>
                    <th>timemodified</th>
                    <th>enablecompletion</th>
                    <th>completionnotify</th>
                    <th>lang</th>
                    <th>forcetheme</th>
                    <th>courseformatoptions</th>
                    <th>showactivitydates</th>
                    <th>showcompletionconditions</th>
                  </tr>
                </thead>
                <tbody>
                  {apiResponse.users.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.categoryid}</td>
                      <td>{c.categorysortorder}</td>
                      <td>{c.fullname}</td>
                      <td>{c.displayname}</td>
                      <td>{c.idnumber}</td>
                      <td>{c.summary}</td>
                      <td>{c.summaryformat}</td>
                      <td>{c.format}</td>
                      <td>{c.showgrades}</td>
                      <td>{c.newsitems}</td>
                      <td>{c.startdate}</td>
                      <td>{c.enddate}</td>
                      <td>{c.numsections}</td>
                      <td>{c.maxbytes}</td>
                      <td>{c.showreports}</td>
                      <td>{c.visible}</td>
                      <td>{c.groupmode}</td>
                      <td>{c.groupmodeforce}</td>
                      <td>{c.defaultgroupingid}</td>
                      <td>{c.timecreated}</td>
                      <td>{c.timemodified}</td>
                      <td>{c.enablecompletion}</td>
                      <td>{c.completionnotify}</td>
                      <td>{c.lang}</td>
                      <td>{c.forcetheme}</td>
                      <td>{JSON.stringify(c.courseformatoptions)}</td>
                      <td>{c.showactivitydates}</td>
                      <td>{c.showcompletionconditions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
}

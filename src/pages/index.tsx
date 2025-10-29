import { useState } from "react";

// Define types for better autocompletion
type MoodleApiResponse = {
  success: boolean;
  error?: string;
  users?: any[];
  courses?: any[];
};

type PageProps = {
  apiResponse: MoodleApiResponse;
};

export default function Page({ apiResponse }: PageProps) {
  const [response, setResponse] = useState(apiResponse);

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      {!response.success ? (
        <p style={{ color: "red" }}>⚠️ {response.error}</p>
      ) : (
        <>
          {response.courses && response.courses.length > 0 && (
            <>
              <h2>Courses</h2>
              <ul>
                {response.courses.map((c) => (
                  <li key={c.id}>
                    {c.fullname} ({c.shortname})
                  </li>
                ))}
              </ul>
            </>
          )}
          {response.users && response.users.length > 0 && (
            <>
              <h2>Users</h2>
              <table border={4} cellPadding={9} cellSpacing={20}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {response.users.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>
                        {u.shortname} {u.lastname}
                      </td>
                      <td>{u.email}</td>
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
export async function getServerSideProps() {
  const userid = 2;
  const res = await fetch(`http://localhost:3000/api?userid=${userid}`);
  const apiResponse = await res.json();

  return { props: { apiResponse } };
}
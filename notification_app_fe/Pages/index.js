import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  const token = "YOUR_ACCESS_TOKEN";

  useEffect(() => {
    fetchData();
  }, [page, type]);

  const fetchData = async () => {
    const res = await getNotifications(
      { page, limit: 10, notification_type: type },
      token
    );
    setData(res.data.notifications);
  };

  return (
    <div>
      <h1>All Notifications</h1>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      {data.map((n) => (
        <div key={n.ID}>
          <b>{n.Type}</b> - {n.Message}
        </div>
      ))}

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
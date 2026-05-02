import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { getTopN } from "../utils/priority";

export default function Priority() {
  const [data, setData] = useState([]);
  const [topN, setTopN] = useState(10);

  const token = "YOUR_ACCESS_TOKEN";

  useEffect(() => {
    fetchData();
  }, [topN]);

  const fetchData = async () => {
    const res = await getNotifications({}, token);
    const top = getTopN(res.data.notifications, topN);
    setData(top);
  };

  return (
    <div>
      <h1>Priority Inbox</h1>

      <input
        type="number"
        value={topN}
        onChange={(e) => setTopN(e.target.value)}
      />

      {data.map((n) => (
        <div key={n.ID}>
          <b>{n.Type}</b> - {n.Message}
        </div>
      ))}
    </div>
  );
}
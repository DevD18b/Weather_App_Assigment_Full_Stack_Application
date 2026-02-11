import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ForecastChart = ({ data }) => {
  const chartData = data.map((item) => ({
    day: item.day,
    temp: Math.round(item.tempC),
  }));

  return (
    <div className="forecast-chart">
      <h3 className="chart-title">5-Day Temperature Trend</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />

          <XAxis
            dataKey="day"
            tick={{ fill: "#e0e7ff", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            unit="°"
            tick={{ fill: "#e0e7ff", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "rgba(17,24,39,0.9)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "13px",
            }}
            labelStyle={{ color: "#9ca3af" }}
          />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#facc15"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
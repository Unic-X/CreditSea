import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ChartData {
  month: string
  value: number
}

interface ChartProps {
  data: ChartData[]
}

const chartStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px',
}

export function LoansReleasedChart({ data }: ChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Loans Released Monthly</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} style={chartStyle}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.8} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function OutstandingLoansChart({ data }: ChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Total Outstanding Open Loans - Monthly</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} style={chartStyle}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#2196F3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function RepaymentsCollectedChart({ data }: ChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Number of Repayments Collected - Monthly</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} style={chartStyle}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#F44336" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

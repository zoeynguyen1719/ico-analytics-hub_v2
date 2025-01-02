import { Card } from "@/components/ui/card";
import { ChartBar, DollarSign, Calendar, Users, Globe, Rocket, Info, TrendingUp, Gem } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { date: '2024-01', value: 2400 },
  { date: '2024-02', value: 1398 },
  { date: '2024-03', value: 9800 },
  { date: '2024-04', value: 3908 },
  { date: '2024-05', value: 4800 },
  { date: '2024-06', value: 3800 },
];

const OverviewStats = () => {
  const stats = [
    {
      title: "Total ICOs",
      value: "156",
      change: "+12%",
      icon: Gem,
      description: "Active ICO projects",
      chartData: mockChartData,
      bgColor: "bg-crypto-blue/10",
      borderColor: "border-crypto-blue"
    },
    {
      title: "Total Raised",
      value: "$2.4M",
      change: "+8.2%",
      icon: DollarSign,
      description: "Across all projects",
      chartData: mockChartData.map(d => ({ ...d, value: d.value * 1.2 })),
      bgColor: "bg-crypto-green/10",
      borderColor: "border-crypto-green"
    },
    {
      title: "Average ROI",
      value: "124%",
      change: "+5.4%",
      icon: TrendingUp,
      description: "Return on investment",
      chartData: mockChartData.map(d => ({ ...d, value: d.value * 0.8 })),
      bgColor: "bg-crypto-blue/10",
      borderColor: "border-crypto-blue"
    },
    {
      title: "Active Users",
      value: "2,845",
      change: "+2.3%",
      icon: Users,
      description: "Platform participants",
      chartData: mockChartData.map(d => ({ ...d, value: d.value * 0.5 })),
      bgColor: "bg-crypto-green/10",
      borderColor: "border-crypto-green"
    }
  ];

  return (
    <div className="space-y-6 bg-black p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className={`p-6 ${stat.bgColor} border-2 ${stat.borderColor} transition-all duration-300 hover:bg-opacity-20 hover:scale-105 cursor-pointer`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-300">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.borderColor.replace('border-', 'text-')}`} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-crypto-green' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-400 ml-2">vs last month</span>
            </div>
            <div className="h-24 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stat.chartData}>
                  <defs>
                    <linearGradient id={`colorValue${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={stat.borderColor.replace('border-', '').replace('crypto-', '#4BA3CC')} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={stat.borderColor.replace('border-', '').replace('crypto-', '#4BA3CC')} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={stat.borderColor.replace('border-', '').replace('crypto-', '#4BA3CC')}
                    fillOpacity={1}
                    fill={`url(#colorValue${index})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-400 mt-2">{stat.description}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <Card className="p-6 bg-crypto-gray border-crypto-blue">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            <Calendar className="w-5 h-5 text-crypto-green" />
          </div>
          <div className="space-y-4">
            {[
              { title: "New ICO Listed", project: "Metaverse Project", time: "2h ago" },
              { title: "Price Update", project: "DeFi Protocol", time: "4h ago" },
              { title: "ROI Milestone", project: "GameFi Token", time: "6h ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-crypto-dark">
                <div>
                  <p className="text-sm font-medium text-white">{activity.title}</p>
                  <p className="text-xs text-gray-400">{activity.project}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-crypto-gray border-crypto-blue">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Global Statistics</h3>
            <Globe className="w-5 h-5 text-crypto-green" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Total Market Cap", value: "$1.2B", change: "+2.5%" },
              { label: "24h Volume", value: "$245M", change: "+1.8%" },
              { label: "Active Projects", value: "89", change: "+3.2%" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-crypto-dark">
                <span className="text-sm text-gray-400">{stat.label}</span>
                <div className="text-right">
                  <span className="text-sm font-medium text-white">{stat.value}</span>
                  <span className="text-xs text-crypto-green ml-2">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OverviewStats;
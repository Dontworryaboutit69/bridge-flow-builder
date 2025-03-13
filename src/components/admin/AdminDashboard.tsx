
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Users, FileText, DollarSign, Clock } from 'lucide-react';

// Mock data for the dashboard
const stats = [
  { 
    title: "Total Applications",
    value: "86",
    change: "+12% from last month",
    icon: FileText,
    color: "bg-blue-500"
  },
  { 
    title: "Pending Documents",
    value: "24",
    change: "+4% from last week",
    icon: Users,
    color: "bg-orange-500"
  },
  { 
    title: "Total Funding",
    value: "$1.2M",
    change: "+18% from last quarter",
    icon: DollarSign,
    color: "bg-green-500"
  },
  { 
    title: "Average Processing Time",
    value: "4.2 days",
    change: "-8% from last month",
    icon: Clock,
    color: "bg-purple-500"
  }
];

const recentApplications = [
  { id: "APP-4821", name: "John Smith", date: "2023-09-01", status: "Approved", amount: "$50,000" },
  { id: "APP-4822", name: "Sarah Johnson", date: "2023-09-02", status: "Pending", amount: "$75,000" },
  { id: "APP-4823", name: "Michael Brown", date: "2023-09-03", status: "Processing", amount: "$30,000" },
  { id: "APP-4824", name: "Emily Davis", date: "2023-09-04", status: "Denied", amount: "$120,000" },
  { id: "APP-4825", name: "David Wilson", date: "2023-09-05", status: "Approved", amount: "$85,000" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of all application activities and performance metrics
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`${stat.color} p-2 rounded-full`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                {stat.change}
                <ArrowUpRight className="h-3 w-3" />
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>
            Latest applications submitted to the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">ID</th>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.id} className="border-b">
                    <td className="p-2 font-medium">{app.id}</td>
                    <td className="p-2">{app.name}</td>
                    <td className="p-2">{app.date}</td>
                    <td className="p-2">{app.amount}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                        app.status === 'Denied' ? 'bg-red-100 text-red-800' : 
                        app.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">
            View All Applications
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminDashboard;

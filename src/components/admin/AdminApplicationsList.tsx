
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

// Mock data for applications
const applications = [
  { id: "APP-4821", name: "John Smith", email: "john@example.com", company: "Acme Inc", amount: "$50,000", date: "2023-09-01", status: "Approved" },
  { id: "APP-4822", name: "Sarah Johnson", email: "sarah@example.com", company: "XYZ Corp", amount: "$75,000", date: "2023-09-02", status: "Pending" },
  { id: "APP-4823", name: "Michael Brown", email: "michael@example.com", company: "123 Solutions", amount: "$30,000", date: "2023-09-03", status: "Processing" },
  { id: "APP-4824", name: "Emily Davis", email: "emily@example.com", company: "Tech Innovators", amount: "$120,000", date: "2023-09-04", status: "Denied" },
  { id: "APP-4825", name: "David Wilson", email: "david@example.com", company: "Global Ventures", amount: "$85,000", date: "2023-09-05", status: "Approved" },
  { id: "APP-4826", name: "Jessica Martinez", email: "jessica@example.com", company: "Smart Services", amount: "$45,000", date: "2023-09-06", status: "Processing" },
  { id: "APP-4827", name: "Robert Taylor", email: "robert@example.com", company: "Future Tech", amount: "$95,000", date: "2023-09-07", status: "Pending" },
  { id: "APP-4828", name: "Jennifer Anderson", email: "jennifer@example.com", company: "Bright Ideas", amount: "$60,000", date: "2023-09-08", status: "Approved" },
  { id: "APP-4829", name: "Christopher Thomas", email: "chris@example.com", company: "Sunrise Corp", amount: "$110,000", date: "2023-09-09", status: "Processing" },
  { id: "APP-4830", name: "Amanda White", email: "amanda@example.com", company: "Quality Products", amount: "$40,000", date: "2023-09-10", status: "Denied" },
];

// Application details component displayed in the sheet
const ApplicationDetails = ({ application, onClose }: { application: any, onClose: () => void }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{application.name}</h3>
          <p className="text-sm text-gray-500">{application.email}</p>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs ${
          application.status === 'Approved' ? 'bg-green-100 text-green-800' : 
          application.status === 'Denied' ? 'bg-red-100 text-red-800' : 
          application.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
          'bg-orange-100 text-orange-800'
        }`}>
          {application.status}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Application ID</p>
          <p>{application.id}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Date</p>
          <p>{application.date}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Company</p>
          <p>{application.company}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Amount</p>
          <p>{application.amount}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Personal Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Address</p>
            <p>123 Business Ave</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Phone</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Business Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Industry</p>
            <p>Technology</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Years in Business</p>
            <p>5</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Annual Revenue</p>
            <p>$1,200,000</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Employees</p>
            <p>12</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Funding Details</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Requested Amount</p>
            <p>{application.amount}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Purpose</p>
            <p>Business Expansion</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Documents</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span>Business Plan.pdf</span>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span>Financial Statements.pdf</span>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span>ID Verification.jpg</span>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button>
          Update Status
        </Button>
      </div>
    </div>
  );
};

const AdminApplicationsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || app.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const handleViewApplication = (app: any) => {
    setSelectedApp(app);
    setIsSheetOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Applications</h2>
        <p className="text-muted-foreground">
          Manage and review all funding applications
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Application Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by name, email, company..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="denied">Denied</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Company</TableHead>
                  <TableHead className="hidden md:table-cell">Amount</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.id}</TableCell>
                    <TableCell>
                      {app.name}
                      <div className="md:hidden text-xs text-gray-500">{app.company}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{app.company}</TableCell>
                    <TableCell className="hidden md:table-cell">{app.amount}</TableCell>
                    <TableCell className="hidden md:table-cell">{app.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        app.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                        app.status === 'Denied' ? 'bg-red-100 text-red-800' : 
                        app.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {app.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewApplication(app)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="sm:max-w-md md:max-w-lg">
          <SheetHeader>
            <SheetTitle>Application Details</SheetTitle>
          </SheetHeader>
          {selectedApp && (
            <ApplicationDetails 
              application={selectedApp} 
              onClose={() => setIsSheetOpen(false)} 
            />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminApplicationsList;

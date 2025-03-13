
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Eye, Check, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Mock data for documents
const documents = [
  { id: "DOC-1001", name: "Business License", application: "APP-4821", applicant: "John Smith", type: "ID Verification", status: "Verified", date: "2023-09-01", fileSize: "2.4 MB" },
  { id: "DOC-1002", name: "Bank Statements", application: "APP-4822", applicant: "Sarah Johnson", type: "Financial", status: "Pending", date: "2023-09-02", fileSize: "5.1 MB" },
  { id: "DOC-1003", name: "Tax Returns", application: "APP-4823", applicant: "Michael Brown", type: "Financial", status: "Pending", date: "2023-09-03", fileSize: "3.7 MB" },
  { id: "DOC-1004", name: "Passport Copy", application: "APP-4824", applicant: "Emily Davis", type: "ID Verification", status: "Rejected", date: "2023-09-04", fileSize: "1.2 MB" },
  { id: "DOC-1005", name: "Business Plan", application: "APP-4825", applicant: "David Wilson", type: "Business", status: "Verified", date: "2023-09-05", fileSize: "4.8 MB" },
  { id: "DOC-1006", name: "Utility Bill", application: "APP-4826", applicant: "Jessica Martinez", type: "Address Proof", status: "Pending", date: "2023-09-06", fileSize: "0.9 MB" },
  { id: "DOC-1007", name: "Articles of Incorporation", application: "APP-4827", applicant: "Robert Taylor", type: "Business", status: "Verified", date: "2023-09-07", fileSize: "3.2 MB" },
  { id: "DOC-1008", name: "Balance Sheet", application: "APP-4828", applicant: "Jennifer Anderson", type: "Financial", status: "Pending", date: "2023-09-08", fileSize: "2.6 MB" },
  { id: "DOC-1009", name: "Driver's License", application: "APP-4829", applicant: "Christopher Thomas", type: "ID Verification", status: "Verified", date: "2023-09-09", fileSize: "1.5 MB" },
  { id: "DOC-1010", name: "Profit & Loss Statement", application: "APP-4830", applicant: "Amanda White", type: "Financial", status: "Rejected", date: "2023-09-10", fileSize: "3.9 MB" },
];

// Document preview component
const DocumentPreview = ({ document }: { document: any }) => {
  return (
    <div className="p-4">
      <div className="aspect-[3/4] bg-gray-100 flex flex-col items-center justify-center rounded-lg mb-4">
        <div className="text-9xl text-gray-300">📄</div>
        <p className="text-gray-500 mt-4">Preview not available</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{document.name}</h3>
          <p className="text-sm text-gray-500">
            Uploaded by {document.applicant} on {document.date}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Document ID</p>
            <p>{document.id}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Application</p>
            <p>{document.application}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Type</p>
            <p>{document.type}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">File Size</p>
            <p>{document.fileSize}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <span className={`px-2 py-1 rounded-full text-xs ${
              document.status === 'Verified' ? 'bg-green-100 text-green-800' : 
              document.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
              'bg-orange-100 text-orange-800'
            }`}>
              {document.status}
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2 mt-6">
          <Button variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          {document.status === 'Pending' && (
            <>
              <Button variant="default" className="flex-1">
                <Check className="h-4 w-4 mr-2" />
                Verify
              </Button>
              <Button variant="destructive" className="flex-1">
                <X className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const AdminDocumentsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.application.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || doc.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || doc.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleViewDocument = (doc: any) => {
    setSelectedDocument(doc);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
        <p className="text-muted-foreground">
          Manage and review application documents
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Documents Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by name, applicant, ID..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="id verification">ID Verification</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="address proof">Address Proof</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Application</TableHead>
                  <TableHead className="hidden md:table-cell">Type</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.id}</TableCell>
                    <TableCell>
                      {doc.name}
                      <div className="md:hidden text-xs text-gray-500">{doc.applicant}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{doc.application}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.type}</TableCell>
                    <TableCell className="hidden md:table-cell">{doc.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        doc.status === 'Verified' ? 'bg-green-100 text-green-800' : 
                        doc.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {doc.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewDocument(doc)}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Document Details</DialogTitle>
          </DialogHeader>
          {selectedDocument && <DocumentPreview document={selectedDocument} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDocumentsList;

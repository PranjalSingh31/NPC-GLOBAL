import { useState, useEffect } from "react";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag,
  Mail,
  Phone,
  Calendar,
  FileText,
  Download,
  Search,
  Filter,
  ArrowLeft
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

interface FormSubmission {
  id: string;
  type: "business" | "investor" | "lender" | "buyer";
  name: string;
  email: string;
  phone: string;
  submittedAt: string;
  data: any;
}

interface Review {
  id: string;
  userName: string;
  userEmail: string;
  rating: number;
  review: string;
  submittedAt: string;
}

export function Admin() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  useEffect(() => {
    // Load submissions from localStorage
    const loadedSubmissions: FormSubmission[] = [];
    
    // Load Business & Franchise submissions
    const businessSubmissions = localStorage.getItem("npc_business_submissions");
    if (businessSubmissions) {
      const parsed = JSON.parse(businessSubmissions);
      parsed.forEach((sub: any) => {
        loadedSubmissions.push({
          id: sub.id || Date.now().toString(),
          type: "business",
          name: sub.businessName || sub.name || "N/A",
          email: sub.email || "N/A",
          phone: sub.phone || "N/A",
          submittedAt: sub.submittedAt || new Date().toISOString(),
          data: sub,
        });
      });
    }

    // Load Investor submissions
    const investorSubmissions = localStorage.getItem("npc_investor_submissions");
    if (investorSubmissions) {
      const parsed = JSON.parse(investorSubmissions);
      parsed.forEach((sub: any) => {
        loadedSubmissions.push({
          id: sub.id || Date.now().toString(),
          type: "investor",
          name: sub.name || "N/A",
          email: sub.email || "N/A",
          phone: sub.phone || "N/A",
          submittedAt: sub.submittedAt || new Date().toISOString(),
          data: sub,
        });
      });
    }

    // Load Lender submissions
    const lenderSubmissions = localStorage.getItem("npc_lender_submissions");
    if (lenderSubmissions) {
      const parsed = JSON.parse(lenderSubmissions);
      parsed.forEach((sub: any) => {
        loadedSubmissions.push({
          id: sub.id || Date.now().toString(),
          type: "lender",
          name: sub.name || sub.institutionName || "N/A",
          email: sub.email || "N/A",
          phone: sub.phone || "N/A",
          submittedAt: sub.submittedAt || new Date().toISOString(),
          data: sub,
        });
      });
    }

    // Load Buyer submissions
    const buyerSubmissions = localStorage.getItem("npc_buyer_submissions");
    if (buyerSubmissions) {
      const parsed = JSON.parse(buyerSubmissions);
      parsed.forEach((sub: any) => {
        loadedSubmissions.push({
          id: sub.id || Date.now().toString(),
          type: "buyer",
          name: sub.name || "N/A",
          email: sub.email || "N/A",
          phone: sub.phone || "N/A",
          submittedAt: sub.submittedAt || new Date().toISOString(),
          data: sub,
        });
      });
    }

    // Load Reviews
    const storedReviews = localStorage.getItem("npc_reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }

    setSubmissions(loadedSubmissions.sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    ));
  }, []);

  const stats = {
    total: submissions.length,
    business: submissions.filter(s => s.type === "business").length,
    investor: submissions.filter(s => s.type === "investor").length,
    lender: submissions.filter(s => s.type === "lender").length,
    buyer: submissions.filter(s => s.type === "buyer").length,
    reviews: reviews.length,
  };

  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = 
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.phone.includes(searchTerm);
    
    const matchesFilter = filterType === "all" || sub.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "business": return <Building2 className="w-4 h-4" />;
      case "investor": return <TrendingUp className="w-4 h-4" />;
      case "lender": return <DollarSign className="w-4 h-4" />;
      case "buyer": return <ShoppingBag className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "business": return "bg-blue-100 text-blue-800 border-blue-200";
      case "investor": return "bg-green-100 text-green-800 border-green-200";
      case "lender": return "bg-purple-100 text-purple-800 border-purple-200";
      case "buyer": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const exportToCSV = () => {
    const csvData = filteredSubmissions.map(sub => ({
      Type: sub.type,
      Name: sub.name,
      Email: sub.email,
      Phone: sub.phone,
      "Submitted At": new Date(sub.submittedAt).toLocaleString(),
    }));

    const headers = Object.keys(csvData[0] || {}).join(",");
    const rows = csvData.map(row => Object.values(row).join(",")).join("\n");
    const csv = headers + "\n" + rows;

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `npc-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => window.location.hash = "#/"}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Site
              </Button>
              <div>
                <h1 className="text-2xl bg-gradient-to-r from-[#0f172a] to-[#334155] bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600">NPC Global - Data Management</p>
              </div>
            </div>
            <Button
              onClick={exportToCSV}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-blue-900 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Total Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl text-blue-900">{stats.total}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-green-900 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl text-green-900">{stats.business}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-purple-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Investors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl text-purple-900">{stats.investor}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-orange-900 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Lenders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl text-orange-900">{stats.lender}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-pink-900 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Buyers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl text-pink-900">{stats.buyer}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-amber-900 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl text-amber-900">{stats.reviews}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="shadow-xl border-gray-200">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-2xl">Submissions & Data</CardTitle>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-[300px]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Types</option>
                    <option value="business">Business</option>
                    <option value="investor">Investor</option>
                    <option value="lender">Lender</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="submissions" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="submissions">Form Submissions</TabsTrigger>
                <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="submissions">
                {filteredSubmissions.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No submissions found</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Submitted</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell>
                              <Badge className={getTypeBadgeColor(submission.type)}>
                                <span className="flex items-center gap-1">
                                  {getTypeIcon(submission.type)}
                                  {submission.type}
                                </span>
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">{submission.name}</TableCell>
                            <TableCell>
                              <a
                                href={`mailto:${submission.email}`}
                                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                              >
                                <Mail className="w-3 h-3" />
                                {submission.email}
                              </a>
                            </TableCell>
                            <TableCell>
                              <a
                                href={`tel:${submission.phone}`}
                                className="text-green-600 hover:text-green-800 flex items-center gap-1"
                              >
                                <Phone className="w-3 h-3" />
                                {submission.phone}
                              </a>
                            </TableCell>
                            <TableCell>
                              <span className="flex items-center gap-1 text-sm text-gray-600">
                                <Calendar className="w-3 h-3" />
                                {new Date(submission.submittedAt).toLocaleDateString()}
                              </span>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  alert(JSON.stringify(submission.data, null, 2));
                                }}
                                className="text-xs"
                              >
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="reviews">
                {reviews.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No reviews found</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {reviews.map((review) => (
                      <Card key={review.id} className="border-gray-200">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-semibold text-[#0f172a]">{review.userName}</p>
                              <p className="text-sm text-gray-600">{review.userEmail}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-lg ${
                                    i < review.rating ? "text-amber-400" : "text-gray-300"
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{review.review}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(review.submittedAt).toLocaleString()}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

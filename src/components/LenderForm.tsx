import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface LenderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LenderForm({ isOpen, onClose }: LenderFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    lendingAmount: "",
    loanDuration: "",
    interestRate: "",
    lendingMode: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const submission = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      name: formData.fullName,
      institutionName: formData.businessName,
    };
    
    const existingSubmissions = localStorage.getItem("npc_lender_submissions");
    const submissions = existingSubmissions ? JSON.parse(existingSubmissions) : [];
    submissions.push(submission);
    localStorage.setItem("npc_lender_submissions", JSON.stringify(submissions));
    
    console.log("Lender Form submitted:", formData);
    toast.success("Your lender registration has been submitted successfully!");
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "",
      lendingAmount: "",
      loanDuration: "",
      interestRate: "",
      lendingMode: "",
      comments: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#1a1a2e]">
            Lender Registration / Business Lending Form
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Personal / Business Information */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">
              Section 1: Personal / Business Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessName">
                Business or Organization Name
              </Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessName: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">
                Business Type / Industry
              </Label>
              <Select
                value={formData.businessType}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    businessType: value,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banking">Banking & Finance</SelectItem>
                  <SelectItem value="nbfc">NBFC</SelectItem>
                  <SelectItem value="private-equity">Private Equity</SelectItem>
                  <SelectItem value="venture-capital">Venture Capital</SelectItem>
                  <SelectItem value="individual">Individual Investor</SelectItem>
                  <SelectItem value="corporate">Corporate Entity</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Section 2: Lending Details */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">
              Section 2: Lending Details
            </h3>

            <div className="space-y-2">
              <Label htmlFor="lendingAmount">
                Amount Willing to Lend (₹) <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lendingAmount"
                type="number"
                value={formData.lendingAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lendingAmount: e.target.value,
                  })
                }
                placeholder="Enter amount in rupees"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Preferred Loan Duration</Label>
              <RadioGroup
                value={formData.loanDuration}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    loanDuration: value,
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="less-6" id="less-6" />
                  <Label htmlFor="less-6" className="font-normal">
                    Less than 6 months
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6-12" id="6-12" />
                  <Label htmlFor="6-12" className="font-normal">
                    6–12 months
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-2" id="1-2" />
                  <Label htmlFor="1-2" className="font-normal">
                    1–2 years
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="more-2" id="more-2" />
                  <Label htmlFor="more-2" className="font-normal">
                    More than 2 years
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interestRate">
                Expected Interest Rate (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={formData.interestRate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    interestRate: e.target.value,
                  })
                }
                placeholder="e.g., 12.5"
              />
            </div>

            <div className="space-y-2">
              <Label>Mode of Lending</Label>
              <RadioGroup
                value={formData.lendingMode}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    lendingMode: value,
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="direct-loan" id="direct-loan" />
                  <Label htmlFor="direct-loan" className="font-normal">
                    Direct Business Loan
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="escrow" id="escrow" />
                  <Label htmlFor="escrow" className="font-normal">
                    Through Platform Escrow
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partnership" id="partnership" />
                  <Label htmlFor="partnership" className="font-normal">
                    Partnership / Investment
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Section 3: Additional Information */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">
              Section 3: Additional Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="comments">
                Comments / Additional Details
              </Label>
              <Textarea
                id="comments"
                value={formData.comments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    comments: e.target.value,
                  })
                }
                placeholder="Please provide any additional information or requirements"
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-[#1a1a2e]"
            >
              👉 Submit Details
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

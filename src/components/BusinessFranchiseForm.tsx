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
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface BusinessFranchiseFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BusinessFranchiseForm({
  isOpen,
  onClose,
}: BusinessFranchiseFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessLocation: "",
    businessType: "",
    yearsInOperation: "",
    outletsCount: "",
    annualRevenue: "",
    businessModel: "",
    objectives: [] as string[],
    businessDescription: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const submission = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
    };
    
    const existingSubmissions = localStorage.getItem("npc_business_submissions");
    const submissions = existingSubmissions ? JSON.parse(existingSubmissions) : [];
    submissions.push(submission);
    localStorage.setItem("npc_business_submissions", JSON.stringify(submissions));
    
    console.log("Business/Franchise Form submitted:", formData);
    toast.success("Your business details have been submitted successfully!");
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      businessLocation: "",
      businessType: "",
      yearsInOperation: "",
      outletsCount: "",
      annualRevenue: "",
      businessModel: "",
      objectives: [],
      businessDescription: "",
      comments: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#1a1a2e]">
            Business / Franchise Owner Form
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Owner Details */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Owner Details</h3>

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
                Business / Brand Name <span className="text-red-500">*</span>
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
                required
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
              <Label htmlFor="businessLocation">Business Location / City</Label>
              <Input
                id="businessLocation"
                value={formData.businessLocation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessLocation: e.target.value,
                  })
                }
                placeholder="e.g., Mumbai, Delhi, Bangalore"
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Business Information</h3>

            <div className="space-y-2">
              <Label htmlFor="businessType">Type of Business / Industry</Label>
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
                  <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsInOperation">Years in Operation</Label>
              <Input
                id="yearsInOperation"
                type="number"
                value={formData.yearsInOperation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    yearsInOperation: e.target.value,
                  })
                }
                placeholder="e.g., 5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="outletsCount">
                Number of Outlets / Branches (if any)
              </Label>
              <Input
                id="outletsCount"
                type="number"
                value={formData.outletsCount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    outletsCount: e.target.value,
                  })
                }
                placeholder="e.g., 10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="annualRevenue">Annual Revenue (Approx.)</Label>
              <Input
                id="annualRevenue"
                value={formData.annualRevenue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    annualRevenue: e.target.value,
                  })
                }
                placeholder="e.g., 50 Lakhs, 5 Crores"
              />
            </div>

            <div className="space-y-2">
              <Label>Business Model</Label>
              <RadioGroup
                value={formData.businessModel}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    businessModel: value,
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="owned" id="owned" />
                  <Label htmlFor="owned" className="font-normal">
                    Owned
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="franchise" id="franchise" />
                  <Label htmlFor="franchise" className="font-normal">
                    Franchise
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partnership" id="partnership" />
                  <Label htmlFor="partnership" className="font-normal">
                    Partnership
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Your Objective */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Your Objective</h3>

            <div className="space-y-2">
              <Label>What are you looking for?</Label>
              <div className="space-y-2">
                {[
                  { id: "sell-business", label: "Sell My Business" },
                  { id: "expand-franchise", label: "Expand via Franchise" },
                  { id: "seek-investment", label: "Seek Investment" },
                  { id: "strategic-partnership", label: "Strategic Partnership" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={item.id}
                      checked={formData.objectives.includes(item.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            objectives: [...formData.objectives, item.id],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            objectives: formData.objectives.filter(
                              (i) => i !== item.id
                            ),
                          });
                        }
                      }}
                    />
                    <Label htmlFor={item.id} className="font-normal">
                      {item.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Additional Info</h3>

            <div className="space-y-2">
              <Label htmlFor="businessDescription">
                Brief Description of the Business
              </Label>
              <Textarea
                id="businessDescription"
                value={formData.businessDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessDescription: e.target.value,
                  })
                }
                placeholder="Provide a brief overview of your business, products/services, and unique selling points"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Comments / Additional Notes</Label>
              <Textarea
                id="comments"
                value={formData.comments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    comments: e.target.value,
                  })
                }
                placeholder="Any additional information you'd like to share"
                rows={3}
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
              👉 Submit Business Details
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

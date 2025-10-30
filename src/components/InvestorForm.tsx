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

interface InvestorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvestorForm({ isOpen, onClose }: InvestorFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    investmentRangeMin: "",
    investmentRangeMax: "",
    preferredIndustry: "",
    investmentType: "",
    occupation: "",
    previousExperience: "",
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
    };
    
    const existingSubmissions = localStorage.getItem("npc_investor_submissions");
    const submissions = existingSubmissions ? JSON.parse(existingSubmissions) : [];
    submissions.push(submission);
    localStorage.setItem("npc_investor_submissions", JSON.stringify(submissions));
    
    console.log("Investor Profile submitted:", formData);
    toast.success("Your investor profile has been submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      investmentRangeMin: "",
      investmentRangeMax: "",
      preferredIndustry: "",
      investmentType: "",
      occupation: "",
      previousExperience: "",
      comments: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#1a1a2e]">
            Investor Profile Form
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Details */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Basic Details</h3>

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
              <Label htmlFor="location">City / Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value,
                  })
                }
                placeholder="e.g., Mumbai, Delhi, Bangalore"
              />
            </div>
          </div>

          {/* Investment Preferences */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Investment Preferences</h3>

            <div className="space-y-2">
              <Label>
                Investment Range (₹) <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Minimum Amount"
                    type="number"
                    value={formData.investmentRangeMin}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investmentRangeMin: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Maximum Amount"
                    type="number"
                    value={formData.investmentRangeMax}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investmentRangeMax: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredIndustry">
                Preferred Industry / Sector
              </Label>
              <Select
                value={formData.preferredIndustry}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    preferredIndustry: value,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Investment Type</Label>
              <RadioGroup
                value={formData.investmentType}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    investmentType: value,
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="equity" id="equity" />
                  <Label htmlFor="equity" className="font-normal">
                    Equity
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="debt" id="debt" />
                  <Label htmlFor="debt" className="font-normal">
                    Debt
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="convertible-note" id="convertible-note" />
                  <Label htmlFor="convertible-note" className="font-normal">
                    Convertible Note
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

          {/* Background */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Background</h3>

            <div className="space-y-2">
              <Label htmlFor="occupation">
                Occupation / Professional Background
              </Label>
              <Input
                id="occupation"
                value={formData.occupation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    occupation: e.target.value,
                  })
                }
                placeholder="e.g., Business Owner, Corporate Executive, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="previousExperience">
                Previous Investment Experience (if any)
              </Label>
              <Textarea
                id="previousExperience"
                value={formData.previousExperience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    previousExperience: e.target.value,
                  })
                }
                placeholder="Please describe your previous investment experience"
                rows={3}
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">Additional Info</h3>

            <div className="space-y-2">
              <Label htmlFor="comments">Comments / Specific Interests</Label>
              <Textarea
                id="comments"
                value={formData.comments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    comments: e.target.value,
                  })
                }
                placeholder="Any additional information or specific interests"
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
              👉 Submit Profile
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

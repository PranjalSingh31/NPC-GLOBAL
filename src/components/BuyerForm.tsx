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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface BuyerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BuyerForm({ isOpen, onClose }: BuyerFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    location: "",
    budgetRange: "",
    investmentType: "",
    experience: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buyer Form submitted:", formData);
    toast.success("Your business interest has been submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      businessType: "",
      location: "",
      budgetRange: "",
      investmentType: "",
      experience: "",
      comments: "",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#1a1a2e]">
            Business Buyer Form
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Details */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">
              Basic Details
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
          </div>

          {/* Business Interest */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">
              Business Interest
            </h3>

            <div className="space-y-2">
              <Label htmlFor="businessType">
                Type of Business Interested In
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
                  <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                  <SelectItem value="retail">Retail Store</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Service Business</SelectItem>
                  <SelectItem value="technology">Technology / IT</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="franchise">Franchise</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">
                Preferred Location
              </Label>
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

            <div className="space-y-2">
              <Label htmlFor="budgetRange">
                Budget Range (₹)
              </Label>
              <Input
                id="budgetRange"
                value={formData.budgetRange}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    budgetRange: e.target.value,
                  })
                }
                placeholder="e.g., 10 Lakhs - 50 Lakhs"
              />
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
                  <RadioGroupItem value="full-purchase" id="full-purchase" />
                  <Label htmlFor="full-purchase" className="font-normal">
                    Full Purchase
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partnership" id="partnership" />
                  <Label htmlFor="partnership" className="font-normal">
                    Partnership / Joint Venture
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="franchise" id="franchise" />
                  <Label htmlFor="franchise" className="font-normal">
                    Franchise
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg text-[#1a1a2e]">
              Additional Info
            </h3>

            <div className="space-y-2">
              <Label htmlFor="experience">
                Experience in Business (if any)
              </Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experience: e.target.value,
                  })
                }
                placeholder="Please describe your business experience"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">
                Comments / Specific Requirements
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
                placeholder="Any specific requirements or comments"
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
              👉 Submit Interest
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { BusinessFranchiseForm } from "./BusinessFranchiseForm";
import { InvestorForm } from "./InvestorForm";
import { LenderForm } from "./LenderForm";
import { BuyerForm } from "./BuyerForm";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

interface ConnectFormProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export function ConnectForm({
  isOpen,
  onClose,
  category,
}: ConnectFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { category, ...formData });
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    onClose();
  };

  // Route to specific form based on category
  if (category === "Business & Franchise") {
    return <BusinessFranchiseForm isOpen={isOpen} onClose={onClose} />;
  }

  if (category === "Investors") {
    return <InvestorForm isOpen={isOpen} onClose={onClose} />;
  }

  if (category === "Lenders") {
    return <LenderForm isOpen={isOpen} onClose={onClose} />;
  }

  if (category === "Buyers") {
    return <BuyerForm isOpen={isOpen} onClose={onClose} />;
  }

  // Default form for other categories
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#1a1a2e]">
            Connect With Us
          </DialogTitle>
          <DialogDescription>
            {category} - Let us know how we can help you
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
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
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
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
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              placeholder="Your company name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              required
              placeholder="Tell us about your requirements"
              rows={4}
            />
          </div>
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
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

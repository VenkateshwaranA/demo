
import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Quote {
  name: string;
  email: string;
  quote: string;
  date: string;
}
interface QuoteFormProps {
  setUserQuotes: (quotes: Quote[]) => void;
}
const QuoteForm = ({ setUserQuotes }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quote: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    quote: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", quote: "" };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.quote.trim()) {
      newErrors.quote = "Quote is required";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Create new quote object
      const newQuote: Quote = {
        name: formData.name,
        email: formData.email,
        quote: formData.quote,
        date: new Date().toISOString()
      };

      // Get existing quotes from localStorage
      const existingQuotes = JSON.parse(localStorage.getItem('userQuotes') || '[]');

      // Add new quote to the array
      const updatedQuotes = [newQuote, ...existingQuotes];

      setUserQuotes(updatedQuotes);
      // Save back to localStorage
      localStorage.setItem('userQuotes', JSON.stringify(updatedQuotes));

      toast.success("Thank you for submitting your quote!");
      setFormData({ name: "", email: "", quote: "" });
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", email: "", quote: "" });
    setErrors({ name: "", quote: "" });
  };

  return (
    <div className="animate-fade-in rounded-lg bg-white p-6 shadow">
      <h3 className="mb-4 text-xl font-semibold">Share Your Quote</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email (Optional)
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quote" className="mb-1 block text-sm font-medium">
            Your Quote <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="quote"
            name="quote"
            rows={4}
            value={formData.quote}
            onChange={handleChange}
          />
          {errors.quote && <p className="mt-1 text-sm text-red-500">{errors.quote}</p>}
        </div>
        <div className="flex items-center justify-end space-x-2">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            disabled={!formData.quote.trim()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;

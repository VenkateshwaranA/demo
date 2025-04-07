
import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "sonner";

const QuoteForm = () => {
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
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email (Optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="quote" className="mb-1 block text-sm font-medium">
            Your Quote <span className="text-red-500">*</span>
          </label>
          <textarea
            id="quote"
            name="quote"
            rows={4}
            className="form-textarea"
            value={formData.quote}
            onChange={handleChange}
          />
          {errors.quote && <p className="form-error">{errors.quote}</p>}
        </div>
        
        <div className="flex items-center justify-end space-x-2">
          <button
            type="button"
            className="btn border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
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

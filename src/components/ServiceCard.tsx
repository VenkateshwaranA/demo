
import { Link } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <a href={href} className="pointer" >
      <div className="card-hover  animate-fade-in rounded-lg bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <section className="ml-4 flex-1  mt-3">
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          </section>

        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default ServiceCard;

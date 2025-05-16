
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  Users 
} from "lucide-react";

const features = [
  {
    name: 'Investment Strategy',
    description: 'Our expert team creates personalized investment strategies based on your risk tolerance and financial goals.',
    icon: LineChart,
  },
  {
    name: 'Portfolio Management',
    description: 'Professional portfolio management with regular monitoring, rebalancing, and performance reporting.',
    icon: PieChart,
  },
  {
    name: 'Financial Planning',
    description: 'Comprehensive financial planning services that cover retirement, education, and estate planning.',
    icon: BarChart3,
  },
  {
    name: 'Wealth Protection',
    description: 'Protect your assets with our specialized insurance and risk management solutions.',
    icon: ShieldCheck,
  },
  {
    name: 'Retirement Planning',
    description: 'Plan for a secure retirement with strategies designed to maximize your retirement income.',
    icon: TrendingUp,
  },
  {
    name: 'Estate Planning',
    description: 'Ensure your legacy with our comprehensive estate planning and wealth transfer services.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Investment Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Yellow Mountain offers a full range of investment services to meet your financial needs.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

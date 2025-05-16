
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission & Values
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Yellow Mountain has been providing exceptional investment services since 2005.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
              alt="Team meeting" 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              <p className="mt-3 text-gray-600">
                Yellow Mountain is an independent investment management firm dedicated to providing personalized financial solutions for individuals, families, and businesses. With over 15 years of industry experience, we've helped countless clients achieve their financial goals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
              <p className="mt-3 text-gray-600">
                We believe in a client-first approach, where your financial well-being is our highest priority. We combine innovative strategies with time-tested investment principles to help you build and protect your wealth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-primary mb-2">Trust</h4>
                  <CardDescription>We build long-term relationships based on transparency and integrity.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-primary mb-2">Excellence</h4>
                  <CardDescription>We constantly strive to exceed expectations in everything we do.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

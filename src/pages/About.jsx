
import React from 'react';
import Button from '../components/ui/Button';

function About() {
  return (
    <div className="bg-white">
      {/* About Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Learn more about our company's mission, vision, and the team behind our success.
            </p>
          </div>
        </div>
      </div>
      
      {/* Company Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 2010, our company began with a simple mission: to provide businesses with the tools and services they need to succeed in an increasingly competitive marketplace.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Over the years, we've grown from a small team of dedicated professionals to a comprehensive service provider with clients across multiple industries. Our commitment to excellence and customer satisfaction has remained unwavering throughout our journey.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Today, we continue to innovate and expand our offerings, always with an eye toward helping our clients achieve their goals and overcome their challenges.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Value 1 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Excellence</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We strive for excellence in everything we do, from customer service to project delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Integrity</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We uphold the highest ethical standards in all our business dealings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Innovation</h3>
                    <p className="mt-5 text-base text-gray-500">
                      We continuously seek new and better ways to serve our clients and improve our offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Meet the experts who make it all happen
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team member"
                />
                <div className="px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900">Jane Doe</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                  <p className="mt-2 text-gray-500">
                    With over 15 years of industry experience, Jane leads our company with vision and expertise.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team member"
                />
                <div className="px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900">John Smith</h3>
                  <p className="text-gray-600">CTO</p>
                  <p className="mt-2 text-gray-500">
                    John brings technical expertise and innovation to lead our development efforts.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team member"
                />
                <div className="px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900">Emily Chen</h3>
                  <p className="text-gray-600">Head of Client Relations</p>
                  <p className="mt-2 text-gray-500">
                    Emily ensures our clients receive the highest level of service and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Want to join our team?</span>
            <span className="block">Check out our open positions.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button className="bg-white text-primary hover:bg-gray-50">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

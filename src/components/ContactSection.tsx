
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Enquiry Submitted",
        description: "Thank you for contacting Yellow Mountain. We'll be in touch with you shortly!",
        duration: 5000,
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Have questions? Our team is here to help you with any inquiries about our investment solutions and services.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Our Office</p>
                  <p className="mt-1 text-gray-600">123 Investment Avenue, Financial District, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                  <p className="mt-1 text-gray-500">Toll-free: 1-800-YM-INVEST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="mt-1 text-gray-600">contact@yellowmountain.com</p>
                  <p className="mt-1 text-gray-500">support@yellowmountain.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <ul className="space-y-2 mt-2">
                    <li className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</li>
                    <li className="text-gray-600">Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                title="Yellow Mountain Location"
                className="w-full h-64 rounded-lg shadow-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00701368400567!3d40.71774937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2ssa!4v1653395535800!5m2!1sen!2ssa"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="shadow-lg border-0">
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send an Enquiry</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="business">Business Solutions</SelectItem>
                              <SelectItem value="it">IT Solutions</SelectItem>
                              <SelectItem value="products">Products</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Submitting..." : "Submit Enquiry"}
                      </Button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        We'll get back to you within 24 business hours
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

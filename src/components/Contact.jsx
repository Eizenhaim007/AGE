import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = ({ language }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Discutons de votre projet',
      form: {
        name: 'Nom complet',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer le message'
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email'
      },
      success: 'Message envoyé avec succès! Nous vous contacterons bientôt.',
      error: 'Veuillez remplir tous les champs.'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Let\'s discuss your project',
      form: {
        name: 'Full name',
        email: 'Email',
        message: 'Message',
        submit: 'Send message'
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email'
      },
      success: 'Message sent successfully! We will contact you soon.',
      error: 'Please fill in all fields.'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: content[language].error,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: content[language].success,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A4C8B] mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={content[language].form.name}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={content[language].form.email}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={content[language].form.message}
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#1A4C8B] hover:bg-blue-700 text-white"
                  size="lg"
                >
                  {content[language].form.submit}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div> */}

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A4C8B] mb-1">{content[language].info.address}</h3>
                  <p className="text-gray-600">45 Rue Atlas, étage 4, Numéro 16<br />Maarif, Casablanca, Maroc</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A4C8B] mb-1">{content[language].info.phone}</h3>
                  <p className="text-gray-600">+212 6 62 600 529</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A4C8B] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A4C8B] mb-1">{content[language].info.email}</h3>
                  <p className="text-gray-600">contact@africaglobalengineering.com</p>
                  <p className="text-gray-600">soufianelhlou@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8447891234567!2d-7.6298!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNyc0Ny4zIlc!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Africa Global Engineering Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
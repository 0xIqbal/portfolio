import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { contactLinks } from '../data/portfolioData';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  WhatsApp: FaWhatsapp,
  YouTube: FaYoutube,
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus({ type: 'success', message: 'Message sent successfully. I will reply soon.' });
      formRef.current?.reset();
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to send message right now. Please try again later.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-28">
      <SectionHeading
        label="Get In Touch"
        title="Let's talk"
        subtitle="Open to collaborations, internships, software development opportunities, research projects, and innovative ideas."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-card rounded-3xl p-6"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Reach out for work, study, or collaborative ideas across development, teaching, and content creation.
          </p>

          <div className="mt-6 space-y-4">
            {contactLinks.map((item) => {
              const Icon = socialIcons[item.label] ?? (item.label === 'Email' ? FaEnvelope : item.label === 'Phone' ? FaPhone : FaMapMarkerAlt);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-purple-400/30 hover:bg-purple-500/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-purple-200/70">{item.label}</p>
                    <p className="mt-1 text-sm text-white">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_45%),rgba(255,255,255,0.03)] p-4">
            <div className="flex items-center gap-3 text-purple-300">
              <FaMapMarkerAlt />
              <span className="text-sm font-medium">Google Map Placeholder</span>
            </div>
            <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-black/20 text-sm text-slate-400">
              Add a map embed here when the location is ready.
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-card rounded-3xl p-6"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Use the form below to send a message directly through EmailJS.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" type="text" placeholder="Your Name" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-400/40" />
              <input name="email" type="email" placeholder="Your Email" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-400/40" />
            </div>
            <input name="subject" type="text" placeholder="Subject" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-400/40" />
            <textarea name="message" rows="6" placeholder="Your Message" required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-purple-400/40" />
            <button type="submit" disabled={isSending} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status.message ? (
            <div className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-rose-400/30 bg-rose-500/10 text-rose-200'}`}>
              {status.message}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

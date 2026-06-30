import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, MapPin, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const codeLines = [
  { num: 1,  tokens: [{ t: '// Welcome to my workspace',          c: 'comment' }] },
  { num: 2,  tokens: [{ t: 'import ', c: 'keyword' }, { t: '{ Developer }', c: 'orange' }, { t: ' from ', c: 'keyword' }, { t: "'./universe'", c: 'string' }, { t: ';', c: 'white' }] },
  { num: 3,  tokens: [] },
  { num: 4,  tokens: [{ t: 'const ', c: 'keyword' }, { t: 'Contact', c: 'orange' }, { t: ' = () => {', c: 'white' }] },
  { num: 5,  tokens: [{ t: '  return (', c: 'white' }] },
  { num: 6,  tokens: [{ t: '    <Developer', c: 'tag' }] },
  { num: 7,  tokens: [{ t: '      name', c: 'prop' }, { t: '=', c: 'white' }, { t: '"Muhammad Hussain"', c: 'string' }] },
  { num: 8,  tokens: [{ t: '      role', c: 'prop' }, { t: '=', c: 'white' }, { t: '"MERN Stack Developer"', c: 'string' }] },
  { num: 9,  tokens: [{ t: '      based', c: 'prop' }, { t: '=', c: 'white' }, { t: '"Islamabad, Pakistan"', c: 'string' }] },
  { num: 10, tokens: [{ t: '      email', c: 'prop' }, { t: '=', c: 'white' }, { t: '"hussain900502@gmail.com"', c: 'string' }] },
  { num: 11, tokens: [{ t: '      status', c: 'prop' }, { t: '=', c: 'white' }, { t: '"Available for work"', c: 'green' }] },
  { num: 12, tokens: [{ t: '    />', c: 'tag' }] },
  { num: 13, tokens: [{ t: '  );', c: 'white' }] },
  { num: 14, tokens: [{ t: '};', c: 'white' }] },
]

const tokenColor = {
  comment: '#6A9955',
  keyword: '#C586C0',
  orange:  '#F97316',
  string:  '#CE9178',
  tag:     '#4EC9B0',
  prop:    '#9CDCFE',
  white:   '#D4D4D4',
  green:   '#4FC1FF',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    console.log('SERVICE:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('TEMPLATE:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    console.log('PUBLIC KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      message:      form.message,
      to_name:      'Muhammad Hussain',
    }

    try {
      // Send email to Muhammad
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Send auto reply to sender
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative grid-bg py-24 px-6 overflow-hidden">

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-orange text-sm mb-3">$ ./contact.sh</p>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white">
            Get In <span className="text-orange">Touch</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-orange/40 rounded-full" />
          <p className="font-inter text-white/30 text-sm mt-4">
            Open to internships, collaborations and freelance projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT — code editor terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-orange/15 contact-terminal"
            style={{ background: '#1E1E1E' }}
          >
            {/* editor top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: '#2D2D2D' }}>
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#FF5F57', display:'inline-block' }} />
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#FFBD2E', display:'inline-block' }} />
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#28C840', display:'inline-block' }} />
              <span className="font-mono text-xs text-white/30 ml-2">portfolio.tsx</span>
              <span className="ml-auto w-2 h-2 rounded-full bg-orange animate-pulse" />
            </div>

            {/* code lines */}
            <div className="p-5 font-mono text-sm leading-7">
              {codeLines.map(line => (
                <div key={line.num} className="flex gap-4">
                  <span className="select-none w-5 text-right shrink-0" style={{ color: '#4A4A4A' }}>
                    {line.num}
                  </span>
                  <span>
                    {line.tokens.length === 0 ? '\u00A0' : line.tokens.map((tok, i) => (
                      <span key={i} style={{ color: tokenColor[tok.c] || '#D4D4D4' }}>
                        {tok.t}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* bottom CTA buttons */}
            <div className="flex items-center gap-3 px-5 py-4 border-t border-white/5 flex-wrap" style={{ background: '#2D2D2D' }}>
              <a
                href="mailto:hussain900502@gmail.com"
                className="flex items-center gap-2 px-5 py-2 rounded-md font-mono text-sm font-semibold transition-all duration-200"
                style={{ background: '#F97316', color: '#120A08' }}
                onMouseEnter={e => { e.currentTarget.style.background='#ea6a0a'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background='#F97316'; e.currentTarget.style.transform='translateY(0)' }}
              >
                <Mail size={14} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/muhammad-hussain082"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-md font-mono text-sm border transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#D4D4D4' }}
                onMouseEnter={e => { e.currentTarget.style.background='#0077B5'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#0077B5' }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#D4D4D4'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)' }}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://github.com/Muhammad-Hussain-CH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-md font-mono text-sm border transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#D4D4D4' }}
                onMouseEnter={e => { e.currentTarget.style.background='#333'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='#666' }}
                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#D4D4D4'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)' }}
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* RIGHT — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-orange/15 bg-surface overflow-hidden"
          >
            {/* form top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-orange/10">
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#FF5F57', display:'inline-block' }} />
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#FFBD2E', display:'inline-block' }} />
              <span style={{ width:'12px', height:'12px', borderRadius:'50%', background:'#28C840', display:'inline-block' }} />
              <span className="font-mono text-xs text-white/30 ml-2">new_message.js</span>
            </div>

            <div className="p-6">
              {/* success state */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <CheckCircle size={48} className="text-orange" />
                  <p className="font-grotesk font-semibold text-white text-lg">Message Sent!</p>
                  <p className="font-mono text-white/40 text-sm text-center">
                    You'll receive a confirmation email shortly.<br />
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-xs text-orange/60 hover:text-orange transition-colors mt-2"
                  >
                    Send another →
                  </button>
                </motion.div>
              )}

              {/* error state */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 gap-4"
                >
                  <XCircle size={48} className="text-red" />
                  <p className="font-grotesk font-semibold text-white text-lg">Something went wrong!</p>
                  <p className="font-mono text-white/40 text-sm text-center">
                    Please try emailing directly at<br />
                    <span className="text-orange">hussain900502@gmail.com</span>
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-xs text-orange/60 hover:text-orange transition-colors mt-2"
                  >
                    Try again →
                  </button>
                </motion.div>
              )}

              {/* form */}
              {(status === 'idle' || status === 'loading') && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-white/40">
                      <span className="text-orange">const</span> name =
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder='"Your full name"'
                      style={{ height: '52px' }}
                      className="w-full bg-bg border border-orange/15 rounded-md px-4 font-mono text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange/50 transition-colors"
                    />
                  </div>

                  {/* email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-white/40">
                      <span className="text-orange">const</span> email =
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder='"your@email.com"'
                      style={{ height: '52px' }}
                      className="w-full bg-bg border border-orange/15 rounded-md px-4 font-mono text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange/50 transition-colors"
                    />
                  </div>

                  {/* message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-white/40">
                      <span className="text-orange">const</span> message =
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder='"Hi Muhammad, I would like to..."'
                      className="w-full bg-bg border border-orange/15 rounded-md px-4 py-3 font-mono text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange/50 transition-colors resize-none"
                    />
                  </div>

                  {/* submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-md font-grotesk font-semibold text-sm bg-orange text-bg hover:bg-orange/90 transition-all duration-200 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <span className="font-mono text-sm animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <p className="font-mono text-xs text-white/20 text-center">
                    You'll receive a confirmation email instantly
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* bottom info row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-16 pt-10 border-t border-orange/10"
        >
          {[
            { icon: <Mail size={13} />, text: 'hussain900502@gmail.com', href: 'mailto:hussain900502@gmail.com' },
            { icon: <MapPin size={13} />, text: 'Islamabad, Pakistan', href: null },
            { icon: <GitHubIcon />, text: 'Muhammad-Hussain-CH', href: 'https://github.com/Muhammad-Hussain-CH' },
          ].map((item, i) => (
            item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-orange transition-colors">
                <span className="text-orange/60">{item.icon}</span>
                {item.text}
              </a>
            ) : (
              <div key={i} className="flex items-center gap-2 font-mono text-xs text-white/30">
                <span className="text-orange/60">{item.icon}</span>
                {item.text}
              </div>
            )
          ))}
        </motion.div>

      </div>
    </section>
  )
}

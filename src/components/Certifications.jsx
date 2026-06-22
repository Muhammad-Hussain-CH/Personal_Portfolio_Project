import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Prompt Engineering Foundations',
    issuer: 'Packt / Coursera',
    date: 'June 2026',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/Prompt_Engineering.jpg',
    color: '#F97316',
    badge: 'AI & ML',
  },
  {
    id: 6,
    title: 'AUREX 2026',
    issuer: 'HEC — Technical Innovation Event',
    date: '2026',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/HEC_Certified.jpg',
    color: '#7C3AED',
    badge: 'Innovation',
  },
  {
    id: 3,
    title: 'Coding Night Hackathon 2025',
    issuer: 'Sylani Mass Training Program',
    date: '2025',
    credentialId: 'SMIT/2025/Hackathon/369729',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/hackathone.jpg',
    color: '#EF4444',
    badge: 'Hackathon',
  },
  {
    id: 4,
    title: 'Python Programming',
    issuer: 'Techno Skills',
    date: '2025',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/Python_Certificate.jpg',
    color: '#3776AB',
    badge: 'Language',
  },
  {
    id: 5,
    title: 'Node.js Development',
    issuer: 'KnowledgeGate.ai',
    date: '2025',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/Node_Js.jpg',
    color: '#339933',
    badge: 'Backend',
  },
  
  {
    id: 2,
    title: 'Web and App Development',
    issuer: 'Sylani MassIT Program (SMIT)',
    date: '2025 – 2026',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '*** PASTE IMAGE PATH HERE e.g. /certs/smit-webdev.png ***',
    color: '#FBBF24',
    badge: 'Full Stack',
  },
  {
    id: 7,
    title: 'JAVA Foundations',
    issuer: 'HackerRAnk - Skill Certification',
    date: '2025',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/java_Certificate.png',
    color: '#7C3AED',
    badge: 'Innovation',
  },
  {
    id: 8,
    title: 'English For Sciense,Technology, Engineering, and Mathematics(STEM) MOOC',
    issuer: 'OPEN MOOCs',
    date: '2025',
    credentialId: '*** PASTE CREDENTIAL ID HERE ***',
    credentialUrl: '*** PASTE CERTIFICATE LINK HERE ***',
    image: '/certs/English_Course.jpg',
    color: '#7C3AED',
    badge: 'Learning',
  },
  
]

function CertCard({ cert, index }) {
  const hasImage = !cert.image.startsWith('***')
  const hasLink = !cert.credentialUrl.startsWith('***')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-xl border border-orange/15 bg-surface overflow-hidden flex flex-col"
    >
      {/* glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${cert.color}12, transparent 70%)` }}
      />

      {/* certificate image area */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ height: '260px', background: `linear-gradient(135deg, #1E1008, #2a1208)` }}
      >
        {hasImage ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-1"
          />
        ) : (
          // placeholder when no image is set yet
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center border-2"
              style={{ borderColor: cert.color + '60', background: cert.color + '15' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 15l-4 4h8l-4-4z" fill={cert.color} opacity="0.6"/>
                <rect x="3" y="3" width="18" height="14" rx="2" stroke={cert.color} strokeWidth="1.5" fill="none" opacity="0.6"/>
                <circle cx="12" cy="10" r="3" stroke={cert.color} strokeWidth="1.5" fill="none" opacity="0.8"/>
              </svg>
            </div>
            <span
              className="font-mono text-xs px-3 py-1 rounded-full border"
              style={{ color: cert.color, borderColor: cert.color + '40', background: cert.color + '10' }}
            >
              Paste certificate image
            </span>
          </div>
        )}

        {/* badge top-right */}
        <div
          className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-full font-semibold"
          style={{ background: cert.color + '25', color: cert.color, border: `1px solid ${cert.color}50` }}
        >
          {cert.badge}
        </div>

        {/* color accent bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
        />
      </div>

      {/* content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-grotesk font-semibold text-white text-base leading-snug mb-1 group-hover:text-orange transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="font-inter text-white/50 text-sm mb-1">{cert.issuer}</p>
        <p className="font-mono text-xs mb-3" style={{ color: cert.color + 'BB' }}>{cert.date}</p>

        {cert.credentialId && !cert.credentialId.startsWith('***') && (
          <p className="font-mono text-xs text-white/25 mb-3 truncate">
            ID: {cert.credentialId}
          </p>
        )}

        {/* verify button */}
        <div className="mt-auto">
          {hasLink ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-md border transition-all duration-200 hover:bg-orange hover:text-bg hover:border-orange"
              style={{ color: cert.color, borderColor: cert.color + '40' }}
            >
              <ExternalLink size={12} />
              Verify Certificate
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-md border border-white/10 text-white/20 cursor-default">
              <ExternalLink size={12} />
              *** Paste link here ***
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative grid-bg py-24 px-6 overflow-hidden">

      {/* glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-amber/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-orange text-sm mb-3">$ ls ~/certifications</p>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white">
            Certifi<span className="text-orange">cations</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-orange/40 rounded-full" />
          <p className="font-inter text-white/30 text-sm mt-4">
            Verified credentials and achievements
          </p>
        </motion.div>

        {/* stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { num: certifications.length, label: 'Certificates' },
            { num: '2', label: 'Bootcamps' },
            { num: '1', label: 'Hackathon' },
            { num: '1', label: 'HEC Event' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-grotesk font-bold text-2xl text-orange">{s.num}</div>
              <div className="font-mono text-xs text-white/30">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        {/* bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="font-mono text-xs text-white/20">
            All certifications are verifiable via their respective issuing platforms
          </p>
        </motion.div>

      </div>
    </section>
  )
}

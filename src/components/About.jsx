import { motion } from 'framer-motion'

const terminal1 = [
  { prompt: '➜', cmd: 'whoami', delay: 0.2 },
  { prompt: '➜', cmd: 'cat mission.txt', delay: 0.6 },
  { prompt: '➜', cmd: 'ls skills/', delay: 1.0 },
]

const stats = [
  { label: 'OPERATOR',  value: 'MUHAMMAD HUSSAIN' },
  { label: 'ROLE',      value: 'MERN STACK DEVELOPER' },
  { label: 'LOCATION',  value: 'Islamabad, Pakistan' },
  { label: 'STATUS',    value: 'ONLINE' },
  { label: 'CGPA',      value: '3.37 / 4.0' },
  { label: 'UNIVERSITY',value: 'Bahria University' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative grid-bg py-24 px-6 overflow-hidden"
    >
      {/* subtle glow top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-orange text-base mb-3">$ cat about.me</p>
          <h2 className="font-grotesk font-bold text-5xl md:text-6xl text-white">
            About <span className="text-orange">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-orange/40 rounded-full" />
        </motion.div>

        {/* ── Two column layout ── */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* ── LEFT — Terminal ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-orange/15 bg-surface"
          >
            {/* Terminal top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-orange/10">
              <span className="w-3 h-3 rounded-full bg-red/70" />
              <span className="w-3 h-3 rounded-full bg-amber/70" />
              <span className="w-3 h-3 rounded-full bg-orange/70" />
              <span className="font-mono text-base text-white/30 ml-2">user_profile.log</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-base space-y-5">

              {/* Stats block */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex gap-3"
                  >
                    <span className="text-orange/60 w-28 shrink-0 text-base">{s.label}</span>
                    <span className="text-white/80 text-base">{s.value}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="border-t border-orange/10" />

              {/* whoami */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange">➜</span>
                  <span className="text-white/40">whoami</span>
                </div>
                <p className="text-white/60 text-base leading-relaxed pl-4">
                  I am a Software Engineering student with a passion for building
                  full-stack web apps and AI-powered tools. Co-founder of
                  <span className="text-orange"> CodeViel Studio</span>, turning
                  ideas into real products that ship.
                </p>
              </motion.div>

              {/* cat mission */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange">➜</span>
                  <span className="text-white/40">cat mission.txt</span>
                </div>
                <p className="text-white/60 text-base leading-relaxed pl-4">
                  Translating complex requirements into clean, scalable solutions.
                  Currently focused on <span className="text-amber">MERN Stack</span>,
                  <span className="text-amber"> AI Integration</span>, and
                  <span className="text-amber"> Prompt Engineering</span>.
                </p>
              </motion.div>

              {/* blinking cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-2"
              >
                <span className="text-orange">➜</span>
                <span className="animate-pulse text-orange">█</span>
              </motion.div>

            </div>
          </motion.div>

          {/* ── RIGHT — Info cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >

            {/* Who I am */}
            <div className="rounded-xl border border-orange/15 bg-surface p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                <h3 className="font-grotesk font-semibold text-white text-lg">Who I Am</h3>
              </div>
              <p className="font-inter text-white/55 text-base leading-relaxed">
                A motivated Software Engineering undergraduate at
                <span className="text-orange"> Bahria University Islamabad</span> with
                hands-on experience building full-stack applications. I combine
                academic knowledge with real startup experience to ship products
                that actually work.
              </p>
            </div>

            {/* What I do */}
            <div className="rounded-xl border border-orange/15 bg-surface p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                <h3 className="font-grotesk font-semibold text-white text-lg">What I Do</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'MERN Stack Dev',
                  'AI Integration',
                  'REST API Design',
                  'Prompt Engineering',
                  'SRS & UML Docs',
                  'UI / UX Building',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-mono text-base text-white/55"
                  >
                    <span className="text-orange text-base">▸</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick numbers */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { num: '3+',   label: 'Projects\nShipped' },
                { num: '3.37', label: 'CGPA\nScore' },
                { num: '1K+',  label: 'LinkedIn\nConnections' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-orange/15 bg-surface p-4 text-center"
                >
                  <div className="font-grotesk font-bold text-3xl text-orange mb-1">{s.num}</div>
                  <div className="font-mono text-white/40 text-base leading-tight whitespace-pre-line">{s.label}</div>
                </div>
              ))}
            </div>

            

          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const education = [
  {
    id: 1,
    year: '2026 → Present',
    title: 'BS Computer Software Engineering',
    institution: 'Bahria University Islamabad Campus',
    detail: 'Semester 5 · CGPA 3.37 / 4.0',
    tags: ['Software Engineering', 'DSA', 'AI & ML'],
    color: '#F97316',
    status: 'current',
  },
  {
    id: 2,
    year: 'Feb 2025 → Feb 2026',
    title: 'Web & App Development Bootcamp',
    institution: 'Sylani Mass IT Program (SMIT)',
    detail: 'Intensive Full Stack Program',
    tags: ['MERN Stack', 'Full Stack', 'Bootcamp'],
    color: '#FBBF24',
    status: 'done',
  },
  {
    id: 3,
    year: 'Sept 2024 → June 2025',
    title: 'BS Software Engineering (Sem 1–3)',
    institution: 'Bahria University Karachi Campus',
    detail: 'Foundation semesters before transfer to Islamabad',
    tags: ['OOP', 'Web Basics', 'Foundation'],
    color: '#EF4444',
    status: 'done',
  },
  {
    id: 4,
    year: 'Aug 2022 → May 2024',
    title: 'Intermediate — Pre Engineering (FSC)',
    institution: 'Army Public School (APSACS)',
    detail: 'Pre-Engineering with Mathematics & Physics',
    tags: ['Pre-Engineering', 'Mathematics', 'Physics'],
    color: '#7C3AED',
    status: 'done',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative grid-bg py-24 px-6 overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange/4 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-orange text-sm mb-3">$ cat education.log</p>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white">
            Edu<span className="text-orange">cation</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-orange/40 rounded-full" />
        </motion.div>

        {/* timeline wrapper */}
        <div className="relative">

          {/* center vertical line — full height */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent 0%, #F97316 8%, #F97316 92%, transparent 100%)' }}
          />

          {/* rows */}
          <div className="flex flex-col gap-14">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">

                  {isLeft ? (
                    <>
                      {/* card on LEFT */}
                      <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:pr-12"
                      >
                        <EduCard item={item} align="left" />
                      </motion.div>

                      {/* year label on RIGHT */}
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                        className="hidden md:flex items-center pl-12"
                      >
                        <YearPill item={item} />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* year label on LEFT */}
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                        className="hidden md:flex items-center justify-end pr-12"
                      >
                        <YearPill item={item} />
                      </motion.div>

                      {/* card on RIGHT */}
                      <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:pl-12"
                      >
                        <EduCard item={item} align="right" />
                      </motion.div>
                    </>
                  )}

                  {/* connector line from card to center line */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 hidden md:block h-px w-12 ${isLeft ? 'left-1/2 -translate-x-full' : 'right-1/2 translate-x-full'}`}
                    style={{ background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, transparent, ${item.color}80)` }}
                  />

                  {/* center marker */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 hidden md:block"
                    style={{
                      borderColor: item.color,
                      background: item.status === 'current' ? item.color : '#120A08',
                      boxShadow: item.status === 'current' ? `0 0 10px ${item.color}90` : 'none',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border border-orange/20 text-white/30">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            Currently enrolled · Bahria University Islamabad
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function YearPill({ item }) {
  return (
    <div
      className="font-mono text-sm px-4 py-1.5 rounded-full border whitespace-nowrap"
      style={{
        color: item.color,
        borderColor: item.color + '40',
        background: item.color + '12',
      }}
    >
      {item.year}
    </div>
  )
}

function EduCard({ item }) {
  return (
    <div
      className="group relative rounded-xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: item.color + '30' }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
      />

      {/* hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top, ${item.color}0D, transparent 70%)` }}
      />

      {/* year — mobile only */}
      <div className="font-mono text-xs mb-2 md:hidden" style={{ color: item.color }}>
        {item.year}
      </div>

      {/* title */}
      <h3 className="font-grotesk font-bold text-white text-base leading-snug mb-1 group-hover:text-orange transition-colors duration-200">
        {item.title}
      </h3>

      {/* institution */}
      <p className="font-inter text-white/50 text-sm mb-2">{item.institution}</p>

      {/* detail */}
      <p className="font-mono text-xs mb-4" style={{ color: item.color + 'AA' }}>
        {item.detail}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-0.5 rounded-full"
            style={{
              background: item.color + '12',
              color: item.color + 'CC',
              border: `1px solid ${item.color}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// components/ClinicComparison.tsx
import Image from 'next/image'

const comparisons = [
  {
    leftTitle: 'COMPREHENSIVE BLOOD TESTS',
    leftDesc: 'Identify root causes for lasting results',
    rightTitle: 'LIMITED TESTING',
    rightDesc: 'Often skip critical testing.',
  },
  {
    leftTitle: 'GENETIC PROFILING',
    leftDesc: 'Treatments tailored to your DNA',
    rightTitle: 'NO GENETIC TESTING',
    rightDesc: 'Generic procedures for everyone.',
  },
  {
    leftTitle: 'SURGEON-LED CONSULTATIONS',
    leftDesc: 'Only experienced surgeons assess you.',
    rightTitle: 'NON-MEDICAL CONSULTATIONS',
    rightDesc: 'Non-medical staff often handle consultations.',
  },
  {
    leftTitle: 'FACE-TO-FACE FOCUS',
    leftDesc: 'In-person assessments for accuracy',
    rightTitle: 'REMOTE CONSULTATIONS',
    rightDesc: 'Remote-only options miss key details.',
  },
  {
    leftTitle: 'TRANSPARENT, FIXED PRICING',
    leftDesc: 'Surgery is priced by size (small, medium, large) to match natural needs—no unnecessary grafts.',
    rightTitle: 'PER GRAFT PRICING',
    rightDesc: 'Per graft pricing can lead to inflated quotes and unnecessary transplants.',
  },
  {
    leftTitle: 'HOLISTIC COUNSELING',
    leftDesc: 'Address mental and physical readiness.',
    rightTitle: 'MINIMAL GUIDANCE',
    rightDesc: 'Emotional prep often overlooked.',
  },
  {
    leftTitle: 'ADVANCED TECHNIQUES',
    leftDesc: 'Cutting-edge tools for natural results.',
    rightTitle: 'OUTDATED METHODS',
    rightDesc: 'Slower recovery and less precise outcomes.',
  },
  {
    leftTitle: 'PERSONALIZED AFTERCARE',
    leftDesc: 'Custom plans and regular follow-ups.',
    rightTitle: 'GENERIC AFTERCARE',
    rightDesc: 'One-size-fits-all recovery advice.',
  },
]

export default function ComparisonTable() {
  return (
    <section className="bg-black py-20 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto rounded-[32px] bg-white overflow-hidden relative">
        {/* Header Row */}
        <div className="grid grid-cols-3 items-center px-6 md:px-12 py-10 bg-white border-b border-gray-200 relative z-10">
          <div className="flex justify-start">
            <Image
              src="/logo.png"
              alt="FixMyHair Logo"
              width={130}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="flex justify-center items-center text-xl font-bold text-black">
            {/* Empty or decorative center */}
          </div>
          <div className="text-right font-extrabold text-black text-xl leading-tight">
            OTHER CLINICS/<br />TURKEY
          </div>
        </div>

        {/* Yellow Vertical "VS" Column */}
        <div className="absolute top-[100px] bottom-0 left-1/2 -translate-x-1/2 w-[64px] bg-yellow-400 z-0" />

        {/* Comparison Rows */}
        <div className="relative z-10">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[1fr_64px_1fr] px-6 md:px-12 py-8 text-sm md:text-base ${
                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="text-left pr-4">
                <p className="font-bold text-black uppercase">
                  {item.leftTitle}
                </p>
                <p className="text-gray-600">{item.leftDesc}</p>
              </div>

              <div className="flex items-center justify-center text-black font-bold text-sm">
                VS
              </div>

              <div className="text-right pl-4">
                <p className="font-bold text-black uppercase">
                  {item.rightTitle}
                </p>
                <p className="text-gray-600">{item.rightDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

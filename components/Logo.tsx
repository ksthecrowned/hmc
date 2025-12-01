import Image from 'next/image'

export default function Logo({ size = 60 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/assets/logo/logo.png"
        alt="HandiMobilité Congo Logo"
        width={size}
        height={size}
        className="shrink-0 object-contain"
        priority
      />
    </div>
  )
}

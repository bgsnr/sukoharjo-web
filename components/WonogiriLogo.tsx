import Image from "next/image";

type WonogiriLogoProps = {
  className?: string;
};

export default function WonogiriLogo({ className }: WonogiriLogoProps) {
  return (
    <Image
      className={className}
      src="/wonogiri-logo.webp"
      alt="Logo Kabupaten Wonogiri"
      width={474}
      height={591}
      priority={false}
    />
  );
}
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <div className="img-logo-social">
      <a href="https://wa.me/5521980772874" target="_blank" rel="noopener noreferrer" className="btn-whatsapp zindex-1">
        <Image src="/assets/img/logo-whatsapp.png" className="img-logo-social btn-whatsapp" alt="WhatsApp" width={50} height={50} />
      </a>
    </div>
  );
}

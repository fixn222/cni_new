import Link from "next/link";
import { MessageCircle } from "lucide-react";

<Link
  href="https://api.whatsapp.com/send?phone=94729747985"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
>
  <MessageCircle size={28} strokeWidth={2.5} />
</Link>
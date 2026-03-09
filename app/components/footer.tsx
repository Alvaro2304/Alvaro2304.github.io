import { socialLinks } from "@/data/site-data"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Álvaro Palero Ramírez. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={socialLinks.linkedin} className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href={socialLinks.github} className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href={`mailto:${socialLinks.email}`} className="text-gray-400 hover:text-white">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

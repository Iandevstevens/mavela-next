export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Mavela Game Lodge. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Reservations & Cancellations
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
